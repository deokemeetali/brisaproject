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
   
    //commrnyokjojh

  };
  
  const handleGoogleLogin = () => {

    window.location.href = ' https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=http%3A%2F%2F166868863171-3jc87rbv266kcefu4f2jqjlhsqrbfm1p.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffrontend-x0qa.onrender.com';
  };

  const handleGitHubLogin = () => {
   
    // window.location.href = 'URL_TO_GITHUB_OAUTH_AUTHORIZATION';
    fetch('https://blogapp-api-lxve.onrender.com/github-auth') 
    .then((response) => response.json())
    .then((data) => {
      
      window.location.href = data.githubAuthUrl; 
    })
    .catch((error) => {
      console.error('Error fetching GitHub authorization URL:', error);
    });
  };

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
       <div className="oauth-buttons">
        <button className="login-button" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <button className="login-button" onClick={handleGitHubLogin}>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}

export default Login;
