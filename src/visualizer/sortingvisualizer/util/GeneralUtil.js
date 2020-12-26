import SortingAlgorithms from '../../algorithm/sortingalgorithms/allSorts';
import SortingAlgorithmsStepByStep from '../../algorithm/stepbysteptemplate/allSortsStepByStep';
import { generateRadixSortArray } from './RadixSortUtil';
import { generateBucketSortArray } from './BucketSortUtil';
import { generateCountSortArray } from './CountingSortUtil';
import { generateMergeSortArray } from './MergeSortUtil';

/**
 * Resets the array given.
 *
 * @method
 * @category ArrayUtil
 * @param {string} visualizerAlgorithm Algorithm used.
 * @param {Object[]} arr Array to be reset.
 * @returns {Object[]} Array that has been reset.
 */
export const resetArray = (visualizerAlgorithm, arr) => {
  if (isRadixOrBucket(visualizerAlgorithm)) {
    return arrayCopy(arr);
  }

  return arrayCopy(arr).map((x) => {
    let tempArrElement = x;
    if (isCountingSort(visualizerAlgorithm)) {
      tempArrElement.isShown = true;
    } else if (isMergeSort(visualizerAlgorithm)) {
      tempArrElement.isShift = false;
    } else {
      tempArrElement.isSwap = false;
    }
    return tempArrElement;
  });
};

/**
 * Creates a deep copy of the array.
 *
 * @method
 * @category ArrayUtil
 * @param {Object[]} arr Array to be copied.
 * @returns {Object[]} Deep copy of the input array.
 */
export const arrayCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

/**
 * Retrieves the animation array based on the given array and algorithm selected.
 *
 * @method
 * @category ArrayUtil
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @param {Object[]} arrayData Given array.
 * @returns {any[]} An array that contains all the animation steps.
 */
export const getAnimationArr = (visualizerAlgorithm, arrayData) => {
  const sortAlgo = SortingAlgorithms[visualizerAlgorithm];
  return sortAlgo(arrayCopy(arrayData));
};

/**
 * Gets the step by step text to display to the user.
 *
 * @method
 * @category StepTracingUtil
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @param {Object[]} animationArr Animation array.
 * @param {number} idx Index of animation.
 * @param {Object[]} referenceArray Reference array of blocks displayed.
 * @param {Object[]} stackArr Stack array, present only in bucket and radix sort.
 * @returns {string} Step by step text generated.
 */
export const getStepByStepText = (
  visualizerAlgorithm,
  animationArr,
  idx,
  referenceArray,
  stackArr
) => {
  const sortAlgoStepByStep = SortingAlgorithmsStepByStep[visualizerAlgorithm];
  if (isBucketSort(visualizerAlgorithm)) {
    return sortAlgoStepByStep(animationArr, idx, stackArr);
  }
  return sortAlgoStepByStep(animationArr, idx, referenceArray);
};

/**
 * Generates a random number within [min, max].
 *
 * @method
 * @param {number} min Min number selected.
 * @param {number} max Max number selected.
 * @returns {number} Random number generated.
 */
export const generateValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Rounds the number to 2 decimal places, if necessary.
 *
 * @method
 * @see {@link https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary|Stack Overflow}
 * @param {number} num Input number.
 * @returns {number} Rounded number with maximum 2 decimal places.
 */
export const roundToTwoDp = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

/**
 * Object used to map the names of each algorithm to its generated array.
 */
const arrayGenerator = {
  'Insertion Sort': (size) => generateDefaultArray(size),
  'Bubble Sort': (size) => generateDefaultArray(size),
  'Quick Sort': (size) => generateDefaultArray(size),
  'Shell Sort': (size) => generateDefaultArray(size),
  'Heap Sort': (size) => generateDefaultArray(size),
  'Selection Sort': (size) => generateDefaultArray(size),
  'Merge Sort': (size) => generateMergeSortArray(size),
  'Counting Sort': (size) => generateCountSortArray(size),
  'Radix Sort': (size) => generateRadixSortArray(size),
  'Bucket Sort': (size) => generateBucketSortArray(size),
};

/**
 * Generates a random array based on the size chosen and the algorithm selected.
 *
 * @method
 * @category ArrayUtil
 * @param {number} size Size of array selected by user.
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @returns {Object[]} Random array generated.
 */
export const generateArray = (size, visualizerAlgorithm) => {
  return arrayGenerator[visualizerAlgorithm](size);
};

/**
 * Generates the default array. Used by all sorting algorithms involving swaps only.
 *
 * @category ArrayUtil
 * @param {number} size Size of array selected by user.
 * @returns {Object[]} Random array generated.
 */
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

/**
 * Returns true if the algorithm input is counting sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is counting sort.
 */
export const isCountingSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Counting Sort';

/**
 * Returns true if the algorithm input is radix sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is radix sort.
 */
export const isRadixSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Radix Sort';

/**
 * Returns true if the algorithm input is bucket sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is bucket sort.
 */
export const isBucketSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Bucket Sort';

/**
 * Returns true if the algorithm input is radix or bucket sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is radix or bucket sort.
 */
export const isRadixOrBucket = (visualizerAlgorithm) =>
  isRadixSort(visualizerAlgorithm) || isBucketSort(visualizerAlgorithm);

/**
 * Returns true if the algorithm input is merge sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is merge sort.
 */
export const isMergeSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Merge Sort';

/**
 * Returns true if the algorithm input is selection sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is selection sort.
 */
export const isSelectionSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Selection Sort';

/**
 * Returns true if the algorithm input is quick sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is quick sort.
 */
export const isQuickSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Quick Sort';

/**
 * Returns true if the algorithm input is any sort aside from bucket, radix and counting sort.
 *
 * @method
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is any sort aside from bucket, radix and counting sort.
 */
export const hasLegend = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bubble Sort' ||
  visualizerAlgorithm === 'Insertion Sort' ||
  visualizerAlgorithm === 'Selection Sort' ||
  visualizerAlgorithm === 'Quick Sort' ||
  visualizerAlgorithm === 'Heap Sort' ||
  visualizerAlgorithm === 'Merge Sort' ||
  visualizerAlgorithm === 'Shell Sort';

/**
 * Generates a translation in the x direction to shift the visualizer when the data size is more than 12.
 *
 * @method
 * @param {number} dataSize Data size.
 * @returns {number} Translation in the x direction when the data size is more than 12.
 */
export const translateXOfVisualizer = (dataSize) => {
  if (dataSize > 12) {
    let singleBlockWidth = 200 / dataSize;
    return (dataSize - 12) * singleBlockWidth;
  }
  return 0;
};
