/*
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (48.15%)
 * Total Accepted:    227.4K
 * Total Submissions: 472.3K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: "III"
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: "IV"
 * Output: 4
 * 
 * Example 3:
 * 
 * 
 * Input: "IX"
 * Output: 9
 * 
 * Example 4:
 * 
 * 
 * Input: "LVIII"
 * Output: 58
 * Explanation: C = 100, L = 50, XXX = 30 and III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 */
func romanToInt(s string) int {
	var index int
	stack := make([]int, 100)
	romans := map[rune]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	var last int;

	stack[0] = romans[rune(s[0])]
	last = stack[0]

	for i, c := range s {
		this := romans[c]
		// fmt.Println("==> new iteration starts: ", this)
		if (i == 0) {
			last = this
		} else if (this <= last) {
			// fmt.Println("this <= last, index, stack[index]", index, stack[index])
			last = this

			// push
			index ++
			stack[index] = this
			// fmt.Println("index++: ", index)

		} else {
			for this > last {
				// fmt.Println("last > this: this, index, stack[index]",
				// 	this, index, stack[index])
				this -= last

				// pop
				stack[index] = 0
				// fmt.Println("after pop, stack is", stack[:index+1])

				if (index == 0) {
					break;
				} else {
					index --
					// fmt.Println("index--: ", index)
					last = stack[index]
				}

			}
			index ++
			stack[index] = this

		}
		// fmt.Println("after iteration, stack is :", stack[:index + 1])
		// fmt.Println("after iteration, index is :", index)
		// fmt.Println("after iteration, last is :", last)
	}

	// sum
	sum := 0
	for _, e := range stack {
		sum += e
	}

	return sum
}
