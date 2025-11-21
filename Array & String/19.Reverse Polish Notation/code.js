function rpn(token) {
  let operators = "+-/*";
  let seen = [];
  for (let k of token) {
    if (!operators.includes(k)) {
      seen.push(k);
    } else {
      let a = parseInt(seen.pop());
      let b = parseInt(seen.pop());
      switch (k) {
        case "+":
          seen.push(a + b);
          break;
        case "-":
          seen.push(b - a);
          break;
        case "*":
          seen.push(a * b);
          break;
        case "/":
          seen.push(b / a);
      }
    }
  }
  return seen.pop();
}

let token = ["2", "1", "+", "3", "*"];
console.log(rpn(token));
