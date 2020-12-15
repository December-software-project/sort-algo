const countingSort = (arr) => {
  let receivedArr = arr;
  let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < receivedArr.length; i++) {
    countArr[receivedArr[i].height]++;
  }
  let id = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] !== 0) {
      receivedArr.push({
        id: id,
        height: i,
        isShown: true,
      });
      id++;
      countArr[i]--;
    }
  }
  return receivedArr;
};

export default countingSort;
