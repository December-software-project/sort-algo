const InsertionSort = {
  Java:
    'for (int i = arr.length - 1; i >= 0; i--) {\n' +
    '    boolean swapped = true;\n' +
    '    for (int j = 0; j < i; j++) {\n' +
    '        if (arr[j] > arr[j + 1]) {\n' +
    '            swap(j, j + 1, arr);\n' +
    '            swapped = false;\n' +
    '        }\n' +
    '    }\n' +
    '    if (swapped) {\n' +
    '        break;\n' +
    '    }\n' +
    '}',
  JavaScript:
    'for (let i = arr.length - 1; i >= 0; i--) {\n' +
    '  let swapped = true;\n' +
    '  for (let j = 0; j < i; j++) {\n' +
    '    if (arr[j] > arr[j + 1]) {\n' +
    '      swap(j, j + 1, arr);\n' +
    '      swapped = false;\n' +
    '    }\n' +
    '  }\n' +
    '  if (swapped) {\n' +
    '    break;\n' +
    '  }\n' +
    '}',
  Python:
    'for i in range(len(arr) - 1, 0, -1):\n' +
    '    swapped = True\n' +
    '    for j in range(0, i):\n' +
    '        if arr[j] > arr[j + 1]:\n' +
    '            swap(j, j + 1, arr)\n' +
    '            swapped = False\n' +
    '    if swapped:\n' +
    '        break',
  'C/C++':
    'for (int i = length - 1; i >= 0; i--)\n' +
    '{\n' +
    '  bool swapped = true;\n' +
    '  for (int j = 0; j < i; j++)\n' +
    '  {\n' +
    '    if (arr[j] > arr[j + 1])\n' +
    '    {\n' +
    '      swap(j, j + 1, arr);\n' +
    '      swapped = false;\n' +
    '    }\n' +
    '  }\n' +
    '  if (swapped)\n' +
    '  {\n' +
    '    break;\n' +
    '  }\n' +
    '}',
};

export default InsertionSort;
