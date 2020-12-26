/**
 * Selection sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/selection-sort/|Geeks for Geeks}
 * @type {
 * {bestTime: JSX.Element,
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
const SelectionSort = {
  name: 'Selection',
  description:
    'Selection Sort algorithm sorts an array by repeatedly finding the minimum element ' +
    '(considering ascending order) from unsorted part and putting it at the beginning. The ' +
    'algorithm maintains two subarrays, a subarray which is sorted and the remaining array which' +
    ' is unsorted',
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
  bestTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  worstSpace: '1',
  stable: false,
  inPlace: true,
  link: 'https://www.geeksforgeeks.org/selection-sort/',
};

export default SelectionSort;
