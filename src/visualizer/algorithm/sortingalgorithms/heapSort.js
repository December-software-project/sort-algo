// Code adapted from https://www.w3resource.com/javascript-exercises/searching-and-sorting
// -algorithm/searching-and-sorting-algorithm-exercise-3.php
import { swap } from './swap';

// Keeps track of how many items are not sorted
let array_length;

// Keeps track of the animation
let animationArr = [];

// Bubbling the element up to its correct position (heapify)
const heap_root = (arr, i) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  let isLeft = false;

  if (left < array_length && arr[left].height > arr[max].height) {
    max = left;
    isLeft = true;
  }

  if (right < array_length && arr[right].height > arr[max].height) {
    max = right;
    isLeft = false;
  }

  if (max !== i) {
    if (isLeft) {
      animationArr.push([i, max, false]);
      animationArr.push([i, max, true]);
    }

    if (!isLeft) {
      animationArr.push([i, max, false]);
      animationArr.push([i, max, true]);
    }

    swap(i, max, arr);
    heap_root(arr, max);
  }
};

const heapSort = (arr) => {
  let receivedArr = arr;
  array_length = receivedArr.length;
  animationArr = [];

  // Creating the maximum heap
  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(receivedArr, i);
  }

  // Sorting the array by extracting the the element and placing at the end of the array
  for (let i = arr.length - 1; i > 0; i--) {
    animationArr.push([0, i, true]);
    swap(0, i, receivedArr);
    array_length--;

    heap_root(receivedArr, 0);
  }

  return animationArr;
};

export default heapSort;
