var assert = require('assert');
var should = require('chai').should();
var fs = require('fs');

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
//       isMatch('asafsda', 'a.*a').should.equal(true);
//       isMatch('asafsdadsffafsda', 'a.*a.*a').should.equal(true);
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

describe('21', function() {
  var mergeTwoLists = require('../21.merge-two-sorted-lists.js').mergeTwoLists;

  describe('#mergeTwoLists()', function() {
    it ('should return correct result', function() {
      mergeTwoLists([], []).toString().should.equal([].toString());
      mergeTwoLists([1], []).toString().should.equal([1].toString());
      mergeTwoLists([1], [1,2]).toString().should.equal([1,1,2].toString());
      mergeTwoLists([1,2],[3,4]).toString().should.equal([1,2,3,4].toString());
      mergeTwoLists([1,2,4],[1,3,4]).toString().should.equal([1,1,2,3,4,4].toString());
    })
  })
})

describe('qsort', function() {
  var qsort = require('../algo.qsort.js').qsort;

  describe('#qsort()', function() {
    it ('should return correct result', function() {
      qsort([]).toString().should.equal([].toString());
      qsort([1]).toString().should.equal([1].toString());
      qsort([1,2]).toString().should.equal([1,2].toString());
      qsort([2,1]).toString().should.equal([1,2].toString());
      qsort([3,1,2]).toString().should.equal([1,2,3].toString());
      qsort([4,5,6,1,2,3,9,8,7]).toString().should.equal([1,2,3,4,5,6,7,8,9].toString());
      qsort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]).toString()
        .should.equal([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643].toString());
    })
  })
})

describe('bsort', function() {
  var bsort = require('../algo.bsort.js').bsort;

  describe('#bsort()', function() {
    it ('should return correct result', function() {
      bsort([]).toString().should.equal([].toString());
      bsort([1]).toString().should.equal([1].toString());
      bsort([1,2]).toString().should.equal([1,2].toString());
      bsort([2,1]).toString().should.equal([1,2].toString());
      bsort([3,1,2]).toString().should.equal([1,2,3].toString());
      bsort([4,5,6,1,2,3,9,8,7]).toString().should.equal([1,2,3,4,5,6,7,8,9].toString());
      bsort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]).toString()
        .should.equal([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643].toString());
    })
  })
})

describe('isort', function() {
  var isort = require('../algo.isort.js').isort;

  describe('#isort()', function() {
    it ('should return correct result', function() {
      isort([]).toString().should.equal([].toString());
      isort([1]).toString().should.equal([1].toString());
      isort([1,2]).toString().should.equal([1,2].toString());
      isort([2,1]).toString().should.equal([1,2].toString());
      isort([3,1,2]).toString().should.equal([1,2,3].toString());
      isort([4,5,6,1,2,3,9,8,7]).toString().should.equal([1,2,3,4,5,6,7,8,9].toString());
      isort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]).toString()
        .should.equal([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643].toString());
    })
  })
})

describe('ssort', function() {
  var ssort = require('../algo.ssort.js').ssort;

  describe('#ssort()', function() {
    it ('should return correct result', function() {
      ssort([]).toString().should.equal([].toString());
      ssort([1]).toString().should.equal([1].toString());
      ssort([1,2]).toString().should.equal([1,2].toString());
      ssort([2,1]).toString().should.equal([1,2].toString());
      ssort([3,1,2]).toString().should.equal([1,2,3].toString());
      ssort([4,5,6,1,2,3,9,8,7]).toString().should.equal([1,2,3,4,5,6,7,8,9].toString());
      ssort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]).toString()
        .should.equal([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643].toString());
    })
  })
})


describe('msort', function() {
  var msort = require('../algo.msort.js').msort;
  describe('#msort()', function() {
    it ('should return correct result', function() {
      msort([]).toString().should.equal([].toString());
      msort([1]).toString().should.equal([1].toString());
      msort([1,2]).toString().should.equal([1,2].toString());
      msort([2,1]).toString().should.equal([1,2].toString());
      msort([3,1,2]).toString().should.equal([1,2,3].toString());
      msort([4,5,6,1,2,3,9,8,7]).toString().should.equal([1,2,3,4,5,6,7,8,9].toString());
    })
  })
})

