"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[805],{126:function(t,r,n){n.d(r,{e:function(){return c}});var e=n(689),u=n(87),a=n(184),c=function(t){var r=t.movie,n=(0,e.TH)();return(0,a.jsx)("ul",{children:r.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{state:{from:n},to:"/movies/".concat(t.id),children:t.title})},t.id)}))})}},805:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e=n(861),u=n(439),a=n(687),c=n.n(a),i=n(791),o=n(818),s=n(264),f=n(126),p=n(184),v=function(){var t=(0,i.useState)([]),r=(0,u.Z)(t,2),n=r[0],a=r[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.kI)();case 3:(r=t.sent).results.length&&a(r.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),s.Notify.failed("No films");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)(f.e,{movie:n})}},818:function(t,r,n){n.d(r,{TP:function(){return p},bV:function(){return i},kI:function(){return s},q:function(){return f},tx:function(){return d},zv:function(){return v}});var e=n(861),u=n(687),a=n.n(u),c=n(912),i="https://image.tmdb.org/t/p/w500",o=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4bf39acf6ebeb7cbbfc54c4c8bc42fdc"}}),s=function(){var t=(0,e.Z)(a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("trending/movie/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/search/movie",{params:r});case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(r,"/credits"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(r,"/reviews"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=805.41c11d47.chunk.js.map