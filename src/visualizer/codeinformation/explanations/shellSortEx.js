// Explanation adapted from https://www.geeksforgeeks.org/shellsort/
const ShellSort = {
  name: 'Shell',
  description:
    'Shell Sort is mainly a variation of Insertion Sort. The idea of Shell Sort is to allow exchange ' +
    'of items far apart from each other, then progressively reducing the gap between elements ' +
    'to be compared. In the last iteration of Shell Sort where gap equals 1, regular Insertion Sort ' +
    'is performed on the resultant array.',
  additionalDesc: '',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: 'NlogN',
  bestTime: 'NlogN',
  worstSpace: '1',
  stable: false,
  inPlace: true,
  link: 'https://www.geeksforgeeks.org/shellsort/',
};

export default ShellSort;
