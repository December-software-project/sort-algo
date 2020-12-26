/**
 * Generates the step by step template for Counting Sort.
 *
 * @method
 * @memberOf StepByStepTemplate
 * @param animationArr An array that contains all the animation steps.
 * @param idx Index of the current animation step.
 * @param referenceArray An array containing the data which is being sorted.
 * @returns {string} The information regarding the current step of the animation.
 */
export const countingSortStepByStep = (animationArr, idx, referenceArray) => {
  const height = animationArr[idx - 1].height;

  if (idx > referenceArray.length) {
    return `Restore element ${height} and decrease count of ${height} by 1`;
  } else {
    return `Increase count of ${animationArr[idx - 1].height} by 1`;
  }
};
