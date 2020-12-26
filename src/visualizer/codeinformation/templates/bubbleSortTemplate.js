/**
 * Bubble sort algorithm details.
 *
 * @memberOf Code templates
 * @type {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const BubbleSort = {
  Java:
    'void swap(int[] arr, int i, int j) {\n' +
    '    int temp = arr[i];\n' +
    '    arr[i] = arr[j];\n' +
    '    arr[j] = temp;\n' +
    '}\n' +
    '\n' +
    'void bubbleSort(int[] arr) {\n' +
    '    \n' +
    '    // Loop in the range of unsorted elements\n' +
    '    for (int i = arr.length - 1; i >= 0; i--) {\n' +
    '        boolean swapped = true;\n' +
    '        \n' +
    '        // Bubble largest element to the end\n' +
    '        for (int j = 0; j < i; j++) {\n' +
    '            if (arr[j] > arr[j + 1]) {\n' +
    '                swap(arr, j, j + 1);\n' +
    '                swapped = false;\n' +
    '            }\n' +
    '        }\n' +
    '        \n' +
    '        // Array is already sorted as there are no swaps in this iteration\n' +
    '        if (swapped) {\n' +
    '            break;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    'function bubbleSort(arr) {\n\n' +
    '  // Loop in the range of unsorted elements\n' +
    '  for (let i = arr.length - 1; i >= 0; i--) {\n' +
    '    let swapped = true;\n\n' +
    '    // Bubble largest element to the end\n' +
    '    for (let j = 0; j < i; j++) {\n' +
    '      if (arr[j] > arr[j + 1]) {\n' +
    '        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n' +
    '        swapped = false;\n' +
    '      }\n' +
    '    }\n\n' +
    '    // Array is already sorted as there are no swaps in this iteration\n' +
    '    if (swapped) {\n' +
    '      break;\n' +
    '    }\n' +
    '  }\n' +
    '}\n',
  Python:
    'def bubble_sort(arr):\n' +
    '\n' +
    '    # Loop in the range of unsorted elements\n' +
    '    for i in range(len(arr) - 1, 0, -1):\n' +
    '        swapped = True\n' +
    '\n' +
    '        # Bubble largest element to the end\n' +
    '        for j in range(i):\n' +
    '            if arr[j] > arr[j + 1]:\n' +
    '                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n' +
    '                swapped = False\n' +
    '\n' +
    '        # Array is already sorted as there are no swaps in this iteration\n' +
    '        if swapped:\n' +
    '            break\n',
  'C/C++':
    'void swap(int *a, int *b)\n' +
    '{\n' +
    '    int temp = *a;\n' +
    '    *a = *b;\n' +
    '    *b = temp;\n' +
    '}\n' +
    '\n' +
    'void bubbleSort(int arr[], int len)\n' +
    '{\n' +
    '    int i, j;\n' +
    '    bool swapped;\n' +
    '\n' +
    '    // Loop in the range of unsorted elements\n' +
    '    for (i = len - 1; i >= 0; --i)\n' +
    '    {\n' +
    '        swapped = true;\n' +
    '\n' +
    '        // Bubble largest element to the end\n' +
    '        for (j = 0; j < i; ++j)\n' +
    '        {\n' +
    '            if (arr[j] > arr[j + 1])\n' +
    '            {\n' +
    '                swap(&arr[j], &arr[j + 1]);\n' +
    '                swapped = false;\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        // Array is already sorted as there are no swaps in this iteration\n' +
    '        if (swapped)\n' +
    '        {\n' +
    '            break;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
};

export default BubbleSort;
