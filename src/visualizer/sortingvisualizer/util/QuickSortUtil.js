import { executeSwap } from './SwappingAlgoUtil';

/**
 * A sorting execution for Quick Sort.
 *
 * @param currentAnimation {any[]} The current animation to be executed.
 * @param referenceArray {object[]} The array holding data for the "blocks".
 * @param visualizerAlgorithm {string} The current algorithm of the visualizer.
 * @param setReferenceArray {function} A set state method for reference array.
 * @returns {object[]} The resultant array upon the swap animation.
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
 *  A sorting execution for Quick Sort
 *
 * @param firstIdx {number} The first index to be swapped
 * @param secondIdx {number} The second index to be swapped
 * @param pivotIdx {number} The pivot index that is being compared to
 * @param arr {object[]} The array which the index at {@code firstIdx} and {@code secondIdx} is swapped
 * @param isSwapOccurring {boolean} A boolean value denoting whether a swap will occur
 * @param visualizerAlgorithm {string} The current algorithm of the visualizer
 * @returns {object[]} A new Object array which has been been swap and highlighted or just highlighted
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
