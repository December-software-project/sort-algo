// For swapping algorithms
import { resetArray } from './GeneralUtil';
import { swap } from '../../algorithm/sortingalgorithms/swap';

/**
 * Sets the state of the "block" or "oval" to be highlighted.
 *
 * @method
 * @category ArrayUtil
 * @param {number} firstIdx The first block" or "oval" to be highlighted.
 * @param {number} secondIdx The second block" or "oval" to be highlighted.
 * @param {Object[]} arr The array which the index at {@code firstIdx} and {@code secondIdx} is highlighted
 */
export const highlight = (firstIdx, secondIdx, arr) => {
  arr[firstIdx].isSwap = true;
  arr[secondIdx].isSwap = true;
};

/**
 * Swaps the position of the two object in the array.
 *
 * @method
 * @category ArrayUtil
 * @param {number} firstIdx The first index to be swapped in the array.
 * @param {number} secondIdx The second index to be swapped in the array.
 * @param {Object[]} arr The array which the index at {@code firstIdx} and {@code secondIdx} is swapped and highlighted or just highlighted.
 * @param {boolean} isSwapOccurring A boolean value denoting whether a swap will occur.
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @returns {Object[]} A new Object array which has been been swap and highlighted or just highlighted.
 */
export const executeSwap = (firstIdx, secondIdx, arr, isSwapOccurring, visualizerAlgorithm) => {
  let newTempArr = resetArray(visualizerAlgorithm, arr);
  highlight(firstIdx, secondIdx, newTempArr);
  if (!isSwapOccurring) {
    return newTempArr;
  }
  swap(firstIdx, secondIdx, newTempArr);
  return newTempArr;
};

/**
 * A generic sorting execution for Insertion, Bubble, Selection, Shell Sort
 *
 * @method
 * @param {any[]} currentAnimation The current animation to be executed.
 * @param {Object[]} referenceArray The array holding data for the "blocks"
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer
 * @param {function} setReferenceArray A set state method for reference array.
 * @returns {Object[]} The resultant array upon the swap animation
 */
export const executeGenericSort = (
  currentAnimation,
  referenceArray,
  visualizerAlgorithm,
  setReferenceArray
) => {
  let firstIdx = currentAnimation[0];
  let secondIdx = currentAnimation[1];
  let isSwapOccurring = currentAnimation[2];
  let arrToUse = executeSwap(
    firstIdx,
    secondIdx,
    referenceArray,
    isSwapOccurring,
    visualizerAlgorithm
  );
  setReferenceArray(arrToUse);
  return arrToUse;
};
