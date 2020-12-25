import React from 'react';
import './App.css';

import HowItWorks from '../howitworks/HowItWorks';
import ContactUs from '../contactus/ContactUs';
import Home from '../home/Home';
import Team from '../team/Team';
import Visualizer from '../visualizer/sortingvisualizer/Visualizer';
import NavigationMenu from '../component/navigationMenu/NavigationMenu';

function App() {
  return (
    <div className="app">
      <NavigationMenu />
      <div className="app-container">
        <Home />
        <HowItWorks />
        <Visualizer />
        <Team />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
