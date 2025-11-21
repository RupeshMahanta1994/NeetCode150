//Three pass
// function productOfSelf(nums) {
//   let prefixVal = 1;
//   let prefix = [];
//   let suffixVal = 1;
//   let suffix = [];
//   //suffix prod
//   for (let i = nums.length - 1; i >= 0; i--) {
//     suffix[i] = suffixVal;
//     suffixVal *= nums[i];
//   }
//   //perfix prod
//   for (let i = 0; i < nums.length; i++) {
//     prefix[i] = prefixVal;
//     prefixVal *= nums[i];
//   }

//   //construct the result
//   let res = [];
//   for (let i = 0; i < prefix.length; i++) {
//     for (let j = 0; j < suffix.length; j++) {
//       res[i] = prefix[i] * suffix[i];
//     }
//   }
//   return res;
// }
//Two pass
function productOfSelf(nums) {
  let res = [1];
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}

let nums = [1, 2, 3, 4];
console.log(productOfSelf(nums)); //Output: [24,12,8,6]