describe('hsort', function() {
  var parent = require('../algo.heapsort.js').parent;
  var left = require('../algo.heapsort.js').left;
  var right = require('../algo.heapsort.js').right;
  var hsort = require('../algo.heapsort.js').hsort;

  // var heapExtractTopRemanents = require('../algo.heapsort.js').heapExtractTopRemanents;

  var heapInsert = require('../algo.heapsort.js').heapInsert;
  var heapExtractTop = require('../algo.heapsort.js').heapExtractTop;
  var heapPop = heapExtractTop;
  var heapTop = require('../algo.heapsort.js').heapTop;


  describe ('#parent()', function() {
    it ('should return correct parent', function() {
      parent(1).should.equal(0);
      parent(2).should.equal(0);
      parent(3).should.equal(1);
      parent(4).should.equal(1);
      parent(5).should.equal(2);
      parent(6).should.equal(2);
    })
  });

  describe ('#left()', function() {
    it ('should return correct left child', function() {
      left(0).should.equal(1);
      left(1).should.equal(3);
      left(2).should.equal(5);
    })
  });

  describe ('#right()', function() {
    it ('should return correct right child', function() {
      right(0).should.equal(2);
      right(1).should.equal(4);
      right(2).should.equal(6);
    })
  });

  describe ('#heapInsert()', function() {
    it ('should insert to heap', function() {
      var arr = [];
      heapInsert(arr, 97);
      arr.toString().should.equal('97');
      heapInsert(arr, 68);
      arr.toString().should.equal('97,68');
    });
  })

  describe('#heapExtractTop()', function() {
    it ('should extract top element', function() {
      var arr = [97];
      heapExtractTop(arr).should.equal(97);
      arr.toString().should.equal('');
      heapInsert(arr, 97);
      heapInsert(arr, 20);
      arr.toString().should.equal('97,20');
      heapExtractTop(arr).should.equal(97);
      arr.toString().should.equal('20');
      heapExtractTop(arr).should.equal(20);
      arr.toString().should.equal('');

      arr = [];
      heapInsert(arr, 97);
      heapPop(arr);
      heapInsert(arr, 20);
      heapPop(arr);
      heapInsert(arr, 26);
      heapInsert(arr, 20);
      arr.toString().should.equal('26,20');
      heapTop(arr).should.equal(26);
      heapPop(arr);
      heapInsert(arr, 91);
      heapTop(arr).should.equal(91);

      arr.toString().should.equal('91,20');
      
    })
  })

  describe ('#hsort()', function() {
    it ('should return correct result', function() {
      hsort([]).toString().should.equal([].toString());
      hsort([1]).toString().should.equal([1].toString());
      hsort([1,2]).toString().should.equal([1,2].toString());
      hsort([2,1]).toString().should.equal([1,2].toString());
      hsort([3,1,2]).toString().should.equal([1,2,3].toString());
      hsort([4,5,6,1,2,3,9,8,7]).toString()
        .should.equal([1,2,3,4,5,6,7,8,9].toString());
      hsort([-1,12,5,7,20,6]).toString().should.equal('-1,5,6,7,12,20');
    })
  })

  describe ('#heapExtractTopRemanents()', function() {
    it ('should return correct result', function() {
      heapExtractTopRemanents([1,2]).toString().should.equal([2].toString());
      heapExtractTopRemanents([1,2,3]).toString().should.equal([3,2].toString());
    })
  })
})

