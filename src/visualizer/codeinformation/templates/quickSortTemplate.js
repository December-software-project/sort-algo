//Code adapted from https://www.geeksforgeeks.org/quick-sort/
const QuickSort = {
  Java:
    'void swap(int[] arr, int i, int j) {\n' +
    '    int temp = arr[i];\n' +
    '    arr[i] = arr[j];\n' +
    '    arr[j] = temp;\n' +
    '}\n' +
    '\n' +
    'int partition(int[] arr, int low, int high) {\n' +
    '    int pivot = arr[high];\n' +
    '    int i = low - 1; // index of smaller element \n' +
    '    for (int j = low; j < high; j++) {\n' +
    '        // If current element is smaller than the pivot \n' +
    '        if (arr[j] < pivot) {\n' +
    '            i++;\n' +
    '            swap(arr, i, j);\n' +
    '        }\n' +
    '    }\n' +
    '    swap(arr, i + 1, high);\n' +
    '    return i + 1;\n' +
    '}\n' +
    '\n' +
    '/* The main function that implements QuickSort() \n' +
    '  arr[] --> Array to be sorted, \n' +
    '  low  --> Starting index, \n' +
    '  high  --> Ending index */\n' +
    'void quickSortHelper(int[] arr, int low, int high) {\n' +
    '    if (low < high) { \n' +
    '        /* pi is partitioning index, arr[pi] is  \n' +
    '           now at right place */\n' +
    '        int pi = partition(arr, low, high);\n' +
    '        // Recursively sort elements before \n' +
    '        // partition and after partition \n' +
    '        quickSortHelper(arr, low, pi - 1);\n' +
    '        quickSortHelper(arr, pi + 1, high);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'void quickSort(int[] arr) {\n' +
    '    quickSortHelper(arr, 0, arr.length - 1);\n' +
    '}\n\n',
  JavaScript:
    'function partition(arr, low, high) {\n' +
    '  // Take last element as the pivot\n' +
    '  let pivot = arr[high];\n' +
    '  let i = low - 1;\n' +
    '  for (let j = low; j < high; j++) {\n' +
    '    // If current element is smaller than the pivot\n' +
    '    if (arr[j] < pivot) {\n' +
    '      i++;\n' +
    '      [arr[j], arr[i]] = [arr[i], arr[j]];\n' +
    '    }\n' +
    '  }\n' +
    '  // Place pivot in the correct position in the partition\n' +
    '  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];\n' +
    '  return i + 1;\n' +
    '}\n' +
    '\n' +
    'function quickSortHelper(arr, low, high) {\n' +
    '  if (low < high) {\n' +
    '    /* pi is partitioning index, arr[pi] is  \n' +
    '       now at right place */\n' +
    '    let pi = partition(arr, low, high);\n' +
    '    // Recursively sort elements before \n' +
    '    // partition and after partition \n' +
    '    quickSortHelper(arr, low, pi - 1);\n' +
    '    quickSortHelper(arr, pi + 1, high);\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'function quickSort(arr) {\n' +
    '  quickSortHelper(arr, 0, arr.length - 1);\n' +
    '}\n\n',
  Python:
    'def partition(arr, low, high):\n' +
    '    i = low - 1\n' +
    '\n' +
    '    # Take last element as the pivot\n' +
    '    pivot = arr[high]\n' +
    '    for j in range(low, high):\n' +
    '\n' +
    '        # If current element is smaller than the pivot\n' +
    '        if arr[j] < pivot:\n' +
    '        i = i + 1\n' +
    '        arr[i], arr[j] = arr[j], arr[i]\n' +
    '\n' +
    '    # Place pivot in the correct position in the partition\n' +
    '    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n' +
    '    return i + 1\n' +
    '\n' +
    '\n' +
    'def quick_sort_helper(arr, low, high):\n' +
    '    while low < high:\n' +
    '\n' +
    '        pi = partition(arr, low, high)\n' +
    '        # pi is partitioning index, arr[pi] is  \n' +
    '        # now at right place */\n' +
    '        if low < high:\n' +
    '             int pi = partition(arr, low, high)\n' +
    '             quick_sort_helper(arr, low, pi - 1)\n' +
    '             quick_sort_helper(arr, pi + 1, high)\n' +
    '\n' +
    '\n' +
    'def quick_sort(arr):\n' +
    '    quick_sort_helper(arr, 0, len(arr) - 1)\n' +
    '\n\n',
  'C/C++':
    'void swap(int *a, int *b)\n' +
    '{\n' +
    '    int temp = *a;\n' +
    '    *a = *b;\n' +
    '    *b = temp;\n' +
    '}\n' +
    '\n' +
    'int partition(int arr[], int low, int high)\n' +
    '{\n' +
    '    // Take last element as the pivot\n' +
    '    int pivot = arr[high];\n' +
    '    int i = low - 1;\n' +
    '    for (int j = low; j <= high - 1; ++j)\n' +
    '    {\n' +
    '        // If current element is smaller than the pivot\n' +
    '        if (arr[j] <= pivot)\n' +
    '        {\n' +
    '            ++i;\n' +
    '            swap(&arr[i], &arr[j]);\n' +
    '        }\n' +
    '    }\n' +
    '    // Place pivot in the correct position in the partition\n' +
    '    swap(&arr[i + 1], &arr[high]);\n' +
    '    return i + 1;\n' +
    '}\n' +
    '\n' +
    'void quickSortHelper(int arr[], int low, int high)\n' +
    '{\n' +
    '    if (low < high)\n' +
    '    {\n' +
    '        int pi = partition(arr, low, high);\n' +
    '\n' +
    '        quickSortHelper(arr, low, pi - 1);\n' +
    '        quickSortHelper(arr, pi + 1, high);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'void quickSort(int arr[], int len)\n' +
    '{\n' +
    '    quickSortHelper(arr, 0, len - 1);\n' +
    '}\n\n',
};

export default QuickSort;
