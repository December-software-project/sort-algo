/**
 * Counting sort algorithm details.
 *
 * @memberOf Code templates
 * @type {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const CountingSort = {
  Java:
    '// Assume array contains only non-zero digits\n' +
    'void countingSort(int[] arr) {\n' +
    '\n' +
    '    int maxElement = arr[0];\n' +
    '    // Get max element\n' +
    '    for (int i = 1; i < arr.length; i++) {\n' +
    '        maxElement = Math.max(maxElement, arr[i]);\n' +
    '    }\n' +
    '\n' +
    '    // Create count array of length maxElement + 1\n' +
    '    int[] countArr = new int[maxElement + 1];\n' +
    '\n' +
    '    // Fill in count arr\n' +
    '    for (int i = 0; i < arr.length; i++) {\n' +
    '        countArr[arr[i]]++;\n' +
    '    }\n' +
    '\n' +
    '    // Insert elements back into original array\n' +
    '    int index = 0;\n' +
    '    for (int i = 0; i < countArr.length; i++) {\n' +
    '        while (countArr[i] != 0) {\n' +
    '            arr[index] = i;\n' +
    '            index++;\n' +
    '            countArr[i]--;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    '// Assume array contains only non-zero digits\n' +
    'function countingSort(arr) {\n' +
    '  // Get max element\n' +
    '  const maxElement = Math.max(...arr);\n' +
    '\n' +
    '  // Create count array of length maxElement + 1\n' +
    '  const countArr = new Array(maxElement + 1);\n' +
    '  countArr.fill(0);\n' +
    '\n' +
    '  // Fill in count arr\n' +
    '  for (let i = 0; i < arr.length; i++) {\n' +
    '    countArr[arr[i]]++;\n' +
    '  }\n' +
    '\n' +
    '  // Insert elements back into original array\n' +
    '  let index = 0;\n' +
    '  for (let i = 0; i < countArr.length; i++) {\n' +
    '    while (countArr[i] != 0) {\n' +
    '      arr[index] = i;\n' +
    '      index++;\n' +
    '      countArr[i]--;\n' +
    '    }\n' +
    '  }\n' +
    '}\n',
  Python:
    '# Assume array contains only non-zero digits\n' +
    'def counting_sort(arr):\n' +
    '    # Get max element\n' +
    '    max_element = max(arr)\n' +
    '\n' +
    '    # Create count array of length max_element + 1\n' +
    '    count_arr = [0] * (max_element + 1)\n' +
    '\n' +
    '    # Fill in count arr\n' +
    '    for i in range(len(arr)):\n' +
    '        count_arr[arr[i]] += 1\n' +
    '\n' +
    '    # Insert elements back into original array\n' +
    '    index = 0\n' +
    '    for i in range(len(count_arr)):\n' +
    '        while count_arr[i] is not 0:\n' +
    '            arr[index] = i\n' +
    '            index += 1\n' +
    '            count_arr[i] -= 1\n',
  'C/C++':
    '// Assume array contains only non-zero digits\n' +
    'void countingSort(int arr[], int len)\n' +
    '{\n' +
    '    int i;\n' +
    '    int maxElement = arr[0];\n' +
    '    // Get max element\n' +
    '    for (i = 1; i < len; ++i)\n' +
    '    {\n' +
    '        if (arr[i] > maxElement)\n' +
    '        {\n' +
    '            maxElement = arr[i];\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    // Create array with length maxElement + 1\n' +
    '    int countArrLength = maxElement + 1;\n' +
    '    int *countArr = (int *)malloc(countArrLength * sizeof(int));\n' +
    '\n' +
    '    for (i = 0; i < countArrLength; ++i)\n' +
    '    {\n' +
    '        countArr[i] = 0;\n' +
    '    }\n' +
    '\n' +
    '    // Fill in count arr\n' +
    '    for (i = 0; i < len; ++i)\n' +
    '    {\n' +
    '        countArr[arr[i]]++;\n' +
    '    }\n' +
    '\n' +
    '    // Insert elements back into original array\n' +
    '    int index = 0;\n' +
    '    for (i = 0; i < countArrLength; ++i)\n' +
    '    {\n' +
    '        while (countArr[i] != 0)\n' +
    '        {\n' +
    '            arr[index] = i;\n' +
    '            ++index;\n' +
    '            countArr[i]--;\n' +
    '        }\n' +
    '    }\n' +
    '}\n\n',
};

export default CountingSort;
