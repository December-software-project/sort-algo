// Explanation adapted from CLRS Introduction to Algorithms textbook.
const BucketSort = {
  name: 'Bucket',
  description:
    'Bucket sort assumes that the input is drawn from a uniform distribution of [0, 1). ' +
    'The interval [0, 1) is divided into n equal-sized sub-intervals (buckets). Then, the input ' +
    'array is distributed into these buckets. Since the inputs are uniformly and independently ' +
    'distributed over [0, 1), we do not expect many numbers to fall into each bucket. To produce ' +
    'the output, we simply sort the numbers in each bucket and then go through the buckets in ' +
    'order to list the elements.',
  additionalDesc: '',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: 'N',
  bestTime: 'N',
  worstSpace: 'N',
  stable: true,
  inPlace: false,
};

export default BucketSort;
