import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_ASCENDING_IN_BUCKET,
  ARRAY_DIFFERENT_BUCKETS,
  ARRAY_DUPLICATES,
  ARRAY_MIXED_BUCKETS,
} from '../../../../_testutil/ArraysBucketUtil';
import bucketSort from '../../../../visualizer/algorithm/sortingalgorithms/bucketSort';

test('Already Sorted with duplicates', () => {
  const expected = [
    // Distributing phase
    {
      id: 0,
      height: 0.9,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 1,
      height: 0.9,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 2,
      height: 0.9,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 3,
      height: 0.9,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    // Sorting bucket 0
    {
      isSort: true,
      location: 0,
    },
    {
      isSort: false,
      location: 0,
    },
    // Sorting bucket 1
    {
      isSort: true,
      location: 1,
    },
    {
      isSort: false,
      location: 1,
    },
    // Sorting bucket 2
    {
      isSort: true,
      location: 2,
    },
    {
      isSort: false,
      location: 2,
    },
    // Sorting bucket 3
    {
      isSort: true,
      location: 3,
    },
    {
      isSort: false,
      location: 3,
    },
    // Sorting bucket 4
    {
      isSort: true,
      location: 4,
    },
    {
      isSort: false,
      location: 4,
    },
    // Sorting bucket 5
    {
      isSort: true,
      location: 5,
    },
    {
      isSort: false,
      location: 5,
    },
    // Sorting bucket 6
    {
      isSort: true,
      location: 6,
    },
    {
      isSort: false,
      location: 6,
    },
    // Sorting bucket 7
    {
      isSort: true,
      location: 7,
    },
    {
      isSort: false,
      location: 7,
    },
    // Sorting bucket 8
    {
      isSort: true,
      location: 8,
    },
    {
      isSort: false,
      location: 8,
    },
    // Sorting bucket 9
    {
      isSort: true,
      location: 9,
    },
    // Insertion sort steps
    [1, 0, false, 9],
    [2, 1, false, 9],
    [3, 2, false, 9],
    // Bucket 9 is now sorted
    {
      isSort: false,
      location: 9,
    },
    // Putting back into array
    {
      height: 0.9,
      id: 0,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 9,
    },
    {
      height: 0.9,
      id: 1,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 9,
    },
    {
      height: 0.9,
      id: 2,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 9,
    },
    {
      height: 0.9,
      id: 3,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 9,
    },
  ];

  assertBucketSortSuccess(ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending same bucket', () => {
  const expected = [
    // Distributing phase
    {
      id: 0,
      height: 0.111,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 1,
      height: 0.123,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 2,
      height: 0.133,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 3,
      height: 0.145,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    // Sorting bucket 0
    {
      isSort: true,
      location: 0,
    },
    {
      isSort: false,
      location: 0,
    },
    // Sorting bucket 1
    {
      isSort: true,
      location: 1,
    },
    // Insertion sort steps
    [1, 0, false, 1],
    [2, 1, false, 1],
    [3, 2, false, 1],
    // Bucket 1 is now sorted
    {
      isSort: false,
      location: 1,
    },
    // Sorting bucket 2
    {
      isSort: true,
      location: 2,
    },
    {
      isSort: false,
      location: 2,
    },
    // Sorting bucket 3
    {
      isSort: true,
      location: 3,
    },
    {
      isSort: false,
      location: 3,
    },
    // Sorting bucket 4
    {
      isSort: true,
      location: 4,
    },
    {
      isSort: false,
      location: 4,
    },
    // Sorting bucket 5
    {
      isSort: true,
      location: 5,
    },
    {
      isSort: false,
      location: 5,
    },
    // Sorting bucket 6
    {
      isSort: true,
      location: 6,
    },
    {
      isSort: false,
      location: 6,
    },
    // Sorting bucket 7
    {
      isSort: true,
      location: 7,
    },
    {
      isSort: false,
      location: 7,
    },
    // Sorting bucket 8
    {
      isSort: true,
      location: 8,
    },
    {
      isSort: false,
      location: 8,
    },
    // Sorting bucket 9
    {
      isSort: true,
      location: 9,
    },
    {
      isSort: false,
      location: 9,
    },
    // Putting back into array
    {
      height: 0.111,
      id: 0,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 1,
    },
    {
      height: 0.123,
      id: 1,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 1,
    },
    {
      height: 0.133,
      id: 2,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 1,
    },
    {
      height: 0.145,
      id: 3,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 1,
    },
  ];

  assertBucketSortSuccess(ARRAY_ASCENDING_IN_BUCKET, expected);
});

test('Different buckets', () => {
  const expected = [
    // Distributing phase
    {
      id: 0,
      height: 0.89,
      isShown: true,
      location: 8,
      isDistributing: true,
    },
    {
      id: 1,
      height: 0.334,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 2,
      height: 0.417,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 3,
      height: 0.12,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    // Sorting bucket 0
    {
      isSort: true,
      location: 0,
    },
    {
      isSort: false,
      location: 0,
    },
    // Sorting bucket 1
    {
      isSort: true,
      location: 1,
    },
    {
      isSort: false,
      location: 1,
    },
    // Sorting bucket 2
    {
      isSort: true,
      location: 2,
    },
    {
      isSort: false,
      location: 2,
    },
    // Sorting bucket 3
    {
      isSort: true,
      location: 3,
    },
    {
      isSort: false,
      location: 3,
    },
    // Sorting bucket 4
    {
      isSort: true,
      location: 4,
    },
    {
      isSort: false,
      location: 4,
    },
    // Sorting bucket 5
    {
      isSort: true,
      location: 5,
    },
    {
      isSort: false,
      location: 5,
    },
    // Sorting bucket 6
    {
      isSort: true,
      location: 6,
    },
    {
      isSort: false,
      location: 6,
    },
    // Sorting bucket 7
    {
      isSort: true,
      location: 7,
    },
    {
      isSort: false,
      location: 7,
    },
    // Sorting bucket 8
    {
      isSort: true,
      location: 8,
    },
    {
      isSort: false,
      location: 8,
    },
    // Sorting bucket 9
    {
      isSort: true,
      location: 9,
    },
    {
      isSort: false,
      location: 9,
    },
    // Putting back into array
    {
      height: 0.12,
      id: 0,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 1,
    },
    {
      height: 0.334,
      id: 1,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 3,
    },
    {
      height: 0.417,
      id: 2,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 4,
    },
    {
      height: 0.89,
      id: 3,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 8,
    },
  ];

  assertBucketSortSuccess(ARRAY_DIFFERENT_BUCKETS, expected);
});

test('Mixed buckets', () => {
  const expected = [
    // Distributing phase
    {
      id: 0,
      height: 0.787,
      isShown: true,
      location: 7,
      isDistributing: true,
    },
    {
      id: 1,
      height: 0.7,
      isShown: true,
      location: 7,
      isDistributing: true,
    },
    {
      id: 2,
      height: 0.678,
      isShown: true,
      location: 6,
      isDistributing: true,
    },
    {
      id: 3,
      height: 0.654,
      isShown: true,
      location: 6,
      isDistributing: true,
    },
    // Sorting bucket 0
    {
      isSort: true,
      location: 0,
    },
    {
      isSort: false,
      location: 0,
    },
    // Sorting bucket 1
    {
      isSort: true,
      location: 1,
    },
    {
      isSort: false,
      location: 1,
    },
    // Sorting bucket 2
    {
      isSort: true,
      location: 2,
    },
    {
      isSort: false,
      location: 2,
    },
    // Sorting bucket 3
    {
      isSort: true,
      location: 3,
    },
    {
      isSort: false,
      location: 3,
    },
    // Sorting bucket 4
    {
      isSort: true,
      location: 4,
    },
    {
      isSort: false,
      location: 4,
    },
    // Sorting bucket 5
    {
      isSort: true,
      location: 5,
    },
    {
      isSort: false,
      location: 5,
    },
    // Sorting bucket 6
    {
      isSort: true,
      location: 6,
    },
    // Insertion sort on bucket 6
    [1, 0, false, 6],
    [1, 0, true, 6],
    {
      isSort: false,
      location: 6,
    },
    // Sorting bucket 7
    {
      isSort: true,
      location: 7,
    },
    // Insertion sort on bucket 7
    [1, 0, false, 7],
    [1, 0, true, 7],
    {
      isSort: false,
      location: 7,
    },
    // Sorting bucket 8
    {
      isSort: true,
      location: 8,
    },
    {
      isSort: false,
      location: 8,
    },
    // Sorting bucket 9
    {
      isSort: true,
      location: 9,
    },
    {
      isSort: false,
      location: 9,
    },
    // Putting back into array
    {
      height: 0.654,
      id: 0,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 6,
    },
    {
      height: 0.678,
      id: 1,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 6,
    },
    {
      height: 0.7,
      id: 2,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 7,
    },
    {
      height: 0.787,
      id: 3,
      isDistributing: false,
      isShown: true,
      isSwap: false,
      location: 7,
    },
  ];

  assertBucketSortSuccess(ARRAY_MIXED_BUCKETS, expected);
});

const assertBucketSortSuccess = (initialArray, expected) =>
  // Initial array is left unsorted in bucket sort, since sorting is not in-place.
  assertSortSuccess(initialArray, initialArray, expected, bucketSort);
