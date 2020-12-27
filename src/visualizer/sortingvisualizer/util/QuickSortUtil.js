import { executeSwap } from './SwappingAlgoUtil';

/**
 * A sorting execution for Quick Sort.
 *
 * @method
 * @category QuickSortUtil
 * @param {any[]} currentAnimation The current animation to be executed.
 * @param {Object[]} referenceArray The array holding data for the "blocks".
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @param {function} setReferenceArray A set state method for reference array.
 * @returns {Object[]} The resultant array upon the swap animation.
 */
export const executeQuickSort = (
  currentAnimation,
  referenceArray,
  visualizerAlgorithm,
  setReferenceArray
) => {
  let firstIdx = currentAnimation[1];
  let secondIdx = currentAnimation[0];
  let pivotIdx = currentAnimation[3];
  let isSwapOccurring = currentAnimation[2];
  let arrToUse = executeSwapWithPivot(
    firstIdx,
    secondIdx,
    pivotIdx,
    referenceArray,
    isSwapOccurring,
    visualizerAlgorithm
  );
  setReferenceArray(arrToUse);
  return arrToUse;
};

/**
 * A sorting execution for Quick Sort
 *
 * @method
 * @category QuickSortUtil
 * @param {number} firstIdx The first index to be swapped
 * @param {number} secondIdx The second index to be swapped
 * @param {number} pivotIdx The pivot index that is being compared to
 * @param {Object[]} arr The array which the index at {@code firstIdx} and {@code secondIdx} is swapped
 * @param {boolean} isSwapOccurring A boolean value denoting whether a swap will occur
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer
 * @returns {Object[]} A new Object array which has been been swap and highlighted or just highlighted
 */
export const executeSwapWithPivot = (
  firstIdx,
  secondIdx,
  pivotIdx,
  arr,
  isSwapOccurring,
  visualizerAlgorithm
) => {
  let newTempArr = executeSwap(firstIdx, secondIdx, arr, isSwapOccurring, visualizerAlgorithm);
  newTempArr[pivotIdx].isSwap = true;
  return newTempArr;
};
