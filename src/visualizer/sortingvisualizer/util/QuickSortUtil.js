import { executeSwap } from './SwappingAlgoUtil';

export const executeSwapWithPivot = (firstIdx, secondIdx, pivotIdx, arr, isSwapOccurring, algo) => {
  let newTempArr = executeSwap(firstIdx, secondIdx, arr, isSwapOccurring, algo);
  newTempArr[pivotIdx].isSwap = true;
  return newTempArr;
};
