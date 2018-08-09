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
func Contains(s string, c rune) (bool, int) {
	for index, r := range s {
		if c == r {
			return true, index
		}
	}
	return false, -1
}

func lengthOfLongestSubstring(s string) int {
	l := len(s)
	if (l == 0) {
		return 0
	} else if (l == 1) {
		return 1
	}
	length, current := 1, 1
	var subs string
	for beg, end := 0, 1; end < l; {
		subs = s[beg:end]
		b, index := Contains(subs, rune(s[end]))
		if b {
			current = len(subs) - index
			beg = beg + index + 1
			end ++
		} else {
			current ++
			if current > length {
				length = current
			}
			end ++
		}
	}

	return length
}
