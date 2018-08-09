/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.68%)
 * Total Accepted:    486K
 * Total Submissions: 1.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

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


func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
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
