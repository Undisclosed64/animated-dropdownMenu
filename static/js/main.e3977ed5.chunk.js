(this["webpackJsonprouter-practice"]=this["webpackJsonprouter-practice"]||[]).push([[0],{32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(15),a=c.n(s),i=(c(8),c(5)),o=c(1),j=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsx)("h2",{children:"Logo"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(i.b,{style:e,to:"/",children:Object(o.jsx)("li",{children:"Home"})}),Object(o.jsx)(i.b,{style:e,to:"/about",children:Object(o.jsx)("li",{children:"About"})}),Object(o.jsx)(i.b,{style:e,to:"/shop",children:Object(o.jsx)("li",{children:"Shop"})})]})]})};var u=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Home Page"})})},h=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About Page"})})},b=c(6),l=c.n(b),d=c(9),p=c(10),x=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/upcoming/get");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),console.log(c.data),r(c.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)("h3",{className:"items",children:Object(o.jsx)(i.b,{to:"/shop/".concat(e.itemId),children:e.item.name})},e.itemId)}))})},O=function(e){var t=e.match;Object(n.useEffect)((function(){i()}),[]);var c=Object(n.useState)({images:{}}),r=Object(p.a)(c,2),s=r[0],a=r[1],i=function(){var e=Object(d.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/item/get?id=".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,console.log(n),console.log(n.data.item.name),a(n.data.item);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"itemDetails",children:[Object(o.jsx)("h2",{children:s.name}),Object(o.jsx)("p",{children:s.description}),Object(o.jsx)("img",{src:s.images.icon,alt:""})]})},m=c(2),f=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(m.a,{exact:!0,path:"/about",component:h}),Object(o.jsx)(m.a,{exact:!0,path:"/shop",component:x}),Object(o.jsx)(m.a,{path:"/shop/:id",component:O})]})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[32,1,2]]]);
//# sourceMappingURL=main.e3977ed5.chunk.js.map