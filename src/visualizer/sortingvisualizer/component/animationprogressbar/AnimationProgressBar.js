import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import { VisualizerStateContext } from '../../Visualizer';

const AnimationProgressBar = () => {
  const { animationPercentage } = useContext(VisualizerStateContext);
  return (
    <div style={{ width: 300, transform: 'translateY(45px)' }}>
      <Progress
        status={'normal'}
        strokeColor={{
          '0%': '#287ED0',
          '100%': '#5466FF',
        }}
        percent={animationPercentage}
      />
    </div>
  );
};

export default AnimationProgressBar;
