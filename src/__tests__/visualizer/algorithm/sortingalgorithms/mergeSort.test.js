import mergeSort from '../../../../app/visualizer/algorithm/sortingalgorithms/mergeSort';

test('Empty Array', () => {
  const arr = [];
  const expected = [];
  expect(mergeSort(arr)).toEqual(expected);
});

test('Already Sorted with duplicates', () => {
  const arr = [
    { id: 1, height: 3, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 3, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 3, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
  const expected = [
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 3, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 3, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 3, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ]);
});

test('Already Sorted ascending', () => {
  const arr = [
    { id: 1, height: 1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 2, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 3, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 4, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
  const expected = [
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 2, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 3, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 4, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ]);
});

test('Descending array', () => {
  const arr = [
    { id: 1, height: 4, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 3, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 1, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
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

  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: 1, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 2, height: 3, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 1, height: 4, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
  ]);
});

test('random array positive numbers', () => {
  const arr = [
    { id: 1, height: 1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 1, height: 1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: 3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
    { id: 2, height: 5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
  ]);
});

test('random array negative numbers', () => {
  const arr = [
    { id: 1, height: -1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: -5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: -2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: -3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 2, height: -5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 4, height: -3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
    { id: 3, height: -2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 1, height: -1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
  ]);
});

test('random array negative and positive numbers', () => {
  const arr = [
    { id: 1, height: -1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 2, height: 5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 4, height: -3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
  ];
  const actual = mergeSort(arr);
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
  expect(actual).toEqual(expected);
  expect(arr).toStrictEqual([
    { id: 4, height: -3, isShift: false, xDirection: 30, pos: 3, prevPos: 3 },
    { id: 1, height: -1, isShift: false, xDirection: 0, pos: 0, prevPos: 0 },
    { id: 3, height: 2, isShift: false, xDirection: 20, pos: 2, prevPos: 2 },
    { id: 2, height: 5, isShift: false, xDirection: 10, pos: 1, prevPos: 1 },
  ]);
});
