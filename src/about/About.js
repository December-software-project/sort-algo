import React from 'react';

import AboutHeader from '../component/header/SectionHeader';

import './styles.css';

const About = () => {
  return (
    <div id="about" className="about">
      <AboutHeader sectionHeader={'About'} translateX={'translateX(15px)'} />
    </div>
  );
};

export default About;
