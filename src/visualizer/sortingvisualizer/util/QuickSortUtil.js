import { executeSwap } from './SwappingAlgoUtil';

export const executeQuickSort = (
  animationArrSwapIdx,
  referenceArray,
  visualizerAlgorithm,
  setReferenceArray
) => {
  let firstIdx = animationArrSwapIdx[1];
  let secondIdx = animationArrSwapIdx[0];
  let pivotIdx = animationArrSwapIdx[3];
  let isSwapOccurring = animationArrSwapIdx[2];
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
