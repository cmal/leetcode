(ns leetcode.13-roman-to-integer
  (:require [clojure.repl :refer [source doc]])
  (:use [clojure.test]))

(defn roman->int [st]
  (let [romans {\I    1
                \V    5
                \X   10
                \L   50
                \C  100
                \D  500
                \M 1000}]
    (loop [stk1 (vec (map romans st))
           stk2 []]
      (if (empty? stk1)
        (apply + stk2)
        (if (or (empty? stk2) (>= (peek stk1) (peek stk2)))
          (recur (pop stk1) (conj stk2 (peek stk1)))
          (recur (pop stk1) (conj (pop stk2)
                                  (- (peek stk2) (peek stk1)))))))))

(deftest roman->int-test
  (is (= 3 (roman->int "III")))
  (is (= 4 (roman->int "IV")))
  (is (= 9 (roman->int "IX")))
  (is (= 14 (roman->int "XIV")))
  (is (= 48 (roman->int "XLVIII")))
  (is (= 58 (roman->int "LVIII")))
  (is (= 827 (roman->int "DCCCXXVII")))
  (is (= 1994 (roman->int "MCMXCIV")))
  (is (= 3999 (roman->int "MMMCMXCIX"))))
