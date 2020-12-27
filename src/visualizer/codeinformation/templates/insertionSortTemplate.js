/**
 * Insertion sort algorithm details.
 *
 * @see {@link https://www.geeksforgeeks.org/insertion-sort/|Geeks for Geeks}
 * @memberOf Code templates
 * @const {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const InsertionSort = {
  Java:
    'void insertionSort(int[] arr) {\n' +
    '\n' +
    '    // Elements from 0 to i - 1 are sorted\n' +
    '    for (int i = 1; i < arr.length; i++) {\n' +
    '\n' +
    '        int key = arr[i];\n' +
    '        int j = i - 1;\n' +
    '\n' +
    '        // Locate position of key to insert in the sorted region\n' +
    '        while (j >= 0 && arr[j] > key) {\n' +
    '            arr[j + 1] = arr[j];\n' +
    '            j -= 1;\n' +
    '        }\n' +
    '        arr[j + 1] = key;\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    'function insertionSort(arr) {\n' +
    '\n' +
    '  // Elements from 0 to i - 1 are sorted\n' +
    '  for (let i = 1; i < arr.length; i++) {\n' +
    '      \n' +
    '    const key = arr[i];\n' +
    '    let j = i - 1;\n' +
    '\n' +
    '    // Locate position of key to insert in the sorted region\n' +
    '    while (j >= 0 && arr[j] > key) {\n' +
    '      arr[j + 1] = arr[j];\n' +
    '      j -= 1;\n' +
    '    }\n' +
    '    arr[j + 1] = key;\n' +
    '  }\n' +
    '}\n',
  Python:
    'def insertion_sort(arr):\n' +
    '\n' +
    '    # Elements from 0 to i - 1 are sorted\n' +
    '    for i in range(1, len(arr)):\n' +
    '\n' +
    '        key = arr[i]\n' +
    '        j = i - 1\n' +
    '\n' +
    '        # Locate position of key to insert in the sorted region\n' +
    '        while j >= 0 and arr[j] > key:\n' +
    '            arr[j + 1] = arr[j]\n' +
    '            j -= 1\n' +
    '        arr[j + 1] = key\n',
  'C/C++':
    'void insertionSort(int arr[], int len)\n' +
    '{\n' +
    '    // Elements from 0 to i - 1 are sorted\n' +
    '    for (int i = 1; i < len; i++)\n' +
    '    {\n' +
    '\n' +
    '        int key = arr[i];\n' +
    '        int j = i - 1;\n' +
    '\n' +
    '        // Locate position of key to insert in the sorted region\n' +
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
