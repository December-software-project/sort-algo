import React, { useContext } from 'react';
import { VisualizerStateContext } from '../../../Visualizer';
import PlayPauseReplayButton from './PlayPauseReplayButton';
import './styles.css';

const ThreeStateButton = () => {
  const {
    isPlay,
    isReplay,
    setIsReplay,
    setIsPlay,
    setIsInMidstOfSort,
    setAnimationPercentage,
    setIsReset,
  } = useContext(VisualizerStateContext);

  const handleThreeStateButtonClick = () => {
    if (isReplay) {
      setIsReplay(false);
      setAnimationPercentage(0);
      setIsReset(true);
      setTimeout(() => setIsPlay(true), 300);
    } else {
      setIsPlay(!isPlay);
    }
    setIsInMidstOfSort(true);
  };

  return (
    <button className="three-state-button-holder" onClick={() => handleThreeStateButtonClick()}>
      {isReplay ? (
        <PlayPauseReplayButton type="replay" />
      ) : isPlay ? (
        <PlayPauseReplayButton type="pause" />
      ) : (
        <PlayPauseReplayButton type="play" />
      )}
    </button>
  );
};

export default ThreeStateButton;
