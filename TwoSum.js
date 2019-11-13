/**
 * Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force- O(n2)
var twoSumBruteForce = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i +1; j < nums.length; j++){
      if (nums[j] === target - nums[i]) {
          return [i, j];
      }
    }
  }
};

// With Hash Map- O(n)
var twoSumHashMap = function(nums, target) {
  let hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap[complement]) {
        return [i,hashMap[complement]];
    }
  }
}

// Improved Hash Map with Set - O(n)
var twoSumHashMapV2 = function(nums, target) {
  let set = new Set();
  let complement;
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (set.has(complement)) {
        return true;
    }
    return false;
  }
}