/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        for (let j = arr.length - 1; j > i; j--) {
          arr[j] = arr[j - 1];
        }
        i++;
      }
    }
  }
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};
