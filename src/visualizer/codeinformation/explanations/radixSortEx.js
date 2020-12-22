const RadixSort = {
  name: 'Radix',
  description:
    'Radix sort works by sorting each digit from least significant digit to most significant ' +
    "digit. So in base 10 (the decimal system), radix sort would sort by the digits in the 1's " +
    'place, then the 10’s place, and so on. To do this, radix sort uses counting sort as a ' +
    'subroutine to sort the digits in each place value.',
  additionalDesc:
    'd is the number of digits in the input numbers, b is the number of values each digit can have,',
  worstTime: 'd(n + b)',
  averageTime: 'd(n + b)',
  bestTime: 'd(n + b)',
  worstSpace: 'n + b',
  stable: true,
  inPlace: false,
};

export default RadixSort;
