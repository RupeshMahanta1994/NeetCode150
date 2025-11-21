function contingBits(n) {
  //create a dp array
  let dp = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
}
let n = 5;
console.log(contingBits(n));
