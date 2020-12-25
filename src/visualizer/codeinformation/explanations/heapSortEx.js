// Explanation adapted from https://www.geeksforgeeks.org/heap-sort/
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
