import { swap } from './swap';

// Code adapted from https://www.guru99.com/quicksort-in-javascript.html
const partition = (items, left, right, animationArr) => {
  let pivot = items[Math.floor((right + left) / 2)].height;
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i].height < pivot) {
      i++;
    }
    while (items[j].height > pivot) {
      j--;
    }
    if (i <= j) {
      if (i !== j) {
        swap(i, j, items);
        animationArr.push([j, i]);
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
