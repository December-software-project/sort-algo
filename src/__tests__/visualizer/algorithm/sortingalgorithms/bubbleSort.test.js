import bubbleSort from '../../../../visualizer/algorithm/sortingalgorithms/bubbleSort';
import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ANIMATION_ARRAY_ALREADY_SORTED,
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
  assertBubbleSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, ANIMATION_ARRAY_ALREADY_SORTED);
});

test('Already Sorted ascending', () => {
  assertBubbleSortSuccess(
    ARRAY_STRICTLY_ASCENDING,
    ARRAY_STRICTLY_ASCENDING,
    ANIMATION_ARRAY_ALREADY_SORTED
  );
});

test('Descending array', () => {
  const expected = [
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
    [1, 0, true],
  ];

  assertBubbleSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('Random array positive numbers', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('Random array negative numbers', () => {
  const expected = [
    [1, 0, false],
    [1, 0, true],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('Random array negative and positive numbers', () => {
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [1, 0, false],
    [1, 0, true],
  ];

  assertBubbleSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertBubbleSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, bubbleSort);
