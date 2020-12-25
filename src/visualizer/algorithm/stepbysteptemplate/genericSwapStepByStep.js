export const genericSwapStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  }
  let animationArrSwapIdx = animationArr[idx - 1];
  let firstIdx = animationArrSwapIdx[0];
  let secondIdx = animationArrSwapIdx[1];
  let isSwap = animationArrSwapIdx[2];
  let firstIdxVal = referenceArray[firstIdx].height;
  let secondIdxVal = referenceArray[secondIdx].height;
  let isBigger = secondIdxVal > firstIdxVal;

  if (isSwap) {
    return `Since swap is true, swap ${secondIdxVal} and ${firstIdxVal}`;
  }

  // Comparisons message
  let message = `Check if ${secondIdxVal} > ${firstIdxVal} :\n`;

  if (isBigger) {
    message += `Since ${secondIdxVal} > ${firstIdxVal}, swap is set to true`;
  } else {
    message += `Since ${secondIdxVal} <= ${firstIdxVal}, swap is set to false and iteration continues`;
  }
  return message;
};
