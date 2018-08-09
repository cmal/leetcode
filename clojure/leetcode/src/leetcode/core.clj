(ns leetcode.core
  (:require [clojure.tools.nrepl.server :refer [start-server]])
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [port 17891]
    (start-server :port port)
    (println (str "nrepl server started at port: " port "!"))))
