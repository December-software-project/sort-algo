import insertionSort from './insertionSort';
import quickSort from './quickSort';
import bubbleSort from './bubbleSort';
import radixSort from './radixSort';
import bucketSort from './bucketSort';
import countingSort from './countingSort';

const SortingAlgorithms = {
  'Insertion Sort': insertionSort,
  'Bubble Sort': bubbleSort,
  'Quick Sort': quickSort,
  'Radix Sort': radixSort,
  'Bucket Sort': bucketSort,
  'Counting Sort': countingSort,
};

export default SortingAlgorithms;
