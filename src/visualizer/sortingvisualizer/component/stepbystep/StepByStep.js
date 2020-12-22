import React, { useContext } from 'react';
import { getStepByStepText } from '../../util/GeneralUtil';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';

const StepByStep = () => {
  const {
    animationArr,
    idx,
    referenceArray,
    visualizerAlgorithm,
    animationPercentage,
  } = useContext(VisualizerStateContext);

  return (
    <div className="step-by-step-holder">
      <p>
        {animationPercentage > 0 &&
          getStepByStepText(visualizerAlgorithm, animationArr, idx, referenceArray)}
      </p>
    </div>
  );
};

export default StepByStep;
