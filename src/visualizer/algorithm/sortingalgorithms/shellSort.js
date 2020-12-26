import { swap } from './swap';

/**
 * Sorts the array using Shell Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @see {@link https://levelup.gitconnected.com/shell-sort-in-javascript-c8a487041cdb}
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const shellSort = (arr) => {
  let n = arr.length;
  let receivedArr = arr;
  let animationArr = [];

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = receivedArr[i].height;

      let j;
      for (j = i; j >= gap; j -= gap) {
        animationArr.push([j - gap, j, false]);
        if (receivedArr[j - gap].height > temp) {
          animationArr.push([j - gap, j, true]);
          swap(j - gap, j, receivedArr);
          continue;
        }
        break;
      }
    }
  }

  return animationArr;
};

export default shellSort;
