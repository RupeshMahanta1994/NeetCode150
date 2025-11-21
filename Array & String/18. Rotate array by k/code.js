var rotate = function (nums, k) {
  let n = nums.length;
  if (n === 0) return;
  k = k % n;
  if (k === 0) return;

  function reverse(l, r) {
    while (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++, r--;
    }
  }
  reverse(n - k, n - 1);
  reverse(0, n - k - 1);
  reverse(0, n - 1);
  return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
k = 16;
console.log(rotate(nums, k));
