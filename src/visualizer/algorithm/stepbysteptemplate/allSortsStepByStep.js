import { bubbleAndInsertionSortStepByStep } from './bubbleAndInsertionSortStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';

// CURRENTLY THERE IS DUPLICATE AS I AM NOT VERY SURE HOW WILL SELECTION SORT AND OTHER NORMAL SWAP WILL WORK
// IF THEY ALL WORK THE SAME, WILL BE ABLE TO ABSTRACT IT OUT BE SWAP VS BUCKET
const SortingAlgorithmsStepByStep = {
  'Insertion Sort': bubbleAndInsertionSortStepByStep,
  'Bubble Sort': bubbleAndInsertionSortStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
