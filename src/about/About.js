import React from 'react';

import './styles.css';

import AboutHeader from '../component/header/SectionHeader';

const About = () => {
  return (
    <div id="about" className="about">
      <AboutHeader sectionHeader={'About'} translateX={'translateX(15px)'} />
    </div>
  );
};

export default About;
