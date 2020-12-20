import SortingAlgorithms from '../../algorithm/sortingalgorithms/allSorts';
import SortingAlgorithmsStepByStep from '../../algorithm/stepbysteptemplate/allSortsStepByStep';

// For swapping algorithms
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

// General array util
export const resetArray = (algo, arr) => {
  return arrayCopy(arr).map((x) => {
    let tempArrElement = x;
    if (isCountingSort(algo)) {
      tempArrElement.isShown = true;
    } else if (isRadixSort(algo)) {

    } else if (isMergeSort(algo)) {
      tempArrElement.isShift = false;
    } else {
      tempArrElement.isSwap = false;
    }
    return tempArrElement;
  });
};

export const arrayCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
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
  if (isCountingSort(visualizerAlgorithm)) {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(1, 9),
        isShown: true,
      });
    }
  } else if (isRadixSort(visualizerAlgorithm)) {
    for (let i = 0; i < size; i++) {
      array.push({
        id: i,
        height: generateValue(1, 4000),
      });
    }
  } else if (isMergeSort(visualizerAlgorithm)) {
    for (let i = 0; i < size; i++) {
      array.push({
        xDirection: i * 10,
        pos: i,
        prevPos: i,
        height: generateValue(1, 9),
        isShift: false,
        id: i,
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

export const stack = [
  { value: 0, array: [] },
  { value: 1, array: [] },
  { value: 2, array: [] },
  { value: 3, array: [] },
  { value: 4, array: [] },
  { value: 5, array: [] },
  { value: 6, array: [] },
  { value: 7, array: [] },
  { value: 8, array: [] },
  { value: 9, array: [] },
];

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

// Conditionals
export const isCountingSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Counting Sort';
export const isRadixSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Radix Sort';
export const isBucketSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Bucket Sort';
export const isMergeSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Merge Sort';

export const isSwapInvolvedSort = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bubble Sort' ||
  visualizerAlgorithm === 'Insertion Sort' ||
  visualizerAlgorithm === 'Selection Sort' ||
  visualizerAlgorithm === 'Quick Sort' ||
  visualizerAlgorithm === 'Heap Sort' ||
  visualizerAlgorithm === 'Shell Sort';

export const isBucketTypeSort = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bucket Sort' ||
  visualizerAlgorithm === 'Counting Sort' ||
  visualizerAlgorithm === 'Radix Sort';

// Auto shifting to ensure everything stays at the center
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};

export const findIndexToUseInMergeSort = (newTempArr, iIdx, jIdx) => {
  for (let k = 0; k < newTempArr.length; k++) {
    let isUsingIIdx = iIdx === -1 && newTempArr[k].prevPos === jIdx;
    let isUsingJIdx = jIdx === -1 && newTempArr[k].prevPos === iIdx;
    if (isUsingIIdx || isUsingJIdx) {
      return k;
    }
  }
  return -1;
};

// Merge sort
export const handleMergeSort = (referenceArray, animationArrSwapIdx) => {
  let dataSize = referenceArray.length;
  let width = 800 / dataSize;
  let newTempArr = arrayCopy(referenceArray);
  let isShift = animationArrSwapIdx[2];
  let iIdx = animationArrSwapIdx[0];
  let jIdx = animationArrSwapIdx[1];
  let kIdx = animationArrSwapIdx[3];
  let isReset = animationArrSwapIdx[4];
  let idxToUse = findIndexToUseInMergeSort(newTempArr, iIdx, jIdx);
  // is Shift true represents moving down, false means moving back up to the desired position.
  if (isShift) {
    newTempArr[idxToUse].isShift = true;
  } else {
    let positiveDiff = Math.abs(kIdx - idxToUse);
    newTempArr[idxToUse].xDirection =
      kIdx - idxToUse <= 0
        ? -(positiveDiff * width) + (kIdx - 0) * 10
        : positiveDiff * width + (kIdx - 0) * 10;
    newTempArr[idxToUse].isShift = false;
    newTempArr[idxToUse].pos = kIdx;
    if (isReset) {
      // this signifies the end of "1 iteration of combining together"
      for (let i = 0; i < newTempArr.length; i++) {
        newTempArr[i].prevPos = newTempArr[i].pos;
      }
    }
  }
  return newTempArr;
};
