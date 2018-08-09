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

func IsParlindrome(s string) bool {
	l := len(s)
	if (l == 0) {
		return true
	}
	var index int
	for ;index <= l / 2; index++ {
		if (s[index] != s[l - 1 - index]) {
			return false
		}
	}
	return true
}

func longestPalindrome(s string) string {
	ls := len(s)

	if (ls == 0) {
		return s
	}

	// lsub = len(sub), always test lsub <= ls
	// this is a high water mark
	var lsub int
	lsub = 0
	var tmpsub string

	var beg, end int
	var sub string

	for beg < ls - lsub {

		end = ls
		// printLn("beg end lsub:", beg, end, lsub)

		for ;end >= beg + lsub; end -- {
			sub = s[beg:end]
			// printLn("beg, end, lsub, sub:", beg, end, lsub, sub)
			if (IsParlindrome(sub) && lsub < len(sub)) {
				lsub = len(sub)
				tmpsub = sub
				break
			}
		}
		// printLn("beg ++")
		beg ++

	}

	return tmpsub
    
}
