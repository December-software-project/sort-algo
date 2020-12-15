import SortingAlgorithms from '../../algorithm/allSorts';
import React from 'react';

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
  return sortAlgo(arrayCopy(arrayData));
};

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateArray = (size, visualizerAlgorithm) => {
  let array = [];
  if (isBucketTypeSort(visualizerAlgorithm)) {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(1, 9),
        isShown: true,
      });
    }
  } else {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(5, 20),
        isSwap: false,
      });
    }
  }
  return array;
};

export const buckets = [
  { height: 1, count: 0 },
  { height: 2, count: 0 },
  { height: 3, count: 0 },
  { height: 4, count: 0 },
  { height: 5, count: 0 },
  { height: 6, count: 0 },
  { height: 7, count: 0 },
  { height: 8, count: 0 },
  { height: 9, count: 0 },
];

export const isBucketTypeSort = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bucket Sort' ||
  visualizerAlgorithm === 'Counting Sort' ||
  visualizerAlgorithm === 'Radix Sort';

export const arrayCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};
