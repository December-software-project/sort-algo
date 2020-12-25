import React from 'react';
import './styles.css';
import IsVisibleYDirection from '../../component/IsVisibleYDirection/IsVisibleYDirection';

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
