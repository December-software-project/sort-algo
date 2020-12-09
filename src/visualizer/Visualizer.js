import React, { useEffect, useState } from 'react';
import insertionSort from './algorithm/insertionSort';
import data from './component/block/data';
import AnimationScreen from './sortingvisualizer/AnimationScreen';
import CodeTemplate from './component/codetemplate/CodeTemplate';

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
    <div>
      <AnimationScreen
        dataArray={data}
        animationArr={animationArr}
        swap={(firstIdx, secondIdx, arr) => swap(firstIdx, secondIdx, arr)}
        isPlay={isPlay}
      />
      <button onClick={() => setIsPlay(!isPlay)}>play</button>
      <CodeTemplate/>
    </div>
  );
};

export default Visualizer;