describe('dynamicProgramming', function() {
  var maxProfit = require('../algo.dynamicProgramming.js').maxProfit;
  describe('#maxProfit()', function() {
    it ('should return correct result', function() {
      maxProfit([1,2,3,4,0,2], 6).should.equal(5);
      maxProfit([4,3,2,1,0,2], 6).should.equal(2);
      maxProfit([4,3,2,1], 4).should.equal(0);
      maxProfit([4,2,2,1], 4).should.equal(0);
      maxProfit([4,2,3,1], 4).should.equal(1);
      maxProfit([1,2,3,4,5,6], 6).should.equal(5);
      maxProfit([4,3,2,1,8,9], 6).should.equal(8);
      maxProfit([4,3,2,1,8,7], 6).should.equal(7);
      maxProfit([0,3,2,1,8,7], 6).should.equal(10);
      maxProfit([0,4,1,3,8,7], 6).should.equal(11);
    })
  })

  var fibonacci = require('../algo.dynamicProgramming.js').fibonacci;
  describe('#fibonacci()', function() {
    it ('should return correct result', function() {
      fibonacci(0).should.equal(1);
      fibonacci(1).should.equal(1);
      fibonacci(2).should.equal(2);
      fibonacci(3).should.equal(3);
      fibonacci(4).should.equal(5);
      fibonacci(5).should.equal(8);
      fibonacci(6).should.equal(13);
      fibonacci(7).should.equal(21);
      fibonacci(8).should.equal(34);
      fibonacci(9).should.equal(55);
      fibonacci(10).should.equal(89);
      fibonacci(11).should.equal(144);
      fibonacci(12).should.equal(233);
      fibonacci(13).should.equal(377);
      fibonacci(14).should.equal(610);
      fibonacci(77).should.equal(8944394323791464);
    })
  })
})


describe('ipv4->integer', function() {

  var ipv4 = require('../company.ipv4ToInt.js')
  var ipv4ToInt = ipv4.ipv4ToInt;
  var errInt8 = ipv4.errInt8;
  var errSpace = ipv4.errSpace;
  var errChar = ipv4.errChar;
  var errOther = ipv4.errOther;

  var checkError = function(f, s, err) {
    (function() {
      f(s)
    }).should.throw(err);
  }

  describe('#ipv4ToInt()', function() {

    it ('plain ipv4 string should return', function() {
      ipv4ToInt('0.0.0.0').should.equal(0);
      ipv4ToInt('00.00000.0.0000000').should.equal(0);
      ipv4ToInt('172.168.5.1').should.equal(2896692481);
      ipv4ToInt('255.255.255.255').should.equal(4294967295);
    });

    it ('invalid ipv4 string should throw', function() {
      checkError(ipv4ToInt, '255.255.255.256', errInt8);
      checkError(ipv4ToInt, '256.0.0.0', errInt8);
      checkError(ipv4ToInt, '1.5.256.1', errInt8);
    });

    it ('space between a digit and a dot should return', function() {
      ipv4ToInt(' 0.0.0.0').should.equal(0);
      ipv4ToInt(' 0.0.0.0 ').should.equal(0);
      ipv4ToInt(' 0  . 0   . 0 .  0   ').should.equal(0);
      ipv4ToInt('172 . 168.5.1').should.equal(2896692481);
      ipv4ToInt('172 . 168.  5 .  1 ').should.equal(2896692481);
      ipv4ToInt('255.255.255.255 ').should.equal(4294967295);
    });

    it ('space between two digits should throw', function() {
      checkError(ipv4ToInt, '1 72.168.5.1', errSpace);
    });

    it ('invalid character should throw', function() {
      checkError(ipv4ToInt, '0.0.o.0', errChar);
      checkError(ipv4ToInt, '0.0.-1.0', errChar);
    });

    it ('mix errors should throw the first', function() {
      checkError(ipv4ToInt, '255.255.256.2 55', errInt8);
      checkError(ipv4ToInt, '1 72.168.5.256', errSpace);
      checkError(ipv4ToInt, '-1 72.168.5.256', errChar);
    });

    it ('mix errors should throw the first', function() {
      checkError(ipv4ToInt, '255.255.256.2 55', errInt8);
      checkError(ipv4ToInt, '1 72.168.5.256', errSpace);
      checkError(ipv4ToInt, '0.0.o.0', errChar);
    });

    it ('other invalid string should throw', function() {
      checkError(ipv4ToInt, '', errOther);
      checkError(ipv4ToInt, '...', errOther);
      checkError(ipv4ToInt, '.0.0.0', errOther);
      checkError(ipv4ToInt, '.0.0.0.0', errOther);
      checkError(ipv4ToInt, '0.0.0.0.', errOther);
      checkError(ipv4ToInt, '0.0.0.', errOther);
      checkError(ipv4ToInt, '0.0. .0', errOther);
    });

  });
});
