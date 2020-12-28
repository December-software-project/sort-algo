import heapSort from '../../../../visualizer/algorithm/sortingalgorithms/heapSort';
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

test('Already Sorted with duplicates', () => {
  const expected = [
    [2, 2, false, false],
    [1, 1, false, false],
    [0, 0, false, false],
    [3, 0, true, true],
    [0, 0, false, false],
    [2, 0, true, true],
    [0, 0, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    [2, 2, false, false],
    [1, 3, false, false],
    [1, 3, true, false],
    [3, 3, false, false],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 3, false, false],
    [1, 3, true, false],
    [3, 3, false, false],
    [3, 0, true, true],
    [0, 2, false, false],
    [0, 2, true, false],
    [2, 2, false, false],
    [2, 0, true, true],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING, expected);
});

test('Descending array', () => {
  const expected = [
    [2, 2, false, false],
    [1, 1, false, false],
    [0, 0, false, false],
    [3, 0, true, true],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [2, 0, true, true],
    [0, 0, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('Random array positive numbers', () => {
  const expected = [
    [2, 2, false, false],
    [1, 1, false, false],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 3, false, false],
    [1, 3, true, false],
    [3, 3, false, false],
    [3, 0, true, true],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [2, 0, true, true],
    [0, 0, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('Random array negative numbers', () => {
  const expected = [
    [2, 2, false, false],
    [1, 3, false, false],
    [1, 3, true, false],
    [3, 3, false, false],
    [0, 0, false, false],
    [3, 0, true, true],
    [0, 2, false, false],
    [0, 2, true, false],
    [2, 2, false, false],
    [2, 0, true, true],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('Random array negative and positive numbers', () => {
  const expected = [
    [2, 2, false, false],
    [1, 1, false, false],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [3, 0, true, true],
    [0, 2, false, false],
    [0, 2, true, false],
    [2, 2, false, false],
    [2, 0, true, true],
    [0, 1, false, false],
    [0, 1, true, false],
    [1, 1, false, false],
    [1, 0, true, true],
    [0, 0, false, false],
  ];

  assertHeapSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertHeapSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, heapSort);
