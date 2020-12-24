import { executeRadixSort } from './RadixSortUtil';
import { executeSwap } from './SwappingAlgoUtil';
import { resetArray } from './GeneralUtil';

export const generateDecimal = () => {
  return +Math.random().toFixed(3);
};

const innerSortUsed = 'Insertion Sort';

export const executeBucketSort = (currentAnimation, referenceArray, stackArr, isForward) => {
  if (currentAnimation.length === 4) {
    executeInnerBucketSort(currentAnimation, stackArr);
  } else if (currentAnimation.isSort === undefined) {
    executeRadixSort(currentAnimation, referenceArray, stackArr, isForward);
  } else {
    executeResetBucket(currentAnimation, stackArr);
  }
  return referenceArray;
};

const executeInnerBucketSort = (currentAnimation, stackArr) => {
  const firstIdx = currentAnimation[0];
  const secondIdx = currentAnimation[1];
  const isSwapOccurring = currentAnimation[2];
  const location = currentAnimation[3];
  stackArr[location].array = executeSwap(
    firstIdx,
    secondIdx,
    stackArr[location].array,
    isSwapOccurring,
    innerSortUsed
  );
};

const executeResetBucket = (currentAnimation, stackArr) => {
  const location = currentAnimation.location;
  stackArr[location].array = resetArray(innerSortUsed, stackArr[location].array);
};

export const generateBucketSortArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateDecimal(),
      isShown: true,
    });
  }
  return array;
};
