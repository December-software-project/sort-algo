import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { generateArray } from '../../../../../utils/VisualizerUtil';

const NewDataButton = () => {
  const {
    isPlay,
    dataSize,
    setArrayData,
    setIsInMidstOfSort,
    setIsReplay,
    setAnimationPercentage,
  } = useContext(VisualizerStateContext);

  const handleNewDataButtonClick = () => {
    if (!isPlay) {
      setArrayData(generateArray(dataSize));
      setIsInMidstOfSort(false);
      setAnimationPercentage(0);
      setIsReplay(false);
    }
  };

  return (
    <div className="new-data-box" style={{ cursor: isPlay ? 'not-allowed' : 'pointer' }}>
      <span onClick={() => handleNewDataButtonClick()}>New Data</span>
    </div>
  );
};

export default NewDataButton;
