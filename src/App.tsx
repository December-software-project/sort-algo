import React from 'react';
import About from './about/index';
import Visualizer from './visualizer/index';
import Team from './team/index';
import ContactUs from './contactus/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <About />
      <Visualizer />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
