import { simpleSwapStepByStep } from './simpleSwapStepByStep';
import { selectionSortStepByStep } from './selectionSortStepByStep';
import { mergeSortStepByStep } from './mergeSortStepByStep';
import { quickSortStepByStep } from './quickSortStepByStep';
import { countingSortStepByStep } from './countingSortStepByStep';
import { radixSortStepByStep } from './radixSortStepByStep';
import { bucketSortStepByStep } from './bucketSortStepByStep';

const SortingAlgorithmsStepByStep = {
  'Insertion Sort': simpleSwapStepByStep,
  'Bubble Sort': simpleSwapStepByStep,
  'Selection Sort': selectionSortStepByStep,
  'Merge Sort': mergeSortStepByStep,
  'Quick Sort': quickSortStepByStep,
  'Counting Sort': countingSortStepByStep,
  'Shell Sort': simpleSwapStepByStep,
  'Radix Sort': radixSortStepByStep,
  'Bucket Sort': bucketSortStepByStep,
};

export default SortingAlgorithmsStepByStep;
