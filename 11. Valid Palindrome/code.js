function validCharacter(char) {
  const regex = /^[a-zA-Z0-9]$/;
  return regex.test(char);
}
function validPalindrome(s) {
  let l = 0,
    r = s.length - 1;
  s = s.toLowerCase();
  while (l < r) {
    while (l < r && !validCharacter(s[l])) {
      l++;
    }
    while (l < r && !validCharacter(s[r])) {
      r--;
    }
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
// Test
let s = "Was it a car or a cat I saw?";
console.log(validPalindrome(s)); // Output: true
