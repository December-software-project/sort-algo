import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineRight } from 'react-icons/ai';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';

const ForwardButton = () => {
  const { isPlay, animationPercentage, executeForwardAnimation, idx, animationArr } = useContext(
    VisualizerStateContext
  );

  const isFull = animationPercentage === 100;

  const handleForwardButtonClick = () => {
    if (idx < animationArr.length) {
      executeForwardAnimation();
    }
  };

  return (
    <button
      className="forward-back-button-holder"
      style={{
        transform: 'translateX(10px)',
        cursor: isFull ? '' : isPlay ? 'not-allowed' : 'pointer',
      }}
      onClick={isPlay ? () => {} : () => handleForwardButtonClick()}
    >
      <IconContext.Provider
        value={{
          className: 'forward-back-button',
          style: { color: isFull ? 'white' : '#8789B5' },
        }}
      >
        <AiOutlineRight />
      </IconContext.Provider>
    </button>
  );
};

export default ForwardButton;
