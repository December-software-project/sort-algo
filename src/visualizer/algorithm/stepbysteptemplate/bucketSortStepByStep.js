import { radixSortStepByStep } from './radixSortStepByStep';
import { genericSwapStepByStep } from './genericSwapStepByStep';

export const bucketSortStepByStep = (animationArr, idx, stackArr) => {
  const currentAnimation = animationArr[idx - 1];

  // Insertion sort taking place in bucket
  if (currentAnimation.length === 4) {
    const location = currentAnimation[3];
    return genericSwapStepByStep(animationArr, idx, stackArr[location].array);
  }

  if (currentAnimation.isSort === undefined) {
    return radixSortStepByStep(animationArr, idx);
  }

  // Signal start of sorting bucket
  if (currentAnimation.isSort) {
    return `Currently sorting bucket ${currentAnimation.location}`;
  } else {
    return `Bucket ${currentAnimation.location} has been sorted!`;
  }
};
