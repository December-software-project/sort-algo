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

export const generateRadixSortArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateRandomValue(),
      isShown: true,
    });
  }
  return array;
};

export const executeRadixSort = (currentAnimation, referenceArray, stackArr, isForward) => {
  const index = currentAnimation.id;
  const isDistributing = currentAnimation.isDistributing;
  const isDistributingAnimation = !(isForward ^ isDistributing);

  if (isDistributingAnimation) {
    referenceArray[index].isShown = false;
    const location = currentAnimation.location;
    if (isForward) {
      stackArr[location].array.push(currentAnimation);
    } else {
      stackArr[location].array.unshift(currentAnimation);
    }
  } else {
    // Putting back into array
    const location = currentAnimation.location;
    referenceArray[index] = currentAnimation;
    referenceArray[index].isShown = true;
    if (isForward) {
      stackArr[location].array.shift();
    } else {
      stackArr[location].array.pop();
    }
  }
  return referenceArray;
};
