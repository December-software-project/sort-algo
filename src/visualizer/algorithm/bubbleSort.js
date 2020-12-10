function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  for (let i = receivedArr.length - 1; i >= 0; i--) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        animationArr.push([j + 1, j]);
        swap(j, j + 1, arr);
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return animationArr;
};

export default bubbleSort;