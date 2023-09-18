import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import Home from './home';
import Admin from './admin';
import Blog from './blog';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleSignup = () => {
    setShowLogin(!showLogin);


    console.log(`showLogin is now ${!showLogin}`);
  };
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
  <Route path="/home/:username" element={<Home />} />
  <Route
    path="/"
    element={
      showLogin ? (
        <Login toggleSignup={toggleSignup} />
      ) : (
        <Signup toggleSignup={toggleSignup} />
      )
    }
  />
  {/* <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/> */}
  <Route path="/home/:username" element={<Home />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/blog" element={<Blog />} />
</Routes>
</div>
    </BrowserRouter>
  );
}

export default App;

