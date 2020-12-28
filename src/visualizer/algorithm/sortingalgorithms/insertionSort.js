/**
 * Sorts the array using Insertion Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const insertionSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  let length = receivedArr.length;
  for (let i = 1; i < length; i++) {
    let key = receivedArr[i];
    let j = i - 1;
    animationArr.push([i, i - 1, false]);
    while (j >= 0 && receivedArr[j].height > key.height) {
      receivedArr[j + 1] = receivedArr[j];
      animationArr.push([j + 1, j, true]);
      j--;
      if (j >= 0 && receivedArr[j].height > key.height) {
        animationArr.push([j + 1, j, false]);
      }
    }
    receivedArr[j + 1] = key;
  }
  return animationArr;
};

export default insertionSort;
