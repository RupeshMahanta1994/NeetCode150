// function threeSum(nums) {
//   let res = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
//         }
//       }
//     }
//   }
//   return Array.from(res).map((item) => JSON.parse(item));
// }
//Optimised
function threeSum(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total > 0) {
        right--;
      } else if (total < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          l++;
        }
      }
    }
  }
  return res;
}
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); //Output: [[-1,-1,2],[-1,0,1]]
