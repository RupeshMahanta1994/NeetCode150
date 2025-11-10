function twoSum2(numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    let currSum = numbers[l] + numbers[r];
    if (currSum < target) {
      l++;
    } else if (currSum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
}

let numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum2(numbers, target));
//Output: [1,2]
