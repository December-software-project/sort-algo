import { executeRadixSort } from './RadixSortUtil';
import { executeSwap } from './SwappingAlgoUtil';

export const generateDecimal = () => {
  return +Math.random().toFixed(3);
};

export const executeBucketSort = (currentAnimation, referenceArray, stackArr, isForward) => {
  if (currentAnimation.length === 4) {
    executeInnerBucketSort(currentAnimation, stackArr);
  } else if (!currentAnimation.isSort) {
    executeRadixSort(currentAnimation, referenceArray, stackArr, isForward);
  }
  return referenceArray;
};

export const executeInnerBucketSort = (currentAnimation, stackArr) => {
  const firstIdx = currentAnimation[0];
  const secondIdx = currentAnimation[1];
  const isSwapOccurring = currentAnimation[2];
  const location = currentAnimation[3];
  stackArr[location].array = executeSwap(
    firstIdx,
    secondIdx,
    stackArr[location].array,
    isSwapOccurring,
    'Insertion Sort'
  );
};
