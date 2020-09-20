(this.webpackJsonpsocialNetworkDemo=this.webpackJsonpsocialNetworkDemo||[]).push([[6],{180:function(e,a,t){"use strict";var n=t(29),l=t.n(n),o=t(12);a.a=function(e){var a=e.getIn;return function(e,t){l()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var r=arguments.length,c=new Array(r>1?r-1:0),i=1;i<r;i++)c[i-1]=arguments[i];return l()(c.length,"No fields specified"),1===c.length?a(n(t),e+".values."+c[0]):c.reduce((function(l,r){var c=a(n(t),e+".values."+r);return void 0===c?l:o.a.setIn(l,r,c)}),{})}}}(o.a)},375:function(e,a,t){},408:function(e,a,t){"use strict";t.r(a);var n=t(119),l=t(0),o=t.n(l),r=t(72),c=(t(375),t(58)),i=t(121),m=t(3),s=t(4),u=t(6),f=t.n(u),b=t(8),p=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.fluid,l=e.as,r=void 0===l?"div":l,c=e.className,i=Object(s.a)(e,["bsPrefix","fluid","as","className"]),u=Object(b.a)(t,"container"),p="string"===typeof n?"-"+n:"-fluid";return o.a.createElement(r,Object(m.a)({ref:a},i,{className:f()(c,n?""+u+p:u)}))}));p.displayName="Container",p.defaultProps={fluid:!1};var E=p,d=["xl","lg","md","sm","xs"],h=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.noGutters,r=e.as,c=void 0===r?"div":r,i=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(b.a)(t,"row"),p=u+"-cols",E=[];return d.forEach((function(e){var a,t=i[e];delete i[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&E.push(""+p+n+"-"+a)})),o.a.createElement(c,Object(m.a)({ref:a},i,{className:f.a.apply(void 0,[n,u,l&&"no-gutters"].concat(E))}))}));h.displayName="Row",h.defaultProps={noGutters:!1};var g=h,v=t(162),j=t(341),y=function(e){var a=e.profile;return o.a.createElement(E,null,o.a.createElement(g,null,o.a.createElement(v.a,{sm:2},"Full name :"),o.a.createElement(v.a,{sm:6},a.fullName)),o.a.createElement(g,null,o.a.createElement(v.a,{sm:2},"Avatar :"),o.a.createElement(v.a,{sm:6},o.a.createElement(j.a,{src:a.photos.small,rounded:!0}))),o.a.createElement(g,null,o.a.createElement(v.a,{sm:2},"About me :"),o.a.createElement(v.a,{sm:6},a.aboutMe)),o.a.createElement(g,null,o.a.createElement(v.a,{sm:2},"Contacts :"),o.a.createElement(v.a,{sm:6},o.a.createElement(i.a,{contacts:a.contacts,links:!1}))),o.a.createElement(g,null,o.a.createElement(v.a,{sm:2},"Looking for a job :"),a.lookingForAJob?o.a.createElement(v.a,{sm:6},a.lookingForAJobDescription):o.a.createElement(v.a,{sm:6},"don't looking")))},O=t(152),k=t(153),P=t(82),A=t(93),F=t(156),J=Object(k.a)({form:"settings",enableReinitialize:!0})((function(e){e.profile;var a=e.handleSubmit,t=e.error,n=Object(r.a)(e,["profile","handleSubmit","error"]);return o.a.createElement(A.a,{onSubmit:a},o.a.createElement(A.a.Group,{as:g},o.a.createElement(A.a.Label,{column:!0,sm:"2"},"Full name"),o.a.createElement(v.a,{sm:"6"},o.a.createElement(O.a,{component:P.a,typeField:"input",label:"Enter your full name",name:"fullName",placeholder:"My full name"}))),o.a.createElement(A.a.Group,{as:g},o.a.createElement(A.a.Label,{column:!0,sm:"2"},"Avatar"),o.a.createElement(v.a,{sm:"6"},o.a.createElement(A.a.File,{accept:"image/*",id:"avatar",label:"Select your avatar",onChange:function(e){return n.handleChange(e)}}))),o.a.createElement(A.a.Group,{as:g},o.a.createElement(A.a.Label,{column:!0,sm:"2"},"About me"),o.a.createElement(v.a,{sm:"6"},o.a.createElement(O.a,{component:P.a,label:"Write something about yourself",typeField:"textarea",name:"aboutMe",placeholder:"Just my story..."}))),o.a.createElement(A.a.Group,{as:g},o.a.createElement(v.a,{sm:"4"},o.a.createElement(O.a,{name:"selectContact",component:P.a,label:"Choose your contact",as:"select"},o.a.createElement("option",null),o.a.createElement(i.a,{contacts:n.contacts,option:!0}))),o.a.createElement(v.a,{sm:4},n.contactValue&&o.a.createElement(O.a,{component:P.a,typeField:"input",autoFocus:!0,label:"Enter link",name:"contacts.".concat(n.contactValue)}))),o.a.createElement(A.a.Group,{as:g},o.a.createElement(v.a,{sm:"3"},o.a.createElement(A.a.Check,{as:O.a,inline:!0,component:P.a,type:"checkbox",label:"I'm looking a job",name:"lookingForAJob"})),o.a.createElement(v.a,{sm:5},n.haveAJob&&o.a.createElement(O.a,{component:P.a,typeField:"input",label:"What kind of job?",name:"lookingForAJobDescription"}))),t&&o.a.createElement("div",null,t),o.a.createElement("div",null,o.a.createElement(F.a,{variant:"primary",type:"submit",disabled:n.submitting},"Save changes")))})),C=function(e){var a=e.profile,t=e.changeProfile,n=Object(r.a)(e,["profile","changeProfile"]);return a?o.a.createElement("div",{style:{padding:10}},t?o.a.createElement(J,{onSubmit:n.onSubmit,contacts:a.contacts,photo:n.photo,handleChange:n.handleChange,initialValues:a,haveAJob:n.haveAJob,contactValue:n.contactValue}):o.a.createElement(y,{profile:a}),!t&&o.a.createElement(F.a,{size:"lg",variant:"primary",onClick:n.changeProfileOn},"Change profile")):o.a.createElement(c.a,null)},N=t(18),S=t(13),w=t(120),x=t(180),G=t(37),V=t(65),D=t(42),I=Object(x.a)("settings"),L={putProfileSettings:G.e,uploadPhoto:G.g,getUserProfile:G.c};a.default=Object(S.d)(Object(N.b)((function(e){return{haveAJob:I(e,"lookingForAJob"),contactValue:I(e,"selectContact"),profile:Object(V.b)(e),userID:Object(D.a)(e)}}),L),w.a)((function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),r=t[0],c=t[1],i=Object(l.useState)(null),m=Object(n.a)(i,2),s=m[0],u=m[1];return Object(l.useEffect)((function(){e.getUserProfile(e.userID)}),[e.userID]),o.a.createElement(C,Object.assign({},e,{photo:s,haveAJob:e.haveAJob,contactValue:e.contactValue,changeProfileOn:function(){c(!0)},onSubmit:function(a){e.putProfileSettings(a).then((function(){s&&e.uploadPhoto(s),c(!1)}))},handleChange:function(e){u(e.target.files[0])},changeProfile:r}))}))}}]);
//# sourceMappingURL=6.7b16efe9.chunk.js.map