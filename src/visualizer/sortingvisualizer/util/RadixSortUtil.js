import { generateValue } from './GeneralUtil';

/**
 * Fixed stack array created for radix and bucket sort usage.
 *
 * @category RadixSort
 * @type {Object}
 */
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

/**
 * Generates a random value for generation of array in radix sort.
 *
 * @category RadixSort
 * @returns {number} Random number generated.
 */
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

/**
 * Generates the random array for radix sort.
 *
 * @category RadixSort
 * @param {number} size Size of array generated.
 * @returns {Object[]} Random array for radix sort.
 */
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

/**
 * Executes one step of the radix sort algorithm.
 *
 * @typedef {function}
 * @category RadixSort
 * @param {Object} currentAnimation Current animation object.
 * @param {Object[]} referenceArray Current state of the data array in the sorting execution.
 * @param {Object[]} stackArr Current state of the stack array in the sorting execution.
 * @param {boolean} isForward Boolean value which states if this is a forward or backward animation.
 * @returns {Object[]} Returns the next state of the data array after this sorting step.
 */
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
