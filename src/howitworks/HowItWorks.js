import React from 'react';

import './styles.css';

import HowItWorksHeader from '../component/header/SectionHeader';
import HowItWorksImage from '../team/image/how-it-works-image.jpg';
import Step from './step/Step';
import { StepsData } from './StepsData';

/**
 * How It Works Section of the app.
 *
 * @component
 * @category App Body
 */
const HowItWorks = () => {
  return (
    <div id="howItWorks" className="how-it-works">
      <HowItWorksHeader sectionHeader={'How it Works'} translateX={'translateX(28px)'} />
      <div className="how-it-works-container">
        <img className="how-it-works-picture" src={HowItWorksImage} alt="" />
        <div className="steps">
          {/*Steps 1 and 3*/}
          {StepsData.map((data, index) =>
            index % 2 === 0 ? (
              <Step icon={data.icon} title={data.title} description={data.description} />
            ) : null
          )}
        </div>
        <div className="steps">
          {/*Steps 2 and 4*/}
          {StepsData.map((data, index) =>
            index % 2 === 1 ? (
              <Step icon={data.icon} title={data.title} description={data.description} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
