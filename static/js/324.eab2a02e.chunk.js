"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{126:function(t,e,r){r.d(e,{e:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(t){var e=t.movie,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(t.id),children:t.title})},t.id)}))})}},179:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(861),a=r(439),u=r(687),c=r.n(u),i=r(126),s=r(791),o=r(184),f=function(t){var e=t.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,o.jsxs)("form",{className:"row g-3 m-3",onSubmit:function(t){t.preventDefault(),e(u),c("")},children:[(0,o.jsxs)("div",{className:"col-auto",children:[(0,o.jsx)("label",{className:"visually-hidden",children:"Email"}),(0,o.jsx)("input",{type:"text",value:u,onChange:function(t){var e=t.target.value;c(e)},className:"form-control-plaintext border "})]}),(0,o.jsx)("div",{className:"col-auto",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Search"})})]})},p=r(686),l=r(87),v=r(818),m=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],m=(0,l.lr)(),d=(0,a.Z)(m,2),h=d[0],b=d[1],x=h.get("q")||"";(0,s.useEffect)((function(){if(""!==x){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.q)({query:x,page:1});case 3:0===(e=t.sent).results.length&&p.Notify.failure("Nothing found"),e.results.length&&u(e.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),p.Notify.failure("Error");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[x]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{onSubmit:function(t){u([]),b({q:t})},title:r.title}),(0,o.jsx)(i.e,{movie:r})]})}},818:function(t,e,r){r.d(e,{TP:function(){return p},bV:function(){return i},kI:function(){return o},q:function(){return f},tx:function(){return v},zv:function(){return l}});var n=r(861),a=r(687),u=r.n(a),c=r(912),i="https://image.tmdb.org/t/p/w500",s=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4bf39acf6ebeb7cbbfc54c4c8bc42fdc"}}),o=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:e});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=324.eab2a02e.chunk.js.map