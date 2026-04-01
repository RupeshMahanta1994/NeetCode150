let nums = [1, 2, 4, 7, 7, 5];

function secondLargest(nums) {
  let f = 0,
    s = 0;
  for (let num of nums) {
    if (num > f) {
      s = f;
      f = num;
    }
    if (num > s && num < f) {
      s = num;
    }
  }
  return s;
}
console.log(secondLargest(nums));
