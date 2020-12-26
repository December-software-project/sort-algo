import { swap } from './swap';

const partition = (arr, low, high, animationArr) => {
  let pivot = arr[high].height;
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j].height < pivot) {
      // first boolean is to represent a swap
      animationArr.push([j, j, false, high, 'incI', i]);
      i++;
      if (i !== j) {
        animationArr.push([i, j, true, high, 'iToJ', i]);
        swap(i, j, arr);
      }
    } else {
      animationArr.push([j, j, false, high, 'jToPivot', i]);
    }
  }
  animationArr.push([i + 1, high, true, high, 'swapPivot', i]);
  swap(i + 1, high, arr);
  return i + 1;
};

const quickSortHelper = (arr, low, high, animationArr) => {
  if (low < high) {
    let pi = partition(arr, low, high, animationArr);
    quickSortHelper(arr, low, pi - 1, animationArr);
    quickSortHelper(arr, pi + 1, high, animationArr);
  }
};

/**
 * Sorts the array using Quick Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @see {@link https://www.geeksforgeeks.org/quick-sort/}
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const quickSort = (arr) => {
  let animationArr = [];
  quickSortHelper(arr, 0, arr.length - 1, animationArr);
  return animationArr;
};

export default quickSort;
