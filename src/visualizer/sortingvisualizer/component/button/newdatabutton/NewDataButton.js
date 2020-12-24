import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { arrayCopy, generateArray } from '../../../util/GeneralUtil';
import { buckets } from '../../../util/CountingSortUtil';
import { stack } from '../../../util/RadixSortUtil';

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
    setStackArr,
    setIsReset,
    setHistoryArr,
  } = useContext(VisualizerStateContext);

  const handleNewDataButtonClick = () => {
    if (!isPlay) {
      setArrayData(generateArray(dataSize, visualizerAlgorithm));
      setIsInMidstOfSort(false);
      setAnimationPercentage(0);
      setIsReplay(false);
      setCountArr(arrayCopy(buckets));
      setStackArr(arrayCopy(stack));
      setHistoryArr([]);
      setIsReset(true);
    }
  };

  return (
    <div className="new-data-box" style={{ cursor: isPlay ? 'not-allowed' : 'pointer' }}>
      <span onClick={() => handleNewDataButtonClick()}>New Data</span>
    </div>
  );
};

export default NewDataButton;
