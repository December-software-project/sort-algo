import { arrayCopy } from './GeneralUtil';

export const findIndexToUseInMergeSort = (newTempArr, iIdx, jIdx) => {
  for (let k = 0; k < newTempArr.length; k++) {
    let isUsingIIdx = iIdx === -1 && newTempArr[k].prevPos === jIdx;
    let isUsingJIdx = jIdx === -1 && newTempArr[k].prevPos === iIdx;
    if (isUsingIIdx || isUsingJIdx) {
      return k;
    }
  }
  return -1;
};

// Merge sort
export const handleMergeSort = (referenceArray, animationArrSwapIdx) => {
  let dataSize = referenceArray.length;
  let width = 800 / dataSize;
  let newTempArr = arrayCopy(referenceArray);
  let isShift = animationArrSwapIdx[2];
  let iIdx = animationArrSwapIdx[0];
  let jIdx = animationArrSwapIdx[1];
  let kIdx = animationArrSwapIdx[3];
  let isReset = animationArrSwapIdx[4];
  let idxToUse = findIndexToUseInMergeSort(newTempArr, iIdx, jIdx);
  // is Shift true represents moving down, false means moving back up to the desired position.
  if (isShift) {
    newTempArr[idxToUse].isShift = true;
  } else {
    let positiveDiff = Math.abs(kIdx - idxToUse);
    newTempArr[idxToUse].xDirection =
      kIdx - idxToUse <= 0
        ? -(positiveDiff * width) + (kIdx - 0) * 10
        : positiveDiff * width + (kIdx - 0) * 10;
    newTempArr[idxToUse].isShift = false;
    newTempArr[idxToUse].pos = kIdx;
    if (isReset) {
      // this signifies the end of "1 iteration of combining together"
      for (let i = 0; i < newTempArr.length; i++) {
        newTempArr[i].prevPos = newTempArr[i].pos;
      }
    }
  }
  return newTempArr;
};
