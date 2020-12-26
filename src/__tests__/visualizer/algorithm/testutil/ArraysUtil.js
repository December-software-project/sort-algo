export const EMPTY_ARRAY = [];

export const ARRAY_DUPLICATES = [
  { id: 1, height: 3 },
  { id: 2, height: 3 },
  { id: 3, height: 3 },
  { id: 4, height: 3 },
];

export const ARRAY_STRICTLY_ASCENDING = [
  { id: 1, height: 1 },
  { id: 2, height: 2 },
  { id: 3, height: 3 },
  { id: 4, height: 4 },
];

export const ARRAY_STRICTLY_DESCENDING = [
  { id: 1, height: 4 },
  { id: 2, height: 3 },
  { id: 3, height: 2 },
  { id: 4, height: 1 },
];

export const ARRAY_EXPECTED_STRICTLY_DESCENDING = [
  { id: 4, height: 1 },
  { id: 3, height: 2 },
  { id: 2, height: 3 },
  { id: 1, height: 4 },
];

export const ARRAY_RANDOM_POSITIVE = [
  { id: 1, height: 1 },
  { id: 2, height: 5 },
  { id: 3, height: 2 },
  { id: 4, height: 3 },
];

export const ARRAY_EXPECTED_RANDOM_POSITIVE = [
  { id: 1, height: 1 },
  { id: 3, height: 2 },
  { id: 4, height: 3 },
  { id: 2, height: 5 },
];

export const ARRAY_RANDOM_NEGATIVE = [
  { id: 1, height: -1 },
  { id: 2, height: -5 },
  { id: 3, height: -2 },
  { id: 4, height: -3 },
];

export const ARRAY_EXPECTED_RANDOM_NEGATIVE = [
  { id: 2, height: -5 },
  { id: 4, height: -3 },
  { id: 3, height: -2 },
  { id: 1, height: -1 },
];

export const ARRAY_RANDOM_MIXED = [
  { id: 1, height: -1 },
  { id: 2, height: 5 },
  { id: 3, height: 2 },
  { id: 4, height: -3 },
];

export const ARRAY_EXPECTED_RANDOM_MIXED = [
  { id: 4, height: -3 },
  { id: 1, height: -1 },
  { id: 3, height: 2 },
  { id: 2, height: 5 },
];
