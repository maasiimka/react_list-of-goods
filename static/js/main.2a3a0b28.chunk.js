(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s,r=n(5),c=n.n(r),i=n(4),o=n(6),a=n(7),l=n(10),u=n(8),h=n(9),d=n(1),b=(n(15),n(16),n(2)),j=n.n(b),p=n(0),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={sortType:s.NONE,isReversed:!1},e.handleSortType=function(t){e.setState({sortType:t})},e.handleOrderChange=function(){e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{isReversed:!e.isReversed})}))},e.handleReset=function(){e.setState({sortType:s.NONE,isReversed:!1})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=this.handleSortType,n=this.handleOrderChange,r=this.handleReset,c=e.sortType,i=e.isReversed,o=s.ALPHABET,a=s.LENGTH,l=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(h.a)(e);return c.sort((function(e,t){switch(n){case s.ALPHABET:return e<t?-1:1;case s.LENGTH:return e.length-t.length;default:return 0}})),console.log(n,r),r?c.reverse():c}(O,e);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button","is-info",{"is-light":c!==o}),onClick:function(){return t(o)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-success",{"is-light":c!==a}),onClick:function(){return t(a)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-warning ",{"is-light":!i}),onClick:n,children:"Reverse"}),(c!==s.NONE||i)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:r,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:l.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(d.Component);c.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a3a0b28.chunk.js.map