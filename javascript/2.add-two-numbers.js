/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.68%)
 * Total Accepted:    486K
 * Total Submissions: 1.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

function add(d1, d2) {
  if (d1 + d2 > 9) {
    return [1, d1 + d2 - 10];
  } else {
    return [0, d1 + d2];
  }
}

// var addTwoNumbers = function(l1, l2) {
//   var sum;
//   var head, curr;
//   var carry = 0;
//   while (l1) {
//     sum = add(l1.val, l2.val + carry);
//     carry = sum[0];
//     if (!head) {
//       head = new ListNode(sum[1]);
//       curr = head;
//     } else {
//       curr.next = new ListNode(sum[1]);
//       curr = curr.next;
//     }
//     l1 = l1.next;
//     l2 = l2.next;
//   }
//   if (carry) {
//     curr.next = new ListNode(sum[1]);
//   }
//   return head;
// };


var addTwoNumbers = function(l1, l2) {
  var sum;
  var res = [];
  var carry = 0;

  for (var i = 0; i < l1.length; i ++) {
    sum = add(l1[i], l2[i] + carry);
    carry = sum[0];
    res.push(sum[1]);
  }
  if (carry) {
    res.push(carry);
  }
  return res;
}

exports.addTwoNumbers = addTwoNumbers;
