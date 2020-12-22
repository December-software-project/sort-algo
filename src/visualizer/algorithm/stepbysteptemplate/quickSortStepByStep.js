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
  let comparisonTarget = animationArrSwapIdx[4];

  if (isSwap) {
    return `Since swap is true, swap ${secondIdxVal} and ${firstIdxVal}`;
  }

  // Checking of swaps
  if (comparisonTarget === 'iToJ') {
    if (firstIdxVal > secondIdxVal) {
      return `Since ${firstIdxVal} > ${secondIdxVal} swap is set to true`;
    } else {
      return `Since ${firstIdxVal} <= ${secondIdxVal}, no swap occurs`;
    }
  }

  // Comparing to pivot
  let message = `Comparing to a random pivot at index ${pivotIdx}, with value ${pivotIdxVal}\n`;

  if (comparisonTarget === 'iToIdx') {
    if (firstIdxVal < pivotIdxVal) {
      message += `Since ${firstIdxVal} < ${pivotIdxVal}, increment the left index`;
    } else {
      message += `Since ${firstIdxVal} >= ${pivotIdxVal}, stop incrementing left index`;
    }
  } else if (comparisonTarget === 'jToIdx') {
    if (secondIdxVal > pivotIdxVal) {
      message += `Since ${secondIdxVal} > ${pivotIdxVal}, decrement the right index`;
    } else {
      message += `Since ${secondIdxVal} <= ${pivotIdxVal}, stop decrement the right index`;
    }
  }
  return message;
};
