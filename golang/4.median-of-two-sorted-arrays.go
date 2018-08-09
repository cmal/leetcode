/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (23.12%)
 * Total Accepted:    254.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * Example 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * 
 * Example 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */

func IsInteger(x float64) bool {
	var y int
	y = int(x)
	return float64(y) == x
}

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	l1 := len(nums1)
	l2 := len(nums2)
	lm := float64(l1 + l2) / 2.0 // middle length
	lmInt := int(lm)
	isInt := IsInteger(lm)
	var p1, p2 int // pos of nums1, nums2
	var x float64
	if (l1 == 0 && l2 == 0) {
		return 0.0
	}
	var n1, n2 int
	if isInt {
		// even /2
		// take 2: lm - 1, lm
		// printLn("isInt", p1, p2, l1, l2)
		for ;; {
			// printLn(p1, p2, l1, l2)
			if p1 < l1 {
				n1 = nums1[p1]
			}

			if p2 < l2 {
				n2 = nums2[p2]
			}

			if (p1 + p2) == (lmInt - 1) {
				// printLn("add the first", p1, p2, n1, n2)
				if p1 < l1 && (p2 >= l2 || n1 < n2) {
					x += float64(n1)
				} else {
					x += float64(n2)
				}
				// printLn("x = ", x)
			} else if (p1 + p2) == lmInt {
				// printLn("add the second", p1, p2, n1, n2)
				if p1 < l1 && (p2 >= l2 || n1 < n2) {
					x += float64(n1)
				} else {
					x += float64(n2)
				}
				// printLn("x = ", x)

				x = x / 2
				break
			}

			if p1 < l1 && (p2 >= l2 || n1 < n2) {
				p1 ++
			} else {
				p2 ++
			}
		}
	} else {
		// odd
		// take 1: lmInt
		// printLn("notInt", p1, p2, l1, l2)
		for ;; {
			if p1 < l1 {
				n1 = nums1[p1]
			}

			if p2 < l2 {
				n2 = nums2[p2]
			}

			if (p1 + p2) == lmInt {
				if p1 < l1 && (p2 >= l2 || n1 < n2) {
					x = float64(n1)
				} else {
					x = float64(n2)
				}
				break
			}

			if p1 < l1 && (p2 >= l2 || n1 < n2) {
				p1 ++
				// n1 = nums1[p1]
			} else {
				p2 ++
				// n2 = nums2[p2]
			}

		}
	}
	return x
    
}
