/**
 * Heap sort algorithm details.
 *
 * @see {@link https://www.geeksforgeeks.org/heap-sort/|Geeks for Geeks}
 * @see {@link https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php|w3resource}
 * @memberOf Code templates
 * @const {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const HeapSort = {
  Java:
    '// To heapify a sub-tree rooted with node i which is \n' +
    '// an index in arr[]. n is size of heap \n' +
    'void heapify(int[] arr, int n, int i) { \n' +
    '    int largest = i; // Initialize largest as root \n' +
    '    int l = 2 * i + 1; // left = 2 * i + 1 \n' +
    '    int r = 2 * i + 2; // right = 2 * i + 2 \n' +
    ' \n' +
    '    // If left child is larger than root \n' +
    '    if (l < n && arr[l] > arr[largest]) \n' +
    '        largest = l; \n' +
    ' \n' +
    '    // If right child is larger than largest so far \n' +
    '    if (r < n && arr[r] > arr[largest]) \n' +
    '        largest = r; \n' +
    ' \n' +
    '    // If largest is not root \n' +
    '    if (largest != i) { \n' +
    '        int swap = arr[i]; \n' +
    '        arr[i] = arr[largest]; \n' +
    '        arr[largest] = swap; \n' +
    ' \n' +
    '        // Recursively heapify the affected sub-tree \n' +
    '        heapify(arr, n, largest); \n' +
    '    }\n' +
    '} \n' +
    ' \n' +
    'void sort(int[] arr) {\n' +
    '    int n = arr.length;\n' +
    ' \n' +
    '    // Build heap (rearrange array) \n' +
    '    for (int i = n / 2 - 1; i >= 0; i--) { \n' +
    '        heapify(arr, n, i); \n' +
    '    } \n' +
    ' \n' +
    '    // One by one extract an element from heap\n' +
    '    for (int i = n - 1; i > 0; i--) { \n' +
    ' \n' +
    '        // Move current root to end \n' +
    '        int temp = arr[0]; \n' +
    '        arr[0] = arr[i]; \n' +
    '        arr[i] = temp; \n' +
    ' \n' +
    '        // Call max heapify on the reduced heap \n' +
    '        heapify(arr, i, 0); \n' +
    '    } \n' +
    '} \n',
  JavaScript:
    'let array_length; \n' +
    '\n' +
    '// To heapify a sub-tree rooted with node i which is \n' +
    '// an index in arr[]. \n' +
    'function heap_root(input, i) { \n' +
    '  let left = 2 * i + 1; \n' +
    '  let right = 2 * i + 2; \n' +
    '  let max = i; \n' +
    '\n' +
    '  // If left child is larger than root \n' +
    '  if (left < array_length && input[left] > input[max]) { \n' +
    '    max = left;\n' +
    '  }\n' +
    '\n' +
    '  // If right child is larger than largest so far \n' +
    '  if (right < array_length && input[right] > input[max])     { \n' +
    '    max = right; \n' +
    '  } \n' +
    '\n' +
    '  // If largest is not root \n' +
    '  if (max != i) { \n' +
    '    swap(input, i, max); \n' +
    '\n' +
    '    // Recursively heapify the affected sub-tree \n' +
    '    heap_root(input, max); \n' +
    '  } \n' +
    '} \n' +
    '\n' +
    'function swap(input, index_A, index_B) { \n' +
    '  let temp = input[index_A]; \n' +
    '\n' +
    '  input[index_A] = input[index_B]; \n' +
    '  input[index_B] = temp; \n' +
    '} \n' +
    '\n' +
    'function heapSort(arr) { \n' +
    '    \n' +
    '  array_length = arr.length; \n' +
    '\n' +
    '  // Build heap (rearrange array) \n' +
    '  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {\n' +
    '    heap_root(arr, i); \n' +
    '  } \n' +
    '\n' +
    '  // One by one extract an element from heap\n' +
    '  for (i = arr.length - 1; i > 0; i--) { \n' +
    '    // Move current root to end \n' +
    '    swap(arr, 0, i); \n' +
    '    array_length--; \n' +
    '\n' +
    '    // Call max heapify on the reduced heap \n' +
    '    heap_root(arr, 0); \n' +
    '  }\n' +
    '} \n',
  Python:
    '# To heapify sub-tree rooted at index i. n is size of heap \n' +
    'def heapify(arr, n, i): \n' +
    '    largest = i  # Initialize largest as root \n' +
    '    l = 2 * i + 1     # left = 2 * i + 1 \n' +
    '    r = 2 * i + 2     # right = 2 * i + 2 \n' +
    ' \n' +
    '    # See if left child of root exists and is \n' +
    '    # greater than root \n' +
    '    if l < n and arr[largest] < arr[l]: \n' +
    '        largest = l \n' +
    ' \n' +
    '    # See if right child of root exists and is \n' +
    '    # greater than root \n' +
    '    if r < n and arr[largest] < arr[r]: \n' +
    '        largest = r \n' +
    ' \n' +
    '    # Change root, if needed \n' +
    '    if largest != i:\n' +
    '        arr[i], arr[largest] = arr[largest], arr[i]  # swap\n' +
    ' \n' +
    '        # Heapify the root \n' +
    '        heapify(arr, n, largest)\n' +
    ' \n' +
    'def heapSort(arr): \n' +
    '    n = len(arr) \n' +
    ' \n' +
    '    # Build a maxheap \n' +
    '    for i in range(n//2 - 1, -1, -1): \n' +
    '        heapify(arr, n, i) \n' +
    ' \n' +
    '    # One by one extract elements \n' +
    '    for i in range(n-1, 0, -1): \n' +
    '        // Move current root to end \n' +
    '        arr[i], arr[0] = arr[0], arr[i] \n' +
    '        heapify(arr, i, 0) \n',
  'C/C++':
    '#include <iostream> \n' +
    ' \n' +
    '// To heapify a sub-tree rooted with node i which is\n' +
    '// an index in arr[]. n is size of heap\n' +
    'void heapify(int arr[], int n, int i) \n' +
    '{ \n' +
    '    int largest = i; // Initialize largest as root\n' +
    '    int l = 2 * i + 1; // left = 2 * i + 1 \n' +
    '    int r = 2 * i + 2; // right = 2 * i + 2 \n' +
    ' \n' +
    '    // If left child is larger than root \n' +
    '    if (l < n && arr[l] > arr[largest]) \n' +
    '        largest = l; \n' +
    ' \n' +
    '    // If right child is larger than largest so far \n' +
    '    if (r < n && arr[r] > arr[largest])\n' +
    '        largest = r;\n' +
    ' \n' +
    '    // If largest is not root\n' +
    '    if (largest != i) { \n' +
    '        swap(arr[i], arr[largest]); \n' +
    ' \n' +
    '        // Recursively heapify the affected sub-tree \n' +
    '        heapify(arr, n, largest); \n' +
    '    } \n' +
    '} \n' +
    ' \n' +
    'void heapSort(int arr[], int n) \n' +
    '{ \n' +
    '    // Build heap (rearrange array) \n' +
    '    for (int i = n / 2 - 1; i >= 0; i--) \n' +
    '        heapify(arr, n, i);\n' +
    ' \n' +
    '    // One by one extract an element from heap \n' +
    '    for (int i = n - 1; i > 0; i--) { \n' +
    '        // Move current root to end \n' +
    '        swap(arr[0], arr[i]);\n' +
    ' \n' +
    '        // Call max heapify on the reduced heap \n' +
    '        heapify(arr, i, 0); \n' +
    '    }\n' +
    '} \n',
};

export default HeapSort;
