import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { arrayCopy, buckets, generateArray } from '../../../util/VisualizerUtil';

const NewDataButton = () => {
  const {
    isPlay,
    dataSize,
    setArrayData,
    setIsInMidstOfSort,
    setIsReplay,
    setAnimationPercentage,
    visualizerAlgorithm,
    setCountArr,
  } = useContext(VisualizerStateContext);

  const handleNewDataButtonClick = () => {
    if (!isPlay) {
      setArrayData(generateArray(dataSize, visualizerAlgorithm));
      setIsInMidstOfSort(false);
      setAnimationPercentage(0);
      setIsReplay(false);
      setCountArr(arrayCopy(buckets));
    }
  };

  return (
    <div className="new-data-box" style={{ cursor: isPlay ? 'not-allowed' : 'pointer' }}>
      <span onClick={() => handleNewDataButtonClick()}>New Data</span>
    </div>
  );
};

export default NewDataButton;
