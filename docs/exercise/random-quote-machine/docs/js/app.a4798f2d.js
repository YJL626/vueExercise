(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4aa7":function(t,e,n){t.exports=n.p+"img/weibo.8e3989b2.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",style:{background:t.tint}},[n("QuoteContainer",{staticClass:"quote-container",attrs:{quoteData:t.quoteData,tint:t.tint},on:{"get-new-quote":t.getNewQuote}})],1)},a=[],c=(n("99af"),n("d81d"),n("ac1f"),n("466d"),n("96cf"),n("1da1")),i=n("bc3a"),u=n.n(i),s=u.a.create({baseURL:"https://v1.alapi.cn/api",timeout:2e3});function l(t){return s({url:"/mingyan",params:{typeid:t}}).then((function(t){return t.status>199&&t.status<300?t.data.data:(console.log("request error"),!1)})).catch((function(t){return console.log(t)}))}var p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"quote"},[t.quoteData?r("p",[t._v(t._s(t.quoteData.content))]):r("p",[t._v("数据请求异常")]),t.quoteData?r("p",{staticClass:"author"},[t._v("- "+t._s(t.quoteData.author))]):t._e()]),r("div",{staticClass:"button-container"},[r("Share",{staticClass:"share",scopedSlots:t._u([{key:"qq",fn:function(){return[r("img",{ref:"color",staticClass:"logo qq-logo",style:{background:t.tint},attrs:{src:n("ee7c"),alt:""}})]},proxy:!0},{key:"weibo",fn:function(){return[r("img",{ref:"color1",staticClass:"logo weibo-logo",style:{background:t.tint},attrs:{src:n("4aa7")}})]},proxy:!0}])}),r("button",{ref:"color2",staticClass:"new-quote",style:{background:t.tint},on:{click:function(e){return t.$emit("get-new-quote")}}},[t._v(" new quote ")])],1)])},f=[],d=(n("13d5"),n("4fad"),n("5319"),n("3835")),h={render:function(t){var e=this,n=Object.entries(this.$slots),r=n.map((function(n){var r=Object(d["a"])(n,2),o=r[0],a=r[1],c={on:{click:function(){window.open(e.shareURLData[o],"_blank","resizable=yes")}}};return t("div",c,a)}));return t("div",r)},data:function(){return{shareTemplate:{qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}&pics={{IMAGE}}",qq:'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',weibo:"https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}"}}},props:{config:{type:Object,default:function(){return{title:"test",url:"test11",desc:"测试用"}}}},computed:{shareURLData:function(){var t=this;return Object.entries(this.shareTemplate).reduce((function(e,n){var r=Object(d["a"])(n,2),o=r[0],a=r[1];return e[o]=a.replace(/\{\{(\w*)\}\}/g,(function(e,n){return n=n.toLowerCase(),t.config[n]||"none"})),e}),{})}}},m={name:"QuoteContainer",created:function(){performance.now()},data:function(){return{}},props:{quoteData:{type:Object},tint:{default:"#eee"}},methods:{},computed:{shareHREFList:function(){}},components:{Share:h}},b=m,g=(n("c563"),n("2877")),v=Object(g["a"])(b,p,f,!1,null,"1e251824",null),w=v.exports,q=n("0f40"),y={name:"App",created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tint=t.getRandomColor(),e.next=3,l("时间 ");case 3:t.quoteData=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{quoteData:null,tint:"rgb(10,10,10)",colorChangeAimationId:null}},props:{},methods:{getNewQuote:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.colorChangeAimationId){e.next=2;break}return e.abrupt("return");case 2:return n=t,r=[q(0,255),q(0,255),q(0,255)],o=t.tint.match(/\d+/g).map((function(t){return+t})),a=r.map((function(t,e){return t-o[e]})),c=1e3,i=performance.now(),t.colorChangeAimationId=requestAnimationFrame((function t(e){var r=(e-i)/c;r=Math.min(r,1);var u=o.map((function(t,e){return t+a[e]*r}));n.tint="rgb(".concat(u[0],",").concat(u[1],",").concat(u[2],")"),Math.abs(r)>=1?n.colorChangeAimationId=null:requestAnimationFrame(t)})),e.next=11,l("时间 ");case 11:t.quoteData=e.sent;case 12:case"end":return e.stop()}}),e)})))()},getRandomColor:function(){return"rgb(".concat(q(0,255),",").concat(q(0,255),",").concat(q(0,255),")")}},components:{QuoteContainer:w}},O=y,R=(n("e919"),Object(g["a"])(O,o,a,!1,null,"6980518d",null)),C=R.exports;n("f5df1"),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},c563:function(t,e,n){"use strict";n("d46d")},d46d:function(t,e,n){},df5f:function(t,e,n){},e919:function(t,e,n){"use strict";n("df5f")},ee7c:function(t,e,n){t.exports=n.p+"img/qq.56e27cbd.png"}});
//# sourceMappingURL=app.a4798f2d.js.map