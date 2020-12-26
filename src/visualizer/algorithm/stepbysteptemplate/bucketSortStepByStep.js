import { radixSortStepByStep } from './radixSortStepByStep';
import { genericSwapStepByStep } from './genericSwapStepByStep';

/**
 * Generates the step by step template for Bucket Sort.
 *
 * @method
 * @memberOf StepByStepTemplate
 * @param {any[]} animationArr An array that contains all the animation steps.
 * @param {number} idx Index of the current animation step.
 * @param {Object[]} stackArr An array representing the buckets.
 * @returns {string} The information regarding the current step of the animation.
 */
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
