/**
 * Generates the step by step template for Heap Sort.
 *
 * @method
 * @memberOf StepByStepTemplate
 * @param {any[]} animationArr An array that contains all the animation steps.
 * @param {number} idx Index of the current animation step.
 * @param {Object[]} referenceArray An array containing the data which is being sorted.
 * @returns {string} The information regarding the current step of the animation.
 */
export const heapSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  }
  let animationArrSwapIdx = animationArr[idx - 1];
  let firstIdx = animationArrSwapIdx[0];
  let secondIdx = animationArrSwapIdx[1];
  let isSwap = animationArrSwapIdx[2];
  let heapStep = animationArrSwapIdx[3];
  let firstIdxVal = referenceArray[firstIdx].height;
  let secondIdxVal = referenceArray[secondIdx].height;
  let isBigger = secondIdxVal > firstIdxVal;

  if (heapStep) {
    return `Swap the largest item in the heap, ${firstIdxVal}, with the 
    leaf node with the largest index, ${secondIdxVal}`;
  }

  if (isSwap) {
    return `Since swap is true, swap ${secondIdxVal} and ${firstIdxVal}`;
  }

  // Comparisons message
  let message = `Check if ${firstIdxVal} is larger than its child nodes:\n`;

  if (isBigger) {
    message += `Since ${secondIdxVal} > ${firstIdxVal}, swap is set to true`;
  } else {
    message += `Since ${firstIdxVal} is larger than its child nodes, swap is set 
    to false and iteration continues`;
  }
  return message;
};
