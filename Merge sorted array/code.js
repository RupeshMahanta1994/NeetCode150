function merge(nums1, m, nums2, n) {
  i = m - 1; //pointer to actual num nums1
  j = n - 1; //pointer to last element nums2
  k = m + n - 1; //pointer to last element
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0, 0, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6, 7, 11, 15, 20];
let n = 7;
merge(nums1, m, nums2, n);
console.log(nums1);
