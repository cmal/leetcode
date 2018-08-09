(ns leetcode.12-integer-to-roman
  (:require
   [clojure.repl :refer [source doc]])
  (:use [clojure.test]))

(defn int->roman [n]
  ;; within 1 ~ 3999
  (let [romans (fn [n]
                 (case n
                   1    "I"
                   4    "IV"
                   5    "V"
                   9    "IX"
                   10   "X"
                   40   "XL"
                   50   "L"
                   90   "XC"
                   100  "C"
                   400  "CD"
                   500  "D"
                   900  "CM"
                   1000 "M"))
        s      #{1 4 5 9 10 40 50 90 100 400 500 900 1000}]
    (loop [num n
           res ""]
      (if (zero? num)
        res
        (let [m (apply max (filter #(>= num %) s))]
          (recur (- num m) (str res (romans m))))))))

(deftest int->roman-test
  (is (= "III" (int->roman 3)))
  (is (= "IV" (int->roman 4)))
  (is (= "IX" (int->roman 9)))
  (is (= "LVIII" (int->roman 58)))
  (is (= "MCMXCIV" (int->roman 1994))))


