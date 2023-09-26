import React, {  useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import MainPages from './mainpage';



function Login(props) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  
   const handleValidation=()=>{
    if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    if(!username){
      setLoginError("Username is required");
      return false;
    }else if(/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(username)){
      setLoginError("special characters are not allowed");
      return false;
    }
    if(!password){
      setLoginError("password is required");
      return false;
    }else if(password.length<8){
      setLoginError("Password must have a minimum of 8 characters");
      return false;
    }if(!username && !password){
      setLoginError("username and password is required");
      return false;
    }
    return true;
   }




  const handleLogin = (event) => {

    
    event.preventDefault(); 
  
    

    if(!handleValidation()){
      return;
    }
    const data = {username,password};
    
    axios.post('https://blogapp-api-lxve.onrender.com/api/login',data)
    
    .then(response => {
      console.log(response.data.s);
        // setUsers(response.data)
        if(response.data.username){
          console.log(response.data);
         
          sessionStorage.setItem('userDetails',  JSON.stringify(response.data));
          debugger;
          props.onLogin();
          navigate("/mainpage");
          
        }

      })
      .catch(error => { 
        
        console.log('Error fetching users:', error);
      });
   


  };
  
  const handleGoogleLogin = ()=>{
    window.location.href = 'https://blogapp-api-lxve.onrender.com/auth/google';
    // axios.get('https://blogapp-api-lxve.onrender.com/auth/google')
    // .then(response=>{
    //   if(response.data){
    //     navigate('/mainpage');

    //   }else{
    //     navigate('/');
    //   }
    // })
    
  }
 axios.get('https://blogapp-api-lxve.onrender.com/auth/google/callback')
  return (
    <div className="login-container">
      <h2 className='login-heading'>Login</h2>
      <form className="login-form" onSubmit={handleLogin}> 
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button"> 
          Login
        </button>
        <p className='login-p'>
          Don't have an account?{' '}<span
          className='login-span' onClick={()=>{props.togglesignup()}} style={{cursor:'pointer'}}>sign up</span>
        </p>
      </form>
       <div className="login-error-message">{loginError}</div>
       <button onClick={handleGoogleLogin}>Log in with Google</button>
       
    </div>
  );
}

export default Login;
