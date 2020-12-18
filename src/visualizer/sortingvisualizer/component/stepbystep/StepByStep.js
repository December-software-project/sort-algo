import React, { useContext } from 'react';
import { getStepByStepText } from '../../util/VisualizerUtil';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';

const StepByStep = () => {
  const { animationArr, idx, referenceArray, visualizerAlgorithm } = useContext(
    VisualizerStateContext
  );

  return (
    <div className="step-by-step-holder">
      <p>{getStepByStepText(visualizerAlgorithm, animationArr, idx, referenceArray)}</p>
    </div>
  );
};

export default StepByStep;
