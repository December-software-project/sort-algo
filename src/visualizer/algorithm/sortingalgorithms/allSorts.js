import insertionSort from './insertionSort';
import quickSort from './quickSort';
import bubbleSort from './bubbleSort';
import radixSort from './radixSort';
import bucketSort from './bucketSort';
import countingSort from './countingSort';
import mergeSort from './mergeSort';
import selectionSort from './selectionSort';
import shellSort from './shellSort';
import heapSort from './heapSort';

/**
 * An Object component that is used to access the sorting method.
 *
 * @namespace SortingAlgorithms
 * @type {Object}
 */
const SortingAlgorithms = {
  'Insertion Sort': insertionSort,
  'Bubble Sort': bubbleSort,
  'Quick Sort': quickSort,
  'Radix Sort': radixSort,
  'Bucket Sort': bucketSort,
  'Counting Sort': countingSort,
  'Selection Sort': selectionSort,
  'Merge Sort': mergeSort,
  'Shell Sort': shellSort,
  'Heap Sort': heapSort,
};

export default SortingAlgorithms;
