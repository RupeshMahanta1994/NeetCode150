function maxSubarray(nums) {
  if (nums.length == 0) {
    return 0;
  }
  let sum = 0;
  let res = nums[0];
  for (let num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    res = Math.max(sum, res);
  }
  return res;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(nums));
