import React from 'react';

const LegendInformation = ({ color, description }) => {
  return (
    <div className="legend-information">
      <div className="legend-information-box-holder">
        <div className="legend-information-box-box" style={{ backgroundImage: color }} />
      </div>
      <div className="legend-information-description-holder">
        <span className="legend-information-description-text">{description}</span>
      </div>
    </div>
  );
};

export default LegendInformation;
