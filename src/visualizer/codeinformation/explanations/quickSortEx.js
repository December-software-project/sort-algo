/**
 * Quick sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/quick-sort/|Geeks for Geeks}
 * @const {
 * {bestTime: string,
 * worstSpace: string,
 * additionalDesc: string,
 * averageTime: string,
 * stable: boolean,
 * name: string,
 * worstTime: JSX.Element,
 * link: string,
 * description: string,
 * inPlace: boolean}
 * }
 */
const QuickSort = {
  name: 'Quick',
  description:
    'Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions ' +
    'the given array around the picked pivot. There are many different versions of Quick Sort that ' +
    'pick pivot in different ways.',
  additionalDesc: '',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: 'NlogN',
  bestTime: 'N',
  worstSpace: 'N',
  stable: false,
  inPlace: true,
  link: 'https://www.geeksforgeeks.org/quick-sort/',
};

export default QuickSort;
