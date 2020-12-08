import React from 'react';
import About from './about';
import Visualizer from './visualizer';
import Team from './team';
import ContactUs from './contactus';
import './App.css';

function App () {
  return (
    <div className='App'>
      <About />
      <Visualizer />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
