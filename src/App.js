import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import './App.css';

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
            Resume
          </NavLink>
          <NavLink className="link" to ='/activities'>
            Activities
          </NavLink>
          <NavLink className="link" to ='/contact'>
            Contact
          </NavLink>
        </div>
        <h1>Hi there! I'm Savannah Maxwell.</h1>
        <p>Full stack web development student. Rock climber. Backpacker. Gamer. Certified Veterinary Technician</p>
      </header>
      <Routes>
        <Route exact path='/'/>
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
