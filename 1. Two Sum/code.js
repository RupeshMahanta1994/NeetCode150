//Brute force
// function TwoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       sum = nums[i] + nums[j];
//       if (sum == target) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
//   return null;
// }
function TwoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
let nums = [1, 2, 3, 4, 5, 6, 7];
let nums1 = [];
console.log(TwoSum(nums, 9));
