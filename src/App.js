import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navContainer">
          <NavLink className="link" to ='/'>
            Home
          </NavLink>
          <NavLink className="link" to ='/about'>
            About
          </NavLink>
          <NavLink className="link" to ='/resume'>
            Resume
          </NavLink>
          <NavLink className="link" to ='/projects'>
            Projects
          </NavLink>
          <NavLink className="link" to ='/activities'>
            Activities
          </NavLink>
          <NavLink className="link" to ='/contact'>
            Contact
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/activities' element={<Activities/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
