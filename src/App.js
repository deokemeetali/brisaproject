import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import MainPages from './mainpage';
import Admin from './admin';
import Blog from './blog';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleSignup = () => {
    setShowLogin(!showLogin);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={showLogin ? <Login toggleSignup={toggleSignup} /> : <Signup toggleSignup={toggleSignup} />} />
        <Route
    path="/mainpage"
    element={
      <MainPages>
        <Route index element={<Blog />} />
        <Route path="admin" element={<Admin />} />
        <Route path="blog" element={<Blog />} />
      </MainPages>
    }
  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
