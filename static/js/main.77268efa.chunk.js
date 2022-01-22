(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{150:function(e,n,t){"use strict";t.r(n);var c=t(26),r=t(0),a=t.n(r),i=t(36),s=t.n(i),o=t(68),l=t(57),j=t(17),u=t(209),d=t(210),b=t(2),h=function(e){var n=e.children,t=e.heading;return Object(b.jsx)(u.a,{component:"main",sx:{mb:4},children:Object(b.jsxs)(d.a,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[Object(b.jsx)("h3",{children:t}),n]})})},x=function(){return Object(b.jsx)(h,{heading:"Countdown",children:Object(b.jsx)("div",{children:"countdown"})})},O=t(204),p=t(45),f=t.n(p),m=t(64),g=t(104),v=t.n(g),y={get:function(){var e=Object(m.a)(f.a.mark((function e(n,t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(n,{params:t});case 2:return c=e.sent,e.abrupt("return",null===c||void 0===c?void 0:c.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},w={upcomingLaunches:function(){var e=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get(" https://api.spacexdata.com/v4/launches/upcoming");case 2:return n=e.sent,e.abrupt("return",n||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},k=t(105),C=t.n(k),S=function(e){var n=e.message;return Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(b.jsx)("p",{children:Object(b.jsx)(C.a,{style:{fill:"red"}})}),Object(b.jsxs)("p",{children:["An error occured. ",n]})]})},I=t(107),F=t.n(I),L=t(106),G=t.n(L),J=function(e){var n=e.onClick;return e.isFavourite?Object(b.jsx)(G.a,{onClick:n,style:{cursor:"pointer"}}):Object(b.jsx)(F.a,{style:{cursor:"pointer"},onClick:n})},N=t(14),W=t(212),z=t(216),A=t(215),_=t(211),B=t(213),D=t(214),E=t(65),M=t(66),R=function(){function e(){Object(E.a)(this,e)}return Object(M.a)(e,null,[{key:"getSet",value:function(e){var n=localStorage.getItem(e);return n?new Set(JSON.parse(n)):null}},{key:"writeSet",value:function(e,n){var t=Array.from(n.values());localStorage.setItem(e,JSON.stringify(t))}}]),e}(),T="favourites",U=function(e){var n=e.rows,t=function(){var e,n=Object(r.useState)(null!==(e=R.getSet(T))&&void 0!==e?e:new Set),t=Object(N.a)(n,2),c=t[0],a=t[1];return[c,Object(r.useCallback)((function(e){R.writeSet(T,e),a(new Set(e.values()))}),[c,T])]}(),c=Object(N.a)(t,2),a=c[0],i=c[1],s=function(e){return function(){a.has(e)?(a.delete(e),i(a)):(a.add(e),i(a))}};return Object(b.jsx)(_.a,{component:d.a,children:Object(b.jsxs)(W.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(b.jsx)(B.a,{children:Object(b.jsxs)(D.a,{children:[Object(b.jsx)(A.a,{children:"Mission"}),Object(b.jsx)(A.a,{align:"right",children:"Date (UTC)"}),Object(b.jsx)(A.a,{align:"right",children:"LaunchPad"}),Object(b.jsx)(A.a,{align:"right",children:"Favourite"})]})}),Object(b.jsx)(z.a,{children:n?n.map((function(e){var n=e.name,t=e.date_unix,c=e.launchpad,r=e.id;return Object(b.jsxs)(D.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(b.jsx)(A.a,{component:"th",scope:"row",children:n}),Object(b.jsx)(A.a,{align:"right",children:t}),Object(b.jsx)(A.a,{align:"right",children:c}),Object(b.jsx)(A.a,{align:"right",children:Object(b.jsx)(J,{onClick:s(r),isFavourite:a.has(r)})})]},n)})):Object(b.jsx)("div",{children:"No data"})})]})})},P=t(206),Q=function(){var e=Object(O.a)("launches",w.upcomingLaunches),n=e.isLoading,t=e.error,c=e.data;return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(P.a,{animation:"wave",children:Object(b.jsx)(U,{})}),t&&Object(b.jsx)(S,{message:t}),!n&&!t&&Object(b.jsx)(U,{rows:c})]})},X=function(){return Object(b.jsx)(h,{heading:"Launches",children:Object(b.jsx)(Q,{})})},q=o.b.main.withConfig({displayName:"Routes__Container",componentId:"c4exm-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:auto;overflow-x:hidden;"]),H=function(){return Object(b.jsx)(q,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(X,{})}),Object(b.jsx)(j.a,{path:"/countdown",children:Object(b.jsx)(x,{})})]})})},K=t(113),V=t(208),Y=t(222),Z=t(217),$=t(220),ee=t(218),ne=t(221),te=t(219),ce=t(200),re=t(111),ae=t.n(re),ie=t(207),se=t(203),oe={"Upcoming Launches":"/",Favourites:"/favourites",Countdown:"/countdown"},le=Object(j.f)((function(e){var n=e.history,t=r.useState(null),c=Object(N.a)(t,2),a=c[0],i=c[1],s=function(){i(null)},o=function(e){return function(){console.log("clicked",e),n.push(e),s()}};return Object(b.jsx)(Z.a,{position:"static",children:Object(b.jsx)(u.a,{maxWidth:"xl",children:Object(b.jsxs)(ee.a,{disableGutters:!0,children:[Object(b.jsx)(te.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"Space-X"}),Object(b.jsxs)($.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(b.jsx)(ne.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(b.jsx)(ae.a,{})}),Object(b.jsx)(ce.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:s,sx:{display:{xs:"block",md:"none"}},children:Object.entries(oe).map((function(e){var n=Object(N.a)(e,2),t=n[0],c=n[1];return Object(b.jsx)(se.a,{onClick:o(c),children:Object(b.jsx)(te.a,{textAlign:"center",children:t})},t)}))})]}),Object(b.jsx)(te.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"Space-x"}),Object(b.jsx)($.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Object.entries(oe).map((function(e){var n=Object(N.a)(e,2),t=n[0],c=n[1];return Object(b.jsx)(ie.a,{sx:{my:2,color:"white",display:"block"},onClick:o(c),children:t},t)}))})]})})})})),je=Object(K.a)();var ue,de=function(){return Object(b.jsxs)(V.a,{theme:je,children:[Object(b.jsx)(Y.a,{}),Object(b.jsx)(le,{}),Object(b.jsx)(H,{})]})},be=t(201),he=t(108),xe=t(112),Oe=new be.a,pe=Object(o.a)(ue||(ue=Object(c.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ","\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;\n  }\n"])),"#ededf7");s.a.render(Object(b.jsxs)(he.a,{client:Oe,children:[Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(l.a,{basename:"/react-boilerplate",children:Object(b.jsx)(j.a,{path:"/",component:de})}),Object(b.jsx)(pe,{})]}),Object(b.jsx)(xe.ReactQueryDevtools,{initialIsOpen:!0})]}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.77268efa.chunk.js.map