(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var o,r=n(0),c=n.n(r),a=n(14),i=n.n(a),l=n(8),s=n(18),b=n(23),d=n(3),u=n(2);!function(e){e[e.TO_DO=0]="TO_DO",e[e.DOING=1]="DOING",e[e.DONE=2]="DONE"}(o||(o={}));var O=Object(l.b)({key:"category",default:o.TO_DO}),j=Object(l.b)({key:"toDo",default:JSON.parse(localStorage.getItem("TODOS_KEY")||"[]")}),f=Object(l.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(j),o=t(O);return null===n||void 0===n?void 0:n.filter((function(e){return e.category===o}))}}),h=n(6),g=n(24),m=n(4);var p=function(){var e=Object(l.f)(j),t=Object(l.e)(O),n=(Object(l.f)(O),Object(g.a)()),o=n.register,r=n.handleSubmit,c=n.setValue,a=n.getValues;return Object(m.jsxs)("form",{onSubmit:r((function(n){var o=n.toDo;n.cate;e((function(e){return[{text:o,id:Date.now(),category:t}].concat(Object(h.a)(e))}));a("cate");c("toDo",""),c("cate","")})),children:[Object(m.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(m.jsx)("button",{children:"Add"}),Object(m.jsx)("input",Object(d.a)(Object(d.a)({},o("cate",{value:""})),{},{placeholder:"Write a custom category"})),Object(m.jsx)("button",{children:"Add a custom category"})]})};var x=function(e){var t=e.text,n=e.category,r=e.id,c=Object(l.f)(j),a=function(e){var n=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:t,id:r,category:n};return[].concat(Object(h.a)(e.slice(0,o)),[c],Object(h.a)(e.slice(o+1)))}))};return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t}),n!==o.DOING&&Object(m.jsx)("button",{name:o.DOING+"",onClick:a,children:"Doing"}),n!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO+"",onClick:a,children:"To Do"}),n!==o.DONE&&Object(m.jsx)("button",{name:o.DONE+"",onClick:a,children:"Done"})]})};var v,D=function(){var e=Object(l.e)(j);Object(r.useEffect)((function(){localStorage.setItem("TODOS_KEY",JSON.stringify(e))}),[e]);var t=localStorage.getItem("TODOS_KEY");if(null!==t)JSON.parse(t);var n=Object(l.e)(f),c=Object(l.d)(O),a=Object(u.a)(c,2),i=a[0],s=a[1];return console.log(n),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"To Dos"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("select",{value:i,onInput:function(e){s(e.currentTarget.value)},children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(m.jsx)(p,{}),null===n||void 0===n?void 0:n.map((function(e){return Object(m.jsx)(x,Object(d.a)({},e),e.id)}))]})},y=Object(s.b)(v||(v=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(D,{})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(m.jsx)(k,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bf47390c.chunk.js.map