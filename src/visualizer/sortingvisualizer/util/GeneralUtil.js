/**
 * Returns true if the algorithm input is counting sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is counting sort.
 */
export const isCountingSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Counting Sort';

/**
 * Returns true if the algorithm input is radix sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is radix sort.
 */
export const isRadixSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Radix Sort';

/**
 * Returns true if the algorithm input is bucket sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is bucket sort.
 */
export const isBucketSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Bucket Sort';

/**
 * Returns true if the algorithm input is radix or bucket sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is radix or bucket sort.
 */
export const isRadixOrBucket = (visualizerAlgorithm) =>
  isRadixSort(visualizerAlgorithm) || isBucketSort(visualizerAlgorithm);

/**
 * Returns true if the algorithm input is merge sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is merge sort.
 */
export const isMergeSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Merge Sort';

/**
 * Returns true if the algorithm input is selection sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is selection sort.
 */
export const isSelectionSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Selection Sort';

/**
 * Returns true if the algorithm input is quick sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is quick sort.
 */
export const isQuickSort = (visualizerAlgorithm) => visualizerAlgorithm === 'Quick Sort';

/**
 * Returns true if the algorithm input is any sort aside from bucket, radix and counting sort.
 *
 * @method
 * @category GeneralUtil
 * @param {string} visualizerAlgorithm Input algorithm.
 * @returns {boolean} True if the algorithm is any sort aside from bucket, radix and counting sort.
 */
export const hasLegend = (visualizerAlgorithm) =>
  visualizerAlgorithm === 'Bubble Sort' ||
  visualizerAlgorithm === 'Insertion Sort' ||
  visualizerAlgorithm === 'Selection Sort' ||
  visualizerAlgorithm === 'Quick Sort' ||
  visualizerAlgorithm === 'Heap Sort' ||
  visualizerAlgorithm === 'Merge Sort' ||
  visualizerAlgorithm === 'Shell Sort';
