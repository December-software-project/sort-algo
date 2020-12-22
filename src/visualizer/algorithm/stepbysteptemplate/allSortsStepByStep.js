import { bubbleInsertionAndShellSortStepByStep } from './bubbleInsertionAndShellSortStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';
import { countingSortStepByStep } from './countingSortStepByStep';

const SortingAlgorithmsStepByStep = {
  'Insertion Sort': bubbleInsertionAndShellSortStepByStep,
  'Bubble Sort': bubbleInsertionAndShellSortStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
  'Counting Sort': countingSortStepByStep,
  'Shell Sort': bubbleInsertionAndShellSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
