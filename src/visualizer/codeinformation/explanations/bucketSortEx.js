/**
 * Bucket sort algorithm details.
 * Explanation adapted from CLRS Introduction to Algorithms textbook.
 *
 * @memberOf Explanations
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
const BucketSort = {
  name: 'Bucket',
  description:
    'Bucket sort assumes that the input is drawn from a uniform distribution of [0, 1). ' +
    'The interval [0, 1) is divided into n equal-sized sub-intervals (buckets). Then, the input ' +
    'array is distributed into these buckets. To produce ' +
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
  link: 'https://www.geeksforgeeks.org/bucket-sort-2/',
};

export default BucketSort;
