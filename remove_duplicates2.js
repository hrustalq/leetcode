/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears at most twice.
 * The relative order of the elements should be kept the same.
 * Return k after placing the final result in the first k slots of nums.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let current = nums[0];
  let k = 1;
  let duplicatesCount = 0;
  for (let i = 1; i < nums.length; i++) {
    if (current !== nums[i]) {
      duplicatesCount = 0;
      nums[k] = nums[i];
      current = nums[i];
      k ++;
    }
    else if (current == nums[i] && duplicatesCount < 1) {
      nums[k] = nums[i];
      current = nums[i];
      duplicatesCount ++;
      k ++;
    }
  }
  return k;
};
