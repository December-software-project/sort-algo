import React from 'react';
import LegendInformation from './LegendInformation';
import LegendHeader from './LegendHeader';
import './styles.css';

const Legend = () => {
  const legendInformation = [
    { color: '#42F5D1', description: 'Currently involved in the swap process' },
    { color: '#6D76E8', description: 'Not involved in the swap process' },
  ];

  return (
    <div className="legend">
      <div className="legend-header-box">
        <LegendHeader />
      </div>
      <div className="legend-information-box">
        {legendInformation.map(({ color, description }) => (
          <LegendInformation color={color} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Legend;
