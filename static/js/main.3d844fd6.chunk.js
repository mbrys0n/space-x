(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var r=n(35),c=n(0),a=n.n(c),i=n(75),s=n.n(i),o=n(49),l=n(58),j=n(16),u=n(155),d=n(156),h=n(2),b=function(e){var t=e.children,n=e.heading;return Object(h.jsx)(u.a,{component:"main",sx:{mb:4},children:Object(h.jsxs)(d.a,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[Object(h.jsx)("h3",{children:n}),t]})})},x=function(){return Object(h.jsx)(b,{heading:"Countdown",children:Object(h.jsx)("div",{children:"countdown"})})},O=n(150),p=n(38),f=n.n(p),m=n(47),g=n(80),v=n.n(g),w={get:function(){var e=Object(m.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t,{params:n});case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y={upcomingLaunches:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get(" https://api.spacexdata.com/v4/launches/upcoming");case 2:return t=e.sent,e.abrupt("return",t||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},S=n(81),k=n.n(S),C=function(e){var t=e.message;return Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("p",{children:Object(h.jsx)(k.a,{style:{fill:"red"}})}),Object(h.jsxs)("p",{children:["An error occured. ",t]})]})},I=n(83),F=n.n(I),L=n(82),J=n.n(L),N=function(e){var t=e.onClick;return e.isFavourite?Object(h.jsx)(J.a,{onClick:t,style:{cursor:"pointer"}}):Object(h.jsx)(F.a,{style:{cursor:"pointer"},onClick:t})},_=n(22),A=n(158),B=n(162),D=n(161),R=n(157),W=n(159),E=n(160),M=n(84),P=n(85),Q=function(){function e(){Object(M.a)(this,e)}return Object(P.a)(e,null,[{key:"getSet",value:function(e){var t=localStorage.getItem(e);return t?new Set(JSON.parse(t)):null}},{key:"writeSet",value:function(e,t){var n=Array.from(t.values());localStorage.setItem(e,JSON.stringify(n))}}]),e}(),T="favourites",U=function(e){var t=e.rows,n=function(){var e,t=Object(c.useState)(null!==(e=Q.getSet(T))&&void 0!==e?e:new Set),n=Object(_.a)(t,2),r=n[0],a=n[1];return[r,Object(c.useCallback)((function(e){Q.writeSet(T,e),a(new Set(e.values()))}),[r,T])]}(),r=Object(_.a)(n,2),a=r[0],i=r[1],s=function(e){return function(){a.has(e)?(a.delete(e),i(a)):(a.add(e),i(a))}};return Object(h.jsx)(R.a,{component:d.a,children:Object(h.jsxs)(A.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(h.jsx)(W.a,{children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(D.a,{children:"Mission"}),Object(h.jsx)(D.a,{align:"right",children:"Date (UTC)"}),Object(h.jsx)(D.a,{align:"right",children:"LaunchPad"}),Object(h.jsx)(D.a,{align:"right",children:"Favourite"})]})}),Object(h.jsx)(B.a,{children:t?t.map((function(e){var t=e.name,n=e.date_unix,r=e.launchpad,c=e.id;return Object(h.jsxs)(E.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(h.jsx)(D.a,{component:"th",scope:"row",children:t}),Object(h.jsx)(D.a,{align:"right",children:n}),Object(h.jsx)(D.a,{align:"right",children:r}),Object(h.jsx)(D.a,{align:"right",children:Object(h.jsx)(N,{onClick:s(c),isFavourite:a.has(c)})})]},t)})):Object(h.jsx)("div",{children:"No data"})})]})})},X=n(152),q=function(){var e=Object(O.a)("launches",y.upcomingLaunches),t=e.isLoading,n=e.error,r=e.data;return Object(h.jsxs)(h.Fragment,{children:[t&&Object(h.jsx)(X.a,{animation:"wave",children:Object(h.jsx)(U,{})}),n&&Object(h.jsx)(C,{message:n}),!t&&!n&&Object(h.jsx)(U,{rows:r})]})},z=function(){return Object(h.jsx)(b,{heading:"Launches",children:Object(h.jsx)(q,{})})},G=o.b.main.withConfig({displayName:"Routes__Container",componentId:"c4exm-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:auto;overflow-x:hidden;"]),H=function(){return Object(h.jsx)(G,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(z,{})}),Object(h.jsx)(j.a,{path:"/countdown",children:Object(h.jsx)(x,{})})]})})},K=n(90),V=n(154),Y=n(163),Z=n(164),$=n(165),ee=n(153),te=Object(K.a)();var ne,re=function(){return Object(h.jsxs)(V.a,{theme:te,children:[Object(h.jsx)(Y.a,{}),Object(h.jsx)(Z.a,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(h.jsx)($.a,{children:Object(h.jsx)(ee.a,{variant:"h6",color:"inherit",noWrap:!0,children:"SpaceX"})})}),Object(h.jsx)(H,{})]})},ce=n(149),ae=n(86),ie=n(89),se=new ce.a,oe=Object(o.a)(ne||(ne=Object(r.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ","\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;\n  }\n"])),"#ededf7");s.a.render(Object(h.jsxs)(ae.a,{client:se,children:[Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(l.a,{basename:"/react-boilerplate",children:Object(h.jsx)(j.a,{path:"/",component:re})}),Object(h.jsx)(oe,{})]}),Object(h.jsx)(ie.ReactQueryDevtools,{initialIsOpen:!0})]}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.3d844fd6.chunk.js.map