// Explanation adapted from https://www.geeksforgeeks.org/bubble-sort/.
const CountingSort = {
  name: 'Counting',
  description:
    'Counting sort is a sorting technique based on keys between a specific range. It works by' +
    'counting the number of objects having distinct key values (kind of hashing), and using' +
    'arithmetic on those counts to determine the positions of each key value in the output' +
    'sequence.',
  additionalDesc: 'k is the range of the key values,',
  worstTime: 'N + k',
  averageTime: 'N + k',
  bestTime: 'N + k',
  worstSpace: 'N + k',
  stable: true,
  inPlace: false,
};

export default CountingSort;
