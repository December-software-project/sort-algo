const assertEqual = (actual, expected) => {
  expect(actual).toStrictEqual(expected);
};

export const assertSortSuccess = (initialArray, sortedArray, expectedArray, sortingAlgorithm) => {
  const animationArr = sortingAlgorithm(initialArray);
  assertEqual(initialArray, sortedArray);
  assertEqual(animationArr, expectedArray);
};
