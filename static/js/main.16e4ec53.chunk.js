(this["webpackJsonpsofar-test"]=this["webpackJsonpsofar-test"]||[]).push([[0],{107:function(e,n,t){e.exports=t(276)},112:function(e,n,t){},276:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),o=t.n(c),i=(t(112),t(16)),l=t.n(i),u=t(30),s=t(17),d=t(98),p=function(e){return new Promise((function(n){fetch(e).then((function(e){return e.json()})).then((function(e){n(e)}))}))},m=function e(){Object(d.a)(this,e)};m.get=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://app.staging.sofarsounds.com/api/v1/events");case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{id:e.id,city:e.city,imageUrl:e.image_url,startTime:e.start_time,arrivalTime:e.arrival_time,eventUrl:e.event_url}})));case 4:case"end":return e.stop()}}),e)})));var f=t(2),b=t(3),v="#fff",h="#10ad52",g="#ccc",x="#000",y=t(99),w=t.n(y);function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function O(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var j=a.a.createElement("g",null,a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FFFFFF",d:"M1624,243.1v-7c-1.9-5.4-4.5-10.1-9-13c-25.2,5.5-43.4,17.9-66,26 c-3.3-9.8-17.5-13.7-18-23c11.2-4.2,26.9-7.9,26-21c-1.7-23.9-40.6,6.2-51,7c-6.6-13.6-16.5-18-27.6-17.5 c-4.9,3.2-8.8,20.7-4.4,30.5c-7.1-6.7-5.2-22.7,0-30c0,0,0,0,0,0c-20.3,3.2-43.4,20.7-57,29c-4.3,12.6-2.4,29.4-1,44 c-9.4-0.4-19.4,1.7-22,5c-2.6,3.3,0.6,8.8,0,12c-50,12.4-95.2,30.9-134,54c-12.7,7.5-26.5,17.7-41,22c-14.6,4.3-43.6,4-48-7 c-6.2-15.3,11.4-46,18-62c6.5-15.7,22.8-43.3,21-62c-1.4-14.9-17.8-22.8-32-31c-6.8-3.9-35.2-13.9-37-21c-1.6-6,3.1-13.1,3-18 c-0.3-9.9-5.1-21.5-12-25c-34-17.5-58.3,32.9-38,64c-19.4,53.3-40.3,124.5-86,153c-14.8,9.2-60.2,19.8-68-2 c-4.7-13.1,5.4-34.6,10-47c11.5-31.1,22.9-56,35-83c5.9-13.3,20.7-34.7,14-44c-6.7-9.3-40.1-11.3-43-11c-10.7,1.7-11.6,17.8-21,19 c-5.5,0.7-15.2-6.2-21-8c-51.4-15.5-101.2,15.4-127,44c-24.4,27.1-40.4,58.8-46,104c-17,18-52,46-86,31c47-46.1,85.3-115,106-191 c15.2-55.9,33.8-140.5-34-151c-6.8-1.4-14-1.7-20,0c-64,21.1-91,87.2-108,156c-12.6,51-21.1,113.4-31,169c-1.5,8.4-1.3,18.3-4,24 c-3.5,7.2-23.7,19.8-31,26c-50.1,43-94,98.3-122,163c-22.5,52-39.8,150.5,21,177c4.9,2.1,13,2.8,19,4h6c35.3-4.9,58.6-33.3,75-60 c46.7-76.3,62.2-187.7,83-283c53.3,7.9,98.2-7.9,129-29c6.5,13.2,12.7,24.4,24,31c43.1,25.1,89.6-16.4,109-40 c6.4-7.8,9.8-17.9,18-22c-1.7,11.8-7.1,20.4-5,34c3.5,22.6,30.2,29.7,54,31c39.1,2.2,76.3-7.9,96-28c39.4-40.1,64.2-99.5,84-148 c11,6.6,26.8,10.9,27,26c0.1,6.6-6.6,15.3-10,24c-9.4,24-21.8,55.2-24,80c-5.3,59,88.6,52,125,36c16.6-7.3,28.3-20.1,44-32 c29.6-22.5,63-37.7,110-42c2.7,11.9,21,4,31,7c6.1,9.5,9.3,21.1,16,32c4.9,8.1,15.4,22.1,25,23c10.6,1,26.3-7.1,38-11 c13.4-4.5,25.5-8,37-13c8.5-14.2-0.5-25,8-38c9.2-14.1,48.3-7,34-35c-9.3-3.5-16.6,2.4-25,3C1571.1,256.2,1607.6,259.8,1624,243.1  M498,630.1c-7,16.3-22.2,54.4-42,54c-17.1-0.3-22.9-27.8-23-49c-0.2-52.6,17.8-98,39-139c21.6-41.8,52-74.7,84-97 c0.9-0.2,0.9,0.4,1,1C539,478.5,528.2,559.9,498,630.1 M625,324.1c3.8-63.9,15.2-149.1,38-205c10-24.6,32.5-63.4,57-54 c24.5,9.4,2.9,62.6-6,88c-18.8,53.9-39.2,105.4-68,149C640.5,310.5,635.1,321.4,625,324.1 M902,263.1c-16.6,30.1-30.2,46.8-51,71 c-8,9.3-23.4,30.3-41,22c-20.7-9.7-7.9-46.1,0-64c15-34.1,43-71.6,84-77c5.9-0.8,22.3-3.3,26,6C923.7,230.3,906.7,254.6,902,263.1  M1490,217.1c1.1-0.4,2.1-0.4,3,0c1.1,10.2,0.3,25.4,13,21C1495.6,261.2,1479.5,227.7,1490,217.1 M1530,323.1 c-13,3.1-21.7-23.9-9-30c1.1,5.1-2.9,25.8,13,22C1535.1,320.2,1532.5,322.9,1530,323.1 M1551,282.1c-11.8,2-18.9-10.5-18-26 c0.8-3.1,3.5-5.5,6-6c-0.7,9.7,0.1,29.1,13,25C1554.6,276.5,1552.8,281,1551,282.1"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FFFFFF",d:"M0,364.1v-18c8.9-55.2,70.7-45.1,124-34c14.5,3,30.8,7.7,48,12 c14.7,3.7,38.9,13.4,49,10c6.5-2.2,11.4-15,15-24c7.7-19.3,9.3-39.9,0-56c-31-53.5-121.5-44.7-121-130c0.3-57.6,45.8-96.9,90-114 C244.1-5,308.6-5.6,336,25.1c6,6.7,14.5,22.7,13,37c-0.9,8.9-9.3,31.7-27,24c-9.8-4.2-8.6-19.7-13-25c-20.6-24.9-72.9-24.3-102-9 c-19.9,10.5-43.9,37.9-39,67c6.5,38.6,63.9,50.2,95,73c16.4,12,31.6,34,34,57c3.3,31.9-6.5,61.1-16,89c10.9,3.4,23.3,6.9,36,5 c9-1.3,31-12,33-19c1.1-3.9-1.5-14.1-1-21c4.7-67.8,39.6-116.6,88-141c7.4-3.8,56-19.9,57,0c0.3,6.9-17.2,16.7-22,22 c-23.2,25.5-48.4,63-61,103c-4.1,13.1-9.8,32.7-4,47c5.9,14.5,29.6,13.5,41,8c24-11.6,32.3-37.5,41-63c2.8-8.2,12.4-26,11-38 c-1.3-11.3-13.8-13.6-17-27c-4.7-19.8,1.6-40.5,16-46c28.1-10.8,49.6,12.5,52,37c5.6,57.6-27.5,123.1-57,149 c-34,29.8-104.6,37.6-133,0c-17.1,15.2-49.4,21.6-80,20c-6.8-0.4-14.9-3.3-21-2c-6.6,1.4-15,11-22,17c-22.5,19.2-42.8,32.3-78,39 C90.6,441.3,15.6,417.5,0,364.1 M128,350.1c-22.9-5-46.6-10.2-67-13c-9.8-1.3-18.4,10-19,17c-2.4,27.5,43.1,39.1,71,39 c15.5,0,30.5-3.6,44-8c13.7-4.4,28.6-8.4,34-18C174.5,358.2,151.1,355.2,128,350.1"})),k=function(e){var n=e.svgRef,t=e.title,r=O(e,["svgRef","title"]);return a.a.createElement("svg",E({id:"Livello_1",x:"0px",y:"0px",viewBox:"0 0 1624 732.1",enableBackground:"new 0 0 1624 732.1",xmlSpace:"preserve",ref:n},r),t?a.a.createElement("title",null,t):null,j)},M=a.a.forwardRef((function(e,n){return a.a.createElement(k,E({svgRef:n},e))}));t.p;function C(){var e=Object(f.a)(["\n  color: ",";\n  background: url(",") no-repeat center;\n  background-size: cover;\n  height: 400px;\n\n  h1 {\n    margin: 0;\n    font-size: 5em;\n    font-weight: 800;\n    text-align: center;\n    color: ",";\n  }\n\n  .logo {\n    height: 50px;\n    position: absolute;\n    top: 50px;\n    left: 50%;\n    transform: translateX(-50%);\n    margin: 0 auto;\n  }\n"]);return C=function(){return e},e}var F=b.a.header(C(),v,w.a,v),S=function(){return a.a.createElement(F,{className:"flex-center-content"},a.a.createElement(M,{className:"logo"}),a.a.createElement("h1",null,"Find a show"))},N=t(15),P=t.n(N);function R(){var e=Object(f.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 1px solid ","\n  border-radius: 4px;\n  color: ","\n  text-decoration: none;\n\n  &:hover {\n    box-shadow: 0 0 10px ",";\n  }\n\n  .event-image {\n    width: 100%;\n    height: 50%;\n    /* assumes image urls work */\n    background: url(",") no-repeat center;\n    background-size: cover;\n  }\n\n  .event-description {\n    padding: 12px;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    p {\n      line-height: 2;\n      margin: 0;\n    }\n  }\n\n"]);return R=function(){return e},e}var D=b.a.a(R(),g,x,g,(function(e){return e.image})),Y=function(e){var n=e.event;return a.a.createElement(D,{image:n.imageUrl,href:n.eventUrl,target:"_blank",className:"no-decoration"},a.a.createElement("div",{className:"event-image"}),a.a.createElement("div",{className:"event-description"},a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("b",null,P()(n.startTime).format("dddd, Do MMMM YYYY"))),a.a.createElement("p",null,"Doors open at ",P()(n.arrivalTime,"HH:mm").format("h:mmA"))),a.a.createElement("div",null,n.city)))};function T(){var e=Object(f.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]);return T=function(){return e},e}var z=b.a.div(T()),_=a.a.createContext([]),A="701px",B="1000px",K={small:"only screen and (max-width: ".concat("700px",")"),medium:"only screen and (min-width: ".concat(A,") and (max-width: ").concat(B,")")};function U(){var e=Object(f.a)(["\n  padding-top: 40px;\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  grid-row-gap: 50px;\n  justify-content: space-between;\n\n\n  @media "," {\n    grid-template-columns: repeat(1, 1fr) !important;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(2, 300px);\n    justify-content: space-around;\n  }\n\n  .event-container {\n    grid-column: span 1;\n    width: 100%;\n    height: 250px;\n  }\n"]);return U=function(){return e},e}var H=b.a.div(U(),K.small,K.medium),I=function(){return a.a.createElement(_.Consumer,null,(function(e){return a.a.createElement(z,null,a.a.createElement(H,null,e.map((function(e){return a.a.createElement("div",{key:e.id,className:"event-container"},a.a.createElement(Y,{event:e}))}))))}))},J=t(102),V=t(104),W=t(103);function L(){var e=Object(f.a)([" {\n  width: 100%;\n  position: relative;\n\n  .arrow-down {\n    position: absolute;\n    right: 15px;\n    top: 25px;\n    z-index: 1;\n\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #000;\n  }\n\n  .label {\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  .rbt {\n    font-family: 'Open Sans', sans-serif;\n    width: 100%;\n\n    .rbt-input-main {\n      width: 100%;\n      height: 60px;\n      padding: 10px;\n      font-size: 16px;\n      border: 1px solid ",";\n      border-radius: 4px;\n\n      &::placeholder {\n        color: #bbb;\n      }\n    }\n\n    .rbt-menu {\n      z-index: 1;\n      margin: 0;\n      border: 1px solid ",";\n      padding: 0;\n      background-color: ",";\n      list-style: none;\n\n      li a {\n        display: block;\n        padding: 10px;\n        color: #000;\n        text-decoration: none;\n\n        &:hover, &:focus, &.active {\n          color: #000;\n          background-color: #eee;\n        }\n\n        .rbt-highlight-text {\n          background: none;\n          font-weight: bold;\n        }\n      }\n    }\n    .rbt-sr-status {\n      display: none !important;\n    }\n  }\n}"]);return L=function(){return e},e}var X=b.a.div(L(),g,g,v);function $(e){var n={options:e.options,onChange:e.valueSelected,labelKey:e.labelKey,id:e.id||Math.random(),placeholder:e.placeholder,flip:!0};return e.value&&(n.selected=[e.value]),r.createElement(X,null,e.label&&r.createElement("label",{className:"label"},e.label),r.createElement("div",{className:"arrow-down"}),r.createElement(W.Typeahead,n))}function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(t,!0).forEach((function(n){Object(J.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Q(){var e=Object(f.a)(["\n  width: 100%;\n  background-color: #f5f5f5;\n\n  .filters-container {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 12px;\n    padding-bottom: 12px;\n\n    @media "," {\n      flex-direction: column;\n    }\n  }\n\n  .filter-dropdowns {\n    display: flex;\n\n    @media "," {\n      flex-direction: column;\n    }\n  }\n\n  .filter-wrapper {\n    margin-right: 40px;\n    width: 100%;;\n    @media "," {\n      margin-top: 30px;\n    }\n  }\n\n  .filter-controls {\n    @media "," {\n      display: flex;\n      justify-content: space-around;\n      margin-top: 30px;\n    }\n\n    .reset-filters {\n      color: #555;\n      margin-right: 30px;\n    }\n\n    /** could be a reusable button component */\n    .search-button {\n      width: 180px;\n      height: 50px;\n      background-color: ","\n      color: white;\n\n      &:hover {\n        background-color: ","\n      }\n    }\n  }\n  "]);return Q=function(){return e},e}var Z=b.a.div(Q(),K.small,K.small,K.small,K.small,h,Object(V.a)(.05,h)),ee=function(e){var n=e.applyFilters,t=e.isResetVisible,c=Object(r.useState)({city:"",date:""}),o=Object(s.a)(c,2),i=o[0],l=o[1];return a.a.createElement(_.Consumer,null,(function(e){return a.a.createElement(Z,null,a.a.createElement(z,{className:"filters-container"},a.a.createElement("div",{className:"filter-dropdowns"},a.a.createElement("div",{className:"filter-wrapper"},a.a.createElement($,{placeholder:"Filter by City",key:Math.random(),options:Array.from(new Set(e.map((function(e){return e.city})))).sort(),value:i.city,valueSelected:function(e){return l(G({},i,{city:e[0]}))},labelKey:"id",id:"filter-by-city"})),a.a.createElement("div",{className:"filter-wrapper"},a.a.createElement($,{key:Math.random(),placeholder:"Filter by Date",options:Array.from(new Set(e.map((function(e){return e.startTime})))),value:i.date,valueSelected:function(e){return l(G({},i,{date:e[0]}))},labelKey:function(e){return P()(e).format("dddd, Do MMMM YYYY")},id:"filter-by-date"}))),a.a.createElement("div",{className:"filter-controls flex-center-content"},t?a.a.createElement("a",{className:"reset-filters no-decoration",href:"#/",onClick:function(e){e.preventDefault(),l({}),n({})}},"Reset filters"):null,a.a.createElement("a",{className:"search-button no-decoration flex-center-content",href:"#/",onClick:function(e){e.preventDefault(),n(i)}},"Search"))))}))},ne=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),i=Object(s.a)(o,2),d=i[0],p=i[1],f=Object(r.useState)(!1),b=Object(s.a)(f,2),v=b[0],h=b[1];return Object(r.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get();case 2:n=e.sent,c(n),p(n);case 5:case"end":return e.stop()}}),e)})))()}),[]),a.a.createElement("div",null,a.a.createElement(_.Provider,{value:d},a.a.createElement(S,null),a.a.createElement(ee,{applyFilters:function(e){p(function(e,n){var t=e;return n.city&&(t=t.filter((function(e){return e.city===n.city}))),n.date&&(t=t.filter((function(e){return P()(e.startTime).isSame(n.date,"day")}))),t}(t,e)),h(!!e.city||!!e.date)},isResetVisible:v}),a.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement((function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ne,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,n,t){e.exports=t.p+"static/media/header.ef4cbd78.jpg"}},[[107,1,2]]]);
//# sourceMappingURL=main.16e4ec53.chunk.js.map