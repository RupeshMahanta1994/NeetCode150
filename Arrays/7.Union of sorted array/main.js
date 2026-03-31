class Solution {
  union(arr1, arr2, n, m) {
    let i = 0,
      j = 0;
    let union = [];
    while (i < n && j < m) {
      if (arr1[i] < arr2[j]) {
        if (union.length == 0 || union[union.length - 1] !== arr1[i]) {
          union.push(arr1[i]);
        }
        i++;
      } else if (arr2[j] < arr1[i]) {
        if (union.length == 0 || union[union.length - 1] != arr2[j]) {
          union.push(arr2[j]);
        }
        j++;
      } else {
        if (union.length == 0 || union[union.length - 1] !== arr1[i]) {
          union.push(arr1[i]);
        }
        i++;
        j++;
      }
    }
    while (i < n) {
      union.push(arr1[i]);
      i++;
    }
    while (j < m) {
      union.push(arr2[j]);
      j++;
    }
    return union;
  }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];
let n = arr1.length,
  m = arr2.length;
const obj = new Solution();
console.log(obj.union(arr1, arr2, n, m));
