const BucketSort = {
  Java:
    'void bucketSort(double[] arr) {\n' +
    '    int totalSlots = 10;\n' +
    '    ArrayList<ArrayList<Double>> buckets = new ArrayList<>(totalSlots);\n' +
    '\n' +
    '    for (int i = 0; i < totalSlots; i++) {\n' +
    '        ArrayList<Double> list = new ArrayList<>();\n' +
    '        buckets.add(list);\n' +
    '    }\n' +
    '\n' +
    '    for (double current : arr) {\n' +
    '        int bucket_idx = (int) (totalSlots * current);\n' +
    '        buckets.get(bucket_idx).add(current);\n' +
    '    }\n' +
    '\n' +
    '    for (ArrayList<Double> bucket : buckets) {\n' +
    '        Collections.sort(bucket);\n' +
    '    }\n' +
    '\n' +
    '    int index = 0;\n' +
    '    for (ArrayList<Double> bucket : buckets) {\n' +
    '        for (double item : bucket) {\n' +
    '            arr[index] = item;\n' +
    '            index++;\n' +
    '        }\n' +
    '    }\n' +
    '}\n\n',
  JavaScript:
    'function bucketSort(arr) {\n' +
    '  let buckets = [];\n' +
    '  const totalSlots = 10;\n' +
    '\n' +
    '  for (let i = 0; i < totalSlots; i++) {\n' +
    '    buckets[i] = [];\n' +
    '  }\n' +
    '\n' +
    '  for (let i = 0; i < arr.length; i++) {\n' +
    '    const current = arr[i];\n' +
    '    const bucket_idx = Math.floor(totalSlots * current);\n' +
    '    buckets[bucket_idx].push(current);\n' +
    '  }\n' +
    '\n' +
    '  for (let i = 0; i < totalSlots; i++) {\n' +
    '    buckets[i].sort();\n' +
    '  }\n' +
    '\n' +
    '  let index = 0;\n' +
    '  for (let i = 0; i < totalSlots; i++) {\n' +
    '    for (let j = 0; j < buckets[i].length; j++) {\n' +
    '      arr[index] = buckets[i][j];\n' +
    '      index += 1;\n' +
    '    }\n' +
    '  }\n' +
    '}\n\n',
  Python:
    'def bucket_sort(arr):\n' +
    '    buckets = []\n' +
    '    total_slots = 10\n' +
    '\n' +
    '    for i in range(0, total_slots):\n' +
    '        buckets.append([])\n' +
    '\n' +
    '    for item in arr:\n' +
    '        bucket_idx = int(total_slots * item)\n' +
    '        buckets[bucket_idx].append(item)\n' +
    '\n' +
    '    for bucket in buckets:\n' +
    '        bucket = sorted(bucket)\n' +
    '\n' +
    '    index = 0\n' +
    '    for bucket in buckets:\n' +
    '        for item in bucket:\n' +
    '            arr[index] = item\n' +
    '            index += 1\n\n',
  'C/C++':
    'struct Node\n' +
    '{\n' +
    '    int data;\n' +
    '    struct Node *next;\n' +
    '};\n' +
    '\n' +
    'void bucketSort(double arr[], int len)\n' +
    '{\n' +
    '    int i, j;\n' +
    '    struct Node **buckets;\n' +
    '    int totalSlots = 10;\n' +
    '    buckets = (struct Node **)malloc(sizeof(struct Node *) * len);\n' +
    '\n' +
    '    for (i = 0; i < totalSlots; ++i)\n' +
    '    {\n' +
    '        buckets[i] = NULL;\n' +
    '    }\n' +
    '\n' +
    '    for (i = 0; i < len; ++i)\n' +
    '    {\n' +
    '        struct Node *current;\n' +
    '        int pos = (int)(arr[i] * totalSlots);\n' +
    '        current = (struct Node *)malloc(sizeof(struct Node));\n' +
    '        current->data = arr[i];\n' +
    '        current->next = buckets[pos];\n' +
    '        buckets[pos] = current;\n' +
    '    }\n' +
    '\n' +
    '    for (i = 0; i < totalSlots; ++i)\n' +
    '    {\n' +
    '        sort(buckets[i]);\n' +
    '    }\n' +
    '\n' +
    '    for (j = 0, i = 0; i < totalSlots; ++i)\n' +
    '    {\n' +
    '        struct Node *node;\n' +
    '        node = buckets[i];\n' +
    '        while (node)\n' +
    '        {\n' +
    '            arr[j++] = node->data;\n' +
    '            node = node->next;\n' +
    '        }\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    'void bucketSortMain(double arr[], int len)\n' +
    '{\n' +
    '    bucketSort(arr, len);\n' +
    '}\n\n',
};

export default BucketSort;
