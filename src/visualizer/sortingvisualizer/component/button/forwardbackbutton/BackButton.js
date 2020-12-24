import React, { useContext } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { VisualizerStateContext } from '../../../Visualizer';
import './styles.css';
import { resetArray } from '../../../util/GeneralUtil';

const BackButton = () => {
  const {
    isPlay,
    animationPercentage,
    executeBackwardAnimation,
    idx,
    arrayData,
    setArrayData,
    setIsReset,
    visualizerAlgorithm,
  } = useContext(VisualizerStateContext);

  const isEmpty = animationPercentage === 0;

  const handleBackButtonClick = () => {
    executeBackwardAnimation();
    // this is to check if we are at the start animation, to reset the color of the block
    if (idx - 1 <= 0) {
      setArrayData(resetArray(visualizerAlgorithm, arrayData));
      setIsReset(true);
    }
  };

  return (
    <button
      className="forward-back-button-holder"
      style={{
        transform: 'translateX(-10px)',
        cursor: isEmpty ? '' : isPlay ? 'not-allowed' : 'pointer',
      }}
      onClick={() => (isPlay ? () => {} : handleBackButtonClick())}
    >
      <IconContext.Provider
        value={{
          className: 'forward-back-button',
          style: { color: isEmpty ? 'white' : '#8789B5' },
        }}
      >
        <AiOutlineLeft />
      </IconContext.Provider>
    </button>
  );
};

export default BackButton;
