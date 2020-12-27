import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { buckets } from '../../../util/CountingSortUtil';
import { stack } from '../../../util/RadixSortUtil';
import { arrayCopy, generateArray } from '../../../util/ArrayUtil';

/**
 * A button to generate new data for the "blocks" for the sorting animation.
 *
 * @component
 * @category Button
 */
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

  /**
   * Event handler to generate new data set for the sorting animation.
   */
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
