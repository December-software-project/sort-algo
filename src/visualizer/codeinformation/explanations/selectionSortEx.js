// Explanation adapted from https://www.geeksforgeeks.org/selection-sort/
const SelectionSort = {
  name: 'Selection',
  description:
    'The selection sort algorithm sorts an array by repeatedly finding the minimum element ' +
    '(considering ascending order) from unsorted part and putting it at the beginning. The ' +
    'algorithm maintains two sub arrays, a subarray which is sorted and the remaining array which' +
    'is unsorted',
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
};

export default SelectionSort;
