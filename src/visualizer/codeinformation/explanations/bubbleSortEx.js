// Explanation adapted from https://www.geeksforgeeks.org/bubble-sort/.
const BubbleSort = {
  name: 'Bubble',
  description:
    'Bubble sort is the simplest sorting algorithm that works by ' +
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
};

export default BubbleSort;
