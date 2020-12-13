import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { generateArray } from '../../../../../utils/VisualizerUtil';

const NewDataButton = () => {
  const { isPlay, dataSize, setArrayData, setIsInMidstOfSort, setIsReplay } = useContext(
    VisualizerStateContext
  );

  const handleNewDataButtonClick = () => {
    if (!isPlay) {
      setArrayData(generateArray(dataSize));
      setIsInMidstOfSort(false);
    }
    setIsReplay(false);
  };

  return (
    <div className="new-data-box" style={{ cursor: isPlay ? '' : 'pointer' }}>
      <span onClick={() => handleNewDataButtonClick()}>New Data</span>
    </div>
  );
};

export default NewDataButton;
