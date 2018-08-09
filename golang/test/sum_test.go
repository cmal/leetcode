package sum

import (
	// "fmt"
	"testing"
	. "../code"
)


func TestSum(t *testing.T) {
	sum, carry := Sum(1,5,0)
	if (!(sum == 6 && carry == 0)) {
		t.Errorf("Sum was incorrect, got: %d, %d, want: %d, %d.", sum, carry, 6, 0)
	}
	sum, carry = Sum(1,5,1)
	if (!(sum == 7 && carry == 0)) {
		t.Errorf("Sum was incorrect, got: %d, %d, want: %d, %d.", sum, carry, 7, 0)
	}
	sum, carry = Sum(4,5,1)
	if (!(sum == 0 && carry == 1)) {
		t.Errorf("Sum was incorrect, got: %d, %d, want: %d, %d.", sum, carry, 0, 1)
	}
	sum, carry = Sum(5,5,0)
	if (!(sum == 0 && carry == 1)) {
		t.Errorf("Sum was incorrect, got: %d, %d, want: %d, %d.", sum, carry, 0, 1)
	}
	sum, carry = Sum(5,5,1)
	if (!(sum == 1 && carry == 1)) {
		t.Errorf("Sum was incorrect, got: %d, %d, want: %d, %d.", sum, carry, 1, 1)
	}
}


func TestMain(t *testing.T) {
	var l1,l2,l3 *ListNode

	a3 := ListNode{Val: 3, Next: nil}
	a2 := ListNode{Val: 4, Next: &a3}
	a1 := ListNode{Val: 5, Next: &a2}

	l1 = &a1

	b3 := ListNode{Val: 4, Next: nil}
	b2 := ListNode{Val: 5, Next: &b3}
	b1 := ListNode{Val: 5, Next: &b2}

	l2 = &b1

	l3 = Main(l1, l2)
	if (!(l3.Val == 0 && l3.Next != nil)) {
		t.Errorf("l3 - 1 was incorrect: %d %d", l3.Val, l3.Next)
	}
	l3 = l3.Next
	if (!(l3.Val == 0 && l3.Next != nil)) {
		t.Errorf("l3 - 2 was incorrect: %d %d", l3.Val, l3.Next)
	}
	l3 = l3.Next
	if (!(l3.Val == 8 && l3.Next == nil)) {
		t.Errorf("l3 - 3 was incorrect: %d %d", l3.Val, l3.Next)
	}

	a1 = ListNode{Val: 5, Next: nil}
	b1 = ListNode{Val: 5, Next: nil}

	l1 = &a1
	l2 = &b1

	l3 = Main(l1, l2)
	if (!(l3.Val == 0 && l3.Next != nil)) {
		t.Errorf("l3 - 4 was incorrect: %d %d", l3.Val, l3.Next)
	}
	l3 = l3.Next
	if (!(l3.Val == 1 && l3.Next == nil)) {
		t.Errorf("l3 - 5 was incorrect: %d %d", l3.Val, l3.Next)
	}


	a2 = ListNode{Val: 8, Next: nil}
	a1 = ListNode{Val: 1, Next: &a2}
	b1 = ListNode{Val: 0, Next: nil}

	l1 = &a1
	l2 = &b1

	l3 = Main(l1, l2)
	if (!(l3.Val == 1 && l3.Next != nil)) {
		t.Errorf("l3 - 4 was incorrect: %d %d", l3.Val, l3.Next)
	}
	l3 = l3.Next
	if (!(l3.Val == 8 && l3.Next == nil)) {
		t.Errorf("l3 - 5 was incorrect: %d %d", l3.Val, l3.Next)
	}

}


func TestContains(t *testing.T) {
	res, index := Contains("abc", 'a')
	if !(res == true && index == 0) {
		t.Errorf("\"abc\" contains 'a', index is %d.", index)
	}

	res, index = Contains("abc", 'd')
	if !(res == false && index == -1) {
		t.Errorf("\"abc\" does not contain 'd'.")
	}
}

func TestLengthOfLongestSubstring(t *testing.T) {
	const s1 = "abcabcbb"
	if (3 != LengthOfLongestSubstring(s1)) {
		t.Errorf("%q is not right", s1)
	}
	const s2 = "bbbbb"
	if (1 != LengthOfLongestSubstring(s2)) {
		t.Errorf("%q is not right", s2)
	}
	const s3 = "pwwkew"
	if (3 != LengthOfLongestSubstring(s3)) {
		t.Errorf("%q is not right", s3)
	}
	const s4 = ""
	if (0 != LengthOfLongestSubstring(s4)) {
		t.Errorf("%q is not right", s4)
	}
	const s5 = "dvdf"
	l := LengthOfLongestSubstring(s5)
	if (3 != l) {
		t.Errorf("%q is not right, length is %d, should be 3", s5, l)
	}
}

