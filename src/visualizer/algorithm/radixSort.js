// code adapted from https://www.tutorialspoint.com/radix-sort-in-javascript
const radixSort = (arr) => {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);
    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
};
radixSort([5, 3, 88, 235, 65, 23, 4632, 234]);
