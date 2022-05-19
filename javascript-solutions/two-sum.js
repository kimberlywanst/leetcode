// question: https://leetcode.com/problems/two-sum/
// submission: https://leetcode.com/submissions/detail/702668714/

// using hash map to store matching pairs: nums[i] + complement = target
// array is unsorted
// time-complexity: O(n) -> loop through each num once
// space-complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // store matching pairs found
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // complement found in hashMap
    if (hashMap.has(complement)) {
      // matching pair exists
      return [i, hashMap.get(complement)];
      // no complement, add num to hashMap
    } else {
      hashMap.set(nums[i], i);
    }
  }
  // no matching pairs add to target
  return [];
};
