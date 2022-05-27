// question: https://leetcode.com/problems/linked-list-cycle/
// submission: https://leetcode.com/submissions/detail/705502337/
// explanation: https://www.youtube.com/watch?v=gBTe7lFR3vc

// using fast & slow pointers (hare & tortoise)
// fast pointer moves 2X slow pointer
// time complexity: O(n) -> have to traverse the entire linked list before pointers meet
// space complexity: O(1) -> store pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// pos = index of node that is connected from tail
// no cycle: pos = -1
// cycle: pos >= 0

var hasCycle = function (head) {
  // pointers at same starting point
  let fastPointer = head;
  let slowPointer = head;

  // current node & next node have value
  // cyclic linked list doesn't have tail pointing to null
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next; // moves 2X faster
    slowPointer = slowPointer.next;

    // fastPointer has reached slowPointer after moving
    if (fastPointer === slowPointer) return true;
  }

  // not a cyclic list
  // tail pointer is null
  return false;
};
