// For swapping algorithms
import { resetArray } from './GeneralUtil';
import { swap } from '../../algorithm/sortingalgorithms/swap';

/**
 * Sets the state of the "block" or "oval" to be highlighted.
 *
 * @param firstIdx {number} The first block" or "oval" to be highlighted.
 * @param secondIdx {number} The second block" or "oval" to be highlighted.
 * @param arr {object[]} The array which the index at {@code firstIdx} and {@code secondIdx}
 *        is highlighted
 */
export const highlight = (firstIdx, secondIdx, arr) => {
  arr[firstIdx].isSwap = true;
  arr[secondIdx].isSwap = true;
};

/**
 * Swaps the position of the two object in the array.
 *
 * @param firstIdx {number} The first index to be swapped in the array.
 * @param secondIdx {number} The second index to be swapped in the array.
 * @param arr {object[]} The array which the index at {@code firstIdx} and {@code secondIdx}
 *        is swapped and highlighted or just highlighted.
 * @param isSwapOccurring {boolean} A boolean value denoting whether a swap will occur.
 * @param visualizerAlgorithm {string} The current algorithm of the visualizer.
 * @returns {object[]} A new Object array which has been been swap and highlighted or
 *          just highlighted.
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
 * @param currentAnimation {any[]} The current animation to be executed.
 * @param referenceArray {object[]} The array holding data for the "blocks"
 * @param visualizerAlgorithm {string} The current algorithm of the visualizer
 * @param setReferenceArray {function} A set state method for reference array.
 * @returns {object[]} The resultant array upon the swap animation
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
