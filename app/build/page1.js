!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),u=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(u).concat([o]).join("\n")}var c;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];null!=u&&(r[u]=!0)}for(o=0;o<e.length;o++){var c=e[o];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".title-name {\n  font-size: 18px;\n  color: #2F3872;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 500;\n}\n",""])},function(e,t){e.exports=require("react-dom")},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".title-name {\n  font-size: 18px;\n  color: #2F3872;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 500;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"counter",(function(){return m})),n.d(r,"value",(function(){return y})),n.d(r,"test",(function(){return g}));var o={};n.r(o),n.d(o,"set",(function(){return V})),n.d(o,"setData",(function(){return A})),n.d(o,"computedAdd",(function(){return N})),n.d(o,"setValue",(function(){return U})),n.d(o,"setTest",(function(){return z})),n.d(o,"fetchTestData",(function(){return D}));var u=n(11),c=n.n(u),i=n(0),a=n.n(i),s=n(4),l=n(3),f=n(2),p=n(1),h=n(13),d=n.n(h),v=n(14),b=n.n(v),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COUNTER":return e+1;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VALUE":return t.value;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEST":return t.value;default:return e}};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=Object(p.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r)),j=function(e){return Object(p.createStore)(x,e,Object(p.applyMiddleware)(d.a))},O=n(5),E=n.n(O),C=n(6),w=n.n(C),T=n(7),P=n.n(T),k=n(8),q=n.n(k),R=n(9),_=n.n(R),J=n(10),M=n.n(J);var V=function(e){return{type:"SET_COUNTER"}},A=function(e){return{type:"SET_VALUE",value:e}},N=function(){return function(e,t){e(V())}},U=function(e){return function(t,n){t(A(e))}},z=function(e){return function(e,t){e((function(e){return{type:"SET_TEST",value:e}}))}},D=function(){return function(e){return M()("http://127.0.0.1:3000/test").then((function(e){return e.data})).then((function(e){return console.log(e.data),"api error"})).then((function(t){return e(z(t))}))}},F=(n(15),function(e){function t(){var e;return E()(this,t),(e=P()(this,q()(t).call(this))).state={test1:"我是测试"},e}return _()(t,e),w()(t,[{key:"onClick",value:function(){this.props.computedAdd()}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.counter),a.a.createElement("div",{className:"title-name"},a.a.createElement("h1",null,this.props.counter,this.props.test),a.a.createElement("h2",null,this.state.test1),a.a.createElement("button",{onClick:this.onClick.bind(this)},"点我加1"))}}]),t}(a.a.Component));F.serverFetch=D;var L=Object(f.connect)((function(e){return{counter:e.counter,value:e.value,test:e.test}}),(function(e){return Object(p.bindActionCreators)(o,e)}))(F);n(16),n(17);function B(){console.log("我是页面2")}var H=function(e){return a.a.createElement("div",{className:"title-name"},"专栏 4Ark 5小时前 程序员 分享一些好用的网站 73 5 专栏 saltfish666 5小时前 Vue.js Vue 源码中一些util函数 45 3 专栏 嘉乐MrMaple 1小时前 程序员年终总结 一个技术创业者的2018年度回顾和总结 | 掘金年度征文 4 3 小册修言 前端性能优化原理与实践 购买人数: 4886 特价: 19.9元 分享 专栏 極楽 1小时前 Node.js微信小程序 微信小程序websocket聊天室 4 专栏 call_me_R 3小时前 前端前端框架 【译】框架与库的差异 12 6 专栏 大翰仔仔 3小时前 面试 刷前端面经笔记（七） 5 专栏 小生方勤 4小时前 前端 【前端词典】继承（二） - “回”的八种写法 20 HollisChuang 6小时前 程序员编程语言 指引趋势与方向！2019开发者调查报告出炉 5 6 专栏 boomyao 3小时前 React.js React是如何区分class和function的？ 9 专栏 wznonstop 3小时前 前端掘金翻译计划 [译] 2019 前端性能优化年度总结 — 第五部分 7 热 专栏 frontdog 17小时前 前端 web页面录屏实现 89 7 专栏 超人汪小建 6小时前 前端算法 基于桶的基数排序 12 专栏 神奇排骨 3小时前 前端 浅析前端的模块化 8 专栏 我是一个前端 3小时前 JavaScript Javascript 事件循环event loop 6 freefrontend 5小时前 CSS 14 CSS Button Click Effects 6 专栏 boomyao 22小时前 React.js 为什么我们要添加 super(props) ？ 36 3 热 张熠 1天前 Vue.jsTypeScript 值得一看，Vue 作者尤雨溪的回答【TypeScript 不适合在 vue 业务开发中使用吗？】 45 9 专栏 南波 22小时前 JavaScript面试 JS专题之继承 29 1 专栏 MarcusY 1天前 CSS 【译】通过css，用一个div做一个芝士汉堡 51 14 简单卟容易 1天前 Vue.js vue修饰符--可能是东半球最详细的文档（滑稽） 114 4 专栏 sea_ljf 1天前 JavaScript 知多一点二进制中的负数 45 6 热 huangsw 1年前 前端 强烈推荐--基于 vue2.x table 组件 386 9 专栏 serialcoder 1天前 JavaScript函数式编程 再谈 JavaScript 函数式编程的适用性 45 2 专栏 南波 1天前 JavaScript面试 JS专题之垃圾回收 66 热 专栏 芬达Tz 2天前 CSS 如何使用css绘制钻石 66 5 专栏 caiyongji 8月前 面试Java 你的知识死角不能否定你的技术能力 38 10 专栏 掘墓人4449 1天前 微信 微信支付申请相关问",a.a.createElement("button",{onClick:B},"我是按钮"))},I=function(e){function t(){return E()(this,t),P()(this,q()(t).call(this))}return _()(t,e),w()(t,[{key:"render",value:function(){return a.a.createElement("span",null,a.a.createElement("a",{href:"/",style:{color:"pink",fontSize:50}},"首页"),a.a.createElement("a",{href:"/page2",style:{color:"pink",fontSize:50}},"次页"),a.a.createElement("a",{href:""},this.props.counter),this.props.children)}}]),t}(i.Component),W=Object(f.connect)((function(e){return{counter:e.counter,state:e}}),(function(e){return Object(p.bindActionCreators)(o,e)}))(I);var Y=function(){return a.a.createElement(s.Switch,null,a.a.createElement(W,null,a.a.createElement(l.Route,{exact:!0,path:"/",component:L}),a.a.createElement(l.Route,{exact:!0,path:"/page2",component:H})))},G=[{path:"/",component:L,exact:!0},{path:"/page2",component:H,exact:!0}];t.default=function(e,t){var n=j(JSON.parse(t.store));return console.log("server store:"+n),function(t,r){return function(e,t){var n;c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=G.filter((function(t){return Object(l.matchPath)(e.url,t)})).map((function(e){return e.component})).filter((function(e){return e.serverFetch})).map((function(e){return t.dispatch(e.serverFetch())})),console.log(n),r.next=4,c.a.awrap(Promise.all(n));case 4:case"end":return r.stop()}}))}(e,n),a.a.createElement(f.Provider,{store:n},a.a.createElement(s.StaticRouter,{location:e.url,context:r},a.a.createElement(Y,null)))}}}]));