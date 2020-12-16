// code from https://stackabuse.com/merge-sort-in-javascript/
const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

const mergeSortHelper = (array) => {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSortHelper(left), mergeSortHelper(array));
};

const mergeSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  let temp = mergeSortHelper(receivedArr);
  return animationArr;
};

export default mergeSort;
