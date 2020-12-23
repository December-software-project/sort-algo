import { executeRadixSort } from './RadixSortUtil';
import {insertionSort} from '../../algorithm/sortingalgorithms/plainInsertionSort';

export const generateDecimal = () => {
  return +Math.random().toFixed(3);
};

export const executeBucketSort = (currentAnimation, referenceArray, stackArr, isForward) => {
  if (currentAnimation.isSort) {
    insertionSort(stackArr[currentAnimation.location].array);
  } else {
    executeRadixSort(currentAnimation, referenceArray, stackArr, isForward);
  }
}