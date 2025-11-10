//Normal Sort
function topKFrequent(nums, k) {
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  //convert the freq map to array
  let arr = Object.entries(freq).map(([key, freq]) => [freq, parseInt(key)]);
  arr.sort((a, b) => b[0] - a[0]);
  return arr.slice(0, k).map((item) => item[1]);
}

//bucket sort
// function topKFrequent(nums, k) {
//   let mpp = {};
//   for (let num of nums) {
//     mpp[num] = (mpp[num] || 0) + 1;
//   }
//   let bucket = Array.from({ length: nums.length + 1 }, () => []);
//   for (let [key, value] of Object.entries(mpp)) {
//     bucket[value].push(key);
//   }
//   let res = [];
//   for (let i = bucket.length - 1; i > 0 && res.length < k; i--) {
//     if (bucket[i].length > 0) {
//       res.push(...bucket[i]);
//     }
//   }
//   return res;
// }

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [-1, 2]
