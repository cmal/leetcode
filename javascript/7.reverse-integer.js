/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.38%)
 * Total Accepted:    400.7K
 * Total Submissions: 1.6M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res;
  if (x < 0) {
    res = -Math.abs(x).toString().split('').reverse().join('');
  } else {
    res = +x.toString().split('').reverse().join('');
  }
  if (res > Math.pow(2,31) - 1 || res < -Math.pow(2,31)) {
    return 0
  }
  return res;
};
