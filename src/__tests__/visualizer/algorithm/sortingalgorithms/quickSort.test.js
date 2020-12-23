import quickSort from '../../../../visualizer/algorithm/sortingalgorithms/quickSort';

test('Empty Array', () => {
  const arr = [];
  const expected = [];
  expect(quickSort(arr)).toEqual(expected);
});

test('Already Sorted with duplicates', () => {
  const arr = [
    { id: 1, height: 3, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 3, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [0, 3, false, 1, 'jToIdx'],
    [0, 3, false, 1, 'iToJ'],
    [1, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 2, false, 1, 'iToJ'],
    [0, 1, false, 0, 'iToIdx'],
    [0, 1, false, 0, 'jToIdx'],
    [0, 1, false, 0, 'iToJ'],
    [2, 3, false, 2, 'iToIdx'],
    [2, 3, false, 2, 'jToIdx'],
    [2, 3, false, 2, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 3, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 3, isSwap: false },
  ]);
});

test('Already Sorted ascending', () => {
  const arr = [
    { id: 1, height: 1, isSwap: false },
    { id: 2, height: 2, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 4, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'jToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'iToJ'],
    [0, 1, false, 0, 'iToIdx'],
    [0, 1, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'iToJ'],
    [2, 3, false, 2, 'iToIdx'],
    [2, 3, false, 2, 'jToIdx'],
    [2, 2, false, 2, 'jToIdx'],
    [2, 2, false, 2, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 1, isSwap: false },
    { id: 2, height: 2, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 4, isSwap: false },
  ]);
});

test('Descending array', () => {
  const arr = [
    { id: 1, height: 4, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 4, height: 1, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [0, 3, false, 1, 'jToIdx'],
    [0, 3, false, 1, 'iToJ'],
    [0, 3, true, 1, 'iToJ'],
    [1, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 2, false, 1, 'iToJ'],
    [1, 2, true, 1, 'iToJ'],
    [0, 1, false, 0, 'iToIdx'],
    [0, 1, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'iToJ'],
    [2, 3, false, 2, 'iToIdx'],
    [2, 3, false, 2, 'jToIdx'],
    [2, 2, false, 2, 'jToIdx'],
    [2, 2, false, 2, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: 1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 1, height: 4, isSwap: false },
  ]);
});

test('random array positive numbers', () => {
  const arr = [
    { id: 1, height: 1, isSwap: false },
    { id: 2, height: 5, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 4, height: 3, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'jToIdx'],
    [1, 3, false, 1, 'iToJ'],
    [1, 3, true, 1, 'iToJ'],
    [2, 2, false, 1, 'iToIdx'],
    [3, 2, false, 1, 'iToIdx'],
    [3, 2, false, 1, 'jToIdx'],
    [0, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 2, false, 1, 'iToJ'],
    [1, 2, true, 1, 'iToJ'],
    [0, 1, false, 0, 'iToIdx'],
    [0, 1, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'jToIdx'],
    [0, 0, false, 0, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 4, height: 3, isSwap: false },
    { id: 2, height: 5, isSwap: false },
  ]);
});

test('random array negative numbers', () => {
  const arr = [
    { id: 1, height: -1, isSwap: false },
    { id: 2, height: -5, isSwap: false },
    { id: 3, height: -2, isSwap: false },
    { id: 4, height: -3, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [0, 3, false, 1, 'jToIdx'],
    [0, 2, false, 1, 'jToIdx'],
    [0, 1, false, 1, 'jToIdx'],
    [0, 1, false, 1, 'iToJ'],
    [0, 1, true, 1, 'iToJ'],
    [1, 3, false, 2, 'iToIdx'],
    [1, 3, false, 2, 'jToIdx'],
    [1, 3, false, 2, 'iToJ'],
    [1, 3, true, 2, 'iToJ'],
    [2, 2, false, 2, 'iToIdx'],
    [2, 2, false, 2, 'jToIdx'],
    [2, 2, false, 2, 'iToJ'],
    [1, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 2, height: -5, isSwap: false },
    { id: 4, height: -3, isSwap: false },
    { id: 3, height: -2, isSwap: false },
    { id: 1, height: -1, isSwap: false },
  ]);
});

test('random array negative and positive numbers', () => {
  const arr = [
    { id: 1, height: -1, isSwap: false },
    { id: 2, height: 5, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 4, height: -3, isSwap: false },
  ];
  const actual = quickSort(arr);
  const expected = [
    [0, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'iToIdx'],
    [1, 3, false, 1, 'jToIdx'],
    [1, 3, false, 1, 'iToJ'],
    [1, 3, true, 1, 'iToJ'],
    [2, 2, false, 1, 'iToIdx'],
    [3, 2, false, 1, 'iToIdx'],
    [3, 2, false, 1, 'jToIdx'],
    [0, 2, false, 1, 'iToIdx'],
    [0, 2, false, 1, 'jToIdx'],
    [0, 1, false, 1, 'jToIdx'],
    [0, 1, false, 1, 'iToJ'],
    [0, 1, true, 1, 'iToJ'],
    [1, 2, false, 1, 'iToIdx'],
    [1, 2, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'jToIdx'],
    [1, 1, false, 1, 'iToJ'],
  ];
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: -3, isSwap: false },
    { id: 1, height: -1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 2, height: 5, isSwap: false },
  ]);
});
