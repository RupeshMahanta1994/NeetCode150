let arr = [2, 5, 1, 3, 0];

function largestElement(arr) {
  let res = 0;
  for (let num of arr) {
    if (num > res) res = num;
  }
  return res;
}
console.log(largestElement(arr));
