(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3ED6":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("TSYQ"),i=a.n(c),o=a("Wbzz"),l=(a("Z5Ip"),a("lTWZ")),s=function(e){var t,a=e.contributor,r=e.size;return n.a.createElement(o.Link,{to:"/community/contributors/"+a.login,className:i()("card contributor__top transparent p-10",(t={},t[r]=r,t["full-row"]="big"===r,t))},n.a.createElement("div",{className:"contributor__picture"},n.a.createElement("div",{className:"avatar bordered bg-grey-light crop medium"},n.a.createElement("img",{className:"contributor__image",src:a.avatar,alt:a.login}),n.a.createElement("svg",{version:"1.1",viewBox:"0 0 520 520",preserveAspectRatio:"xMinYMin meet"},n.a.createElement("circle",{cx:"260",cy:"260",r:"250"}))),Object(l.b)(a)&&n.a.createElement("img",{className:"contributor__badge",src:"/badges/core-team.svg",alt:"core-team",title:"Core team member"})),n.a.createElement("div",{className:"card__content"},n.a.createElement("h3",{className:"card__title color-blue-extradark"},"#"+a.position+" "+a.login),n.a.createElement("div",{className:"contributor__statistic color-blue"},n.a.createElement("p",{className:"statistic__value"},a.contributions),n.a.createElement("p",{className:"statistic__title"},1<a.contributions?"contributions":"contribution"))))};s.defaultProps={size:"medium"},t.a=s},XvXH:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo");var r=a("q1tI"),n=a.n(r),c=a("Wbzz"),i=a("TJpk"),o=a.n(i),l=a("mfbQ"),s=a.n(l),m=(a("Z5Ip"),a("3ED6")),u=a("7oih"),b=a("/Uhd"),d=a("lTWZ");function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="1231594634";t.default=function(e){var t=e.location,a=e.data,r=g(a.allContributor.nodes),i=r.shift(),l=r.splice(0,9);return n.a.createElement(u.a,{location:t},n.a.createElement("div",{className:"contributors"},n.a.createElement(o.a,{title:"Contributors"}),n.a.createElement("header",{className:"contributors__header page__header-overlaid bg-blue-extralight color-blue-extradark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"contributors__title"},n.a.createElement("img",{src:s.a,alt:"contributor"}),n.a.createElement("div",null,n.a.createElement("h1",{className:"page__title"},"Our ",n.a.createElement("strong",{className:"color-blue-dark"},"contributors")),n.a.createElement("p",{className:"page__subtitle h4-like"},a.allContributor.totalCount+" people have contributed to API Platform code.")),n.a.createElement("img",{src:s.a,alt:"contributor"})))),n.a.createElement("section",{className:"contributors__top bg-white"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"accessibility__hidden-block"},"Top contributors"),n.a.createElement(b.a,{className:"top__grid"},n.a.createElement(b.b,{full:!0,padding:10},i&&n.a.createElement(m.a,{contributor:i,size:"big"})),l.map((function(e){return n.a.createElement(b.b,{key:e.login,padding:10},n.a.createElement(m.a,{contributor:e}))}))))),n.a.createElement("section",{className:"contributors__all"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"contributors-all__title"},"All contributors"),n.a.createElement(b.a,null,r.map((function(e){return n.a.createElement(b.b,{key:e.login,padding:10},n.a.createElement(c.Link,{to:"/community/contributors/"+e.login,className:"contributor__card card clickable horizontal small p-10"},n.a.createElement("div",{className:"avatar bg-grey-light crop xsmall"},n.a.createElement("img",{loading:"lazy",src:e.avatar,alt:e.login})),n.a.createElement("div",{className:"card__content"},n.a.createElement("h3",{className:"card__title text-big color-blue-extradark"},"#"+e.position+" | "+e.login),n.a.createElement("p",{className:"contributor__contributions color-blue-dark text-xs"},e.contributions+" "+(1<e.contributions?"contributions":"contribution")),n.a.createElement("p",{className:"contributor__lines color-grey-dark text-xs"},e.lines?n.a.createElement("span",null,e.lines+" lines"):n.a.createElement("span",{className:"no-stat"},"(no stats)"))),Object(d.b)(e)&&n.a.createElement("img",{className:"contributor__badge",src:"/badges/core-team.svg",alt:"core-team",title:"Core team member"})))})))))))}},Z5Ip:function(e,t,a){"use strict";var r=a("17x9"),n=a.n(r);n.a.shape({local_date:n.a.string,local_time:n.a.string,name:n.a.string,venue:n.a.shape({name:n.a.string,city:n.a.string}),featured_photo:n.a.shape({photo_link:n.a.string}),status:n.a.string,link:n.a.string}),n.a.shape({login:n.a.string,avatar:n.a.string,profile_url:n.a.string,id:n.a.string,contributions:n.a.number,project:n.a.shape({name:n.a.string,link:n.a.string}),position:n.a.number})},lTWZ:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));a("f3/d"),a("Z2Ku"),a("L9s1");var r=function(e){return e.teams&&(e.teams.includes("core-team")||e.teams.includes("core-team-js")||e.teams.includes("core-team-website"))},n=function(e){return e.name||e.login}},mfbQ:function(e,t,a){e.exports=a.p+"static/contributors-1ef4f4ab8ed0222f8caffb95c84e65c6.svg"}}]);
//# sourceMappingURL=component---src-pages-community-contributors-js-0902b8cdf7367ade6518.js.map