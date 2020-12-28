import React from 'react';
import './styles.css';
import IsVisibleYDirection from '../../component/IsVisibleYDirection/IsVisibleYDirection';

/**
 * General instruction step in How It Works Section.
 *
 * @component
 * @param {icon} icon Icon of the step.
 * @param {string} title Title of the step.
 * @param {string} description Description of the step.
 * @returns {JSX.Element} A complete step component.
 */
const Step = ({ icon, title, description }) => {
  return (
    <IsVisibleYDirection classNameToUse="step-container" yValue={`translateY(125px)`}>
      <div className="step-picture">{icon}</div>
      <p className="step-title">{title}</p>
      <p className="step-description">{description}</p>
    </IsVisibleYDirection>
  );
};

export default Step;
