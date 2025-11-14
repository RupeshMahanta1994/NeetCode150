function sumOf2Int(a, b) {
  while (b !== 0) {
    //calcualte carry
    let carry = (a & b) << 1;
    a = a ^ b;
    //pass the carry
    b = carry;
  }
  return a;
}
let a = 1,
  b = 2;
console.log(sumOf2Int(a, b)); //Output: 3
