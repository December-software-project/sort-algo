import selectionSort from '../../../../app/visualizer/algorithm/sortingalgorithms/selectionSort';

test('Empty Array', () => {
  const arr = [];
  const expected = [];
  expect(selectionSort(arr)).toEqual(expected);
});

test('Already Sorted with duplicates', () => {
  const arr = [
    { id: 1, height: 3, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 3, isSwap: false },
  ];
  const actual = selectionSort(arr);
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [1, 2, false],
    [1, 3, false],
    [2, 3, false],
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
  const actual = selectionSort(arr);
  const expected = [
    [0, 1, false],
    [0, 2, false],
    [0, 3, false],
    [1, 2, false],
    [1, 3, false],
    [2, 3, false],
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
  const actual = selectionSort(arr);
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
  const actual = selectionSort(arr);
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
  const actual = selectionSort(arr);
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
  const actual = selectionSort(arr);
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: -3, isSwap: false },
    { id: 1, height: -1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 2, height: 5, isSwap: false },
  ]);
});
