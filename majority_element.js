/**
 * https://leetcode.com/problems/majority-element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dictionary = {};
  const appearsToBeMajority = (nums.length / 2).toFixed();
  let appears = nums[0];
  for (let i = 0; i <= nums.length; i++) {
    if (dictionary[nums[i]]) {
      dictionary[nums[i]] += 1;
      if (dictionary[nums[i]] == appearsToBeMajority) {
        appears = nums[i];
        break;
      };
    } else dictionary[nums[i]] = 1;
  }
  return appears;
};

const nums = [6,5,5];
console.log(majorityElement(nums));
