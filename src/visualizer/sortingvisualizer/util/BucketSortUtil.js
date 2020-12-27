import { executeRadixSort } from './RadixSortUtil';
import { executeSwap } from './SwappingAlgoUtil';
import { resetArray } from './ArrayUtil';

/**
 * Generates a random decimal.
 *
 * @category BucketSortUtil
 * @returns {number} Random decimal generated.
 */
const generateDecimal = () => {
  return +Math.random().toFixed(3);
};

/**
 * Inner sorting algorithm used for bucket sort.
 *
 * @category BucketSortUtil
 * @type {string}
 */
const innerSortUsed = 'Insertion Sort';

/**
 * Executes one step of the bucket sort algorithm.
 *
 * @method
 * @category BucketSortUtil
 * @param {any} currentAnimation Current animation object.
 * @param {Object[]} referenceArray Current state of the data array in the sorting execution.
 * @param {Object[]} stackArr Current state of the stack array in the sorting execution.
 * @param {boolean} isForward Boolean value which states if this is a forward or backward animation.
 * @returns {Object[]} The next state of the reference array after this sorting step.
 */
export const executeBucketSort = (currentAnimation, referenceArray, stackArr, isForward) => {
  if (currentAnimation.length === 4) {
    executeInnerBucketSort(currentAnimation, stackArr);
  } else if (currentAnimation.isSort === undefined) {
    executeRadixSort(currentAnimation, referenceArray, stackArr, isForward);
  } else {
    executeResetBucket(currentAnimation, stackArr);
  }
  return referenceArray;
};

/**
 * Executes one step of insertion sort on one single bucket.
 *
 * @category BucketSortUtil
 * @param {any[]} currentAnimation Current animation object.
 * @param {Object[]} stackArr Current stack array.
 */
const executeInnerBucketSort = (currentAnimation, stackArr) => {
  const firstIdx = currentAnimation[0];
  const secondIdx = currentAnimation[1];
  const isSwapOccurring = currentAnimation[2];
  const location = currentAnimation[3];
  stackArr[location].array = executeSwap(
    firstIdx,
    secondIdx,
    stackArr[location].array,
    isSwapOccurring,
    innerSortUsed
  );
};

/**
 * Resets the inner bucket to the default state. This removes any leftover highlight from the
 * elements.
 *
 * @param {Object} currentAnimation Current animation object.
 * @param {Object[]} stackArr Current stack array.
 */
const executeResetBucket = (currentAnimation, stackArr) => {
  const location = currentAnimation.location;
  stackArr[location].array = resetArray(innerSortUsed, stackArr[location].array);
};

/**
 * Generates the random array for bucket sort.
 *
 * @method
 * @category BucketSortUtil
 * @param {number} size Size of array generated.
 * @returns {Object[]} Random array for bucket sort.
 */
export const generateBucketSortArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateDecimal(),
      isShown: true,
    });
  }
  return array;
};
