import { genericSwapStepByStep } from './genericSwapStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';
import { countingSortStepByStep } from './countingSortStepByStep';
import { radixSortStepByStep } from './radixSortStepByStep';
import { bucketSortStepByStep } from './bucketSortStepByStep';
import { heapSortStepByStep } from './heapSortStepByStep';

/**
 * An Object component that is used to access the sorting method step by step template.
 */
const SortingAlgorithmsStepByStep = {
  'Insertion Sort': genericSwapStepByStep,
  'Bubble Sort': genericSwapStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
  'Counting Sort': countingSortStepByStep,
  'Shell Sort': genericSwapStepByStep,
  'Radix Sort': radixSortStepByStep,
  'Bucket Sort': bucketSortStepByStep,
  'Heap Sort': heapSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
