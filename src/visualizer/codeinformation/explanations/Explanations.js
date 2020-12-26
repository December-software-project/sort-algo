import BubbleSort from './bubbleSortEx';
import InsertionSort from './insertionSortEx';
import QuickSort from './quickSortEx';
import RadixSort from './radixSortEx';
import BucketSort from './bucketSortEx';
import CountingSort from './countingSortEx';
import SelectionSort from './selectionSortEx';
import MergeSort from './mergeSortEx';
import ShellSort from './shellSortEx';
import HeapSort from './heapSortEx';

/**
 * Contains all the explanations for the sorting algorithms.
 *
 * @namespace Explanations
 * @type {Object}
 */
const explanations = {
  'Bubble Sort': BubbleSort,
  'Insertion Sort': InsertionSort,
  'Quick Sort': QuickSort,
  'Radix Sort': RadixSort,
  'Bucket Sort': BucketSort,
  'Counting Sort': CountingSort,
  'Selection Sort': SelectionSort,
  'Merge Sort': MergeSort,
  'Shell Sort': ShellSort,
  'Heap Sort': HeapSort,
};

export default explanations;
