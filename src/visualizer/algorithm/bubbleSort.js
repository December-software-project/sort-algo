import { swap } from './swap';

const bubbleSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  for (let i = receivedArr.length - 1; i >= 0; i--) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (receivedArr[j].height > receivedArr[j + 1].height) {
        swap(j, j + 1, receivedArr);
        animationArr.push([j + 1, j]);
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
