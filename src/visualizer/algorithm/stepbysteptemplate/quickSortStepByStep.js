export const quickSortStepByStep = (animationArr, idx, referenceArray) => {
  if (idx === animationArr.length) {
    return 'Array is sorted';
  } else if (idx - 1 >= 0 && animationArr[0].length === 5) {
    let animationArrSwapIdx = animationArr[idx - 1];
    let firstIdx = animationArrSwapIdx[0];
    let secondIdx = animationArrSwapIdx[1];
    let isSwap = animationArrSwapIdx[2];
    let firstIdxVal = referenceArray[firstIdx].height;
    let secondIdxVal = referenceArray[secondIdx].height;
    let pivotIdx = animationArrSwapIdx[3];
    let pivotIdxVal = referenceArray[pivotIdx].height;
    let comparisonTarget = animationArrSwapIdx[4];
    let message = `Comparing to a random pivot at index ${pivotIdx}, with value ${pivotIdxVal}\n`;
    let result;
    if (isSwap) {
      result = `Since swap is true, swap ${secondIdxVal} and ${firstIdxVal}`;
      return result;
    } else {
      if (comparisonTarget === 'iToIdx') {
        if (firstIdxVal < pivotIdxVal) {
          result = `Since ${firstIdxVal} < ${pivotIdxVal}, increment the left index`;
        } else {
          result = `Since ${firstIdxVal} >= ${pivotIdxVal}, stop incrementing left index`;
        }
        return message + result;
      } else if (comparisonTarget === 'jToIdx') {
        if (secondIdxVal > pivotIdxVal) {
          result = `Since ${secondIdxVal} > ${pivotIdxVal}, decrement the right index`;
        } else {
          result = `Since ${secondIdxVal} <= ${pivotIdxVal}, stop decrement the right index`;
        }
        return message + result;
      } else if (comparisonTarget === 'iToJ') {
        if (firstIdxVal > secondIdxVal) {
          result = `Since ${firstIdxVal} > ${secondIdxVal} swap is set to true`;
        } else {
          result = `Since ${firstIdxVal} <= ${secondIdxVal}, no swap occurs`;
        }
        return result;
      }
    }
  }
};
