import SortingAlgorithms from '../../algorithm/allSorts';
import SortingAlgorithmsStepByStep from '../../algorithm/stepbysteptemplate/allSortsStepByStep';

export const swap = (firstIdx, secondIdx, arr) => {
  let tmp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = tmp;
};

export const highlight = (firstIdx, secondIdx, arr) => {
  arr[firstIdx].isSwap = true;
  arr[secondIdx].isSwap = true;
};

export const handleSwap = (firstIdx, secondIdx, arr, isSwapOccurring, algo) => {
  let newTempArr = resetArray(algo, arr);
  highlight(firstIdx, secondIdx, newTempArr);
  if (!isSwapOccurring) {
    return newTempArr;
  }
  swap(firstIdx, secondIdx, newTempArr);
  return newTempArr;
};

export const resetArray = (algo, arr) => {
  return arrayCopy(arr).map((x) => {
    let tempArrElement = x;
    if (isBucketTypeSort(algo)) {
      tempArrElement.isShown = true;
    } else if (algo === 'Merge Sort') {
      tempArrElement.isShift = false;
    } else {
      tempArrElement.isSwap = false;
    }
    return tempArrElement;
  });
};

export const getAnimationArr = (algo, arrayData) => {
  const sortAlgo = SortingAlgorithms[algo];
  return sortAlgo(arrayCopy(arrayData));
};

export const getStepByStepText = (algo, animationArr, idx, referenceArray) => {
  const sortAlgoStepByStep = SortingAlgorithmsStepByStep[algo];
  return sortAlgoStepByStep(animationArr, idx, referenceArray);
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
  } else if (visualizerAlgorithm === 'Merge Sort') {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(1, 9),
        isShift: false,
        xDirection: i * 10,
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

// this is an auto shifting to ensure everything stays at the center
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};

export const handleMergeSort = (referenceArray, animationArrSwapIdx) => {
  let isShift = animationArrSwapIdx[2];
  let newTempArr = arrayCopy(referenceArray);
  let iIdx = animationArrSwapIdx[0];
  let jIdx = animationArrSwapIdx[1];
  let kIdx = animationArrSwapIdx[3];
  let isGoBack = animationArrSwapIdx[4];
  let dataSize = referenceArray.length;
  let width = 800 / dataSize;
  if (isGoBack && isShift) {
    // signifies we are gone
    return animationArrSwapIdx[5];
  }
  if (isGoBack) {
    if (iIdx === -1) {
      let positiveDiff = Math.abs(kIdx - jIdx);
      newTempArr[jIdx].xDirection =
        kIdx - jIdx <= 0
          ? -(positiveDiff * width) + (kIdx - 0) * 10
          : positiveDiff * width + (kIdx - 0) * 10;

      newTempArr[jIdx].isShift = false;
    } else {
      let positiveDiff = Math.abs(kIdx - iIdx);
      newTempArr[iIdx].xDirection =
        kIdx - iIdx <= 0
          ? -(positiveDiff * width) + (kIdx - 0) * 10
          : positiveDiff * width + (kIdx - 0) * 10;
      newTempArr[iIdx].isShift = false;
    }
  } else {
    if (isShift) {
      if (iIdx === -1) {
        newTempArr[jIdx].isShift = true;
      } else {
        newTempArr[iIdx].isShift = true;
      }
    } else {
      if (iIdx === -1) {
        newTempArr[kIdx].isShift = false;
      } else {
        newTempArr[kIdx].isShift = false;
      }
    }
  }
  return newTempArr;
};
