import { executeSwap } from './SwappingAlgoUtil';

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

export const executeSwapWithPivot = (firstIdx, secondIdx, pivotIdx, arr, isSwapOccurring, algo) => {
  let newTempArr = executeSwap(firstIdx, secondIdx, arr, isSwapOccurring, algo);
  newTempArr[pivotIdx].isSwap = true;
  return newTempArr;
};
