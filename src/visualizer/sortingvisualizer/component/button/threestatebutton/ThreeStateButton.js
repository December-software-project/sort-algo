import React from 'react';
import './styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import ReplayButton from './ReplayButton';

const ThreeStateButton = ({ onClick, isPlay, isReplay }) => {
  return (
    <button className="button-holder" onClick={onClick}>
      {isReplay ? <ReplayButton /> : isPlay ? <PauseButton /> : <PlayButton />}
    </button>
  );
};

export default ThreeStateButton;
