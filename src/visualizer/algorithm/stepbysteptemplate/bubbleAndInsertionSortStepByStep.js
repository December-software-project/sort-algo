export const bubbleAndInsertionSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  } else if (idx - 1 >= 0) {
    let animationArrSwapIdx = animationArr[idx - 1];
    let firstIdx = animationArrSwapIdx[0];
    let secondIdx = animationArrSwapIdx[1];
    let isSwap = animationArrSwapIdx[2];
    let firstIdxVal = referenceArray[firstIdx].height;
    let secondIdxVal = referenceArray[secondIdx].height;
    let isBigger = secondIdxVal > firstIdxVal;
    let message = `Check if ${secondIdxVal} > ${firstIdxVal} :\n`;
    let result;
    if (isSwap) {
      result = `Since swap is true, swap ${secondIdxVal} and ${firstIdxVal}`;
      return result;
    }
    if (isBigger) {
      result = `Since ${secondIdxVal} > ${firstIdxVal} swap is set to true`;
    } else {
      result = `Since ${secondIdxVal} < ${firstIdxVal} swap is set to false and continue iterating`;
    }
    return message + result;
  }
};
