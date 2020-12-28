import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_MIXED,
  ARRAY_THREE_DIGITS,
  ARRAY_TWO_DIGITS,
} from '../../../../_testutil/ArraysRadixUtil';
import { ARRAY_DUPLICATES, ARRAY_STRICTLY_ASCENDING } from '../../../../_testutil/ArraysUtil';
import radixSort from '../../../../visualizer/algorithm/sortingalgorithms/radixSort';

test('Already Sorted with duplicates', () => {
  const expected = [
    {
      id: 0,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 1,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 2,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 3,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 0,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 1,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 2,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 3,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
  ];

  assertRadixSortSuccess(ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    // Distributing phase 1
    {
      id: 0,
      height: 1,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 1,
      height: 2,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    {
      id: 2,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 3,
      height: 4,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    // Putting back phase 1
    {
      id: 0,
      height: 1,
      isShown: true,
      location: 1,
      isDistributing: false,
    },
    {
      id: 1,
      height: 2,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 2,
      height: 3,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 3,
      height: 4,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
  ];

  assertRadixSortSuccess(ARRAY_STRICTLY_ASCENDING, expected);
});

test('two digits with duplicates', () => {
  const expected = [
    // Distributing phase 1
    {
      id: 0,
      height: 32,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    {
      id: 1,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 2,
      height: 41,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 3,
      height: 32,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    // Putting back phase 1
    {
      id: 0,
      height: 41,
      isShown: true,
      location: 1,
      isDistributing: false,
    },
    {
      id: 1,
      height: 32,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 2,
      height: 32,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 3,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    // Distributing phase 2
    {
      id: 0,
      height: 41,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 1,
      height: 32,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 2,
      height: 32,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 3,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    // Putting back phase 2
    {
      id: 0,
      height: 32,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 1,
      height: 32,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 2,
      height: 41,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    {
      id: 3,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
  ];

  assertRadixSortSuccess(ARRAY_TWO_DIGITS, expected);
});

test('three digits with duplicates', () => {
  const expected = [
    // Distributing phase 1
    {
      id: 0,
      height: 324,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 1,
      height: 441,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 2,
      height: 412,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    {
      id: 3,
      height: 323,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    // Putting back phase 1
    {
      id: 0,
      height: 441,
      isShown: true,
      location: 1,
      isDistributing: false,
    },
    {
      id: 1,
      height: 412,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 2,
      height: 323,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 3,
      height: 324,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    // Distributing phase 2
    {
      id: 0,
      height: 441,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 1,
      height: 412,
      isShown: true,
      location: 1,
      isDistributing: true,
    },
    {
      id: 2,
      height: 323,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    {
      id: 3,
      height: 324,
      isShown: true,
      location: 2,
      isDistributing: true,
    },
    // Putting back phase 2
    {
      id: 0,
      height: 412,
      isShown: true,
      location: 1,
      isDistributing: false,
    },
    {
      id: 1,
      height: 323,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 2,
      height: 324,
      isShown: true,
      location: 2,
      isDistributing: false,
    },
    {
      id: 3,
      height: 441,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    // Distributing back phase 3
    {
      id: 0,
      height: 412,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 1,
      height: 323,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 2,
      height: 324,
      isShown: true,
      location: 3,
      isDistributing: true,
    },
    {
      id: 3,
      height: 441,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    // Putting back phase 3
    {
      id: 0,
      height: 323,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 1,
      height: 324,
      isShown: true,
      location: 3,
      isDistributing: false,
    },
    {
      id: 2,
      height: 412,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    {
      id: 3,
      height: 441,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
  ];

  assertRadixSortSuccess(ARRAY_THREE_DIGITS, expected);
});

test('mixed digits', () => {
  const expected = [
    // Distributing phase 1
    {
      id: 0,
      height: 909,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 1,
      height: 9,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 2,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 3,
      height: 4,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    // Putting back phase 1
    {
      id: 0,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    {
      id: 1,
      height: 4,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    {
      id: 2,
      height: 909,
      isShown: true,
      location: 9,
      isDistributing: false,
    },
    {
      id: 3,
      height: 9,
      isShown: true,
      location: 9,
      isDistributing: false,
    },
    // Distributing phase 2
    {
      id: 0,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: true,
    },
    {
      id: 1,
      height: 4,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    {
      id: 2,
      height: 909,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    {
      id: 3,
      height: 9,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    // Putting back phase 2
    {
      id: 0,
      height: 4,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 1,
      height: 909,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 2,
      height: 9,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 3,
      height: 44,
      isShown: true,
      location: 4,
      isDistributing: false,
    },
    // Distributing phase 3
    {
      id: 0,
      height: 4,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    {
      id: 1,
      height: 909,
      isShown: true,
      location: 9,
      isDistributing: true,
    },
    {
      id: 2,
      height: 9,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    {
      id: 3,
      height: 44,
      isShown: true,
      location: 0,
      isDistributing: true,
    },
    // Putting back phase 3
    {
      id: 0,
      height: 4,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 1,
      height: 9,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 2,
      height: 44,
      isShown: true,
      location: 0,
      isDistributing: false,
    },
    {
      id: 3,
      height: 909,
      isShown: true,
      location: 9,
      isDistributing: false,
    },
  ];

  assertRadixSortSuccess(ARRAY_MIXED, expected);
});

const assertRadixSortSuccess = (initialArray, expected) =>
  // Initial array is left unsorted in radix sort, since sorting is not in-place.
  assertSortSuccess(initialArray, initialArray, expected, radixSort);
