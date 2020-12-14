import SortingAlgorithms from '../../algorithm/allSorts';
import AnimationScreen
  from '../component/sortingvisualizerscreen/AnimationScreen';
import React from 'react';
import BucketAnimationScreen from '../component/bucketsortingvisualizer/BucketAnimationScreen';

export const swap = (firstIdx, secondIdx, arr) => {
  let newTempArr = resetArray(arr);
  let tmp = newTempArr[firstIdx];
  newTempArr[firstIdx] = newTempArr[secondIdx];
  newTempArr[secondIdx] = tmp;
  newTempArr[firstIdx].isSwap = true;
  newTempArr[secondIdx].isSwap = true;
  return newTempArr;
};

export const resetArray = (arr) => {
  return arr.map((x) => {
    let tempArrElement = x;
    tempArrElement.isSwap = false;
    return tempArrElement;
  });
};

export const getAnimationArr = (algo, arrayData) => {
  const sortAlgo = SortingAlgorithms[algo];
  return sortAlgo(arrayData);
};

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateArray = (size, visualizerAlgorithm) => {
  let min = 5;
  let max = 20;
  if (isBucketTypeSort(visualizerAlgorithm)) {
    min = 1;
    max = 9;
  }
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateValue(min, max),
      isSwap: false,
    });
  }
  return array;
};

export const isBucketTypeSort = (visualizerAlgorithm) => (
  visualizerAlgorithm === 'Bucket Sort' ||
  visualizerAlgorithm === 'Counting Sort' ||
  visualizerAlgorithm === 'Radix Sort'
);

export const getAnimation = (visualizerAlgorithm) => {
  if (isBucketTypeSort(visualizerAlgorithm)) {
    return (<BucketAnimationScreen />);
  } else {
    return (
      <AnimationScreen
      />
    );
  }
};
