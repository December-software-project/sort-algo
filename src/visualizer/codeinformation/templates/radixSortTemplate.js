// todo remember to change radixsort template
const RadixSort = {
  Java:
    '        for (int i = arr.length - 1; i >= 0; i--) {\n' +
    '            boolean bool = true;\n' +
    '            for (int j = 0; j < i; j++) {\n' +
    '                if (arr[j] > arr[j + 1]) {\n' +
    '                    swap(j, j + 1, arr);\n' +
    '                    bool = false;\n' +
    '                }\n' +
    '            }\n' +
    '            if (bool) {\n' +
    '                break;\n' +
    '            }\n' +
    '        }',
  JavaScript:
    '  for (let i = arr.length - 1; i >= 0; i--) {\n' +
    '    let flag = true;\n' +
    '    for (let j = 0; j < i; j++) {\n' +
    '      if (arr[j] > arr[j + 1]) {\n' +
    '        swap(j, j + 1, arr);\n' +
    '        flag = false;\n' +
    '      }\n' +
    '    }\n' +
    '    if (flag) {\n' +
    '      break;\n' +
    '    }\n' +
    '  }',
  Python:
    'for i in range(len(arr) - 1, 0, -1):\n' +
    '    flag = True\n' +
    '    for j in range(0, i):\n' +
    '        if arr[j] > arr[j + 1]:\n' +
    '            swap(j, j + 1, arr)\n' +
    '            flag = False\n' +
    '    if flag:\n' +
    '        break',
  'C++':
    '  for (int i = length - 1; i >= 0; i--)\n' +
    '  {\n' +
    '    bool flag = true;\n' +
    '    for (int j = 0; j < i; j++)\n' +
    '    {\n' +
    '      if (arr[j] > arr[j + 1])\n' +
    '      {\n' +
    '        swap(j, j + 1, arr);\n' +
    '        flag = false;\n' +
    '      }\n' +
    '    }\n' +
    '    if (flag)\n' +
    '    {\n' +
    '      break;\n' +
    '    }\n' +
    '  }\n' +
    '}',
  C:
    '  for (int i = length - 1; i >= 0; i--)\n' +
    '  {\n' +
    '    bool flag = true;\n' +
    '    for (int j = 0; j < i; j++)\n' +
    '    {\n' +
    '      if (arr[j] > arr[j + 1])\n' +
    '      {\n' +
    '        swap(j, j + 1, arr);\n' +
    '        flag = false;\n' +
    '      }\n' +
    '    }\n' +
    '    if (flag)\n' +
    '    {\n' +
    '      break;\n' +
    '    }\n' +
    '  }\n' +
    '}',
};

export default RadixSort;
