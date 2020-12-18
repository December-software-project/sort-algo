import React from 'react';

import './styles.css';

import HowItWorksHeader from '../component/header/SectionHeader';
import HowItWorksImage from '../team/image/how-it-works-image.jpg';
import Step from './step/Step';

const HowItWorks = () => {
  return (
    <div id="howItWorks" className="how-it-works">
      <HowItWorksHeader sectionHeader={'How it Works'} translateX={'translateX(28px)'} />
      <div className="how-it-works-container">
        <img className="how-it-works-picture" src={HowItWorksImage} />
        <div className="steps">
          <Step
            // img={}
            title="1. Select the Algorithm"
            description="Visualize the algorithm of your choice."
          />
          <Step
            // img={}
            title="3. Start Sorting"
            description="Press the play button to start the step by step sorting process."
          />
        </div>
        <div className="steps">
          <Step
            // img={}
            title="2. Select Settings"
            description="Adjust the speed of the visualizer and array size."
          />
          <Step
            // img={}
            title="4. Fast-forward, Backtrack, and Replay"
            description="Replay the entire sorting process or walk through
              the algorithm one step at a time with these functions."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
