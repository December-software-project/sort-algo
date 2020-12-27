/**
 * Bubble sort algorithm details.
 *
 * @memberOf Explanations
 * @see {@link https://www.geeksforgeeks.org/bubble-sort/|Geeks for Geeks}
 * @const {
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
const BubbleSort = {
  name: 'Bubble',
  description:
    'Bubble Sort is the simplest sorting algorithm that works by ' +
    'repeatedly swapping adjacent elements if they are in the wrong order. ' +
    'This procedure is repeated until no swaps are required, indicating ' +
    'that the list has been sorted.',
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
  link: 'https://www.geeksforgeeks.org/bubble-sort/',
};

export default BubbleSort;
