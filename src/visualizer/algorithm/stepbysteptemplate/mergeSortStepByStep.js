import { arrayCopy } from '../../sortingvisualizer/util/GeneralUtil';
import { findIndexToUseInMergeSort } from '../../sortingvisualizer/util/MergeSortUtil';

export const mergeSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  } else if (referenceArray[0].isShift !== undefined) {
    let animationArrSwapIdx = animationArr[idx - 1];
    let isShift = animationArrSwapIdx[2];
    let newTempArr = arrayCopy(referenceArray);
    let iIdx = animationArrSwapIdx[0];
    let jIdx = animationArrSwapIdx[1];
    let idxToUse = findIndexToUseInMergeSort(newTempArr, iIdx, jIdx);
    if (isShift) {
      // explaining the moving downwards and comparison
      // this is slightly inefficient but since we are dealing with small data, it should be fine
      let message = 'Currently in merge process: ';
      for (let values of referenceArray) {
        if (values.isShift) {
          message += values.height + ', ';
        }
      }
      return message.slice(0, -1);
    }
    // shifting back up to correct position
    let min = referenceArray[idxToUse].height;
    let message = `Since the minimum is ${min}, we move ${min} up\nCurrently left in the merge process: `;
    for (let values of referenceArray) {
      if (values.isShift) {
        message += values.height + ', ';
      }
    }
    message = message.slice(0, -1);
    return message;
  }
};
