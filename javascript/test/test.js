var assert = require('assert');
var should = require('chai').should()

describe('14', function() {
  var getMinLen = require('../14.longest-common-prefix.js').getMinLen;
  var longestCommonPrefix = require('../14.longest-common-prefix.js').longestCommonPrefix;
  var str1 = ["flower","flow","flight"];
  var str2 = ["dog","racecar","car"];
  var str3 = ["aca","cba"];
  describe('#getMinLen()', function() {
    it('should return min length of given strings', function() {
      getMinLen(str1).should.equal(4);
      getMinLen(str2).should.equal(3);
    });
  });
  describe('#longestCommonPrefix()', function() {
    it('should return longest common preifx of given strings', function() {
      longestCommonPrefix(str1).should.equal('fl');
      longestCommonPrefix(str2).should.equal('');
      longestCommonPrefix(str3).should.equal('');
    });
  });
});

describe('16', function() {
  var threeSumClosest = require('../16.3sum-closest.js').threeSumClosest;
  describe('#threeSumClosest()', function() {
    var arr1 = [-1, 2, 1, -4];
    var target1 = 1;
    it('should return closest three sum', function() {
      threeSumClosest(arr1, target1).should.equal(2);
    })
  });
})


describe('17', function() {
  var letterCombinations = require('../17.letter-combinations-of-a-phone-number.js').letterCombinations;
  describe('#letterCombinations', function() {
    var input = '23';
    var out = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    it('should return correct letter combinations', function() {
      letterCombinations(input).toString().should.equal(out.toString());
    })
  })
})


describe('18', function() {
  var fourSum = require('../18.4sum.js').fourSum;
  describe('#fourSum()', function() {
    var arr1 = [1, 0, -1, 0, -2, 2];
    var target1 = 0;
    var solution1 = [[-2, -1, 1, 2],
                    [-2,  0, 0, 2],
                    [-1,  0, 0, 1]];

    var arr2 = [-7,-5,0,7,1,1,-10,-2,7,7,-2,-6,0,-10,-5,7,-8,5];
    var target2 = 28;
    var solution2 = [[7, 7, 7, 7]];
    it('should return correct solution set', function() {
      fourSum(arr1, target1).join('],[').should.equal(solution1.join('],['));
      fourSum(arr2, target2).join('],[').should.equal(solution2.join('],['));
    })
  })
});


// describe('10', function() {
//   var isMatch = require('../10.regular-expression-matching.js').isMatch;
//   describe('#isMatch()', function() {
//     it('should return correct match result', function() {
//       isMatch('aa', 'a').should.equal(true);
//       isMatch('aa', 'aa').should.equal(true);
//       isMatch('aaa', 'aa').should.equal(false);
//       isMatch('aa', 'a*').should.equal(true);
//       isMatch('aa', '.*').should.equal(true);
//       isMatch('ab', '.*').should.equal(true);
//       isMatch('aab', 'c*a*b').should.equal(true);
//       isMatch('caaab', 'c.a*b').should.equal(true);
//       isMatch('ccccacbbbbb', 'c*a.b*').should.equal(true);
//       isMatch('ccccacbbbba', 'c*a.b*').should.equal(false);
//     })
//   })
// })


