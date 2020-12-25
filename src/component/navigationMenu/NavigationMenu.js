import React from 'react';
import './styles.css';

import Logo from '../logo/logo';

const NavigationMenu = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Logo />
        <a href="#home">SortAlgo</a>
      </div>
      <ul className="nav-menu">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#howItWorks">How It Works</a>
        </li>
        <li>
          <a href="#visualizer">Visualizer</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contactUs">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
