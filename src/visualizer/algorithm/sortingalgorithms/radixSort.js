/**
 * Sorts the array using Radix Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @see {@link https://www.tutorialspoint.com/radix-sort-in-javascript}
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const radixSort = (arr) => {
  let inputArr = arr;
  let animationArr = [];
  const maxNum = Math.max(...inputArr.map((x) => x.height)) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    let id = 0;
    let buckets = [...Array(10)].map(() => []);

    for (const item of inputArr) {
      const height = item.height;
      const location = Math.floor((height % divisor) / (divisor / 10));
      buckets[location].push(item);
      animationArr.push({
        id: id,
        height: item.height,
        isShown: true,
        location: location,
        isDistributing: true,
      });
      id++;
    }
    inputArr = [].concat.apply([], buckets);
    id = 0;
    let location = 0;
    for (const array of buckets) {
      for (const item of array) {
        animationArr.push({
          id: id,
          height: item.height,
          isShown: true,
          location: location,
          isDistributing: false,
        });
        id++;
      }
      location++;
    }
    divisor *= 10;
  }
  return animationArr;
};

export default radixSort;
