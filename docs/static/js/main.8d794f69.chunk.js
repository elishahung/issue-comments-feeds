(this["webpackJsonpissue-comments-feeds"]=this["webpackJsonpissue-comments-feeds"]||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n.n(r),c=n(7),o=n.n(c),s=(n(23),n(24),n(2)),u=n(17),l=n.n(u),m=n(8),d=n(4),f=Object(d.b)({name:"issues",initialState:[],reducers:{addIssues:function(e,t){return[].concat(Object(a.a)(e),Object(a.a)(t.payload))}}}),h=Object(d.b)({name:"comments",initialState:[],reducers:{addComments:function(e,t){return[].concat(Object(a.a)(e),Object(a.a)(t.payload))}}}),g=Object(d.b)({name:"ui",initialState:{repo:"moonshinevfx/4drec",page:1,isFetching:!1,issueTitleTable:{}},reducers:{increPage:function(e){e.page=e.page+1},finishPage:function(e){e.page=-1},startFetching:function(e){e.isFetching=!0},finishFetching:function(e){e.isFetching=!1},addIssueTitleTable:function(e,t){e.issueTitleTable=Object(m.a)({},e,{},t.payload)}}}),p={ui:g.reducer,comments:h.reducer,issues:f.reducer},b=(n(30),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new Headers;var r="https://api.github.com".concat(e,"?")+new URLSearchParams(t);return fetch(r,Object(m.a)({headers:a},n))}),v=function(e,t){var n=e.join("\r\n".concat("aaanewlineaaa","\r\n"));return b("/markdown",void 0,{method:"POST",body:JSON.stringify({mode:"gfm",context:t,text:n})}).then((function(e){return e&&e.text()})).then((function(e){var t=e.split("aaanewlineaaa");return t=t.map((function(e){return n="<br>",(t=e).startsWith(n)&&(t=t.substring(n.length)),t.endsWith(n)&&(t=t.substring(0,t.length-n.length)),t;var t,n}))}))},j=n(5),O=n.n(j),w=function(){return function(e,t){e(g.actions.startFetching());var n=t().ui.repo,a=t().ui.page;1===a&&e(function e(t){return function(n,a){var r=a().ui.repo,i=void 0;return b("/repos/".concat(r,"/issues"),{state:"all",per_page:100,page:t}).then((function(e){if(200===e.status)return e.json()})).then((function(e){if(e&&0!==e.length){i=e;var t=e.reduce((function(e,t){return e[t.url]={title:t.title,url:t.html_url},e}),{});n(g.actions.addIssueTitleTable(t));var a=i.map((function(e){return e.body}));return v(a,r)}})).then((function(a){a&&(i.forEach((function(e,t){e.body=a[t],e.moment=O()(e.created_at).unix()})),n(f.actions.addIssues(i)),n(e(t+1)))}))}}(1));var r=void 0;return b("/repos/".concat(n,"/issues/comments"),{sort:"updated",direction:"desc",per_page:20,page:a}).then((function(e){if(200===e.status)return e.json()})).then((function(t){if(console.log(),t&&0!==t.length){e(g.actions.increPage());var a=(r=t).map((function(e){return e.body}));return v(a,n)}e(g.actions.finishPage())})).then((function(t){t&&(r.forEach((function(e,n){e.body=t[n],e.moment=O()(e.updated_at).unix()})),e(h.actions.addComments(r))),e(g.actions.finishFetching())}))}},E=function(e){var t=e.issueUrl,n=Object(s.c)((function(e){return e.ui.issueTitleTable})),a=t.split("/").pop(),r="";return t in n&&(a=n[t].title,r=n[t].url),i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"issue-title"},"#",a)},y=function(e){var t=e.comment,n=O()(t.updated_at),a=(new O.a).diff(n,"days")<3?n.fromNow():n.format("[on ]D MMM"),r="title"in t?t.url:t.issue_url;return i.a.createElement("div",{className:"comment-feed"},i.a.createElement("div",{className:"meta"},i.a.createElement("img",{src:t.user.avatar_url,alt:"avatar"}),i.a.createElement("a",{href:t.user.html_url,target:"_blank",rel:"noopener noreferrer",className:"username"},t.user.login),i.a.createElement("span",{className:"commented"},"\xa0commented"),i.a.createElement("span",{className:"date"},"\xa0",a),i.a.createElement(E,{issueUrl:r})),i.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.body}}))},_=function(){var e=Object(s.c)((function(e){return e.issues})),t=Object(s.c)((function(e){return e.comments})),n=Object(s.c)((function(e){return e.ui})),a=Object(s.b)(),r=[];if(t.length>0){var c=e.filter((function(e){return e.moment>=t[t.length-1].moment}));r=t.concat(c).sort((function(e,t){return t.moment-e.moment}))}return i.a.createElement(l.a,{className:"comment-feed-list",pageStart:0,loadMore:function(){return a(w())},hasMore:!n.isFetching&&-1!==n.page,threshold:1024,useWindow:!0},r.map((function(e){return i.a.createElement(y,{key:e.id,comment:e})})))},T=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var N=n(6),k=[].concat(Object(a.a)(Object(d.c)()),[N.a,!1]).filter(Boolean),F=Object(d.a)({reducer:p,middleware:k});o.a.render(i.a.createElement(s.a,{store:F},i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8d794f69.chunk.js.map