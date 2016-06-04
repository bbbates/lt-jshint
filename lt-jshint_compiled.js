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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-jshint","js-hinter","lt.plugins.lt-jshint/js-hinter",2702469257),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-jshint","do-jshint","lt.plugins.lt-jshint/do-jshint",3393188835)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"jshint",new cljs.core.Keyword(null,"timeout","timeout",3994960083),20000,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,_,js_hint_opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",4059396624),js_hint_opts], null));
}));
lt.plugins.lt_jshint.severities = new cljs.core.PersistentArrayMap(null, 3, ["E",new cljs.core.Keyword(null,"error","error",1110689146),"W",new cljs.core.Keyword(null,"warning","warning",2138350350),"I",new cljs.core.Keyword(null,"info","info",1017141280)], null);
lt.plugins.lt_jshint.jshint_err__GT_message = (function jshint_err__GT_message(p__21315){var map__21317 = p__21315;var map__21317__$1 = ((cljs.core.seq_QMARK_.call(null,map__21317))?cljs.core.apply.call(null,cljs.core.hash_map,map__21317):map__21317);var line = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"line","line",1017226086));var character = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"character","character",2578099867));var reason = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"reason","reason",4373906870));var code = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"code","code",1016963423));var evidence = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"evidence","evidence",1396871625));var start = (character - 1);var start__$1 = (((cljs.core.count.call(null,evidence) <= start))?(start - 2):start);var rem = cljs.core.subs.call(null,(function (){var or__19803__auto__ = evidence;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return "";
}
})(),start__$1);var end = (start__$1 + rem.indexOf(cljs.core.re_find.call(null,/.\b/,rem)));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),reason,new cljs.core.Keyword(null,"severity","severity",2492204655),cljs.core.get.call(null,lt.plugins.lt_jshint.severities,cljs.core.first.call(null,code),new cljs.core.Keyword(null,"error","error",1110689146)),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(line - 1),start__$1], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(line - 1),end], null)], null);
});
lt.plugins.lt_jshint.__BEH__do_jshint = (function __BEH__do_jshint(obj,editor_text,callback,_){JSHINT(editor_text,cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))),{});
var results = cljs.core.js__GT_clj.call(null,JSHINT.data(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var errors = cljs.core.map.call(null,lt.plugins.lt_jshint.jshint_err__GT_message,new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(results));return callback.call(null,errors);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-jshint","do-jshint","lt.plugins.lt-jshint/do-jshint",3393188835),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_jshint.__BEH__do_jshint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),null], null), null));
}

//# sourceMappingURL=lt-jshint_compiled.js.map