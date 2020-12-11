
import React, { useState, useEffect } from 'react';
import insertionSort from './algorithm/insertionSort';
import data from './component/block/data';
import AnimationScreen from './sortingvisualizer/AnimationScreen';

const Visualizer = () => {

  const [isPlay, setIsPlay] = useState(false);
  const animationArr = insertionSort(data.map(x => x));
  const swap = (firstIdx, secondIdx, arr) => {
    let newTempArr = arr.map(x => x);
    let tmp = newTempArr[firstIdx];
    newTempArr[firstIdx] = newTempArr[secondIdx];
    newTempArr[secondIdx] = tmp;
    return newTempArr;
  };
  useEffect(() => {}, [isPlay]);

  return (<div id = 'visualizer'>
    <div>
      <h3> Visualizer </h3>
      <AnimationScreen dataArray={data} animationArr={animationArr}
                       swap={(firstIdx, secondIdx, arr) => swap(firstIdx,
                         secondIdx, arr)} isPlay={isPlay}/>
    </div>
    <button onClick={() => setIsPlay(!isPlay)}>play</button>
  </div>);
};

export default Visualizer;