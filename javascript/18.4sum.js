/*
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (28.01%)
 * Total Accepted:    170.3K
 * Total Submissions: 607.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */


var fourSum = function(ns, target) {
  var nums = ns.sort(function(a, b) {
    return a - b;
  });

  // console.log(nums);

  var len = nums.length;
  var res = [];
  var prev = {};
  for (var i = 0; i < len; i ++) {
    if (prev.a == nums[i]) continue;
    prev.a = nums[i];
    delete prev.b;
    delete prev.c;
    delete prev.d;
    for (var j = i + 1; j < len; j ++) {
      if (prev.b == nums[j]) continue;
      prev.b = nums[j];
      delete prev.c;
      delete prev.d;
      var k = j + 1;
      var l = len - 1;
      while (k < l) {
        var sum = nums[i] + nums[j] + nums[k] + nums[l];
        // console.log(i, j, k, l);
        // console.log(nums[i], nums[j], nums[k], nums[l]);
        prev.c = nums[k];
        prev.d = nums[l];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          do {
            k ++;
          } while (prev.c == nums[k]);
          do {
            l --;
          } while (prev.d == nums[l])
        } else if (sum > target) {
          do {
            l --;
          } while (prev.d == nums[l])
        } else if (sum < target) {
          do {
            k ++;
          } while (prev.c == nums[k])
        }
      }
      
    }
  }
  return res;

};

exports.fourSum = fourSum;
