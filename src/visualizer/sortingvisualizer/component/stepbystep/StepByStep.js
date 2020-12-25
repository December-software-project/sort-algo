import React, { useContext } from 'react';
import { getStepByStepText } from '../../util/GeneralUtil';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';

/**
 * A component which display each steps of the sorting algorithm.
 */
const StepByStep = () => {
  const {
    animationArr,
    idx,
    referenceArray,
    visualizerAlgorithm,
    animationPercentage,
    stackArr,
  } = useContext(VisualizerStateContext);

  return (
    <div className="step-by-step-holder">
      <p>
        {animationPercentage > 0 &&
          getStepByStepText(visualizerAlgorithm, animationArr, idx, referenceArray, stackArr)}
      </p>
    </div>
  );
};

export default StepByStep;
