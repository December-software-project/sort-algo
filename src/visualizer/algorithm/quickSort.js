import { swap } from './swap';

// Code adapted from https://www.guru99.com/quicksort-in-javascript.html

/* The 4th & 5th Index is for quick sort */
const partition = (items, left, right, animationArr) => {
  let pivotIdx = Math.floor((right + left) / 2);
  let pivot = items[pivotIdx].height;
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i].height < pivot) {
      animationArr.push([i, j, false, pivotIdx, 'iToIdx']);
      i++;
    }
    if (items[i].height >= pivot) {
      animationArr.push([i, j, false, pivotIdx, 'iToIdx']);
    }
    while (items[j].height > pivot) {
      animationArr.push([i, j, false, pivotIdx, 'jToIdx']);
      j--;
    }
    if (items[j].height <= pivot) {
      animationArr.push([i, j, false, pivotIdx, 'jToIdx']);
    }
    if (i <= j) {
      animationArr.push([i, j, false, pivotIdx, 'iToJ']);
      if (items[i].height > items[j].height) {
        animationArr.push([i, j, true, pivotIdx, 'iToJ']);
        swap(i, j, items);
      }
      i++;
      j--;
    }
  }
  return i;
};

const quickSortHelper = (items, left, right, animationArr) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, animationArr);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1, animationArr);
    }
    if (index < right) {
      quickSortHelper(items, index, right, animationArr);
    }
  }
  return items;
};

const quickSort = (data) => {
  let animationArr = [];
  quickSortHelper(data, 0, data.length - 1, animationArr);
  return animationArr;
};

export default quickSort;
