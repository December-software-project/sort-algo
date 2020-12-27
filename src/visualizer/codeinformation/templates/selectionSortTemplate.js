/**
 * Selection sort algorithm details.
 *
 * @see {@link https://www.geeksforgeeks.org/selection-sort/|Geeks for Geeks}
 * @see {@link https://stackabuse.com/selection-sort-in-javascript/|StackAbuse}
 * @see {@link https://stackabuse.com/selection-sort-in-python/|StackAbuse}
 * @memberOf Code templates
 * @const {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const SelectionSort = {
  Java:
    'void sort(int[] arr) {\n' +
    '    int n = arr.length;\n' +
    '    // One by one move boundary of unsorted subarray \n' +
    '    for (int i = 0; i < n - 1; i++) {\n' +
    '        // Find the minimum element in unsorted array \n' +
    '        int minIdx = i;\n' +
    '        for (int j = i + 1; j < n; j++) {\n' +
    '            if (arr[j] < arr[min_idx]) {\n' +
    '                minIdx = j;\n' +
    '            }\n' +
    '        }\n' +
    '        // Swap the found minimum element with the first element \n' +
    '        int temp = arr[minIdx];\n' +
    '        arr[minIdx] = arr[i];\n' +
    '        arr[i] = temp;\n' +
    '    }\n' +
    '} \n',
  JavaScript:
    'function selectionSort(inputArr) {\n' +
    '  let n = inputArr.length;\n' +
    '  for (let i = 0; i < n - 1; i++) {\n' +
    '    // Finding the smallest number in the subarray\n' +
    '    let min = i;\n' +
    '    for (let j = i + 1; j < n; j++) {\n' +
    '      if (inputArr[j] < inputArr[min]) {\n' +
    '        min = j;\n' +
    '      }\n' +
    '    }\n' +
    '    if (min != i) {\n' +
    '      // Swapping the elements\n' +
    '      let tmp = inputArr[i];\n' +
    '      inputArr[i] = inputArr[min];\n' +
    '      inputArr[min] = tmp;\n' +
    '    }\n' +
    '  }\n' +
    '  return inputArr;\n' +
    '}\n',
  Python:
    'def selection_sort(L):\n' +
    '    # i indicates how many items were sorted\n' +
    '    for i in range(len(L) - 1):\n' +
    '        # To find the minimum value of the unsorted segment\n' +
    '        # We first assume that the first element is the lowest\n' +
    '        min_index = i\n' +
    '        # We then use j to loop through the remaining elements\n' +
    '        for j in range(i + 1, len(L) - 1):\n' +
    '            # Update the min_index if the element at j is lower than it\n' +
    '            if L[j] < L[min_index]:\n' +
    '                min_index = j\n' +
    '        # After finding the lowest item of the unsorted regions,\n' +
    '        # swap with the first unsorted item\n' +
    '        L[i], L[min_index] = L[min_index], L[i]\n',
  'C/C++':
    'void selectionSort(int arr[], int n)\n' +
    '{\n' +
    '    int i, j, minIdx;\n' +
    '    // One by one move boundary of unsorted subarray \n' +
    '    for (i = 0; i < n - 1; i++)\n' +
    '    {\n' +
    '        // Find the minimum element in unsorted array \n' +
    '        minIdx = i;\n' +
    '        for (j = i + 1; j < n; j++) \n' +
    '        {\n' +
    '            if (arr[j] < arr[min_idx]) \n' +
    '            {\n' +
    '                minIdx = j;\n' +
    '            }\n' +
    '        }\n' +
    '        // Swap the found minimum element with the first element \n' +
    '        swap(&arr[minIdx], &arr[i]);\n' +
    '    }\n' +
    '} \n',
};

export default SelectionSort;