func TestIsInteger(t *testing.T) {
	if (true != IsInteger(1.0)) {
		t.Errorf("1.0 should be integer")
	}
	if (false != IsInteger(1.1)) {
		t.Errorf("1.1 should be integer")
	}
}

func TestFindMedianSortedArrays(t *testing.T) {
	// s1 := []int{1,3}
	// s2 := []int{2}
	// median := FindMedianSortedArrays(s1, s2)
	// if (2.0 != median) {
	// 	t.Errorf("median of %v and %v is %v, should be 2.0", s1, s2, median)
	// }
	// s1 = []int{1,2}
	// s2 = []int{3,4}
	// median = FindMedianSortedArrays(s1, s2)
	// if (2.5 != median) {
	// 	t.Errorf("median of %v and %v is %v, should be 2.5", s1, s2, median)
	// }
	// s1 = []int{1}
	// s2 = []int{}
	// median = FindMedianSortedArrays(s1, s2)
	// if (1.0 != median) {
	// 	t.Errorf("median of %v and %v is %v, should be 2.5", s1, s2, median)
	// }

	// s1 = []int{}
	// s2 = []int{1}
	// median = FindMedianSortedArrays(s1, s2)
	// if (1.0 != median) {
	// 	t.Errorf("median of %v and %v is %v, should be 2.5", s1, s2, median)
	// }

	// s1 = []int{}
	// s2 = []int{}
	// median = FindMedianSortedArrays(s1, s2)
	// if (0.0 != median) {
	// 	t.Errorf("median of %v and %v is %v, should be 2.5", s1, s2, median)
	// }

	s1 := []int{}
	s2 := []int{2, 3}
	median := FindMedianSortedArrays(s1, s2)
	if (2.5 != median) {
		t.Errorf("median of %v and %v is %v, should be 2.5", s1, s2, median)
	}


}

func TestIsParlindrome(t *testing.T) {
	s1 := ""
	if (!IsParlindrome(s1)) {
		t.Errorf("empty string should be parlindrome")
	}

	s2 := "bb"
	if (!IsParlindrome(s2)) {
		t.Errorf("string \"bb\" should be parlindrome")
	}

	s3 := "bab"
	if (!IsParlindrome(s3)) {
		t.Errorf("string \"bab\" should be parlindrome")
	}

	s4 := "a"
	if (!IsParlindrome(s4)) {
		t.Errorf("string \"a\" should be parlindrome")
	}

	s5 := "abc"
	if (IsParlindrome(s5)) {
		t.Errorf("string \"abc\" should NOT be parlindrome")
	}

	s6 := "abca"
	if (IsParlindrome(s6)) {
		t.Errorf("string \"abca\" should NOT be parlindrome")
	}

}


func TestLongestParlindrome(t *testing.T) {
	s1 := ""
	p1 := LongestParlindrome(s1)
	if (p1 != "") {
		t.Errorf("expected empty, but is %v", p1)
	}

	s2 := "bb"
	p2 := LongestParlindrome(s2)
	if (p2 != "bb") {
		t.Errorf("lpd of \"bb\" should be \"bb\", but is %v", p2)
	}

	s3 := "bab"
	p3 := LongestParlindrome(s3)
	if (p3 != "bab") {
		t.Errorf("lpd of \"bab\" should be \"bab\", but is %v", p3)
	}

	s4 := "a"
	p4 := LongestParlindrome(s4)
	if (p4 != "a") {
		t.Errorf("lpd of %v should be \"a\", but is %v", s4, p4)
	}

	s5 := "abc"
	p5 := LongestParlindrome(s5)
	if (p5 != "a") {
		t.Errorf("lpd of %v should be \"a\", but is %v", s5, p5)
	}

	s6 := "abca"
	p6 := LongestParlindrome(s6)
	if (p6 != "a") {
		t.Errorf("lpd of %v should be \"a\", but is %v", s6, p6)
	}

	s7 := "abcabcdedcabcdcba"
	p7 := LongestParlindrome(s7)
	if (p7 != "abcdcba") {
		t.Errorf("lpd of %v should be \"abcdcba\", but is %v", s7, p7)
	}

}
