import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import { VisualizerStateContext } from '../../Visualizer';

/**
 * Progress bar for the animation completion.
 *
 * @returns {JSX.Element} A bar showing the progression of the animation.
 */
const AnimationProgressBar = () => {
  const { animationPercentage } = useContext(VisualizerStateContext);
  return (
    <div style={{ width: 300, transform: 'translateY(60px)' }}>
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
