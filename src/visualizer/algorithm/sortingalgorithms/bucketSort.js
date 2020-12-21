import insertionSort from './insertionSort';

const bucketSort = (arr) => {
  let buckets = [];
  const totalSlots = 10;

  for (let i = 0; i < totalSlots; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    // const current = arr[i];
    // const bucket_idx = Math.floor(totalSlots * current);
    // buckets[bucket_idx].push(current);
  }

  for (let i = 0; i < totalSlots; i++) {
    insertionSort(buckets[i]);
  }

  let index = 0;
  for (let i = 0; i < totalSlots; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index] = buckets[i][j];
      index += 1;
    }
  }
};

export default bucketSort;
