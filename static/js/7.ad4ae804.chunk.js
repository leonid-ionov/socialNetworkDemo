(this.webpackJsonpsocialNetworkDemo=this.webpackJsonpsocialNetworkDemo||[]).push([[7],{386:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t.n(o),s=t(15),c=t(44),i=t(167),u=t(41),a=t(12),l=t(28),g={setCurrentPage:c.d,getUsersFromServer:c.c,followUser:c.b,unfollowUser:c.f,setCurrentPortion:c.e};r.default=Object(a.d)(Object(s.b)((function(e,r){return{currentPortion:Object(l.b)(e,r),portionSize:Object(l.f)(e,r),portions:Object(l.h)(e,r),users:Object(l.i)(e,r),currentPage:Object(l.a)(e,r),followingInProgress:Object(l.c)(e,r),pages:Object(l.g)(e,r),isFetching:Object(l.d)(e,r)}}),g))((function(e){var r="regular";Object(o.useEffect)((function(){e.getUsersFromServer(r,e.currentPage,e.pageSize)}),[e.currentPage]);return n.a.createElement("div",null,e.isFetching?n.a.createElement(u.a,null):null,n.a.createElement(i.a,{name:r,currentPortion:e.currentPortion,portionSize:e.portionSize,portions:e.portions,currentPage:e.currentPage,onPageChanged:function(t,o){e.setCurrentPage(r,t),e.setCurrentPortion(r,o)},users:e.users,followingInProgress:e.followingInProgress,followUser:e.followUser,unfollowUser:e.unfollowUser,pages:e.pages}))}))}}]);
//# sourceMappingURL=7.ad4ae804.chunk.js.map