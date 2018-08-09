/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (34.36%)
 * Total Accepted:    373.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */

Array.prototype.peek = function() {
  return this[this.length - 1];
}

var pair = {
  ')' : '(',
  ']' : '[',
  '}' : '{'
}

var isValid = function(s) {
  var stack = [];

  for (var i = 0; i < s.length; i ++) {
    if (!pair[s[i]]) {
      stack.push(s[i]);
    } else if (stack.peek() == pair[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
    
  return stack.length === 0;
};


exports.isValid = isValid;
