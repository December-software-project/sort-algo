/**
 * Bucket sort algorithm details.
 *
 * @memberOf Code templates
 * @type {{Java: string, 'C/C++': string, JavaScript: string, Python: string}}
 */
const BucketSort = {
  Java:
    'void bucketSort(double[] arr) {\n' +
    '\n' +
    '    int totalSlots = 10;\n' +
    '    ArrayList<ArrayList<Double>> buckets = new ArrayList<>(totalSlots);\n' +
    '\n' +
    '    // Create bucket arrays for each of 0-9\n' +
    '    for (int i = 0; i < totalSlots; i++) {\n' +
    '        buckets.add(new ArrayList<>());\n' +
    '    }\n' +
    '\n' +
    '    // For each number, get the digit in the tenth place and put it in\n' +
    '    // the respective bucket\n' +
    '    for (double num : arr) {\n' +
    '        int bucket_idx = (int) (totalSlots * num);\n' +
    '        buckets.get(bucket_idx).add(num);\n' +
    '    }\n' +
    '\n' +
    '    // Sort each bucket in the list of buckets\n' +
    '    for (ArrayList<Double> bucket : buckets) {\n' +
    '        Collections.sort(bucket);\n' +
    '    }\n' +
    '\n' +
    '    // Reconstruct the array by concatenating all sub arrays\n' +
    '    int index = 0;\n' +
    '    for (ArrayList<Double> bucket : buckets) {\n' +
    '        for (double item : bucket) {\n' +
    '            arr[index] = item;\n' +
    '            index++;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
  JavaScript:
    'function bucketSort(arr) {\n' +
    '    \n' +
    '  const totalSlots = 10;\n' +
    '\n' +
    '  // Create bucket arrays for each of 0-9\n' +
    '  let buckets = [...Array(10)].map(() => []);\n' +
    '\n' +
    '  // For each number, get the digit in the tenth place and put it in\n' +
    '  // the respective bucket\n' +
    '  for (const num of arr) {\n' +
    '    const bucket_idx = Math.floor(totalSlots * num);\n' +
    '    buckets[bucket_idx].push(num);\n' +
    '  }\n' +
    '\n' +
    '  // Sort each bucket in the list of buckets\n' +
    '  for (const bucket of buckets) {\n' +
    '    bucket.sort();\n' +
    '  }\n' +
    '\n' +
    '  // Reconstruct the array by concatenating all sub arrays\n' +
    '  return [].concat.apply([], buckets);\n' +
    '}\n',
  Python:
    'def bucket_sort(arr):\n' +
    '\n' +
    '    total_slots = 10\n' +
    '    buckets = []\n' +
    '\n' +
    '    # Create bucket arrays for each of 0-9\n' +
    '    for i in range(total_slots):\n' +
    '        buckets.append([])\n' +
    '\n' +
    '    # For each number, get the digit in the tenth place and put it in\n' +
    '    # the respective bucket\n' +
    '    for num in arr:\n' +
    '        bucket_idx = int(total_slots * num)\n' +
    '        buckets[bucket_idx].append(num)\n' +
    '\n' +
    '    # Sort each bucket in the list of buckets\n' +
    '    for bucket in buckets:\n' +
    '        bucket.sort()\n' +
    '\n' +
    '    # Reconstruct the array by concatenating all sub arrays\n' +
    '    index = 0\n' +
    '    for bucket in buckets:\n' +
    '        for item in bucket:\n' +
    '            arr[index] = item\n' +
    '            index += 1\n',
  'C/C++':
    'void bucketSort(double arr[], int len)\n' +
    '{\n' +
    '    int i, j, k;\n' +
    '\n' +
    '    // Assume that our bucket size is capped at 10 for simplicity\n' +
    '    int buckets[10][10];\n' +
    '    int bucketCount[10];\n' +
    '\n' +
    '    // For each number, get the digit in the tenth place and put it in\n' +
    '    // the respective bucket\n' +
    '    for (i = 0; i < len; ++i)\n' +
    '    {\n' +
    '        double num = arr[i];\n' +
    '        int index = floor(num * 10);\n' +
    '        buckets[index][bucketCount[index]] = num;\n' +
    '        bucketCount[index]++;\n' +
    '    }\n' +
    '\n' +
    '    // Sort each bucket in the list of buckets\n' +
    '    for (i = 0; i < 10; ++i)\n' +
    '    {\n' +
    '        sort(buckets[i]);\n' +
    '    }\n' +
    '\n' +
    '    // Reconstruct the array by concatenating all sub arrays\n' +
    '    i = 0;\n' +
    '    for (j = 0; j < 10; ++j)\n' +
    '    {\n' +
    '        for (k = 0; k < bucketCount[j]; ++k)\n' +
    '        {\n' +
    '            arr[i] = buckets[j][k];\n' +
    '            i++;\n' +
    '        }\n' +
    '    }\n' +
    '}\n',
};

export default BucketSort;
