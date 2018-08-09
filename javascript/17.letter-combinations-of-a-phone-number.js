/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (37.52%)
 * Total Accepted:    262.4K
 * Total Submissions: 698.1K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterMapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

var combRecur = function(index, len, arr, res, s) {
  if (index == len) {
    res.push(s);
    return;
  }

  arr[index].split('').map(function(item) {
    combRecur(index + 1, len, arr, res, s + item);
  });
  
}

var letterCombinations = function(digits) {
  var res = [];
  if (!digits.length) return res;
  var arr = digits.split('').map(function(item) {
    return letterMapping[item];
  });
  combRecur(0, digits.length, arr, res, '');
  return res;
};


exports.letterCombinations = letterCombinations;
