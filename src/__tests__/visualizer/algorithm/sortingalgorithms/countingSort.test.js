import countingSort from '../../../../visualizer/algorithm/sortingalgorithms/countingSort';
import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_DUPLICATES,
  ARRAY_EXPECTED_RANDOM_POSITIVE,
  ARRAY_EXPECTED_STRICTLY_DESCENDING,
  ARRAY_RANDOM_POSITIVE,
  ARRAY_STRICTLY_ASCENDING,
  ARRAY_STRICTLY_DESCENDING,
  EMPTY_ARRAY,
} from '../../../../_testutil/ArraysUtil';

test('Empty Array', () => {
  assertCountSortSuccess(EMPTY_ARRAY, EMPTY_ARRAY);
});

test('Already Sorted with duplicates', () => {
  assertCountSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES);
});

test('Already Sorted ascending', () => {
  assertCountSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING);
});

test('Descending array', () => {
  assertCountSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING);
});

test('random array positive numbers', () => {
  assertCountSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE);
});

const assertCountSortSuccess = (initialArray, sortedArray) => {
  const appendedArray = generateAppendedArray(sortedArray);
  const expected = initialArray.concat(appendedArray);
  assertSortSuccess(initialArray, initialArray, expected, countingSort);
};

const generateAppendedArray = (arr) => {
  let id = -1;
  return arr.map((obj) => ({
    id: (id += 1),
    height: obj.height,
    isShown: true,
  }));
};
