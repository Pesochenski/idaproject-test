(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{319:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("f866f86a",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);var o=n(92),r=n(205),c={name:"Card",props:{product:{type:Object,required:!0}},setup:function(t){return{isHovered:Object(o.e)(!1),deleteHandler:function(){return r.store.commit("products/deleteProduct",t.product)}}}},d=(n(334),n(41)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Card",on:{mouseover:function(e){t.isHovered=!0},mouseleave:function(e){t.isHovered=!1}}},[o("div",{staticClass:"Card__delete",class:{"Card__delete--active":t.isHovered},on:{click:t.deleteHandler}},[o("img",{staticClass:"Card__delete-icon",attrs:{src:n(333),alt:"delete"}})]),t._v(" "),o("div",{staticClass:"Card__img-container"},[o("img",{staticClass:"Card__img",attrs:{src:t.product.image,alt:"img"}})]),t._v(" "),o("div",{staticClass:"Card__content"},[o("p",{staticClass:"Card__content-title"},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),o("p",{staticClass:"Card__content-description"},[t._v("\n      "+t._s(t.product.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"Card__content-price"},[t._v("\n      "+t._s(new Intl.NumberFormat("ru-RU").format(t.product.price))+" руб.\n    ")])])])}),[],!1,null,"39ca4c50",null);e.default=component.exports},333:function(t,e,n){t.exports=n.p+"img/icon-delete.d1cfb7f.svg"},334:function(t,e,n){"use strict";n(319)},335:function(t,e,n){var o=n(90)(!1);o.push([t.i,'.Card[data-v-39ca4c50]{box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;position:relative;min-height:423px;background:var(--color-white-1);display:flex;flex-direction:column;min-width:28%;width:calc(33% - 8px);opacity:1}.Card__delete[data-v-39ca4c50]{width:32px;height:32px;border-radius:10px;position:absolute;top:-8px;right:-8px;background:var(--color-red);pointer-events:none;opacity:0;transition:var(--transition-short);display:flex;align-items:center;justify-content:center;z-index:1}.Card__delete--active[data-v-39ca4c50]{opacity:1;pointer-events:all}.Card__img[data-v-39ca4c50]{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.Card__img-container[data-v-39ca4c50]{width:100%;max-height:200px;overflow:hidden;position:relative;display:flex;align-items:center;border-radius:4px 4px 0 0}.Card__content[data-v-39ca4c50]{padding:16px 16px 24px;display:flex;flex-direction:column;flex-grow:1}.Card__content-title[data-v-39ca4c50]{font-family:var(--font-family);font-style:normal;font-feature-settings:"tnum" on,"lnum" on;font-weight:var(--font-weight-semi-bold);font-size:var(--font-size-subtitle-1)}.Card__content-description[data-v-39ca4c50],.Card__content-title[data-v-39ca4c50]{line-height:var(--line-height-1);color:var(--color-black-2);text-transform:capitalize}.Card__content-description[data-v-39ca4c50]{font-family:var(--font-family);font-style:normal;font-feature-settings:"tnum" on,"lnum" on;font-weight:var(--font-weight-regular);font-size:var(--font-size-subtitle-2);margin:16px 0}.Card__content-price[data-v-39ca4c50]{font-family:var(--font-family);font-style:normal;font-feature-settings:"tnum" on,"lnum" on;font-weight:var(--font-weight-semi-bold);font-size:var(--font-size-title-2);line-height:var(--line-height-1);color:var(--color-black-2);margin-top:auto}@media screen and (max-width:1250px){.Card[data-v-39ca4c50]{min-width:40%;width:calc(50% - 8px)}}@media screen and (max-width:900px){.Card[data-v-39ca4c50]{min-height:350px;min-width:100%;width:100%}.Card__img-container[data-v-39ca4c50]{max-height:150px}}',""]),t.exports=o}}]);