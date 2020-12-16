const insertionSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  let length = receivedArr.length;
  for (let i = 1; i < length; i++) {
    let key = receivedArr[i];
    let j = i - 1;
    let visitedLoop = false;
    while (j >= 0 && receivedArr[j].height > key.height) {
      receivedArr[j + 1] = receivedArr[j];
      animationArr.push([j + 1, j, true]);
      j = j - 1;
      visitedLoop = true;
    }
    if (!visitedLoop) {
      animationArr.push([i, i - 1, false]);
    }
    receivedArr[j + 1] = key;
  }
  return animationArr;
};
export default insertionSort;
