(this["webpackJsonpdnd-plants"]=this["webpackJsonpdnd-plants"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),i=n.n(r),l=n(3),s=n(4),o=n(19),u=n.n(o);var j=n(0),d=Object(c.createContext)(),b=Object(c.createContext)();function f(e,t){switch(t.type){case h.loadData:return function(e,t){var n={All:!0},c={All:!0};return t.forEach((function(e){["season","climate","locale"].forEach((function(t){e[t]=e[t].split(", ")})),e.climate.forEach((function(e){n[e]=!0})),e.locale.forEach((function(e){c[e]=!0}))})),Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,data:t,filteredData:t,climates:Object.keys(n),locales:Object.keys(c)})}(e,t.data);case h.filterData:var n=t.filteredData;return Object(s.a)(Object(s.a)({},e),{},{filteredData:n});default:throw new Error("Unhandled action type: ".concat(t.type))}}var h={loadData:"loadData",filterData:"filterData"},O={isLoading:!0,data:[],filteredData:[],climates:["All"],locales:["All"]};function m(e){var t=e.children,n=Object(c.useReducer)(f,O),a=Object(l.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){u.a.init({key:"1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",simpleSheet:!0}).then((function(e){i({type:h.loadData,data:e})})).catch(console.warn)}),[]),Object(j.jsx)(d.Provider,{value:r,children:Object(j.jsx)(b.Provider,{value:i,children:t})})}function x(){var e=Object(c.useContext)(d);if(void 0===e)throw new Error("useAppState must be used within a AppProvider");return e}var p=n(7),v=(n(42),["Always","Spring","Summer","Autumn","Winter"]);function g(){var e=function(){var e=Object(c.useContext)(b);if(void 0===e)throw new Error("useAppDispatch must be used within a AppProvider");return e}(),t=Object(c.useRef)(!1),n=x(),a=n.data,r=n.climates,i=n.locales,s=Object(c.useState)(v[0]),o=Object(l.a)(s,2),u=o[0],d=o[1],f=Object(c.useState)(r[0]),O=Object(l.a)(f,2),m=O[0],g=O[1],w=Object(c.useState)(i[0]),y=Object(l.a)(w,2),N=y[0],E=y[1];return Object(c.useEffect)((function(){if(t.current){var n=Object(p.a)(a);u!==v[0]&&(n=n.filter((function(e){return e.season.includes(u)}))),m!==r[0]&&(n=n.filter((function(e){return e.climate.includes(m)}))),N!==i[0]&&(n=n.filter((function(e){return e.locale.includes(N)}))),e({type:h.filterData,filteredData:n})}else t.current=!0}),[u,m,N]),Object(j.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsxs)("label",{children:["Season",Object(j.jsx)("select",{value:u,onChange:function(e){var t=e.target.value;return d(t)},children:v.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsxs)("label",{children:["Climate",Object(j.jsx)("select",{value:m,onChange:function(e){var t=e.target.value;return g(t)},children:r.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsxs)("label",{children:["Locale",Object(j.jsx)("select",{value:N,onChange:function(e){var t=e.target.value;return E(t)},children:i.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsx)(D,{})]})}n(43);function w(e){var t=e.items,n=function(e){return Object(j.jsxs)("li",{className:"item item-".concat((t=e.rarity,t<=5?"legendary":t<=50?"rare":t<=80?"uncommon":"common")),children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("p",{children:["Rarity: ",e.rarity,"%"]}),Object(j.jsxs)("p",{className:"detail-container",children:["Season: ",e.season.join(", ")]}),Object(j.jsxs)("p",{className:"detail-container",children:["Climate: ",e.climate.join(", ")]}),Object(j.jsxs)("p",{className:"detail-container",children:["Locale: ",e.locale.join(", ")]}),Object(j.jsx)("p",{className:"detail-description",children:e.description})]});var t};return Object(j.jsx)("ul",{className:"items-container",children:t.map((function(e,t){return Object(j.jsx)(c.Fragment,{children:n(e)},t)}))})}n(44);function y(){return Object(j.jsx)("svg",{className:"loader",width:"64",height:"64",viewBox:"0 0 66 66",children:Object(j.jsx)("circle",{cx:"33",cy:"33",r:"30"})})}n(45);function D(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=x().filteredData,i=Object(c.useRef)(null);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"roll-button",onClick:function(){return function(){var e=Object(p.a)(r).reduce((function(e,t){return Math.floor(100*Math.random()+1)<=+t.rarity&&e.push(t),e}),[]);a(e),i.current.showModal()}()},children:"\ud83c\udfb2 Roll"}),Object(j.jsxs)("dialog",{className:"roll-dialog",ref:i,children:[Object(j.jsxs)("header",{className:"dialog-header",children:[Object(j.jsx)("h2",{children:"Rolled plants"}),Object(j.jsx)("button",{className:"btn-close",onClick:function(){return i.current.close()},children:"\xd7"})]}),Object(j.jsx)("main",{className:"dialog-content",children:n.length?Object(j.jsx)(w,{items:n}):"Empty Loot... \ud83e\udd15"})]})]})}n(46);var N=function(){var e=x(),t=e.isLoading,n=e.filteredData;return t?Object(j.jsxs)("div",{className:"loading-container",children:[Object(j.jsx)("h1",{children:"Loading Plants..."}),Object(j.jsx)(y,{})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(w,{items:n})]})};n(47);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{children:Object(j.jsx)(N,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7b1b1b91.chunk.js.map