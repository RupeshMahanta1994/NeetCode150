var longestPalindrome = function (s) {
  let start = 0,
    maxLength = 1;
  let expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return [l + 1, r - 1];
  };
  for (let i = 0; i < s.length; i++) {
    //Odd length
    let [l1, r1] = expand(i, i);
    let len1 = r1 - l1 + 1;
    //even length
    let [l2, r2] = expand(i, i + 1);
    let len2 = r2 - l2 + 1;
    if (len1 > maxLength) {
      start = l1;
      maxLength = len1;
    }
    if (len2 > maxLength) {
      start = l2;
      maxLength = len2;
    }
  }
  return s.slice(start, start + maxLength);
};
let s = "cbbd";
console.log(longestPalindrome(s));
//Output: "bab"
