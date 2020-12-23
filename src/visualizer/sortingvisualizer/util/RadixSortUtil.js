import { generateValue } from './GeneralUtil';

// Fixed array for radix sort
export const stack = [
  { value: 0, array: [] },
  { value: 1, array: [] },
  { value: 2, array: [] },
  { value: 3, array: [] },
  { value: 4, array: [] },
  { value: 5, array: [] },
  { value: 6, array: [] },
  { value: 7, array: [] },
  { value: 8, array: [] },
  { value: 9, array: [] },
];

export const generateRandomValue = () => {
  const randomVal = Math.random();
  if (randomVal < 0.1) {
    return generateValue(1, 9);
  } else if (randomVal < 0.2) {
    return generateValue(10, 99);
  } else if (randomVal <= 1) {
    return generateValue(100, 999);
  }
};

export const executeRadixSort = (animationArrSwapIdx, referenceArray, stackArr, isForward) => {
  const index = animationArrSwapIdx.id;
  const isDistributing = animationArrSwapIdx.isDistributing;
  const isDistributingAnimation = !(isForward ^ isDistributing);

  if (isDistributingAnimation) {
    referenceArray[index].isShown = false;
    const location = animationArrSwapIdx.location;
    if (isForward) {
      stackArr[location].array.push(animationArrSwapIdx);
    } else {
      stackArr[location].array.unshift(animationArrSwapIdx);
    }
  } else {
    // Putting back into array
    const location = animationArrSwapIdx.location;
    referenceArray[index] = animationArrSwapIdx;
    referenceArray[index].isShown = true;
    if (isForward) {
      stackArr[location].array.shift();
    } else {
      stackArr[location].array.pop();
    }
  }
  return referenceArray;
};
