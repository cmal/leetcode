/*
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (27.38%)
 * Total Accepted:    208.8K
 * Total Submissions: 761K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var getNumCols = function (len, base, numRows) {
  var groupCols = numRows - 1;
  var numberOfGroup = parseInt(len / base);
  var mod = len % base;
  var residue = Math.max(1, mod - numRows + 1);
  return groupCols * numberOfGroup + residue;
}

var convert = function(s, numRows) {
  if (numRows == 1 || s.length <= numRows) return s;

  var base = numRows * 2 - 2;
  var numCols = getNumCols(s.length, base, numRows);
  // var numCols = s.length - numRows + 1;
  var arr = [];
  var row = 0, col = 0;

  for (var i = 0 ; i < s.length; i ++) {
    arr[row * numCols + col] = s[i];
    if (i % base < numRows - 1) {
      row = (row + 1) % numRows;
    } else {
      row --;
      col ++;
    }
  }
  return arr.join('');
}

exports.getNumCols = getNumCols;
exports.convert = convert;
