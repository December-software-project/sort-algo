/**
 * Insertion sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/insertion-sort/|Geeks for Geeks}
 * @type {
 * {bestTime: string,
 * worstSpace: string,
 * additionalDesc: string,
 * averageTime: JSX.Element,
 * stable: boolean,
 * name: string,
 * worstTime: JSX.Element,
 * link: string,
 * description: string,
 * inPlace: boolean}
 * }
 */
const InsertionSort = {
  name: 'Insertion',
  description:
    'Insertion Sort is a simple sorting algorithm that builds the final ' +
    'sorted list one item at a time. The list is virtually split ' +
    'into a sorted and an unsorted part. Values from the unsorted part are ' +
    'picked and placed at the correct position in the sorted part.',
  additionalDesc: '',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  bestTime: 'N',
  worstSpace: '1',
  stable: true,
  inPlace: true,
  link: 'https://www.geeksforgeeks.org/insertion-sort/',
};

export default InsertionSort;
