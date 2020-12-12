const countingSort = (arr) => {
  let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (const num of arr) {
    countArr[num] += 1;
  }

  return countArr;
};

export default countingSort;
