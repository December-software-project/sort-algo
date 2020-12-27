import selectionSort from '../../../../visualizer/algorithm/sortingalgorithms/selectionSort';
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
  EMPTY_ARRAY,
} from '../../../../_testutil/ArraysUtil';

test('Empty Array', () => {
  assertSelectionSortSuccess(EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY);
});

test('Already Sorted with duplicates', () => {
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [1, 2, false],
    [1, 3, false],
    [2, 3, false],
  ];

  assertSelectionSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [1, 2, false],
    [1, 3, false],
    [2, 3, false],
  ];

  assertSelectionSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING, expected);
});

test('Descending array', () => {
  const expected = [
    [0, 1, false],
    [1, 2, false],
    [2, 3, false],
    [3, 0, true],
    [1, 2, false],
    [2, 3, false],
    [2, 1, true],
    [2, 3, false],
  ];

  assertSelectionSortSuccess(
    ARRAY_STRICTLY_DESCENDING,
    ARRAY_EXPECTED_STRICTLY_DESCENDING,
    expected
  );
});

test('random array positive numbers', () => {
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [1, 2, false],
    [2, 3, false],
    [2, 1, true],
    [2, 3, false],
    [3, 2, true],
  ];

  assertSelectionSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('random array negative numbers', () => {
  const expected = [
    [0, 1, false],
    [1, 2, false],
    [1, 3, false],
    [1, 0, true],
    [1, 2, false],
    [2, 3, false],
    [3, 1, true],
    [2, 3, false],
  ];

  assertSelectionSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('random array negative and positive numbers', () => {
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [3, 0, true],
    [1, 2, false],
    [2, 3, false],
    [3, 1, true],
    [2, 3, false],
  ];

  assertSelectionSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertSelectionSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, selectionSort);
