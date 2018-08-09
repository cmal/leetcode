(ns leetcode.14-longest-common-prefix
  (:require [clojure.repl :refer [doc source]])
  (:use [clojure.test]))

(defn longest-common-prefix [v]
  (let [eqs (apply (partial map =) v)
        cnt (count (take-while true? eqs))]
    (apply str (take cnt (first v)))))

(deftest longest-common-prefix-test
  (is (= "fl" (longest-common-prefix ["flower","flow","flight"])))
  (is (= "" (longest-common-prefix ["dog","racecar","car"]))))
