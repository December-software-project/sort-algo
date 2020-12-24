import bubbleSort from '../../../../app/visualizer/algorithm/sortingalgorithms/bubbleSort';

test('Empty Array', () => {
  const arr = [];
  const expected = [];
  expect(bubbleSort(arr)).toEqual(expected);
});

test('Already Sorted with duplicates', () => {
  const arr = [
    { id: 1, height: 3, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 3, isSwap: false },
    { id: 4, height: 3, isSwap: false },
  ];
  const actual = bubbleSort(arr);
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [3, 2, false],
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
  const actual = bubbleSort(arr);
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [3, 2, false],
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
  const actual = bubbleSort(arr);
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
  const actual = bubbleSort(arr);
  const expected = [
    [1, 0, false],
    [2, 1, false],
    [2, 1, true],
    [3, 2, false],
    [3, 2, true],
    [1, 0, false],
    [2, 1, false],
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
  const actual = bubbleSort(arr);
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
  const actual = bubbleSort(arr);
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: -3, isSwap: false },
    { id: 1, height: -1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 2, height: 5, isSwap: false },
  ]);
});
