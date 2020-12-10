import React, { useEffect, useState } from 'react';
import insertionSort from './algorithm/insertionSort';
import data from './component/block/data';
import AnimationScreen from './sortingvisualizer/AnimationScreen';
import PlayBackButton from './component/playbackbutton/PlaybackButton';
import Legend from './component/legend/Legend';
import VisualizerHeader from './component/header/VisualizerHeader';
import AlgorithmSelector from './component/algorithmselector/AlgorithmSelector';
import './styles.css';

const Visualizer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const animationArr = insertionSort(data.map((x) => x));
  const swap = (firstIdx, secondIdx, arr) => {
    let newTempArr = resetArray(arr);
    let tmp = newTempArr[firstIdx];
    newTempArr[firstIdx] = newTempArr[secondIdx];
    newTempArr[secondIdx] = tmp;
    newTempArr[firstIdx].isSwap = true;
    newTempArr[secondIdx].isSwap = true;
    return newTempArr;
  };
  const resetArray = (arr) => {
    return arr.map((x) => {
      let tempArrElement = x;
      tempArrElement.isSwap = false;
      return tempArrElement;
    });
  };
  useEffect(() => {}, [isPlay]);

  return (
    <div className="visualizer">
      <div className="visualizer-header-box">
        <VisualizerHeader />
        <AlgorithmSelector />
      </div>
      <div className="visualizer-box">
        <AnimationScreen
          dataArray={data}
          animationArr={animationArr}
          swap={(firstIdx, secondIdx, arr) => swap(firstIdx, secondIdx, arr)}
          isPlay={isPlay}
          setIsPlay={() => setIsPlay(!isPlay)}
          resetArray={(arr) => resetArray(arr)}
        />
      </div>
      <div className="controller-box">
        <div className="emptyDiv" />
        <div className="button-box">
          <PlayBackButton onClick={() => setIsPlay(!isPlay)} isPlay={isPlay} />
        </div>
        <div className="legend-box">
          <Legend />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
