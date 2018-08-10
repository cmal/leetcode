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

  var base = numRows + (numRows - 2);

  // var numCols = getNumCols(s.length, base, numRows);

  var obj = {};

  var row = 0, col = 0;

  for (var i = 0 ; i < s.length; i ++) {
    obj[row + ',' + col] = s[i];
    if (i % base < numRows - 1) {
      row = (row + 1) % numRows;
    } else {
      row --;
      col ++;
    }
  }

  var res = [];

  // for (var i = 0; i < numRows; i ++) {
  //   for (var j = 0; j < numCols; j ++) {
  //     var c = arr[i + ',' + j];
  //     if (c) {
  //       res += c;
  //     }
  //   }
  // }

  Object.keys(obj).sort(function(a, b) {
    var xyA = a.split(',');
    var xyB = b.split(',');

    if (xyA[0] == xyB[0]) {
      return xyA[1] - xyB[1];
    } else {
      return xyA[0] - xyB[0];
    }
    
  }).forEach(function(item) {
    res.push(obj[item]);
  });
  
  return res.join('');
}

exports.getNumCols = getNumCols;
exports.convert = convert;
