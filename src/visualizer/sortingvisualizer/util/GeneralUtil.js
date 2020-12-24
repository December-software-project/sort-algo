import SortingAlgorithms from '../../algorithm/sortingalgorithms/allSorts';
import SortingAlgorithmsStepByStep from '../../algorithm/stepbysteptemplate/allSortsStepByStep';
import { generateRadixSortArray } from './RadixSortUtil';
import { generateBucketSortArray } from './BucketSortUtil';
import { generateCountSortArray } from './CountingSortUtil';
import { generateMergeSortArray } from './MergeSortUtil';

// General array util
export const resetArray = (algo, arr) => {
  if (isRadixOrBucket(algo)) {
    return arrayCopy(arr);
  }

  return arrayCopy(arr).map((x) => {
    let tempArrElement = x;
    if (isCountingSort(algo)) {
      tempArrElement.isShown = true;
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

export const getStepByStepText = (algo, animationArr, idx, referenceArray, stackArr) => {
  const sortAlgoStepByStep = SortingAlgorithmsStepByStep[algo];
  if (isBucketSort(algo)) {
    return sortAlgoStepByStep(animationArr, idx, stackArr);
  }
  return sortAlgoStepByStep(animationArr, idx, referenceArray);
};

// Math util
export const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// code from Mark G https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
export const roundToTwoDp = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

const arrayGenerator = {
  'Insertion Sort': (size) => generateDefaultArray(size),
  'Bubble Sort': (size) => generateDefaultArray(size),
  'Quick Sort': (size) => generateDefaultArray(size),
  'Shell Sort': (size) => generateDefaultArray(size),
  'Selection Sort': (size) => generateDefaultArray(size),
  'Merge Sort': (size) => generateMergeSortArray(size),
  'Counting Sort': (size) => generateCountSortArray(size),
  'Radix Sort': (size) => generateRadixSortArray(size),
  'Bucket Sort': (size) => generateBucketSortArray(size),
};

/**
 * Generates a random array based on the size chosen and the algorithm selected.
 * @param size Size of array data.
 * @param visualizerAlgorithm Algorithm selected.
 * @returns {[]} Random array generated.
 */
export const generateArray = (size, visualizerAlgorithm) => {
  return arrayGenerator[visualizerAlgorithm](size);
};

const generateDefaultArray = (size) => {
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

// Conditionals
export const isCountingSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Counting Sort';
export const isRadixSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Radix Sort';
export const isBucketSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Bucket Sort';
export const isRadixOrBucket = (visualizerAlgorithm) =>
  isRadixSort(visualizerAlgorithm) || isBucketSort(visualizerAlgorithm);
export const isMergeSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Merge Sort';
export const isSelectionSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Selection Sort';
export const isQuickSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Quick Sort';

export const hasLegend = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bubble Sort' ||
  visualizerAlgorithm === 'Insertion Sort' ||
  visualizerAlgorithm === 'Selection Sort' ||
  visualizerAlgorithm === 'Quick Sort' ||
  visualizerAlgorithm === 'Heap Sort' ||
  visualizerAlgorithm === 'Merge Sort' ||
  visualizerAlgorithm === 'Shell Sort';

// Auto shifting to ensure everything stays at the center
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};
