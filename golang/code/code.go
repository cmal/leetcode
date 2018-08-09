package code

import (
	"fmt"
)

var printLn = fmt.Println
type ListNode struct {
	Val int
	Next *ListNode
}

func Sum(v1 int, v2 int, carry int) (int, int) {
	vsum := (v1 + v2) % 10
	vcarry := carry

	if (vsum != (v1 + v2)) {
		vsum = vsum + vcarry
		vcarry = 1
	} else if (vsum == 9 && vcarry == 1) {
		vsum = 0
		// vcarry = 1
	} else {
		vsum = vsum + vcarry
		vcarry = 0
	}

	// sum, carry
	return vsum, vcarry
}

func Main(l1 *ListNode, l2 *ListNode) *ListNode {
	var l *ListNode
	var slice = make([]int, 0)
	var v1, v2, vsum, vcarry int

	for tl1, tl2 := l1, l2; tl1 != nil || tl2 != nil; {
		if tl1 != nil {
			v1 = tl1.Val
		} else {
			v1 = 0
		}

		if tl2 != nil {
			v2 = tl2.Val
		} else {
			v2 = 0
		}

		vsum, vcarry = Sum(v1, v2, vcarry)

		if tl1 != nil {
			tl1 = tl1.Next
		}
		if tl2 != nil {
			tl2 = tl2.Next
		}

		slice = append(slice, vsum)
		// fmt.Println(slice)

	}

	if vcarry == 1 {
		slice = append(slice, 1)
	}

	l = &ListNode{
		Val: slice[len(slice) - 1],
		Next: nil,
	}

	for i := len(slice) - 2; i >= 0 ; i -- {
		l = &ListNode{
			Next: l,
			Val: slice[i],
		}
		// fmt.Println(l, l.Next)
	}

	return l
}

type List []*ListNode


func Contains(s string, c rune) (bool, int) {
	for index, r := range s {
		if c == r {
			return true, index
		}
	}
	return false, -1
}

func LengthOfLongestSubstring(s string) int {
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
			// fmt.Println("contains", subs, rune(s[end]))
			current = len(subs) - index
			beg = beg + index + 1
			end ++
		} else {
			// fmt.Println("not contains", subs, rune(s[end]))
			current ++
			if current > length {
				length = current
			}
			end ++
		}
	}

	return length
}


// func main() {
// 	// l1 := make([]*ListNode, 3)
// 	// l2 := make([]*ListNode, 3)

// 	var l1,l2 *ListNode
// 	a3 := ListNode{Val: 3, Next: nil}
// 	a2 := ListNode{Val: 4, Next: &a3}
// 	a1 := ListNode{Val: 2, Next: &a2}

// 	l1 = &a1

// 	b3 := ListNode{Val: 4, Next: nil}
// 	b2 := ListNode{Val: 6, Next: &b3}
// 	b1 := ListNode{Val: 5, Next: &b2}

// 	l2 = &b1

// 	// fmt.Println(test(l1, l2))
// 	fmt.Println(l1, l2)
// }


func IsInteger(x float64) bool {
	var y int
	y = int(x)
	return float64(y) == x
}


func FindMedianSortedArrays(nums1 []int, nums2 []int) float64 {
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

				x = x / 2.0
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


// empty string, single char string both returns true
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

func LongestParlindrome(s string) string {
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
