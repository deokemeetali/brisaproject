// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import MainPages from './mainpage';
import Admin from './admin';
import Blog from './blog';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin,setShowLogin]=useState(true);
  const togglesignup=()=>{
    setShowLogin(!showLogin)
  }
 

  const handleLogin = () => {
    
    setIsAuthenticated(true);
  };
  const handlelogout=()=>{
    setIsAuthenticated(false)
  }


  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={showLogin ?
            (isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Login onLogin={handleLogin} togglesignup={togglesignup}/>
            ))
            :
        
           ( isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Signup onLogin={handleLogin} togglesignup={togglesignup} />
            ))
            }
        />
        <Route
          path="/mainpage"
          element={isAuthenticated ? <MainPages onLogout={handlelogout} /> : <Navigate to="/" />}
        />
        
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
