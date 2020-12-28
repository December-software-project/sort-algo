import quickSort from '../../../../visualizer/algorithm/sortingalgorithms/quickSort';
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
    [0, 0, false, 3, 'jToPivot', -1],
    [1, 1, false, 3, 'jToPivot', -1],
    [2, 2, false, 3, 'jToPivot', -1],
    [0, 3, true, 3, 'swapPivot', -1],
    [1, 1, false, 3, 'jToPivot', 0],
    [2, 2, false, 3, 'jToPivot', 0],
    [1, 3, true, 3, 'swapPivot', 0],
    [2, 2, false, 3, 'jToPivot', 1],
    [2, 3, true, 3, 'swapPivot', 1],
  ];

  assertQuickSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    [0, 0, false, 3, 'incI', -1],
    [1, 1, false, 3, 'incI', 0],
    [2, 2, false, 3, 'incI', 1],
    [3, 3, true, 3, 'swapPivot', 2],
    [0, 0, false, 2, 'incI', -1],
    [1, 1, false, 2, 'incI', 0],
    [2, 2, true, 2, 'swapPivot', 1],
    [0, 0, false, 1, 'incI', -1],
    [1, 1, true, 1, 'swapPivot', 0],
  ];

  assertQuickSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING, expected);
});

test('Descending array', () => {
  const expected = [
    [0, 0, false, 3, 'jToPivot', -1],
    [1, 1, false, 3, 'jToPivot', -1],
    [2, 2, false, 3, 'jToPivot', -1],
    [0, 3, true, 3, 'swapPivot', -1],
    [1, 1, false, 3, 'incI', 0],
    [2, 2, false, 3, 'incI', 1],
    [3, 3, true, 3, 'swapPivot', 2],
    [1, 1, false, 2, 'jToPivot', 0],
    [1, 2, true, 2, 'swapPivot', 0],
  ];

  assertQuickSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('Random array positive numbers', () => {
  const expected = [
    [0, 0, false, 3, 'incI', -1],
    [1, 1, false, 3, 'jToPivot', 0],
    [2, 2, false, 3, 'incI', 0],
    [1, 2, true, 3, 'iToJ', 1],
    [2, 3, true, 3, 'swapPivot', 1],
    [0, 0, false, 1, 'incI', -1],
    [1, 1, true, 1, 'swapPivot', 0],
  ];

  assertQuickSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('Random array negative numbers', () => {
  const expected = [
    [0, 0, false, 3, 'jToPivot', -1],
    [1, 1, false, 3, 'incI', -1],
    [0, 1, true, 3, 'iToJ', 0],
    [2, 2, false, 3, 'jToPivot', 0],
    [1, 3, true, 3, 'swapPivot', 0],
    [2, 2, false, 3, 'incI', 1],
    [3, 3, true, 3, 'swapPivot', 2],
  ];

  assertQuickSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('Random array negative and positive numbers', () => {
  const expected = [
    [0, 0, false, 3, 'jToPivot', -1],
    [1, 1, false, 3, 'jToPivot', -1],
    [2, 2, false, 3, 'jToPivot', -1],
    [0, 3, true, 3, 'swapPivot', -1],
    [1, 1, false, 3, 'jToPivot', 0],
    [2, 2, false, 3, 'jToPivot', 0],
    [1, 3, true, 3, 'swapPivot', 0],
    [2, 2, false, 3, 'incI', 1],
    [3, 3, true, 3, 'swapPivot', 2],
  ];

  assertQuickSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertQuickSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, quickSort);
