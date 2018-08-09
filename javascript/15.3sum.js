/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.90%)
 * Total Accepted:    356.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(ns) {
  var nums = ns.sort(function(a, b) {
    return a - b;
  });

  var len = nums.length;
  var res = [];
  var prev = {};
  for (var i = 0; i < len; i ++) {
    if (nums[i] > 0) break;
    if (prev.a == nums[i]) continue;
    var j = i + 1;
    var k = len - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      prev.b = nums[j];
      prev.c = nums[k];
      prev.a = nums[i];
      if (!sum) {
        res.push([nums[i], nums[j], nums[k]]);
        do {
           j ++;
        } while (prev.b == nums[j]);
        do {
           k --;
        } while (prev.c == nums[k])
      } else if (sum > 0) {
        do {
           k --;
        } while (prev.c == nums[k])
      } else if (sum < 0) {
        do {
           j ++;
        } while (prev.b == nums[j])
      }
    }
  }
  return res;
};
