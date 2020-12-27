import SortingAlgorithmsStepByStep from '../../../algorithm/stepbysteptemplate/allSortsStepByStep';
import { isBucketSort } from '../../util/GeneralUtil';

/**
 * Gets the step by step text to display to the user.
 *
 * @method
 * @category StepTracingUtil
 * @param {string} visualizerAlgorithm The current algorithm of the visualizer.
 * @param {any[]} animationArr Animation array.
 * @param {number} idx Index of animation.
 * @param {Object[]} referenceArray Reference array of blocks displayed.
 * @param {Object[]} stackArr Stack array, present only in bucket and radix sort.
 * @returns {string} Step by step text generated.
 */
export const getStepByStepText = (
  visualizerAlgorithm,
  animationArr,
  idx,
  referenceArray,
  stackArr
) => {
  const sortAlgoStepByStep = SortingAlgorithmsStepByStep[visualizerAlgorithm];
  if (isBucketSort(visualizerAlgorithm)) {
    return sortAlgoStepByStep(animationArr, idx, stackArr);
  }
  return sortAlgoStepByStep(animationArr, idx, referenceArray);
};
