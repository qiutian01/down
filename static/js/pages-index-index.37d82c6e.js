(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0bcf":function(t,e,i){"use strict";var n=i("a0a4"),o=i.n(n);o.a},"5b73":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{width:"750rpx",height:"100%"}},[n("v-uni-image",{staticClass:"logo",staticStyle:{width:"750rpx",height:"100%"},attrs:{src:"/static/splash.png",mode:"scaleToFill"}}),t.showTip?t._e():n("v-uni-view",{staticClass:"text-area"},[t.promo_code.length>0?n("v-uni-view",{staticClass:"promocode"},[n("v-uni-view",{staticClass:"code"},[n("v-uni-text",{staticStyle:{color:"#ffd465","font-size":"40rpx"}},[t._v("邀请码：")]),n("v-uni-text",{staticStyle:{color:"#ffd465","font-size":"40rpx"}},[t._v(t._s(t.promo_code))])],1),n("v-uni-view",{staticClass:"copy"},[n("v-uni-text",{staticStyle:{"font-size":"15rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy()}}},[t._v("复制")])],1)],1):t._e(),n("v-uni-view",{staticClass:"down"},[n("v-uni-text",{staticClass:"title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.godown.apply(void 0,arguments)}}},[t._v("下载APP")])],1)],1),t.showTip?n("v-uni-view",{staticClass:"tip"},[n("v-uni-image",{staticStyle:{width:"600rpx",height:"1000rpx"},attrs:{src:i("8c9c"),mode:"scaleToFill"}}),n("v-uni-view",{staticClass:"down",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.down()}}},[n("v-uni-text",{staticClass:"title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.godown.apply(void 0,arguments)}}},[t._v("我知道了")])],1)],1):t._e()],1)},r=[]},6146:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{promo_code:getApp().globalData.promo_code,downUrl:{android:"https://wwa.lanzoui.com/b00og846j",ios:"https://apple.mrb6ns.cn/?str=o5zjn7dkh5"},showTip:!1}},onLoad:function(){},methods:{godown:function(){this.down()},down:function(){switch(this.copy(),uni.getSystemInfoSync().platform){case"android":console.log(this.downUrl),this.downUrl&&void 0!=this.downUrl.android&&this.downUrl.android.length>0?window.open(this.downUrl.android):uni.showToast({title:"暂未提供下载地址，稍后再来",icon:"none"});break;case"ios":this.downUrl&&void 0!=this.downUrl.ios&&this.downUrl.ios.length>0?window.open(this.downUrl.ios):uni.showToast({title:"暂未提供下载地址，稍后再来",icon:"none"});break;default:this.downUrl&&void 0!=this.downUrl.android&&this.downUrl.android.length>0?window.open(this.downUrl.android):uni.showToast({title:"暂未提供下载地址，稍后再来",icon:"none"});break}},copy:function(){if(this.promo_code.length>0){var t="<zy>"+this.promo_code+"</zy>";this.h5Copy(t)}},h5Copy:function(t){var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var i=document.execCommand("Copy");e.remove();var n=i?"复制成功":"复制失败";uni.showToast({title:n})}}};e.default=n},"646b":function(t,e,i){"use strict";i.r(e);var n=i("6146"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"8aed":function(t,e,i){"use strict";i.r(e);var n=i("5b73"),o=i("646b");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("0bcf");var a,c=i("f0c5"),d=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"2db47170",null,!1,n["a"],a);e["default"]=d.exports},"8c9c":function(t,e,i){t.exports=i.p+"static/img/tip.83894d01.png"},9652:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-2db47170]{width:100%;height:100%}.tip[data-v-2db47170]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.8);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.code[data-v-2db47170]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.text-area[data-v-2db47170]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:%?100?%;width:%?750?%}.down[data-v-2db47170]{margin-top:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?50?%;border-radius:%?50?%;background:#fa436a;width:%?300?%;height:%?100?%}.title[data-v-2db47170]{font-size:%?36?%;color:#fff}.copy[data-v-2db47170]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?50?%;border-radius:%?50?%;background:-webkit-gradient(linear,right top,left top,from(#f9e6af),to(#ffd465));background:-webkit-linear-gradient(right,#f9e6af,#ffd465);background:linear-gradient(270deg,#f9e6af,#ffd465);width:%?100?%;height:%?40?%;margin-left:%?50?%}.promocode[data-v-2db47170]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},a0a4:function(t,e,i){var n=i("9652");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4228c6cd",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
