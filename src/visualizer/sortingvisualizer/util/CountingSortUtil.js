import { generateValue } from './MathUtil';

/**
 * Buckets used for counting sort animation.
 *
 * @category CountingSortUtil
 * @const {Object[]}
 */
export const buckets = [
  { height: 1, count: 0 },
  { height: 2, count: 0 },
  { height: 3, count: 0 },
  { height: 4, count: 0 },
  { height: 5, count: 0 },
  { height: 6, count: 0 },
  { height: 7, count: 0 },
  { height: 8, count: 0 },
  { height: 9, count: 0 },
];

/**
 * Generates the random array for counting sort.
 *
 * @method
 * @category CountingSortUtil
 * @param {number} size Size of array generated.
 * @returns {Object[]} Random array for counting sort.
 */
export const generateCountSortArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      id: i,
      height: generateValue(1, 9),
      isShown: true,
    });
  }
  return array;
};

// Function to execute the counting sort animation

/**
 * Executes one step of the counting sort algorithm.
 *
 * @method
 * @category CountingSortUtil
 * @param {Object} currentAnimation Current animation object.
 * @param {Object[]} referenceArray Current state of the data array in the sorting execution.
 * @param {number} animationPx Current animation percentage.
 * @param {Object[]} countArr Count bucket array used for counting sort.
 * @param {boolean} isForward Boolean value which states if this is a forward or backward animation.
 * @returns {Object[]} The next state of the reference array after this sorting step.
 */
export const executeCountSort = (
  currentAnimation,
  referenceArray,
  animationPx,
  countArr,
  isForward
) => {
  const index = currentAnimation.id;
  const height = currentAnimation.height;
  const isCountAnimation = (isForward && animationPx <= 50) || (!isForward && animationPx >= 50);
  if (isCountAnimation) {
    referenceArray[index].isShown = false;
    countArr[height - 1].count += 1;
  } else {
    referenceArray[index] = currentAnimation;
    referenceArray[index].isShown = true;
    countArr[height - 1].count -= 1;
  }
  return referenceArray;
};
