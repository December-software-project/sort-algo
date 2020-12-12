import React from 'react';
import './App.css';

import About from './about/About';
import ContactUs from './contactus/ContactUs';
import Team from './team/Team';
import Visualizer from './visualizer/sortingvisualizer/Visualizer';

function App () {
  return (
    <div className='app'>
      <nav className='nav-bar'>
        <div className='nav-logo'>
          {/*Add logo here*/}
          <a href='#about'>SortAlgo</a>
        </div>
        <ul className='nav-menu'>
          <li><a className='active' href='#about'>About</a></li>
          <li><a href='#visualizer'>Visualizer</a></li>
          <li><a href='#team'>Team</a></li>
          <li><a href='#contactUs'>Contact Us</a></li>
        </ul>
      </nav>
      <div className='app-content'>
        <About />
        <Visualizer />
        <Team />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
