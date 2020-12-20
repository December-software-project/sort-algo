import insertionSort from './insertionSort';
import quickSort from './quickSort';
import bubbleSort from './bubbleSort';
import radixSort from './radixSort';
import bucketSort from './bucketSort';
import countingSort from './countingSort';
import mergeSort from './mergeSort';
import selectionSort from './selectionSort';

const SortingAlgorithms = {
  'Insertion Sort': insertionSort,
  'Bubble Sort': bubbleSort,
  'Quick Sort': quickSort,
  'Radix Sort': radixSort,
  'Bucket Sort': bucketSort,
  'Counting Sort': countingSort,
  'Selection Sort': selectionSort,
  'Merge Sort': mergeSort,
};

export default SortingAlgorithms;