//Brute force
// function maxProfit(prices) {
//   let maxGain = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + i; j < prices.length; j++) {
//       let currentProfit = prices[j] - prices[i];
//       maxGain = Math.max(maxGain, currentProfit);
//     }
//   }
//   return maxGain;
// }
//Optimised
function maxProfit(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

let prices = [1, 2, 3, 5, 4];

console.log(maxProfit(prices));
