/**
 * https://leetcode.com/problems/jump-game/
 * You are given an integer array nums. You are initially positioned at the array's
 * first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * Constraints:
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 105
 */
const canJump = (arr) => {
  const length = arr.length;
  if (length <= 1) return true;
  for (let i = 0, max = arr[0]; i < length; i++) {
    let current = arr[i];
    if (max <= i && !current) return false;
    if (i + current > max) max = i + current;
    if (max >= length - 1) return true;
  }
};
