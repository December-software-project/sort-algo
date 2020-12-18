import { bubbleAndInsertionSortStepByStep } from './bubbleAndInsertionSortStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';
import { countingSortStepByStep } from './countingSortStepByStep';

const SortingAlgorithmsStepByStep = {
  'Insertion Sort': bubbleAndInsertionSortStepByStep,
  'Bubble Sort': bubbleAndInsertionSortStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
  'Counting Sort': countingSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
