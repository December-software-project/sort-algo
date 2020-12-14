const InsertionSort = {
  Java:
    'void insertionSort(int[] arr) {\n' +
    '    for (int i = 1; i < arr.length; i++) {\n' +
    '        int key = arr[i];\n' +
    '        int j = i - 1;\n' +
    '        while (j >= 0 && arr[j] > key) {\n' +
    '            arr[j + 1] = arr[j];\n' +
    '            j -= 1;\n' +
    '        }\n' +
    '        arr[j + 1] = key;\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    'function insertionSort(arr) {\n' +
    '  for (let i = 1; i < arr.length; i++) {\n' +
    '    key = arr[i];\n' +
    '    j = i - 1;\n' +
    '    while (j >= 0 && arr[j] > key) {\n' +
    '      arr[j + 1] = arr[j];\n' +
    '      j -= 1;\n' +
    '    }\n' +
    '    arr[j + 1] = key;\n' +
    '  }\n' +
    '}\n',
  Python:
    'def insertion_sort(arr):\n' +
    '    for i in range(1, len(arr)):\n' +
    '        key = arr[i]\n' +
    '        j = i - 1\n' +
    '        while j >= 0 and arr[j] > key:\n' +
    '            arr[j + 1] = arr[j]\n' +
    '            j -= 1\n' +
    '        arr[j + 1] = key\n',
  'C/C++':
    'void insertionSort(int arr[], int len)\n' +
    '{\n' +
    '    for (int i = 1; i < len; i++)\n' +
    '    {\n' +
    '        int key = arr[i];\n' +
    '        int j = i - 1;\n' +
    '        while (j >= 0 && arr[j] > key)\n' +
    '        {\n' +
    '            arr[j + 1] = arr[j];\n' +
    '            j -= 1;\n' +
    '        }\n' +
    '        arr[j + 1] = key;\n' +
    '    }\n' +
    '}\n',
};

export default InsertionSort;
