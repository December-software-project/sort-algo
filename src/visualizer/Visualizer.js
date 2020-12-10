import React, { useEffect, useState } from 'react';
import insertionSort from './algorithm/insertionSort';
import data from './component/block/data';
import AnimationScreen from './sortingvisualizer/AnimationScreen';
import PlayBackButton from './component/playbackbutton/PlaybackButton';
import Legend from './component/legend/Legend';
import './styles.css';

const Visualizer = () => {
  const [isPlay, setIsPlay] = useState(false);
  const animationArr = insertionSort(data.map((x) => x));
  const swap = (firstIdx, secondIdx, arr) => {
    let newTempArr = arr.map((x) => x);
    let tmp = newTempArr[firstIdx];
    newTempArr[firstIdx] = newTempArr[secondIdx];
    newTempArr[secondIdx] = tmp;
    return newTempArr;
  };
  useEffect(() => {}, [isPlay]);

  return (
    <div className="visualizer">
      <div className="visualizer-box">
        <AnimationScreen
          dataArray={data}
          animationArr={animationArr}
          swap={(firstIdx, secondIdx, arr) => swap(firstIdx, secondIdx, arr)}
          isPlay={isPlay}
          setIsPlay={() => setIsPlay(!isPlay)}
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
