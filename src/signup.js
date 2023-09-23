import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';


const Signup = ( props ) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError,setLoginError]=useState('');
  
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

  const handleSignup = (e) => {
    e.preventDefault();

    if(!handleValidation()){
        return;
      }
    const data = {
      username,
      email,
      password,
    };

    
  
      axios
        .post('https://blogapp-api-lxve.onrender.com/users/register', data)
        .then((response) => {
          console.log('Response status:', response.status);
          if (response.status === 200) {
            props.onLogin();
            navigate('/mainpage');
          } else {
            console.log('failed to post');
          }
        });
    
  };

  // Update the button disabled state based on validation
  const handleGoogleSignup = () => {

    window.location.href = ' https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=http%3A%2F%2F166868863171-3jc87rbv266kcefu4f2jqjlhsqrbfm1p.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffrontend-x0qa.onrender.com';
  };

  const handleGitHubSignup = () => {
  
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
    <div className='signup-container'>
      <h2 className='signup-heading'>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
        className='signup-input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
        className='signup-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
        className='signup-input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="signup-button" type="submit" >
          Sign Up
        </button>
        <p className='signup-p'>
          Already have an account?{' '}
          <span className="signup-span" onClick={()=>{props.togglesignup()}} style={{ cursor: 'pointer' }}>
            Log In
          </span>
        </p>
      </form>
      <div className="signup-error-message">{loginError}</div>
      <div className="oauth-buttons">
        <button className="signup-button" onClick={handleGoogleSignup}>
          Sign Up with Google
        </button>
        <button className="signup-button" onClick={handleGitHubSignup}>
          Sign Up with GitHub
        </button>
      </div>
    </div>
    
  );
};

export default Signup;
