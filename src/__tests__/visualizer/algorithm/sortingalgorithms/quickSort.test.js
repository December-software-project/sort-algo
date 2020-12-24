import quickSort from '../../../../app/visualizer/algorithm/sortingalgorithms/quickSort';

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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: 3, isSwap: false },
    { id: 1, height: 3, isSwap: false },
    { id: 2, height: 3, isSwap: false },
    { id: 3, height: 3, isSwap: false },
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
    [0, 0, false, 3, 'incI', -1],
    [1, 1, false, 3, 'jToPivot', 0],
    [2, 2, false, 3, 'incI', 0],
    [1, 2, true, 3, 'iToJ', 1],
    [2, 3, true, 3, 'swapPivot', 1],
    [0, 0, false, 1, 'incI', -1],
    [1, 1, true, 1, 'swapPivot', 0],
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
    [0, 0, false, 3, 'jToPivot', -1],
    [1, 1, false, 3, 'incI', -1],
    [0, 1, true, 3, 'iToJ', 0],
    [2, 2, false, 3, 'jToPivot', 0],
    [1, 3, true, 3, 'swapPivot', 0],
    [2, 2, false, 3, 'incI', 1],
    [3, 3, true, 3, 'swapPivot', 2],
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: -3, isSwap: false },
    { id: 1, height: -1, isSwap: false },
    { id: 3, height: 2, isSwap: false },
    { id: 2, height: 5, isSwap: false },
  ]);
});
