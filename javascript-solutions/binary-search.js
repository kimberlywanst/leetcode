// question: https://leetcode.com/problems/binary-search/
// submission: https://leetcode.com/submissions/detail/703309052/

// binary search
// time complexity: O(log n) -> elements reduce to half with each binary search
// space complexity: O(1) -> store current value

/**
 * @param {number[]} nums => sorted in ascending, postive/negative integers
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    // start binary search from middle of array
    // get median index of array
    let median = Math.floor((leftPointer + rightPointer) / 2);
    let current = nums[median];

    // current too high -> ignore right half of array
    if (current > target) {
      rightPointer = median - 1;

      // current too low -> ignore left half of array
    } else if (current < target) {
      leftPointer = median + 1;

      // current === target
    } else {
      return median;
    }
  }
  // target not found in array
  return -1;
};
