import { swap } from './swap';

/**
 * Sorts the array using Bubble Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const bubbleSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  for (let i = receivedArr.length - 1; i >= 0; i--) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      animationArr.push([j + 1, j, false]);
      if (receivedArr[j].height > receivedArr[j + 1].height) {
        swap(j, j + 1, receivedArr);
        animationArr.push([j + 1, j, true]);
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return animationArr;
};

export default bubbleSort;
