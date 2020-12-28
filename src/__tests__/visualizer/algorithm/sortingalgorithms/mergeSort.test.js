import mergeSort from '../../../../visualizer/algorithm/sortingalgorithms/mergeSort';
import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_DUPLICATES,
  ARRAY_EXPECTED_RANDOM_MIXED,
  ARRAY_EXPECTED_RANDOM_NEGATIVE,
  ARRAY_EXPECTED_RANDOM_POSITIVE,
  ARRAY_EXPECTED_STRICTLY_DESCENDING,
  ARRAY_RANDOM_MIXED,
  ARRAY_RANDOM_NEGATIVE,
  ARRAY_RANDOM_POSITIVE,
  ARRAY_STRICTLY_ASCENDING,
  ARRAY_STRICTLY_DESCENDING,
} from '../../../../_testutil/ArraysUtil';

const expectedForSortedAtStart = [
  [-1, -1, true, -1, false, [0, 1]],
  [0, -1, false, 0, false],
  [-1, 1, false, 1, true],
  [-1, -1, true, -1, false, [2, 3]],
  [2, -1, false, 2, false],
  [-1, 3, false, 3, true],
  [-1, -1, true, -1, false, [0, 1, 2, 3]],
  [0, -1, false, 0, false],
  [1, -1, false, 1, false],
  [-1, 2, false, 2, false],
  [-1, 3, false, 3, true],
];

test('Already Sorted with duplicates', () => {
  assertMergeSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expectedForSortedAtStart);
});

test('Already Sorted ascending', () => {
  assertMergeSortSuccess(
    ARRAY_STRICTLY_ASCENDING,
    ARRAY_STRICTLY_ASCENDING,
    expectedForSortedAtStart
  );
});

test('Descending array', () => {
  const expected = [
    [-1, -1, true, -1, false, [0, 1]],
    [-1, 1, false, 0, false],
    [0, -1, false, 1, true],
    [-1, -1, true, -1, false, [2, 3]],
    [-1, 3, false, 2, false],
    [2, -1, false, 3, true],
    [-1, -1, true, -1, false, [0, 1, 2, 3]],
    [-1, 2, false, 0, false],
    [-1, 3, false, 1, false],
    [0, -1, false, 2, false],
    [1, -1, false, 3, true],
  ];

  assertMergeSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('Random array positive numbers', () => {
  const expected = [
    [-1, -1, true, -1, false, [0, 1]],
    [0, -1, false, 0, false],
    [-1, 1, false, 1, true],
    [-1, -1, true, -1, false, [2, 3]],
    [2, -1, false, 2, false],
    [-1, 3, false, 3, true],
    [-1, -1, true, -1, false, [0, 1, 2, 3]],
    [0, -1, false, 0, false],
    [-1, 2, false, 1, false],
    [-1, 3, false, 2, false],
    [1, -1, false, 3, true],
  ];

  assertMergeSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('Random array negative numbers', () => {
  const expected = [
    [-1, -1, true, -1, false, [0, 1]],
    [-1, 1, false, 0, false],
    [0, -1, false, 1, true],
    [-1, -1, true, -1, false, [2, 3]],
    [-1, 3, false, 2, false],
    [2, -1, false, 3, true],
    [-1, -1, true, -1, false, [0, 1, 2, 3]],
    [0, -1, false, 0, false],
    [-1, 2, false, 1, false],
    [-1, 3, false, 2, false],
    [1, -1, false, 3, true],
  ];

  assertMergeSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('Random array negative and positive numbers', () => {
  const expected = [
    [-1, -1, true, -1, false, [0, 1]],
    [0, -1, false, 0, false],
    [-1, 1, false, 1, true],
    [-1, -1, true, -1, false, [2, 3]],
    [-1, 3, false, 2, false],
    [2, -1, false, 3, true],
    [-1, -1, true, -1, false, [0, 1, 2, 3]],
    [-1, 2, false, 0, false],
    [0, -1, false, 1, false],
    [-1, 3, false, 2, false],
    [1, -1, false, 3, true],
  ];

  assertMergeSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertMergeSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, mergeSort);
