(this.webpackJsonpsocialNetworkDemo=this.webpackJsonpsocialNetworkDemo||[]).push([[4],{354:function(e,n,r){e.exports={userBlock:"Users_userBlock__ZeftA",userPhotoBtn:"Users_userPhotoBtn__2Vgl7",userPhoto:"Users_userPhoto__2J4Oc",followBtn:"Users_followBtn__2coSh",userInfo:"Users_userInfo__1aDy_",userName:"Users_userName__1WgOB",userStatus:"Users_userStatus__2L8hZ"}},358:function(e,n,r){"use strict";var t=r(72),a=r(354),o=r.n(a),s=r(71),i=r.n(s),c=r(0),l=r.n(c),u=r(30),f=r(341),d=r(156);n.a=function(e){var n=e.user,r=Object(t.a)(e,["user"]);return l.a.createElement("div",{className:o.a.userBlock},l.a.createElement("span",{className:o.a.userPhotoBtn},l.a.createElement("div",null,l.a.createElement(u.b,{to:"/profile/"+n.id},l.a.createElement(f.a,{src:null!==n.photos.small?n.photos.small:i.a,className:o.a.userPhoto}))),l.a.createElement("div",{className:o.a.followBtn},n.followed?l.a.createElement(d.a,{size:"sm",disabled:r.followingInProgress.some((function(e){return e===n.id})),onClick:function(){r.unfollowUser(r.name,n.id)}},"Unfollow"):l.a.createElement(d.a,{size:"sm",disabled:r.followingInProgress.some((function(e){return e===n.id})),onClick:function(){r.followUser(r.name,n.id)}},"Follow"))),l.a.createElement("span",{className:o.a.userInfo},l.a.createElement("span",null,l.a.createElement("div",{className:o.a.userName},l.a.createElement(u.b,{to:"/profile/"+n.id},n.name)),l.a.createElement("div",{className:o.a.userStatus},n.status))))}},360:function(e,n,r){"use strict";var t=r(119),a=r(0),o=r.n(a),s=r(377),i=r.n(s),c=r(3),l=r(4),u=r(6),f=r.n(u),d=r(8),m=r(45),g=o.a.forwardRef((function(e,n){var r=e.active,t=e.disabled,a=e.className,s=e.style,i=e.activeLabel,u=e.children,d=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),g=r||t?"span":m.a;return o.a.createElement("li",{ref:n,style:s,className:f()(a,"page-item",{active:r,disabled:t})},o.a.createElement(g,Object(c.a)({className:"page-link",disabled:t},d),u,r&&i&&o.a.createElement("span",{className:"sr-only"},i)))}));g.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},g.displayName="PageItem";var p=g;function P(e,n,r){function t(e){var t=e.children,a=Object(l.a)(e,["children"]);return o.a.createElement(g,a,o.a.createElement("span",{"aria-hidden":"true"},t||n),o.a.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),t.displayName=e,t}var h=P("First","\xab"),v=P("Prev","\u2039","Previous"),b=P("Ellipsis","\u2026","More"),E=P("Next","\u203a"),w=P("Last","\xbb"),N=o.a.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,a=e.children,s=e.size,i=Object(l.a)(e,["bsPrefix","className","children","size"]),u=Object(d.a)(r,"pagination");return o.a.createElement("ul",Object(c.a)({ref:n},i,{className:f()(t,u,s&&u+"-"+s)}),a)}));N.First=h,N.Prev=v,N.Ellipsis=b,N.Item=p,N.Next=E,N.Last=w;var _=N;n.a=function(e){var n=Object(a.useState)(e.currentPortion),r=Object(t.a)(n,2),s=r[0],c=r[1],l=(s-1)*e.portionSize+1,u=s*e.portionSize;return console.log("render"),o.a.createElement(_,{size:"sm"},o.a.createElement(_.Prev,{disabled:s<2,className:e.pages.length<2&&i.a.hiddenBtn,onClick:function(){c(s-1)}}),e.pages.filter((function(e){return e>=l&&e<=u})).map((function(n){return o.a.createElement(_.Item,{className:e.pages.length<2&&i.a.hiddenBtn,active:e.currentPage===n,key:n,onClick:function(){e.onPageChanged(n,s)}},n)})),o.a.createElement(_.Next,{disabled:e.portions<=s,className:e.pages.length<2&&i.a.hiddenBtn,onClick:function(){c(s+1)}}))}},376:function(e,n,r){"use strict";var t=r(0),a=r.n(t),o=r(360),s=r(358);r(354);n.a=function(e){return a.a.createElement("div",null,a.a.createElement(o.a,{pages:e.pages,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portions:e.portions,portionSize:e.portionSize,currentPortion:e.currentPortion}),e.users.map((function(n){return a.a.createElement(s.a,{user:n,key:n.id,name:e.name,followingInProgress:e.followingInProgress,followUser:e.followUser,unfollowUser:e.unfollowUser})})))}},377:function(e,n,r){e.exports={hiddenBtn:"Paginator_hiddenBtn__2Gd4Z"}},381:function(e,n,r){"use strict";function t(e,n){return e===n}function a(e,n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,a=0;a<t;a++)if(!e(n[a],r[a]))return!1;return!0}function o(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return n}r.d(n,"i",(function(){return i})),r.d(n,"e",(function(){return c})),r.d(n,"a",(function(){return l})),r.d(n,"c",(function(){return u})),r.d(n,"g",(function(){return f})),r.d(n,"f",(function(){return d})),r.d(n,"b",(function(){return m})),r.d(n,"h",(function(){return g})),r.d(n,"d",(function(){return p}));var s=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];var s=0,i=t.pop(),c=o(t),l=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(r)),u=e((function(){for(var e=[],n=c.length,r=0;r<n;r++)e.push(c[r].apply(null,arguments));return l.apply(null,e)}));return u.resultFunc=i,u.dependencies=c,u.recomputations=function(){return s},u.resetRecomputations=function(){return s=0},u}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=null,o=null;return function(){return a(n,r,arguments)||(o=e.apply(null,arguments)),r=arguments,o}}));var i=function(e,n){return e[n.reducerName].users},c=function(e,n){return e[n.reducerName].pageSize},l=function(e,n){return e[n.reducerName].currentPage},u=function(e,n){return e[n.reducerName].followingInProgress},f=s([function(e,n){return e[n.reducerName].totalCount},c],(function(e,n){for(var r=Math.ceil(e/n),t=[],a=1;a<=r;a++)t.push(a);return t})),d=function(e,n){return e[n.reducerName].portionSize},m=function(e,n){return e[n.reducerName].currentPortion},g=s([f,d],(function(e,n){return Math.ceil(e.length/n)})),p=function(e,n){return e[n.reducerName].isFetching}},403:function(e,n,r){e.exports={page:"Friends_page__1RDEx"}},412:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(18),s=r(110),i=(r(403),r(360)),c=r(358),l=function(e){return a.a.createElement("div",null,a.a.createElement(i.a,{pages:e.pages,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portions:e.portions,portionSize:e.portionSize,currentPortion:e.currentPortion}),e.friends.map((function(n){return a.a.createElement(c.a,{user:n,name:e.name,followingInProgress:e.followingInProgress,key:n.id,unfollowUser:e.unfollowUser})})))},u=r(58),f=r(13),d=r(381),m=(r(376),r(120)),g={setCurrentPage:s.d,getUsersFromServer:s.c,unfollowUser:s.g};n.default=Object(f.d)(Object(o.b)((function(e,n){return{currentPortion:Object(d.b)(e,n),portionSize:Object(d.f)(e,n),portions:Object(d.h)(e,n),friends:Object(d.i)(e,n),pageSize:Object(d.e)(e,n),currentPage:Object(d.a)(e,n),followingInProgress:Object(d.c)(e,n),pages:Object(d.g)(e,n),isFetching:Object(d.d)(e,n)}}),g),m.a)((function(e){Object(t.useEffect)((function(){e.getUsersFromServer("friends",e.currentPage,e.pageSize,!0)}),[e.currentPage,e.followingInProgress]);return a.a.createElement("div",null,e.isFetching?a.a.createElement(u.a,null):null,a.a.createElement(l,{name:"friends",currentPortion:e.currentPortion,portionSize:e.portionSize,portions:e.portions,currentPage:e.currentPage,onPageChanged:function(n){e.setCurrentPage("friends",n)},friends:e.friends,followingInProgress:e.followingInProgress,unfollowUser:e.unfollowUser,pages:e.pages}))}))}}]);
//# sourceMappingURL=4.e996a3d8.chunk.js.map