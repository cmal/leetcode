/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (23.12%)
 * Total Accepted:    254.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * Example 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * 
 * Example 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var isOdd = function(num) {
  return num % 2 == 1;
}

var findMedianSortedArray = function(nums) {
  var len = nums.length;
  if (isOdd(len)) {
    return nums[parseInt(len/2)];
  } else {
    return (nums[len/2 - 1] + nums [len/2]) / 2;
  }
}

// find the number of elements of sorted array "nums",
// whose value is less than or equal to num.
var findIndex = function(num, nums, startIndex, endIndex) {
  startIndex = startIndex || 0;
  endIndex = endIndex || nums.length;
  if (num < nums[startIndex]) return startIndex;

  if (endIndex - startIndex == 1) return startIndex;

  var index = startIndex + parseInt((endIndex - startIndex) / 2);
  
  if (nums[index] > num) {
    return findIndex(num, nums, startIndex, index);
  } else {
    return findIndex(num, nums, index, endIndex);
  }
}

// the final export function
var findMedianSortedArrays = function(nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;

  var indices = halve(nums1, nums2);

  var i = indices[0];
  var j = indices[1];

};
