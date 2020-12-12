const QuickSort = {
  name: 'Quick',
  description:
    'QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions' +
    ' the given array around the picked pivot. There are many different versions of quickSort that ' +
    'pick pivot in different ways.',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: 'NlogN',
  bestTime: 'N',
  worstSpace: 'logN',
  stable: false,
  inPlace: true,
};

export default QuickSort;
