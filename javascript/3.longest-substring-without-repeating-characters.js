/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (24.72%)
 * Total Accepted:    478.7K
 * Total Submissions: 1.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * 
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
 * answer must be a substring, "pwke" is a subsequence and not a substring.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length || s.length == 1) return s;
  var subs = s[0];
  var pointer = 0;
  var index;
  var longestSubs = subs;
  while (pointer < s.length) {
    pointer ++;
    index = subs.split('').indexOf(s[pointer]);
    if (index == -1) {
      subs += s[pointer];
    } else {
      if (longestSubs.length < subs.length) {
        longestSubs = subs;
      }
      subs = subs.substring(index + 1) + s[pointer];
    }
  }
  return longestSubs.length;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
