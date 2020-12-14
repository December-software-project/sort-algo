const CountingSort = {
  Java:
    '// Assume that given array only contains digits 0-9\n' +
    'void countingSort(int[] arr) {\n' +
    '    int[] countArr = new int[10];\n' +
    '\n' +
    '    for (int i = 0; i < arr.length; i++) {\n' +
    '        countArr[arr[i]]++;\n' +
    '    }\n' +
    '\n' +
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
    '// Assume that given array only contains digits 0-9\n' +
    'function countingSort(arr) {\n' +
    '  let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n' +
    '\n' +
    '  for (let i = 0; i < arr.length; i++) {\n' +
    '    countArr[arr[i]]++;\n' +
    '  }\n' +
    '\n' +
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
    '# Assume that given array only contains digits 0-9\n' +
    'def counting_sort(arr):\n' +
    '    count_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n' +
    '\n' +
    '    for i in range(0, len(arr)):\n' +
    '        count_arr[arr[i]] += 1\n' +
    '\n' +
    '    index = 0\n' +
    '    for i in range(0, len(count_arr)):\n' +
    '        while count_arr[i] is not 0:\n' +
    '            arr[index] = i\n' +
    '            index += 1\n' +
    '            count_arr[i] -= 1\n',
  'C/C++':
    '// Assume that given array only contains digits 0-9\n' +
    'void countingSort(int arr[], int len)\n' +
    '{\n' +
    '    int countArr[] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};\n' +
    '\n' +
    '    for (int i = 0; i < len; i++)\n' +
    '    {\n' +
    '        countArr[arr[i]]++;\n' +
    '    }\n' +
    '\n' +
    '    int index = 0;\n' +
    '    for (int i = 0; i < 10; i++)\n' +
    '    {\n' +
    '        while (countArr[i] != 0)\n' +
    '        {\n' +
    '            arr[index] = i;\n' +
    '            index++;\n' +
    '            countArr[i]--;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
};

export default CountingSort;
