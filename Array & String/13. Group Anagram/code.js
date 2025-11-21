//Bruteforce
// function groupAnagram(s) {
//   let res = {};
//   for (let c of s) {
//     let key = c.split("").sort().join("");
//     if (!res[key]) {
//       res[key] = [];
//     }
//     res[key].push(c);
//   }
//   return Object.values(res);
// }
//Optimised
function groupAnagram(str) {
  let res = {};
  for (let s of str) {
    let count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let key = count.join(",");
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(s);
  }
  return Object.values(res);
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagram(strs));
//Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
