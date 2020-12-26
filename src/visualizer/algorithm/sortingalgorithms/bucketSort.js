import insertionSort from './insertionSort';

/**
 * Sorts the array using Bucket Sort and stores each sorting step into the animation array.
 *
 * @memberOf SortingAlgorithms
 * @param {Object[]} arr The array to be sorted.
 * @returns {any[]} Animation array which contains the animation instruction for each step.
 */
const bucketSort = (arr) => {
  const totalSlots = 10;
  let buckets = [...Array(totalSlots)].map(() => []);
  let animationArr = [];
  let id = 0;
  for (const item of arr) {
    const location = Math.floor(totalSlots * item.height);
    animationArr.push({
      id: id,
      height: item.height,
      isShown: true,
      location: location,
      isDistributing: true,
    });
    id++;
    buckets[location].push(item);
  }

  // Sort all arrays in buckets
  for (let i = 0; i < totalSlots; i++) {
    // Signify start of sort
    animationArr.push({
      isSort: true,
      location: i,
    });

    // Execute insertion sort animations
    let insertionSortAnimation = insertionSort(buckets[i]).map((arr) => [...arr, i]);
    animationArr = animationArr.concat(insertionSortAnimation);

    // Signify end of sort
    animationArr.push({
      isSort: false,
      location: i,
    });
  }

  // Restore element back into array
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
        isSwap: false,
      });
      id++;
    }
    location++;
  }
  return animationArr;
};

export default bucketSort;
