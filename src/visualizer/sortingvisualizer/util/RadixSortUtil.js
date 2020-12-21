import { generateValue } from './GeneralUtil';

// Fixed array for radix sort
export const stack = [
  { value: 0, array: [] },
  { value: 1, array: [] },
  { value: 2, array: [] },
  { value: 3, array: [] },
  { value: 4, array: [] },
  { value: 5, array: [] },
  { value: 6, array: [] },
  { value: 7, array: [] },
  { value: 8, array: [] },
  { value: 9, array: [] },
];

export const generateRandomValue = () => {
  const randomVal = Math.random();
  if (randomVal < 0.25) {
    return generateValue(1, 9);
  } else if (randomVal < 0.5) {
    return generateValue(10, 99);
  } else if (randomVal < 0.75) {
    return generateValue(100, 999);
  } else if (randomVal <= 1) {
    return generateValue(1000, 4000);
  }
};