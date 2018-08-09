(defproject leetcode "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :plugins [
            [cider/cider-nrepl "0.18.0-snapshot"]
            ]  :jvm-opts ["--add-modules" "java.xml.bind"] ;; for Java 10
  :main ^:skip-aot leetcode.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
