function numberOf1bits(n) {
  let res = 0;
  while (n !== 0) {
    res += n & 1;
    n = n >> 1;
  }
  return res;
}

let n = 11;
console.log(numberOf1bits(n)); //output=3
