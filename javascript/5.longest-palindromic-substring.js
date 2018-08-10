/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.33%)
 * Total Accepted:    312.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */

var isPalindromic = function(s) {
  var beg = 0;
  var end = s.length - 1;
  while (end > beg) {
    if (s[beg] != s[end]) return false;
    beg++;
    end++;
  }
  return true;
}

var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  var beg = 0;
  var end = 1;
  var maxPalindrome = '';

  while (end <= s.length) {
    if (isPalindromic(s.slice(beg, end))) {
      
    }
  }
  
};


exports.isPalindromic = isPalindromic;
exports.longestPalindrome = longestPalindrome;
