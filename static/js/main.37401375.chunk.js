(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,function(t,e,a){t.exports={filterBlock:"filter_filterBlock__1ubCZ",filterBlock__item:"filter_filterBlock__item__14J9A",filterBlock__item_allClick:"filter_filterBlock__item_allClick__2t6QV",filterBlock__item_doneClick:"filter_filterBlock__item_doneClick__312Yl",filterBlock__item_importantClick:"filter_filterBlock__item_importantClick__1i3br",filterBlock__item_withoutBorder:"filter_filterBlock__item_withoutBorder__1jc0i"}},,,,,function(t,e,a){t.exports={todoItemBlock:"todo-item_todoItemBlock__1L5Qv",todoItem:"todo-item_todoItem__1gl0m",todoItemDone:"todo-item_todoItemDone__1opeT",itemButtonOK:"todo-item_itemButtonOK__EkRm1",itemButtonX:"todo-item_itemButtonX__BHUd_"}},function(t,e,a){t.exports={taskWriteList:"task_taskWriteList__1IWpO",taskWriteList__txt:"task_taskWriteList__txt__1grN_",taskWriteList__input:"task_taskWriteList__input__37nDo",taskAddList:"task_taskAddList__2ucK1",taskAddList__btn:"task_taskAddList__btn__2YLo8"}},function(t,e,a){t.exports={searchPanel:"search-panel_searchPanel__24tP4",searchPanel__txt:"search-panel_searchPanel__txt__3wbRo",searchPanel__input:"search-panel_searchPanel__input__1k8Bq",searchPanel__btn:"search-panel_searchPanel__btn__2izR1"}},,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBtZNhDYMwEIVflgmoBBwMB5uEOdgcbA7AARImAQmVgAQyBczB7S5pwqUplPTgSy78Ob4r9yiwA0RUcfVc7gwjIuGH56q4fifY+QSZ8IUFPl1DMx0ssOClZAMssOCqZKOEglJCouMRMuG21HjZKByU7L02deJ6ZGSdkrVrjT40ibRe6GmUrEdmch1kySXLyaNEHXJw0z31klpHclhO2iqpjxKdqOT3iBaveaIUmkPKJ7pR6NSn2i68ksr+PAr4A7I1W4f0PRmjAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBpVNbDcMwDLSGYBAKIVDKYBBaBiuDQlgYFcIgDILnU13Ni/pw4pP8Ucc+O80dMfNbYqYApP8u8QIXPiZeseCAKqFki3JMW3LUBLbtKsg67QHG8rCX+HhJDRl6+qOipEWIdEKWzPAUmiy5R81NSlJgMPmh5V9vzfb1nhrNarDEmX/IV/W3CzJswjZFgc3+BMsRAxwJtskADtn4DeAVrMsAtYI9vUmrYHcNEBVsaQDSCZkj6l+JZ3B9ATskx9iD1toCAAAAAElFTkSuQmCC"},function(t,e,a){t.exports={todoListBlock:"todo-list_todoListBlock__-UQXZ"}},function(t,e,a){t.exports={appBlock:"app_appBlock__9kRl3"}},function(t,e,a){t.exports=a(21)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(11),c=a.n(i),o=a(9),r=a(2),s=a(3),_=a(5),m=a(4),A=a(8),u=a.n(A),k=function(){return l.a.createElement("div",{className:u.a.searchPanel},l.a.createElement("div",null,l.a.createElement("p",{className:u.a.searchPanel__txt},"To do:")),l.a.createElement("div",null,l.a.createElement("input",{className:u.a.searchPanel__input,type:"text",placeholder:"search..."})),l.a.createElement("div",null,l.a.createElement("button",{className:u.a.searchPanel__btn},"Search")))},d=a(1),p=a.n(d),f=function(t){Object(_.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=e.call.apply(e,[this].concat(l))).state={clickAll:!1,clickDone:!1,clickImportant:!1},t.itemClickAll=function(){t.setState((function(){return{clickAll:!0,clickDone:!1,clickImportant:!1}}))},t.itemClickDone=function(){t.setState((function(){return{clickDone:!0,clickAll:!1,clickImportant:!1}}))},t.itemClickImportant=function(){t.setState((function(){return{clickImportant:!0,clickAll:!1,clickDone:!1}}))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=p.a.filterBlock,e=p.a.filterBlock__item,a=p.a.filterBlock__item_withoutBorder,n=p.a.filterBlock__item_all,i=p.a.filterBlock__item_allClick,c=p.a.filterBlock__item_done,o=p.a.filterBlock__item_doneClick,r=p.a.filterBlock__item_important,s=p.a.filterBlock__item_importantClick,_=n,m=c,A=r;return this.state.clickAll&&(_+=" ".concat(i)),this.state.clickDone&&(m+=" ".concat(o)),this.state.clickImportant&&(A+=" ".concat(s)),l.a.createElement("div",{className:t},l.a.createElement("div",{onClick:this.itemClickAll,className:e+" "+_},l.a.createElement("p",null,"All")),l.a.createElement("div",{onClick:this.itemClickDone,className:e+" "+m},l.a.createElement("p",null,"Done")),l.a.createElement("div",{onClick:this.itemClickImportant,className:e+" "+a+" "+A},l.a.createElement("p",null,"Important")))}}]),a}(n.Component),B=a(6),h=a.n(B),E=a(12),b=a.n(E),C=a(13),v=a.n(C),I=function(t){Object(_.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=e.call.apply(e,[this].concat(l))).state={done:!1,del:!1},t.itemDone=function(){t.setState((function(t){return{done:!t.done}}))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props,e=t.text,a=t.onDelItem,n=h.a.todoItem,i=h.a.todoItemDone,c=h.a.todoItemBlock,o=h.a.itemButtonOK,r=h.a.itemButtonX,s=n;return this.state.done&&(s+=" ".concat(i)),l.a.createElement("div",{className:c},l.a.createElement("li",{onClick:this.itemDone,className:s},e),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.itemDone,className:o},l.a.createElement("img",{src:b.a,alt:"logo"})),l.a.createElement("button",{onClick:a,className:r},l.a.createElement("img",{src:v.a,alt:"logo"}))))}}]),a}(n.Component),D=a(14),N=a.n(D),O=function(t){var e=t.todos,a=t.onDelItem,n=e.map((function(t){return l.a.createElement(I,{key:t.id,text:t.text,onDelItem:function(){a(t.id)}})}));return l.a.createElement("div",{className:N.a.todoListBlock},l.a.createElement("ul",null,n))},L=a(7),g=a.n(L),x=function(t){Object(_.a)(a,t);var e=Object(m.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:g.a.taskWriteList},l.a.createElement("div",null,l.a.createElement("p",{className:g.a.taskWriteList__txt},"Task")),l.a.createElement("div",null,l.a.createElement("input",{className:g.a.taskWriteList__input,type:"text",placeholder:"What do you need to do?"}))),l.a.createElement("div",{className:g.a.taskAddList},l.a.createElement("button",{className:g.a.taskAddList__btn},"Save item")))}}]),a}(n.Component),j=a(15),w=a.n(j),S=function(t){Object(_.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=e.call.apply(e,[this].concat(l))).state={todoList:[{id:1,text:"Wake up",filter:"done"},{id:2,text:"Eat breakfast",filter:"done"},{id:3,text:"Go to work",filter:"important"}]},t.delItem=function(e){t.setState((function(t){var a=t.todoList,n=a.findIndex((function(t){return e===t.id}));return{todoList:[].concat(Object(o.a)(a.slice(0,n)),Object(o.a)(a.slice(n+1)))}}))},t}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:w.a.appBlock},l.a.createElement(k,null),l.a.createElement(f,null),l.a.createElement(O,{todos:this.state.todoList,onDelItem:this.delItem}),l.a.createElement(x,null))}}]),a}(n.Component);c.a.render(l.a.createElement(S,null),document.querySelector("#root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.37401375.chunk.js.map