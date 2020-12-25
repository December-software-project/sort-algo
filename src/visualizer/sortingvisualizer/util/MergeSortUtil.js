import { arrayCopy, generateValue } from './GeneralUtil';

/**
 * This is to find the "correct" index to be swapped since the actual array is not being swapped.
 *
 * @param newTempArr {object[]} The new input array.
 * @param iIdx {number} I-th Index to be swapped.
 * @param jIdx {number} J-th Index to be swapped.
 * @returns {number} The index to be used in the swap animation.
 */
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

/**
 * A sorting execution for Merge Sort.
 *
 * @param currentAnimation {any[]} The current animation to be executed.
 * @param referenceArray {object[]} The array holding data for the "blocks".
 * @param historyArr {object[]} An array holding the data of each states of the reference array.
 * @param setReferenceArray {function} A set state method for reference array.
 * @returns {object[]} The resultant array upon the swap animation.
 */
export const executeMergeSortForward = (
  currentAnimation,
  referenceArray,
  historyArr,
  setReferenceArray
) => {
  let nextReferenceArray = handleMergeSort(referenceArray, currentAnimation);
  historyArr.push(referenceArray);
  setReferenceArray(nextReferenceArray);
  return nextReferenceArray;
};

/**
 * A sorting execution for Merge Sort in the reverse direction.
 *
 * @param historyArr {object[]} An array holding the data of each states of the reference array.
 * @param setReferenceArray {function} A set state method for reference array.
 */
export const executeMergeSortBackward = (historyArr, setReferenceArray) => {
  setReferenceArray(historyArr.pop());
};

/**
 * A "hackish" method to simulate the swapping in merge swap without actually sorting the array.
 *
 * @param referenceArray {object[]} The array holding data for the "blocks".
 * @param currentAnimation {any[]} The current animation to be executed.
 * @returns {object[]} The resultant array upon the swap animation\.
 */
export const handleMergeSort = (referenceArray, currentAnimation) => {
  let dataSize = referenceArray.length;
  let width = 800 / dataSize;
  let newTempArr = arrayCopy(referenceArray);
  let isShift = currentAnimation[2];
  let iIdx = currentAnimation[0];
  let jIdx = currentAnimation[1];
  let kIdx = currentAnimation[3];
  let isReset = currentAnimation[4];
  // is Shift true represents moving down, false means moving back up to the desired position.
  if (isShift) {
    let allIndexToShift = currentAnimation[5];
    for (let value of allIndexToShift) {
      // hard code one of the index to be -1
      let idxToUse = findIndexToUseInMergeSort(newTempArr, value, -1);
      newTempArr[idxToUse].isShift = true;
    }
  } else {
    let idxToUse = findIndexToUseInMergeSort(newTempArr, iIdx, jIdx);
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

/**
 * Generates the random data for merge sort.
 *
 * @param size The number of blocks to be shown.
 * @returns {object[]} A array containing the states of each block.
 */
export const generateMergeSortArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push({
      xDirection: i * 10,
      pos: i,
      prevPos: i,
      height: generateValue(1, 9),
      isShift: false,
      id: i,
    });
  }
  return array;
};
