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
class Solution {

    public int getNumCols(int len, int base, int numRows) {

        if (len < base) {
            return len - numRows + 1;
        }

        int numCols = len / base * (numRows - 1);
        int mod = len % base;
        if (mod == 0) {
            return numCols;
        } else if (mod <= numRows) {
            return numCols + 1;
        } else {
            return numCols + (mod - numRows) + 1;
        }
    }
    
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        
        int len = s.length();

        if (len <= numRows) {
            return s;
        }
        int base = numRows + (numRows - 2);
        int numCols = getNumCols(len, base, numRows);
        char[][] arr = new char[numRows][numCols];
        int row = 0;
        int col = 0;
        for (int i = 0 ; i < len; i ++) {
            arr[row][col] = s.charAt(i);
            if (i % base < numRows - 1) {
                row = (row + 1) % numRows;
            } else {
                row --;
                col ++;
            }
        }

        char[] res = new char[len];
        int i = 0;
        for (int nrow = 0; nrow < numRows; nrow ++) {
            for (int ncol = 0; ncol < numCols; ncol ++) {
                char c = arr[nrow][ncol];
                if (c != 0) {
                    res[i++] = c;
                }
            }
        }
        return new String(res);
    }
}
