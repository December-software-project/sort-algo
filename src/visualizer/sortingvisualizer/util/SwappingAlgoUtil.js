// For swapping algorithms
import { resetArray } from './GeneralUtil';
import { swap } from '../../algorithm/sortingalgorithms/swap';

export const highlight = (firstIdx, secondIdx, arr) => {
  arr[firstIdx].isSwap = true;
  arr[secondIdx].isSwap = true;
};

export const executeSwap = (firstIdx, secondIdx, arr, isSwapOccurring, algo) => {
  let newTempArr = resetArray(algo, arr);
  highlight(firstIdx, secondIdx, newTempArr);
  if (!isSwapOccurring) {
    return newTempArr;
  }
  swap(firstIdx, secondIdx, newTempArr);
  return newTempArr;
};

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
