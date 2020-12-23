import { radixSortStepByStep } from './radixSortStepByStep';

export const bucketSortStepByStep = (animationArr, idx) => {

  const currentElement = animationArr[idx - 1];

  if (currentElement.isSort === undefined) {
    return radixSortStepByStep(animationArr, idx);
  }
  return `Currently sorting bucket ${currentElement.location}`;

};
