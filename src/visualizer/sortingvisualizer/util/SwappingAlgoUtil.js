// For swapping algorithms
import { resetArray } from './GeneralUtil';
import { swap } from '../../algorithm/sortingalgorithms/swap';

const highlight = (firstIdx, secondIdx, arr) => {
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