describe('19', function() {
  var removeNthFromEnd = require('../19.remove-nth-node-from-end-of-list.js').removeNthFromEnd;
  describe('#removeNthFromEnd()', function() {

    function ListNode(val) {
      this.val = val;
      this.next = null;
    }
    var node1 = new ListNode(1);
    var node2 = new ListNode(2);
    var node3 = new ListNode(3);
    var node4 = new ListNode(4);
    var node5 = new ListNode(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    var head1 = node1;

    it ('should remove 4 from 1->2->3->4->5', function() {
      removeNthFromEnd(head1, 2).next.next.next.val.should.equal(node5.val);
    });

    node1 = new ListNode(1);
    var head2 = node1;
    it ('should remove 1 from 1', function() {
      should.equal(null, removeNthFromEnd(head2, 1));
    })

    node1 = new ListNode(1);
    node2 = new ListNode(2);
    node1.next = node2;
    var head3 = node1;

    it ('should remove 1 from 1->2', function() {
      removeNthFromEnd(head3, 2).val.should.equal(node2.val);
    })
  })
})


describe('20', function() {
  var isValid = require('../20.valid-parentheses.js').isValid;
  describe('#isValid()', function() {
    it ('should return correct result', function() {
      isValid("()").should.be.true;
      isValid("()[]{}").should.be.true;
      isValid("(]").should.be.false;
      isValid("([)]").should.be.false;
      isValid("{[]}").should.be.true;
    })
  })
});


describe('2', function() {
  var addTwoNumbers = require('../2.add-two-numbers.js').addTwoNumbers;
  describe('#addTwoNumbers()', function() {
    it ('should return correct result', function() {
      addTwoNumbers([2,4,3], [5,6,4]).toString().should.equal([7,0,8].toString());
      addTwoNumbers([2,4,3], [5,6,6]).toString().should.equal([7,0,0,1].toString());
    })
  })
})

describe('3', function() {
  var lengthOfLongestSubstring = require('../3.longest-substring-without-repeating-characters.js').lengthOfLongestSubstring;
  describe('#lengthOfLongestSubstring()', function() {
    it ('should return correct result', function() {
      lengthOfLongestSubstring("abcabcbb").should.equal(3);
      lengthOfLongestSubstring("bbbbb").should.equal(1);
      lengthOfLongestSubstring("pwwkew").should.equal(3);
    })
  })
})

// describe('5', function() {
//   var isPalindromic = require('../5.longest-palindromic-substring.js').isPalindromic;
//   var longestPalindrome = require('../5.longest-palindromic-substring.js').longestPalindrome;
//   describe('#isPalindromic()', function() {
//     it ('should return correct result', function() {
//       isPalindromic('').should.be.true;
//       isPalindromic('a').should.be.true;
//       isPalindromic('aa').should.be.true;
//       isPalindromic('aba').should.be.true;
//       isPalindromic('abba').should.be.true;
//       isPalindromic('abb').should.be.false;
//     })
//   })
//   describe('#longestPalindrome()', function() {
//     it ('should return correct result', function() {
//       longestPalindrome('').should.equal('');
//       longestPalindrome('babad').should.equal('aba');
//       longestPalindrome('baba').should.equal('aba');
//       longestPalindrome('cbbd').should.equal('bb');
//     })
//   })
// })


describe('6', function() {
  var getNumCols = require('../6.zigzag-conversion.js').getNumCols;
  var convert = require('../6.zigzag-conversion.js').convert;

  describe('#getNumCols()', function() {
    it ('should return correct col nums', function() {
      getNumCols(14, 4, 3).should.equal(7);
      getNumCols(14, 6, 4).should.equal(7);
    })
  })

  describe('#convert()', function() {
    it ('should convert to correct string', function() {
      convert("PAYPALISHIRING", 3).should.equal("PAHNAPLSIIGYIR");
      convert("PAYPALISHIRING", 4).should.equal("PINALSIGYAHRPI");
      convert("PAYPALISHIRING", 11).should.equal("PAYPALISGHNIIR");
    })
  })
})

describe('8', function() {
  var myAtoi = require('../8.string-to-integer-atoi.js').myAtoi;

  describe('#myAtoi()', function() {
    it ('should conver to correct number', function() {
      myAtoi('42').should.equal(42);
      myAtoi('4193 with words').should.equal(4193);
      myAtoi('-91283472332').should.equal(-2147483648);
      myAtoi('+').should.equal(0);
      myAtoi('+-2').should.equal(0);
      myAtoi('0-1').should.equal(0);
    })
  })
})
