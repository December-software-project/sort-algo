/**
 * Sorts the array using Counting Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const countingSort = (arr) => {
  let receivedArr = arr;
  let countArr = [...Array(10)].map(() => 0);
  for (let i = 0; i < receivedArr.length; i++) {
    countArr[receivedArr[i].height]++;
  }
  let id = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] !== 0) {
      receivedArr.push({
        id: id,
        height: i,
        isShown: true,
      });
      id++;
      countArr[i]--;
    }
  }
  return receivedArr;
};

export default countingSort;
