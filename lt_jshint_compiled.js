if(!lt.util.load.provided_QMARK_('lt.plugins.lt-jshint')) {
goog.provide('lt.plugins.lt_jshint');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-jshint","js-hinter","lt.plugins.lt-jshint/js-hinter",2702469257),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-jshint","do-jshint","lt.plugins.lt-jshint/do-jshint",3393188835)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"jshint",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,js_hint_opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",4059396624),js_hint_opts], null));
}));
lt.plugins.lt_jshint.__BEH__do_jshint = (function __BEH__do_jshint(obj,editor_text,callback,_){JSHINT(editor_text,cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))),{});
var results = cljs.core.js__GT_clj.call(null,JSHINT.data(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var errors = cljs.core.map.call(null,((function (results){
return (function (err){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(err),new cljs.core.Keyword(null,"severity","severity",2492204655),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(err) - 1),(new cljs.core.Keyword(null,"character","character",2578099867).cljs$core$IFn$_invoke$arity$1(err) - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(err) - 1),(new cljs.core.Keyword(null,"character","character",2578099867).cljs$core$IFn$_invoke$arity$1(err) + cljs.core.count.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"evidence","evidence",1396871625).cljs$core$IFn$_invoke$arity$1(err);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return "";
}
})()))], null)], null);
});})(results))
,new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(results));return callback.call(null,errors);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-jshint","do-jshint","lt.plugins.lt-jshint/do-jshint",3393188835),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_jshint.__BEH__do_jshint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
}

//# sourceMappingURL=lt_jshint_compiled.js.map