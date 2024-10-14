import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ state, setState }) => {
   

  const handleResume = () => {
    setState('Resume'); 
    console.log(state); 
  };

  const handleAbout = () => {
    setState('About'); 
  };

  const handleContact = () => {
    setState('Contact'); 
  };

  return (
    <div className='NavBar'>
      <div className='bar1'>
        <h2>Portfolio</h2>
      </div>
      <div className='bar2'>
        <button onClick={handleAbout}>About</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleContact}>Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
