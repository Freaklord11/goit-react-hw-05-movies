"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[949],{172:function(e,t,r){r.d(t,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(759);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"acbe04d9b6826898170f4d9e0758e12a"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},949:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(184),o=function(e){var t=e.author,r=e.content;return(0,i.jsxs)("div",{className:"reviewItem",children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("p",{children:r})]})},f=r(172),p={},v=function(e){var t=e.movieId,r=(0,s.useState)([]),u=(0,a.Z)(r,2),v=u[0],d=u[1],h=(0,s.useState)(!1),l=(0,a.Z)(h,2),x=l[0],w=l[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.prev=3,e.next=6,(0,f.Hx)(t);case 6:r=e.sent,d(r),console.log(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),x?(0,i.jsx)("p",{style:{textAlign:"center"},children:"Loading reviews..."}):0===v.length?(0,i.jsx)("p",{style:{textAlign:"center"},children:"No reviews found."}):(0,i.jsx)("div",{className:p.reviewList,children:v.map((function(e){return(0,i.jsx)(o,{author:e.author,content:e.content},e.id)}))})}}}]);
//# sourceMappingURL=949.f96b9d65.chunk.js.map