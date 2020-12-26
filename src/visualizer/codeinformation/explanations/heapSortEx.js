/**
 * Heap sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/heap-sort/|Geeks for Geeks}
 * @type {
 * {bestTime: string,
 * worstSpace: string,
 * additionalDesc: string,
 * averageTime: string,
 * stable: boolean,
 * name: string,
 * worstTime: string,
 * link: string,
 * description: string,
 * inPlace: boolean}
 * }
 */
const HeapSort = {
  name: 'Heap',
  description:
    'Heap Sort is a comparison based sorting technique based on Binary Heap data structure.' +
    ' It is similar to selection sort where we first find the maximum element and place the' +
    ' maximum element at the end. We repeat the same process for the remaining elements.',
  additionalDesc: '',
  worstTime: 'NlogN',
  averageTime: 'NlogN',
  bestTime: 'NlogN',
  worstSpace: '1',
  stable: false,
  inPlace: true,
  link: 'https://www.geeksforgeeks.org/heap-sort/',
};

export default HeapSort;
