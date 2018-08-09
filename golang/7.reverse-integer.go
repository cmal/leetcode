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
func reverse(x int) int {
    	var rem, quot, y int
	quot = x
	for quot != 0 {
		rem = quot % 10
		quot = quot / 10
		if ((y > 0 && y > (math.MaxInt32 - rem) / 10) ||
			(y < 0 && y < (math.MinInt32 - rem) / 10)) {
			y = 0
			break;
		} else {
			y = y * 10 + rem
		}
	}
	return y
}
