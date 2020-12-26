/**
 * Radix sort algorithm details.
 *
 * @memberOf Code templates
 * @type {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const RadixSort = {
  Java:
    'void radixSort(int[] arr) {\n' +
    '\n' +
    '    // Find the max number and multiply it by 10 to get a number\n' +
    '    // with no. of digits of max + 1\n' +
    '    int maxNum = arr[0];\n' +
    '    for (int num : arr) {\n' +
    '        maxNum = Math.max(num, maxNum);\n' +
    '    }\n' +
    '    maxNum *= 10;\n' +
    '    int divisor = 10;\n' +
    '    while (divisor < maxNum) {\n' +
    '\n' +
    '        // Create bucket arrays for each of 0-9\n' +
    '        ArrayList<ArrayList<Integer>> buckets = new ArrayList<>(10);\n' +
    '        for (int i = 0; i < 10; i++) {\n' +
    '            buckets.add(new ArrayList<>());\n' +
    '        }\n' +
    '\n' +
    '        // For each number, get the current significant digit and put it in\n' +
    '        // the respective bucket\n' +
    '        for (int num : arr) {\n' +
    '            int index = (num % divisor) / (divisor / 10);\n' +
    '            ArrayList<Integer> currentBucket = buckets.get(index);\n' +
    '            currentBucket.add(num);\n' +
    '        }\n' +
    '\n' +
    '        // Reconstruct the array by concatenating all sub arrays\n' +
    '        int idx = 0;\n' +
    '        for (ArrayList<Integer> bucket : buckets) {\n' +
    '            for (int num : bucket) {\n' +
    '                arr[idx] = num;\n' +
    '                idx++;\n' +
    '            }\n' +
    '        }\n\n' +
    '        // Move to the next significant digit\n' +
    '        divisor *= 10;\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    'function radixSort(arr) {\n' +
    '\n' +
    '  // Find the max number and multiply it by 10 to get a number\n' +
    '  // with no. of digits of max + 1\n' +
    '  const maxNum = Math.max(...arr) * 10;\n' +
    '  let divisor = 10;\n' +
    '\n' +
    '  while (divisor < maxNum) {\n' +
    '      \n' +
    '    // Create bucket arrays for each of 0-9\n' +
    '    let buckets = [...Array(10)].map(() => []);\n' +
    '\n' +
    '    // For each number, get the current significant digit and put it in\n' +
    '    // the respective bucket\n' +
    '    for (let num of arr) {\n' +
    '      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);\n' +
    '    }\n' +
    '\n' +
    '    // Reconstruct the array by concatenating all sub arrays\n' +
    '    arr = [].concat.apply([], buckets);\n' +
    '\n' +
    '    // Move to the next significant digit\n' +
    '    divisor *= 10;\n' +
    '  }\n\n' +
    '  return arr;\n' +
    '}\n',
  Python:
    'def radix_sort(arr):\n' +
    '\n' +
    '    # Find the max number and multiply it by 10 to get a number\n' +
    '    # with no. of digits of max + 1\n' +
    '    max_num = max(arr) * 10\n' +
    '    divisor = 10\n' +
    '\n' +
    '    while divisor < max_num:\n' +
    '\n' +
    '        # Create bucket arrays for each of 0-9\n' +
    '        buckets = [None] * 10\n' +
    '        for i in range(10):\n' +
    '            buckets[i] = []\n' +
    '\n' +
    '        # For each number, get the current significant digit and put it in\n' +
    '        # the respective bucket\n' +
    '        for num in arr:\n' +
    '            buckets[math.floor((num % divisor) / (divisor / 10))].append(num)\n' +
    '\n' +
    '        # Reconstruct the array by concatinating all sub arrays\n' +
    '        arr = []\n' +
    '        for bucket in buckets:\n' +
    '            arr.extend(bucket)\n' +
    '        divisor *= 10\n' +
    '\n' +
    '    return arr\n',
  'C/C++':
    'void radixSort(int arr[], int len)\n' +
    '{\n' +
    '\n' +
    '    int maxNum = arr[0];\n' +
    '    int i, j, k, divisor = 10;\n' +
    '\n' +
    '    // Assume that our bucket size is capped at 10 for simplicity\n' +
    '    int buckets[10][10];\n' +
    '    int bucketCount[10];\n' +
    '\n' +
    '    // Find the max number and multiply it by 10 to get a number\n' +
    '    // with no. of digits of max + 1\n' +
    '    for (i = 0; i < len; ++i)\n' +
    '    {\n' +
    '        if (arr[i] > maxNum)\n' +
    '        {\n' +
    '            maxNum = arr[i];\n' +
    '        }\n' +
    '    }\n' +
    '    maxNum *= 10;\n' +
    '\n' +
    '    while (divisor < maxNum)\n' +
    '    {\n' +
    '        // Initialize bucket arrays for each of 0-9\n' +
    '        for (int i = 0; i < 10; ++i)\n' +
    '        {\n' +
    '            bucketCount[i] = 0;\n' +
    '        }\n' +
    '\n' +
    '        // For each number, get the current significant digit and put it in\n' +
    '        // the respective bucket\n' +
    '        for (i = 0; i < len; ++i)\n' +
    '        {\n' +
    '            int num = arr[i];\n' +
    '            int index = (num % divisor) / (divisor / 10);\n' +
    '            buckets[index][bucketCount[index]] = num;\n' +
    '            bucketCount[index]++;\n' +
    '        }\n' +
    '\n' +
    '        // Reconstruct the array by concatenating all sub arrays\n' +
    '        i = 0;\n' +
    '        for (j = 0; j < 10; ++j)\n' +
    '        {\n' +
    '            for (k = 0; k < bucketCount[j]; ++k)\n' +
    '            {\n' +
    '                arr[i] = buckets[j][k];\n' +
    '                i++;\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        // Move to the next significant digit\n' +
    '        divisor *= 10;\n' +
    '    }\n' +
    '}\n',
};

export default RadixSort;
