/**
 * Merge sort algorithm details.
 *
 * @see {@link https://www.geeksforgeeks.org/merge-sort/|Geeks for Geeks}
 * @see {@link https://stackabuse.com/merge-sort-in-javascript/|StackAbuse}
 * @memberOf Code templates
 * @const {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const MergeSort = {
  Java:
    '/* Merges two subarrays of arr[]. First subarray is arr[l..m]\n' +
    ' * Second subarray is arr[m+1..r] */\n' +
    'void merge(int[] arr, int left, int mid, int right) {\n' +
    '    // Find sizes of two subarrays to be merged\n' +
    '    int n1 = mid - left + 1;\n' +
    '    int n2 = right - mid;\n' +
    '\n' +
    '    // Create temp arrays\n' +
    '    int[] leftArray = new int[n1];\n' +
    '    int[] rightArray = new int[n2];\n' +
    '\n' +
    '    // Copy data to temp arrays\n' +
    '    for (int i = 0; i < n1; i++) {\n' +
    '        leftArray[i] = arr[l + i];\n' +
    '    }\n' +
    '\n' +
    '    for (int j = 0; j < n2; j++) {\n' +
    '        rightArray[j] = arr[m + 1 + j];\n' +
    '    }\n' +
    '\n' +
    '    // Initial indexes of first and second subarrays\n' +
    '    int i = 0, j = 0;\n' +
    '\n' +
    '    // Initial index of merged subarray array\n' +
    '    int k = l;\n' +
    '    // Merge the arrays\n' +
    '    while (i < n1 && j < n2) {\n' +
    '        if (leftArray[i] <= rightArray[j]) {\n' +
    '            arr[k++] = leftArray[i++];\n' +
    '        } else {\n' +
    '            arr[k++] = rightArray[j++];\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    // Copy remaining elements of leftArray if any\n' +
    '    while (i < n1) {\n' +
    '        arr[k++] = leftArray[i++];\n' +
    '    }\n' +
    '\n' +
    '    // Copy remaining elements of rightArray if any\n' +
    '    while (j < n2) {\n' +
    '        arr[k++] = rightArray[j++];\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '// Main function that sorts arr[l..r] using merge()\n' +
    'void mergeSortHelper(int[] arr, int left, int right) {\n' +
    '    if (left < right) {\n' +
    '        // Find the middle point\n' +
    '        int mid = (left + right) / 2;\n' +
    '\n' +
    '        // Sort first and second halves\n' +
    '        mergeSortHelper(arr, left, mid);\n' +
    '        mergeSortHelper(arr, mid + 1, right);\n' +
    '\n' +
    '        // Merge the sorted halves\n' +
    '        merge(arr, left, mid, right);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'void mergeSort(int[] arr) {\n' +
    '    mergeSortHelper(arr, 0, arr.length - 1);\n' +
    '}\n',
  JavaScript:
    'function merge(left, right) {\n' +
    '  let arr = []\n' +
    '  // Break out of loop if any one of the array gets empty\n' +
    '  while (left.length && right.length) {\n' +
    '    // Pick the smaller element of left and right sub arrays \n' +
    '    if (left[0] < right[0]) {\n' +
    '      arr.push(left.shift())\n' +
    '    } else {\n' +
    '      arr.push(right.shift())\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    '  /* Concatenating the leftover elements\n' +
    "   * (in case we didn't go through the entire left or right array) */\n" +
    '  return [ ...arr, ...left, ...right ]\n' +
    '}\n' +
    '\n' +
    'function mergeSort(array) {\n' +
    '  const half = array.length / 2;\n' +
    '\n' +
    '  // Base case or terminating case\n' +
    '  if (array.length < 2) {\n' +
    '    return array;\n' +
    '  }\n' +
    '\n' +
    '  const left = array.splice(0, half);\n' +
    '  return merge(mergeSort(left), mergeSort(array));\n' +
    '}\n',
  Python:
    'def mergeSort(arr):\n' +
    '    if len(arr) > 1:\n' +
    '        # Finding the mid of the array\n' +
    '        mid = len(arr)//2\n' +
    '        # Dividing the array elements\n' +
    '        left_array = arr[:mid]\n' +
    '        # into 2 halves\n' +
    '        right_array = arr[mid:]\n' +
    '        # Sorting the first half\n' +
    '        mergeSort(left_array)\n' +
    '        # Sorting the second half\n' +
    '        mergeSort(right_array)\n' +
    '\n' +
    '        i = j = k = 0\n' +
    '\n' +
    '        # Copy data to temp arrays left_array and right_array\n' +
    '        while i < len(left_array) and j < len(right_array):\n' +
    '            if left_array[i] < right_array[j]:\n' +
    '                arr[k] = left_array[i]\n' +
    '                i += 1\n' +
    '            else:\n' +
    '                arr[k] = right_array[j]\n' +
    '                j += 1\n' +
    '            k += 1\n' +
    '\n' +
    '        # Checking if any element was left\n' +
    '        while i < len(left_array):\n' +
    '            arr[k] = left_array[i]\n' +
    '            i += 1\n' +
    '            k += 1\n' +
    '\n' +
    '        while j < len(right_array):\n' +
    '            arr[k] = right_array[j]\n' +
    '            j += 1\n' +
    '            k += 1\n',
  'C/C++':
    '// Merges two subarrays of arr[]. First subarray is arr[l..m] \n' +
    '// Second subarray is arr[m+1..r] \n' +
    'void merge(int arr[], int left, int mid, int right)\n' +
    '{\n' +
    '    int i, j, k;\n' +
    '    int n1 = mid - left + 1;\n' +
    '    int n2 = right - mid;\n' +
    '\n' +
    '    // create temp arrays\n' +
    '    int leftArray[n1], rightArray[n2];\n' +
    '\n' +
    '    // Copy data to temp arrays leftArray and rightArray\n' +
    '    for (i = 0; i < n1; ++i) \n' +
    '    {\n' +
    '        leftArray[i] = arr[l + i];\n' +
    '    }\n' +
    '\n' +
    '    for (j = 0; j < n2; ++j) \n' +
    '    {\n' +
    '        rightArray[j] = arr[m + 1 + j];\n' +
    '    }\n' +
    '\n' +
    '    // Merge the temp arrays back into arr[l..r]\n' +
    '    i = 0; // Initial index of first subarray\n' +
    '    j = 0; // Initial index of second subarray\n' +
    '    k = left; // Initial index of merged subarray\n' +
    '    while (i < n1 && j < n2) \n' +
    '    {\n' +
    '        if (leftArray[i] <= rightArray[j]) \n' +
    '        {\n' +
    '            arr[k++] = leftArray[i++];\n' +
    '        }\n' +
    '        else \n' +
    '        {\n' +
    '            arr[k++] = rightArray[j++];\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    // Copy the remaining elements of leftArray, if there are any\n' +
    '    while (i < n1) \n' +
    '    {\n' +
    '        arr[k++] = leftArray[i++];\n' +
    '    }\n' +
    '\n' +
    '    // Copy the remaining elements of rightArray, if there are any \n' +
    '    while (j < n2) \n' +
    '    {\n' +
    '        arr[k++] = rightArray[j++];\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '// left is for left index and right is right index \n' +
    '// of the sub-array of arr to be sorted \n' +
    'void mergeSort(int arr[], int left, int right)\n' +
    '{\n' +
    '    if (left < right) \n' +
    '    {\n' +
    '        // Same as (left + right) / 2, \n' +
    '        // but avoids overflow for large left and right \n' +
    '        int mid = left + (right - left) / 2;\n' +
    '\n' +
    '        // Sort first and second halves\n' +
    '        mergeSort(arr, left, mid);\n' +
    '        mergeSort(arr, mid + 1, right);\n' +
    '\n' +
    '        merge(arr, left, mid, right);\n' +
    '    }\n' +
    '}\n',
};

export default MergeSort;
