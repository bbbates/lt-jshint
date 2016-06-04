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

(defn- message-to-from
  [evidence line-contents line character]
  (let [start (dec character)
        end (if-not (clojure.string/blank? evidence)
              (let [rem (subs evidence start)
                    boundary (.indexOf rem (re-find #".\b" rem))]
                (if (> boundary -1)
                  (+ character boundary)
                  character))
              character)]
    (if (< (count line-contents) end)
      [[(dec line) 0] [(dec line) (count line-contents)]]
      [[(dec line) start] [(dec line) end]])))

(defn- jshint-err->message
  [ed {:keys [evidence code reason character line]}]
  (let [line-contents (editor/line ed (dec line))
        [from to] (message-to-from evidence line-contents line character)]
    {:message reason
     :severity (get severities (first code) :info)
     :from from
     :to to}))

(behavior ::do-jshint
          :triggers #{:lt.plugins.lt-lint/validate}
          :reaction (fn [obj editor-text callback ed]
                      (js/JSHINT editor-text (clj->js (:options @obj)) #js {})
                      (let [results (js->clj (.data js/JSHINT) :keywordize-keys true)
                            errors (map (partial jshint-err->message ed) (:errors results))]
                        (callback errors))))

