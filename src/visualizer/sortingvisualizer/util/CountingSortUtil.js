// Fixed array for counting sort
import { generateValue } from './GeneralUtil';

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
