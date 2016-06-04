(ns lt.plugins.lt-jshint
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins])
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::js-hinter
                :behaviors [::do-jshint]
                :linter-name "jshint"
                :timeout 20000
                :init (fn [this _ js-hint-opts]
                        (object/merge! this {:options js-hint-opts})))

(def severities
  {"E" :error
   "W" :warning
   "I" :info})

(defn- jshint-err->message
  [{:keys [evidence code reason character line]}]
  (let [start (dec character)
        start (if (<= (count evidence) start) (- start 2) start)
        rem (subs (or evidence "") start)
        end (+ start (.indexOf rem (re-find #".\b" rem)))]
    {:message reason
     :severity (get severities (first code) :error)
     :from [(dec line) start]
     :to [(dec line) end]}))

(behavior ::do-jshint
          :triggers #{:lt.plugins.lt-lint/validate}
          :reaction (fn [obj editor-text callback _]
                      (js/JSHINT editor-text (clj->js (:options @obj)) #js {})
                      (let [results (js->clj (.data js/JSHINT) :keywordize-keys true)
                            errors (map jshint-err->message (:errors results))]
                        (callback errors))))

