(ns leetcode.11-container-with-most-water
  (:require [clojure.repl :refer [source doc]]
            [clojure.test :refer [run-tests]])
  (:use [clojure.test]))


#_(defn slopes [v]
  (map-indexed (fn [i ai] (/ ai (inc i))) v))

#_(defn i-slope-y [slopes v]
  (apply sorted-map
         (interleave
          (range 1 (inc (count v)))
          (map vector slopes v))))

(defn xy [v]
  (map vector (range 1 (inc (count v))) v))

(defn max-area [v] ;; input: vector of height
  (apply max
   (let [vs (xy v)]
     (for [[x1 y1] vs
           [x2 y2] vs
           :when (> x2 x1)]
       (* (- x2 x1) (min y1 y2))))))

(deftest max-area-test
  (is (= 49 (max-area [1,8,6,2,5,4,8,3,7]))))
