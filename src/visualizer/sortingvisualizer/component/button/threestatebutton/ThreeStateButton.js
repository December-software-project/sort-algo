import React, { useContext } from 'react';
import './styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import ReplayButton from './ReplayButton';
import { VisualizerStateContext } from '../../../Visualizer';

const ThreeStateButton = () => {
  const { isPlay, isReplay, setIsReplay, setIsPlay, setIsInMidstOfSort } = useContext(
    VisualizerStateContext
  );

  const handleThreeStateButtonClick = () => {
    if (isReplay) {
      setIsReplay(false);
      setTimeout(() => setIsPlay(true), 300);
    } else {
      setIsPlay(!isPlay);
    }
    setIsInMidstOfSort(true);
  };

  return (
    <button className="button-holder" onClick={() => handleThreeStateButtonClick()}>
      {isReplay ? <ReplayButton /> : isPlay ? <PauseButton /> : <PlayButton />}
    </button>
  );
};

export default ThreeStateButton;
