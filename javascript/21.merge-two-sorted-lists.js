/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (42.44%)
 * Total Accepted:    385.2K
 * Total Submissions: 905.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {

  var len1 = l1.length;
  var len2 = l2.length;
  // if (!len1) return l2;
  // if (!len2) return l1;
  var index1 = 0;
  var index2 = 0;

  var res = [];

  while(true) {
    if (index1 == len1 && index2 == len2) break;
    else if (index1 == len1) {
      res.push(l2[index2]);
      index2 ++;
    }
    else if (index2 == len2) {
      res.push(l1[index1]);
      index1 ++;
    }
    else if (l1[index1] <= l2[index2]) {
      res.push(l1[index1]);
      index1 ++;
    }
    else {
      res.push(l2[index2]);
      index2 ++;
    }
  }

  return res;
};

exports.mergeTwoLists = mergeTwoLists;
