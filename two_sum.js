/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
*/
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const t = target - nums[i];
    if(hash[t] !== undefined) {
      return [hash[t], i]
    } else hash[nums[i]] = i;
  }
  return []
}
