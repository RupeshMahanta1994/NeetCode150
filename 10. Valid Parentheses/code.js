//Brute Force
// function validParantheses(str) {
//   while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
//     str = str.replace("()", "");
//     str = str.replace("{}", "");
//     str = str.replace("[]", "");
//   }
//   return str === "";
// }
//Optimised
function validParantheses(str) {
  let seen = [];
  let openToClose = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (c of str) {
    if (openToClose[c]) {
      if (seen.length > 0 && seen.at(-1) === openToClose[c]) {
        seen.pop();
      } else {
        return false;
      }
    } else {
      seen.push(c);
    }
  }
  return seen.length === 0;
}

let str = "()";
console.log(validParantheses(str));
