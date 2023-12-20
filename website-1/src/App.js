import React from 'react';
import Navbar from './components/navbar.js'; // assuming that 'navbar' is a component, conventionally it should start with an uppercase letter
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Ensure Switch is directly imported
import './App.css';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import Signup from './components/pages/Signup.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/services' Component={Services}/>
          <Route path='/products' Component={Products}/>
          <Route path='/sign-up' Component={Signup} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
