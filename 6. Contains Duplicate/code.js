// function containsDuplicate(nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] == nums[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }
function containsDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }
  return false;
}
let nums = [1, 3, 4, 2, 10];
console.log(containsDuplicate(nums));
