(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,r){"use strict";r.r(e);r(21),r(46);var o=r(151);e.default={namespaced:!0,state:function(){return{products:[{title:"best 1",description:"test description",image:"img/default-picture.png",price:"10000"},{title:"dest 2",description:"test description",image:"img/default-picture.png",price:"20000"},{title:"aest 3",description:"test description",image:"img/default-picture.png",price:"60000"},{title:"eest 4",description:"test description",image:"img/default-picture.png",price:"30000"},{title:"test 5",description:"test description",image:"img/default-picture.png",price:"40000"},{title:"gest 6",description:"test description",image:"img/default-picture.png",price:"80000"},{title:"sest 7",description:"test description",image:"img/default-picture.png",price:"50000"},{title:"fest 8",description:"test description",image:"img/default-picture.png",price:"70000"},{title:"hest 9",description:"test description",image:"img/default-picture.png",price:"90000"}],activeFilter:o.a.DEFAULT}},getters:{products:function(t){return t.products},activeFilter:function(t){return t.activeFilter}},mutations:{setActiveFilter:function(t,e){t.activeFilter=e},addProduct:function(t,e){t.products.some((function(t){return t.title.toLowerCase()===e.title.toLowerCase()}))||t.products.push(JSON.parse(JSON.stringify(e)))},deleteProduct:function(t,e){t.products=t.products.filter((function(t){return t.title.toLowerCase()!==e.title.toLowerCase()}))}}}},151:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o={DEFAULT:"DEFAULT",NAME:"NAME",MIN_PRICE:"MIN_PRICE",MAX_PRICE:"MAX_PRICE"}},193:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(91).default)("764f56dd",content,!0,{sourceMap:!1})},204:function(t,e,r){"use strict";var o={name:"PageLayout"},n=(r(271),r(41)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"PageLayout"},[e("nuxt")],1)}),[],!1,null,"e23ff298",null);e.a=component.exports},205:function(t,e,r){"use strict";r.r(e),r.d(e,"store",(function(){return c}));var o=r(59),n=r(146),c=new o.a.Store({modules:{products:n.default}})},209:function(t,e,r){r(210),r(211),t.exports=r(215)},269:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(91).default)("66fd324c",content,!0,{sourceMap:!1})},270:function(t,e,r){var o=r(90)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap);"]),o.push([t.i,':root{--color-white-1:#fffefb;--color-gray-1:#eee;--color-gray-2:#b4b4b4;--color-black-1:#49485e;--color-black-2:#3f3f3f;--color-red:#ff8484;--color-green:#7bae73;--font-family-primary:Source Sans Pro,sans-serif;--font-family-secondary:Inter,sans-serif;--font-size-title-1:28px;--font-size-title-2:24px;--font-size-subtitle-1:20px;--font-size-subtitle-2:16px;--font-size-text-1:12px;--font-size-text-2:10px;--font-weight-regular:400;--font-weight-semi-bold:600;--line-height-1:1.25;--line-height-2:1.3;--transition-short:0.1s;--transition-long:0.3s}*{margin:0;padding:0;box-sizing:border-box;font-family:"Source Sans Pro",sans-serif}body{background:#fffefb;background:var(--color-white-1)}a,button,input,textarea{border:none;outline:none;background:none}button{font-family:"Inter",sans-serif}',""]),t.exports=o},271:function(t,e,r){"use strict";r(193)},272:function(t,e,r){var o=r(90)(!1);o.push([t.i,".PageLayout[data-v-e23ff298]{padding:0 24px 0 32px}@media screen and (max-width:660px){.PageLayout[data-v-e23ff298]{padding:16px}}",""]),t.exports=o}},[[209,9,1,10]]]);