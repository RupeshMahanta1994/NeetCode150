//inbuilt function
// function reverseString(s) {
//   return s.trim().split(/\s+/).reverse().join(" ");
// }
//Two pointer
function reverseString(s) {
  let arr = s.trim().split(/\s+/);
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr.join(" ");
}

let s = "the sky is blue";
console.log("Reverse string", reverseString(s)); // Output: "blue is sky the"

let s2 = "  hello world  ";
console.log("Reverse string", reverseString(s2)); // Output: "world hello"

let s3 = "a good   example";
console.log("Reverse string", reverseString(s3)); // Output: "example good a"
