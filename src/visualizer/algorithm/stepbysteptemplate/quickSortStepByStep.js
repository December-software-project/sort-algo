/**
 * Generates the step by step template for Quick Sort.
 *
 * @method
 * @memberOf StepByStepTemplate
 * @param {any[]} animationArr An array that contains all the animation steps.
 * @param {number} idx Index of the current animation step.
 * @param {Object[]} referenceArray An array containing the data which is being sorted.
 * @returns {string} The information regarding the current step of the animation.
 */
export const quickSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  }

  let animationArrSwapIdx = animationArr[idx - 1];
  let firstIdx = animationArrSwapIdx[0];
  let secondIdx = animationArrSwapIdx[1];
  let isSwap = animationArrSwapIdx[2];
  let firstIdxVal = referenceArray[firstIdx].height;
  let secondIdxVal = referenceArray[secondIdx].height;
  let pivotIdx = animationArrSwapIdx[3];
  let pivotIdxVal = referenceArray[pivotIdx].height;
  let command = animationArrSwapIdx[4];
  let indexOfSmallerElement = animationArrSwapIdx[5];

  // when a swap occurs, it is either swapping two element while iterating, else, it is swapping
  // the pivot to its position
  let incJ = ` Now we increment the loop variable from ${secondIdx} to ${secondIdx + 1}.`;
  let incI = `we increment the index of the smaller element from ${indexOfSmallerElement} to ${
    indexOfSmallerElement + 1
  }.`;
  if (isSwap) {
    if (command === 'iToJ') {
      return (
        `Since swap is true, we swap index of the smaller element, ${indexOfSmallerElement} with` +
        ` value ${firstIdxVal}, with loop variable index ${secondIdx}, ` +
        `with value ${secondIdxVal}.` +
        incJ
      );
    }
    return (
      `Since we finish one iteration, we swap the pivot to next of index of smallest` +
      `element ${firstIdx}`
    );
  }
  // Comparison to determine if to increment both loop variable or just one
  let comparisonStatement;
  let swapStatement;
  if (command === 'incI') {
    comparisonStatement = `Since ${secondIdxVal} < pivot value ${pivotIdxVal}, `;
    // if both index are the same, no need to set swap to true
    if (secondIdx !== indexOfSmallerElement + 1) {
      swapStatement = ` Since index of smaller element ${
        indexOfSmallerElement + 1
      } not equal to index of loop variable ${secondIdx}, Swap is set to true.`;
    } else {
      swapStatement = ` Since index of smaller element ${
        indexOfSmallerElement + 1
      } equal to index of loop variable ${secondIdx}, Swap is set to false.`;
      swapStatement += incJ;
    }
    return comparisonStatement + incI + swapStatement;
  }

  comparisonStatement = `Since ${secondIdxVal} >= pivot value ${pivotIdxVal}, `;
  swapStatement = `Swap is set to false`;
  return comparisonStatement + swapStatement + incJ;
};
