(this["webpackJsonpissue-comments-feeds"]=this["webpackJsonpissue-comments-feeds"]||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(0),o=n.n(c),r=n(11),i=n.n(r),s=(n(40),n(41),n(5)),u=n(32),m=n.n(u),l=n(6),d=Object(l.b)({name:"comments",initialState:[],reducers:{addComments:function(e,t){return[].concat(Object(a.a)(e),Object(a.a)(t.payload))}}}),p=Object(l.b)({name:"ui",initialState:{stat:"WAIT",repo:"moonshinevfx/4drec",page:1,isFetching:!1},reducers:{updateStat:function(e,t){e.stat=t.payload},increPage:function(e){e.page=e.page+1},finishPage:function(e){e.page=-1},startFetching:function(e){e.isFetching=!0},finishFetching:function(e){e.isFetching=!1}}}),h={ui:p.reducer,comments:d.reducer},f=(n(47),n(33)),g=n.n(f),b=n(34),v=function(e){var t=e.comment;return o.a.createElement("div",{className:"comment-feed"},o.a.createElement("div",{className:"meta"},o.a.createElement("img",{src:t.user.avatar_url,alt:"avatar"}),o.a.createElement("a",{href:t.user.html_url,target:"_blank",className:"username"},t.user.login),o.a.createElement("span",null,"\xa0commented\xa0"),o.a.createElement(b.a,{datetime:t.updated_at})),o.a.createElement(g.a,{className:"markdown",source:t.body}))},E=function(){var e=Object(s.c)((function(e){return e.comments})),t=Object(s.c)((function(e){return e.ui})),n=Object(s.b)();return o.a.createElement("div",{className:"comment-feed-list"},o.a.createElement(m.a,{pageStart:0,loadMore:function(){return n((function(e,t){e(p.actions.startFetching());var n=t().ui.repo,a={sort:"updated",direction:"desc",per_page:10,page:t().ui.page},c=new Headers,o="https://api.github.com/repos/".concat(n,"/issues/comments?")+"sort=".concat(a.sort,"&")+"direction=".concat(a.direction,"&")+"per_page=".concat(a.per_page,"&")+"page=".concat(a.page);fetch(o,{headers:c}).then((function(t){return 200===t.status?(e(p.actions.updateStat("DONE")),t.json()):(e(p.actions.updateStat("FAIL")),!1)})).then((function(t){t&&(0!==t.length?(e(p.actions.increPage()),e(d.actions.addComments(t))):e(p.actions.finishPage()))})).then((function(){e(p.actions.finishFetching())}))}))},hasMore:!t.isFetching&&-1!==t.page&&"FAIL"!==t.stat,threshold:500,useWindow:!0},e.map((function(e){return o.a.createElement(v,{key:e.id,comment:e})}))))},w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(128);var j=n(7),O=[].concat(Object(a.a)(Object(l.c)()),[j.a,!1]).filter(Boolean),F=Object(l.a)({reducer:h,middleware:O});i.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports=n(129)},40:function(e,t,n){},41:function(e,t,n){}},[[35,1,2]]]);
//# sourceMappingURL=main.ee99546e.chunk.js.map