import { swap } from './swap';

/**
 * Sorts the array using Selection Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const selectionSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  for (let i = 0; i < receivedArr.length - 1; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < receivedArr.length; j++) {
      animationArr.push([smallestIdx, j, false]);
      if (receivedArr[j].height < receivedArr[smallestIdx].height) {
        smallestIdx = j;
      }
    }
    if (i !== smallestIdx) {
      swap(smallestIdx, i, receivedArr);
      animationArr.push([smallestIdx, i, true]);
    }
  }
  return animationArr;
};

export default selectionSort;
