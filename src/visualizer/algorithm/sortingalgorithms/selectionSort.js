import { swap } from './swap';

const selectionSort = (arr) => {
  let receivedArr = arr;
  let animationArr = [];
  for (let i = 0; i < receivedArr.length - 1; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < receivedArr.length; j++) {
      animationArr.push([smallestIdx, j, false]);
      if (receivedArr[j].height < receivedArr[smallestIdx].height) {
        smallestIdx = j;
      }
    }
    swap(smallestIdx, i, receivedArr);
    animationArr.push([smallestIdx, i, true]);
  }
  return animationArr;
};

export default selectionSort;
