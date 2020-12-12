import React, { useContext } from 'react';
import './styles.css';
import { VisualizerStateContext } from '../../../Visualizer';
import { generateArray } from '../../../../../utils/VisualizerUtil';

const ResetButton = () => {
  const { isPlay, dataSize, setArrayData, setIsInMidstOfSort, setIsReplay } = useContext(
    VisualizerStateContext
  );

  const handleResetButtonClick = () => {
    if (!isPlay) {
      setArrayData(generateArray(dataSize));
      setIsInMidstOfSort(false);
    }
    setIsReplay(false);
  };

  return (
    <div className="reset-box" style={{ cursor: isPlay ? '' : 'pointer' }}>
      <span onClick={() => handleResetButtonClick()}>Reset</span>
    </div>
  );
};

export default ResetButton;
