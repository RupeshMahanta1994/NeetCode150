function missingNumber(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  return res;
}

let nums = [3, 0, 1];

console.log(missingNumber(nums)); //Output: 2
