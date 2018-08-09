/*
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (32.21%)
 * Total Accepted:    191.1K
 * Total Submissions: 592.4K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(ns, target) {
  var nums = ns.sort(function(a, b) {
    return a - b;
  });

  var len = nums.length;
  var initSum = nums[0] + nums[1] + nums[2];
  var min = {
    sum: initSum,
    diff: Math.abs(initSum - target)
  };
  for (var i = 0; i < len; i ++) {
    var j = i + 1;
    var k = len - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      var diff = Math.abs(sum - target);
      if (diff == 0) {
        return sum;
      }
      if (diff < min.diff) {
        min.diff = diff;
        min.sum = sum;
      }
      if (sum > target) {
        k --;
      } else {
        j ++;
      }
    }
  }
  return min.sum;

};

exports.threeSumClosest = threeSumClosest;
