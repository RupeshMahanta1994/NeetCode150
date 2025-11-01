function mergeInterval(intervals) {
  intervals.sort((a, b) => a[0] - a[0]);
  let res = [intervals[0]];
  let start = 0,
    end = 1;
  for (let current of intervals.slice(1)) {
    if (current[start] <= res.at(-1)[end]) {
      res.at(-1)[end] = Math.max(current[end], res.at(-1)[end]);
    } else {
      res.push(current);
    }
  }
  return res;
}
let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(mergeInterval(intervals)); //Output: [[1,5],[6,7]]
