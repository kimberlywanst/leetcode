// question: https://leetcode.com/problems/reverse-linked-list/
// submission: https://leetcode.com/submissions/detail/706227891/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// METHOD 1: ITERATIVE
// time complexity: O(n) -> iterate each element in list once
// space complexity: O(1) -> store 3 pointers

// singly-linked list does not store node's previous value
// we would need to create 'previous' variable to keep track of past nodes during traversal

// also need 'next' variable to temporarily store next node's address
// otherwise would not have reference on where to go next in traversal

var reverseList = function (head) {
  // initialise pointers
  let current = head;
  let previous = null;
  let next = null;

  // while there are still nodes in the list
  while (current !== null) {
    next = current.next; // temporarily store next node
    current.next = previous; // change pointer direction
    previous = current; // before move to next node, set previous to current as reference
    current = next; // move to next node
  }

  // new head is last previous
  return previous;
};
