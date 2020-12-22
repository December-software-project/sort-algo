import { bubbleInsertionAndShellSortStepByStep } from './bubbleInsertionAndShellSortStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';
import { countingSortStepByStep } from './countingSortStepByStep';
import { radixSortStepByStep } from './radixSortStepByStep';

const SortingAlgorithmsStepByStep = {
  'Insertion Sort': bubbleInsertionAndShellSortStepByStep,
  'Bubble Sort': bubbleInsertionAndShellSortStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
  'Counting Sort': countingSortStepByStep,
  'Shell Sort': bubbleInsertionAndShellSortStepByStep,
  'Radix Sort': radixSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
