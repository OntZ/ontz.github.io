(this["webpackJsonpmachinemax-test"]=this["webpackJsonpmachinemax-test"]||[]).push([[0],{120:function(e,t,a){e.exports={operationOn:"#00b159",operationIdle:"#e5e500",operationOff:"#666"}},176:function(e,t,a){e.exports=a(297)},181:function(e,t,a){e.exports={operationOn:"#00b159",operationIdle:"#e5e500",operationOff:"#666"}},182:function(e,t,a){},183:function(e,t,a){e.exports={operationOn:"#00b159",operationIdle:"#e5e500",operationOff:"#666"}},189:function(e,t,a){e.exports={operationOn:"#00b159",operationIdle:"#e5e500",operationOff:"#666"}},284:function(e,t,a){},285:function(e,t,a){e.exports={operationOn:"#00b159",operationIdle:"#e5e500",operationOff:"#666"}},297:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),i=a(81),s=a.n(i),o=(a(181),a(182),a(91)),l=(a(183),a(26)),u=a(13),m=a.n(u),d=a(15),p="POLL_MACHINES_START",f="POLL_MACHINES_STOP",h="POLL_MACHINE_BY_ID_START",E="POLL_MACHINE_BY_ID_STOP",v=a(68),b=a(172),_=a(85),O=a(84),y=a(155),I=a(171),g=function(e){function t(e,a){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(_.a)(t).call(this,e))).httpStatus=void 0,n.httpStatus=a,Object.setPrototypeOf(Object(O.a)(n),(this instanceof t?this.constructor:void 0).prototype),n}return Object(y.a)(t,e),t}(Object(I.a)(Error));n="https://cors-anywhere.herokuapp.com/dummy-hacxuuktha-ew.a.run.app";var x=function e(){Object(v.a)(this,e)};x.fetch=function(e,t){var a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(fetch(n+e,t));case 2:if(a=r.sent,(c=a).status>=200&&c.status<204){r.next=5;break}throw new g("Http error occurred",a.status);case 5:return r.abrupt("return",a.json());case 6:case"end":return r.stop()}var c}))};var N,j;!function(e){e.Active="ACTIVE",e.Idle="IDLE",e.Off="OFF"}(N||(N={})),function(e){e.Active="active",e.Problem="problem"}(j||(j={}));var S=function e(){Object(v.a)(this,e)};S.getAll=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(x.fetch("/machines"));case 2:return e.abrupt("return",e.sent.machines);case 3:case"end":return e.stop()}}))},S.getById=function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(x.fetch("/machines/"+e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},S.getHistory=function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(x.fetch("/machines/"+e+"/history"));case 2:return t.abrupt("return",t.sent.history);case 3:case"end":return t.stop()}}))};var H=function(e){return new Promise((function(t){setTimeout((function(){return t(!0)}),e)}))},w=m.a.mark(B),A=m.a.mark(D),T=m.a.mark(U),C=m.a.mark(Y),L=function(){return{type:"GET_MACHINES_REQUEST"}},M=function(e){return{type:"GET_MACHINES_SUCCESS",payload:{machines:e}}},k=function(){return{type:"GET_MACHINES_FAIL"}};function B(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(d.c)(L());case 4:return t.next=6,Object(d.b)((function(){return S.getAll()}));case 6:return e=t.sent,t.next=9,Object(d.c)(M(e));case 9:return t.next=11,Object(d.b)(H,3e4);case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(1),t.next=17,Object(d.c)(k(t.t0));case 17:t.next=0;break;case 19:case"end":return t.stop()}}),w,null,[[1,13]])}function D(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(d.e)(p);case 3:return e.next=5,Object(d.d)([Object(d.b)(B),Object(d.e)(f)]);case 5:e.next=0;break;case 7:case"end":return e.stop()}}),A)}var F=function(e){return{type:"GET_MACHINE_BY_ID_REQUEST",payload:{id:e}}},G=function(e){return{type:"GET_MACHINE_BY_ID_SUCCESS",payload:{machine:e}}},R=function(){return{type:"GET_MACHINE_BY_ID_FAIL"}};function U(e){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=1,a.next=4,Object(d.c)(F(e.payload.id));case 4:return a.next=6,Object(d.b)((function(){return S.getById(e.payload.id)}));case 6:return t=a.sent,a.next=9,Object(d.c)(G(t));case 9:return a.next=11,Object(d.b)(H,3e4);case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(1),a.next=17,Object(d.c)(R(a.t0));case 17:a.next=0;break;case 19:case"end":return a.stop()}}),T,null,[[1,13]])}function Y(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(d.e)(h);case 3:return e=t.sent,t.next=6,Object(d.d)([Object(d.b)(U,e),Object(d.e)(E)]);case 6:t.next=0;break;case 8:case"end":return t.stop()}}),C)}var P=function(e,t){return{type:"GET_MACHINE_HISTORY_SUCCESS",payload:{machineHistory:e,id:t}}},Q=a(46),W=a.n(Q),J=(a(189),a(306)),V=a(311),$=a(120),q=function(e){var t=e.machine,a=t.activity.activeHours,n=t.activity.idleHours,r=a+n,i=24-r,s=[],o=[];return a>0&&(s.push({x:"On: "+a.toFixed(1),y:a}),o.push($.operationOn)),n>0&&(s.push({x:"Idle "+n.toFixed(1),y:n}),o.push($.operationIdle)),i>0&&(s.push({x:"Off "+i.toFixed(1),y:i}),o.push($.operationOff)),c.a.createElement("div",{className:"machine-tile"},c.a.createElement("div",{className:"machine-tile__name"},c.a.createElement("div",null,c.a.createElement("a",{href:"/".concat(t.id)},c.a.createElement("b",null,t.type+" "+t.name))),c.a.createElement("div",null,t.group)),c.a.createElement("div",{className:"machine-tile__info"},c.a.createElement("a",{className:"machine-tile__thumbnail-link",href:"/".concat(t.id)},c.a.createElement("img",{src:t.thumbURL,alt:""})),c.a.createElement("div",{className:"machine-tile__status-chart"},c.a.createElement(J.a,{colorScale:o,height:170,width:220,startAngle:-90,endAngle:90,data:s,labelRadius:70,radius:50,containerComponent:c.a.createElement(V.a,{responsive:!0})}))),c.a.createElement("div",{className:"machine-tile__name"},c.a.createElement("div",null,"sensor: ",t.sensorID),c.a.createElement("div",null,c.a.createElement("b",null,"total: ",r.toFixed(1)," hrs"))))},z=(a(284),function(e){var t=e.status;return c.a.createElement("div",{className:"server-status server-status--".concat(t)})}),K=function(){var e=Object(l.c)((function(e){return e.machines.machines})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),t=Object(l.c)((function(e){return e.machines.machinesLoadedLast})),a=Object(l.c)((function(e){return e.machines.machinesEndpointStatus})),n=Object(l.b)(),i=Object(r.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(r.useState)(""),h=Object(o.a)(d,2),E=h[0],v=h[1],b=Object(r.useState)(""),_=Object(o.a)(b,2),O=_[0],y=_[1];Object(r.useEffect)((function(){return n({type:p}),function(){n({type:f})}}),[]);var I=e.filter(function(e){return function(t){return t.name.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}}(u)).sort(function(e){return function(t,a){return e?a.activity[e]-t.activity[e]:1}}(E)),g=[];I.forEach((function(e){g.indexOf(e.group)<=-1&&g.push(e.group)})),I=I.filter((function(e){return!O||e.group===O}));return c.a.createElement("div",{className:"machines-list"},c.a.createElement("div",{className:"content-area bottom-spacing"},c.a.createElement("h2",{className:"col-lg-12"},"Status for all your machines"),c.a.createElement("div",{className:"col-lg-12 inner-grid-12 column-gap bottom-spacing machines-list__status"},t?c.a.createElement("div",{className:"col-lg-8"},"Accurate as of ",W()(t).format("DD/MMM HH:mm:ss")):null,c.a.createElement("div",{className:"col-lg-3 col-sm-8"},"Server status:"),c.a.createElement("div",{className:"col-lg-1 col-sm-4"},c.a.createElement(z,{status:a}))),c.a.createElement("div",{className:"col-lg-12 inner-grid-12 column-gap machines-list__filters"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("label",{htmlFor:"#name-fiter"},"Search by name:"),c.a.createElement("input",{id:"name-filter",value:u,onChange:function(e){return m(e.currentTarget.value)}})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("label",{htmlFor:"#time-sort"},"Sort by active/idle time:"),c.a.createElement("select",{id:"time-sort",value:E,onChange:function(e){return v(e.currentTarget.value)}},c.a.createElement("option",{value:""}),c.a.createElement("option",{value:"activeHours"},"Active time"),c.a.createElement("option",{value:"idleHours"},"Idle time"))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("label",{htmlFor:"#site-filter"},"Filter by site:"),c.a.createElement("select",{id:"site-filter",value:O,onChange:function(e){return y(e.currentTarget.value)}},c.a.createElement("option",{value:""}),g.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("a",{className:"machines-list__reset-filters",href:"/#",onClick:function(e){e.preventDefault(),m(""),v(""),y("")}},"Reset filters")))),c.a.createElement("div",{className:"content-area column-gap row-gap bottom-spacing"},I.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-lg-4 col-md-6"},c.a.createElement(q,{machine:e}))}))))},X=a(169),Z=a(33),ee=(a(285),a(305)),te=a(309),ae=a(310),ne=a(307),re=a(120),ce=function(e){var t=e.machineHistory;if(!t)return null;var a=t.map((function(e){var t=new Date(e.start).getTime(),a=0,n="";switch(e.state){case N.Active:a=2,n=re.operationOn;break;case N.Idle:a=-1,n=re.operationIdle;break;case N.Off:a=-.5,n=re.operationOff}return{x:t,y:a,fill:n,label:W()(t).format("HH:mm"),width:new Date(e.end).getTime()-t}}));return c.a.createElement("div",{className:"inner-grid-12"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("h3",null,"History"),c.a.createElement("p",null,"On, Idle and Off status for ",W()(t[0].start).format("ddd DD MMM")," - ",W()(t[t.length-1].end).format("ddd DD MMM"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(ee.a,{theme:te.a.material,domainPadding:10,height:300,width:1e3},c.a.createElement(ae.a,{tickValues:a.map((function(e){return e.x})),tickFormat:function(){return""}}),c.a.createElement(ne.a,{data:a,style:{data:{fill:function(e){return e.datum.fill}},labels:{marginLeft:"200px"}},barWidth:function(e){return 105e-7*e.datum.width},alignment:"start",labels:function(e){return e.datum.label}}))))},ie=Object(Z.f)((function(e){var t=e.match.params.machineID,a=Object(l.c)((function(e){return e.machines.machineById[t]})),n=Object(l.c)((function(e){return e.machines.machineHistoryById[t]})),i=Object(l.c)((function(e){return e.machines.machineByIdEndpointStatus})),s=Object(l.b)();if(Object(r.useEffect)((function(){return s({type:h,payload:{id:t}}),s(function e(t){return function(a){var n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"GET_MACHINE_HISTORY_REQUEST"}),r.prev=1,r.next=4,m.a.awrap(S.getHistory(t));case 4:n=r.sent,a(P(n,t)),r.next=14;break;case 8:return r.prev=8,r.t0=r.catch(1),a((r.t0,{type:"GET_MACHINE_HISTORY_FAIL"})),r.next=13,m.a.awrap(H(1e3));case 13:e(t);case 14:return r.abrupt("return");case 15:case"end":return r.stop()}}),null,null,[[1,8]])}}(t)),function(){s({type:E})}}),[]),a){var o=a.machine,u=a.loadedLast;return c.a.createElement("div",{className:"machine-details"},c.a.createElement("div",{className:"content-area machine-details__content"},c.a.createElement("div",{className:"col-lg-10 col-md-8 col-sm-6 top-spacing bottom-spacing"},c.a.createElement("a",{href:"/"},"<"," Home")),c.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 inner-grid-4 top-spacing bottom-spacing"},c.a.createElement("div",{className:"col-lg-3 col-sm-2"},"Server",c.a.createElement("span",{className:"hidden-sm"}," status"),":"),c.a.createElement("div",{className:"col-lg-1 col-sm-2"},c.a.createElement(z,{status:i}))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("h1",{className:"machine-details__title"},o.type+" "+o.name),c.a.createElement("div",null,o.group),c.a.createElement("div",{className:"machine-details__operation machine-details__operation--active"},"Active hours: ",o.activity.activeHours.toFixed(2)),c.a.createElement("div",{className:"machine-details__operation machine-details__operation--idle"},"Idle hours: ",o.activity.idleHours.toFixed(2)),c.a.createElement("div",{className:"machine-details__operation machine-details__operation--off"},"Off hours: ",(24-o.activity.activeHours-o.activity.idleHours).toFixed(2)),c.a.createElement("div",{className:"bottom-spacing"},"Accurate as of ",W()(u).format("DD/MMM HH:mm:ss"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("img",{className:"machine-details__photo",src:o.imageURL,alt:""})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(ce,{machineHistory:n}),">")))}return c.a.createElement("div",null,"Loading...")}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(39),oe=a(168),le=a(116),ue=a(170),me=a(60),de=a(34),pe={machines:[],machinesEndpointStatus:j.Active,machineById:{},machineByIdEndpointStatus:j.Active,machineHistoryById:{}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MACHINES_REQUEST":return e;case"GET_MACHINES_FAIL":return Object(de.a)({},e,{machinesEndpointStatus:j.Problem});case"GET_MACHINES_SUCCESS":return Object(de.a)({},e,{machines:t.payload.machines,machinesLoadedLast:new Date,machinesEndpointStatus:j.Active});case"GET_MACHINE_BY_ID_REQUEST":if(!e.machineById[t.payload.id]){var a=e.machines.find((function(e){return e.id===t.payload.id}));if(a&&e.machinesLoadedLast)return Object(de.a)({},e,{machineById:Object(de.a)({},e.machineById,Object(me.a)({},t.payload.id,{machine:a,loadedLast:e.machinesLoadedLast}))})}return e;case"GET_MACHINE_BY_ID_FAIL":return Object(de.a)({},e,{machineByIdEndpointStatus:j.Problem});case"GET_MACHINE_BY_ID_SUCCESS":var n=t.payload.machine;return Object(de.a)({},e,{machineById:Object(de.a)({},e.machineById,Object(me.a)({},n.id,{machine:n,loadedLast:new Date})),machineByIdEndpointStatus:j.Active});case"GET_MACHINE_HISTORY_REQUEST":case"GET_MACHINE_HISTORY_FAIL":return e;case"GET_MACHINE_HISTORY_SUCCESS":var r=t.payload.machineHistory,c=t.payload.id;return Object(de.a)({},e,{machineHistoryById:Object(de.a)({},e.machineHistoryById,Object(me.a)({},c,r))});default:return e}},he=Object(se.c)({machines:fe}),Ee=m.a.mark(ve);function ve(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)([D(),Y()]);case 2:case"end":return e.stop()}}),Ee)}var be=Object(ue.a)(),_e=Object(se.a)(Object(le.save)(),be,oe.a)(se.e)(he,Object(le.load)());be.run(ve),s.a.render(c.a.createElement(l.a,{store:_e},c.a.createElement((function(){return c.a.createElement("div",{className:"App"},c.a.createElement(X.a,null,c.a.createElement(Z.c,null,c.a.createElement(Z.a,{exact:!0,path:"/",render:function(){return c.a.createElement(K,null)}}),c.a.createElement(Z.a,{exact:!0,path:"/:machineID",render:function(){return c.a.createElement(ie,null)}}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[176,1,2]]]);
//# sourceMappingURL=main.98ed014e.chunk.js.map