const insertionSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  let length = receivedArr.length;
  for (let i = 1; i < length; i++) {
    let key = receivedArr[i];
    let j = i - 1;
    while (j >= 0 && receivedArr[j].height > key.height) {
      receivedArr[j + 1] = receivedArr[j];
      animationArr.push([j + 1, j]);
      j = j - 1;
    }
    receivedArr[j + 1] = key;
  }
  return animationArr;
};
export default insertionSort;
