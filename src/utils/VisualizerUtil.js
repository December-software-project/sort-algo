import SortingAlgorithms from '../visualizer/algorithm/allSorts';

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
  const fn = SortingAlgorithms[algo];
  return fn(arrayData);
};

const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateValue(5, 20),
      isSwap: false,
    });
  }
  return array;
};
