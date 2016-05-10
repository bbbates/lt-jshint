(ns lt.plugins.lt-jshint
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins])
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::js-hinter
                :triggers [:lt.objs.editor.lint/validate]
                :behaviors [::do-jshint]
                :linter-name "jshint"
                :init (fn [this js-hint-opts]
                        (object/merge! this {:options js-hint-opts})))

(behavior ::do-jshint
          :triggers #{:lt.objs.editor.lint/validate}
          :reaction (fn [obj editor-text callback _]
                      (js/JSHINT editor-text (clj->js (:options @obj)) #js {})
                      (let [results (js->clj (.data js/JSHINT) :keywordize-keys true)
                            errors (map (fn [err]
                                          {:message (:reason err)
                                           :severity :error
                                           :from [(dec (:line err)) (dec (:character err))]
                                           :to [(dec (:line err)) (+ (:character err)
                                                                     (count (or (:evidence err) "")))]})
                                        (:errors results))]
                        (callback errors))))

