import { handleSwap } from './SwappingAlgoUtil';

export const handleSwapWithPivot = (firstIdx, secondIdx, pivotIdx, arr, isSwapOccurring, algo) => {
  let newTempArr = handleSwap(firstIdx, secondIdx, arr, isSwapOccurring, algo);
  newTempArr[pivotIdx].isSwap = true;
  return newTempArr;
};
