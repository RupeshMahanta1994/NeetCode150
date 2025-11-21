//Brute Force
// function validAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }
//Optimised
function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let mapS = {},
    mapT = {};
  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = (mapS[s[i]] || 0) + 1;
    mapT[t[i]] = (mapT[t[i]] || 0) + 1;
  }
  for (const key in mapS) {
    if (mapS[key] !== mapT[key]) {
      return false;
    }
  }
  return true;
}

let s = "racejacar",
  t = "carrace";
console.log(validAnagram(s, t));
