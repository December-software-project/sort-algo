// Code adapted from https://levelup.gitconnected.com/shell-sort-in-javascript-c8a487041cdb
// and https://www.geeksforgeeks.org/shellsort/

const ShellSort = {
  Java:
    'void shellSort(int[] arr) { \n' +
    '    int n = arr.length; \n' +
    '\n' +
    '    // Start with a big gap, then reduce the gap \n' +
    '    for (int gap = n / 2; gap > 0; gap /= 2) { \n' +
    '\n' +
    '    // Do a gapped insertion sort for this gap size \n' +
    '        for (int i = gap; i < n; i += 1) { \n' +
    '        int temp = arr[i]; \n' +
    '\n' +
    '        // Shift earlier gap-sorted elements up until \n' +
    '        // the correct location for a[i] is found \n' +
    '        int j; \n' +
    '        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) { \n' +
    '            arr[j] = arr[j - gap]; \n' +
    '\n' +
    '            // Put temp (the original a[i]) in its correct location \n' +
    '            arr[j] = temp; \n' +
    '        } \n' +
    '    } \n' +
    '} \n',
  JavaScript:
    'function shellSort(arr) {\n' +
    '  let n = arr.length;\n' +
    '  \n' +
    "  // Start with a really large gap, and then reduce the gap until there isn't any. \n" +
    '  // With this, the gap starts as half of the array length, and then half of that \n' +
    '  // every time \n' +
    '  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) { \n' +
    '  \n' +
    '    // Do a insertion sort for each of the section the gap ends up dividing \n' +
    '    for (let i = gap; i < n; i += 1) { \n' +
    '  \n' +
    '      // We store the current variable \n' +
    '      let temp = arr[i]; \n' +
    '  \n' +
    '      // This is the insertion sort to sort the section into order \n' +
    '      let j; \n' +
    '      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) { \n' +
    '        arr[j] = arr[j - gap]; \n' +
    '      }\n' +
    '      arr[j] = temp;\n' +
    '    } \n' +
    '  } \n' +
    '  return arr;\n' +
    '} \n',
  Python:
    'def shellSort(arr): \n' +
    '\n' +
    '    # Start with a big gap, then reduce the gap \n' +
    '    n = len(arr) \n' +
    '    gap = n // 2\n' +
    '\n' +
    '    # Do a gapped insertion sort for this gap size' +
    '    while gap > 0: \n' +
    '        for i in range(gap, n): \n' +
    '            temp = arr[i] \n' +
    '  \n' +
    '            # Shift earlier gap-sorted elements up until the correct \n' +
    '            # location for a[i] is found \n' +
    '            j = i \n' +
    '            while  j >= gap and arr[j - gap] > temp: \n' +
    '                arr[j] = arr[j - gap] \n' +
    '                j -= gap \n' +
    '  \n' +
    '            # Put temp (the original a[i]) in its correct location \n' +
    '            arr[j] = temp \n' +
    '        gap //= 2 \n',
  'C/C++':
    'int shellSort(int arr[], int n) \n' +
    '{ \n' +
    '    // Start with a big gap, then reduce the gap \n' +
    '    for (int gap = n / 2; gap > 0; gap /= 2) \n' +
    '    { \n' +
    '        // Do a gapped insertion sort for this gap size \n' +
    '        for (int i = gap; i < n; i += 1) \n' +
    '        { \n' +
    '            int temp = arr[i]; \n' +
    '  \n' +
    '            // Shift earlier gap-sorted elements up until the correct  \n' +
    '            // location for a[i] is found \n' +
    '            int j; \n' +
    '            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {\n' +
    '                arr[j] = arr[j - gap]; \n' +
    '            } \n' +
    '  \n' +
    '            // Put temp (the original a[i]) in its correct location \n' +
    '            arr[j] = temp; \n' +
    '        } \n' +
    '    } \n' +
    '    return 0; \n' +
    '} \n',
};

export default ShellSort;
