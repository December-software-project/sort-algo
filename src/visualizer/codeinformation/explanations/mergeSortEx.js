/**
 * Merge sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/merge-sort/|Geeks for Geeks}
 * @const {
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
const MergeSort = {
  name: 'Merge',
  description:
    'Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, ' +
    'calls itself for the two halves, and then merges the two sorted halves. The merge() function ' +
    'is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that ' +
    'arr[l..m] and arr[m+1..r] are sorted and merges the two sorted subarrays into one',
  additionalDesc: '',
  worstTime: 'NlogN',
  averageTime: 'NlogN',
  bestTime: 'NlogN',
  worstSpace: 'N',
  stable: true,
  inPlace: false,
  link: 'https://www.geeksforgeeks.org/merge-sort/',
};

export default MergeSort;
