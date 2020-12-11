import insertionSort from './insertionSort';
import quickSort from './quickSort';
import bubbleSort from './bubbleSort';
import radixSort from './radixSort';

const SortingAlgorithms = {
  'Insertion Sort': insertionSort,
  'Bubble Sort': bubbleSort,
  'Quick Sort': quickSort,
  'Radix Sort': radixSort,
};

export default SortingAlgorithms;
