(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{392:function(e,t,r){e.exports=r.p+"assets/img/composition-structure.e4304348.png"},488:function(e,t,r){"use strict";r.r(t);var a=r(11),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue-3-composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-composition-api"}},[e._v("#")]),e._v(" vue 3 composition api")]),e._v(" "),a("p",[e._v("#网易云课堂#\n#高级前端开发工程师#\n#Vue#\n#深入 vue 源码设计#\n#vue 3 composition api#\n#JavaScript#\n#js#\n#vue.js#")]),e._v(" "),a("p",[e._v("Vue.js Vue 3.0（创建 Vue 3.0 项目、特性）、Composition API (设计动机、"),a("code",[e._v("setup")]),e._v("、"),a("code",[e._v("reactive")]),e._v("、"),a("code",[e._v("ref")]),e._v("、"),a("code",[e._v("computed")]),e._v("、"),a("code",[e._v("watch")]),e._v("、生命周期钩子函数)、代码结构优化。")]),e._v(" "),a("h2",{attrs:{id:"vue-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-0"}},[e._v("#")]),e._v(" Vue 3.0")]),e._v(" "),a("h3",{attrs:{id:"创建-vue-3-0-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vue-3-0-项目"}},[e._v("#")]),e._v(" 创建 Vue 3.0 项目")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" upgrade -g @vue/cli\nvue create vue-next-demo\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vue-next-demo\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" vue-next\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),a("ul",[a("li",[e._v("性能优化")]),e._v(" "),a("li",[e._v("Tree-Shaking 支持")]),e._v(" "),a("li",[e._v("Composition API")]),e._v(" "),a("li",[e._v("Fragment、TelePort、Suspense")]),e._v(" "),a("li",[e._v("TypeScript 支持")]),e._v(" "),a("li",[e._v("自定义 Renderer API")])]),e._v(" "),a("h2",{attrs:{id:"composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[e._v("#")]),e._v(" Composition API")]),e._v(" "),a("h3",{attrs:{id:"设计动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计动机"}},[e._v("#")]),e._v(" 设计动机")]),e._v(" "),a("ul",[a("li",[e._v("逻辑组合复用\n"),a("ul",[a("li",[e._v("解决模板中数据来源不清晰问题")]),e._v(" "),a("li",[e._v("解决命名空间冲突问题")]),e._v(" "),a("li",[e._v("解决性能问题")])])]),e._v(" "),a("li",[e._v("类型推导\n"),a("ul",[a("li",[e._v("增强 TypeScript 支持")])])]),e._v(" "),a("li",[e._v("打包尺寸\n"),a("ul",[a("li",[e._v("函数 API 对 Tree-Shaking 更友好")])])])]),e._v(" "),a("h3",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#setup",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("setup")]),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("实例创建时，初始化 props 后调用")]),e._v(" "),a("li",[e._v("返回一个对象，其属性暴露给模板的渲染上下文")])]),e._v(" "),a("h3",{attrs:{id:"reactive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#reactive",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("reactive")]),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("创建一个没有包装的响应式对象")])]),e._v(" "),a("h3",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#ref",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ref")]),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("返回一个包装对象（value reference）")]),e._v(" "),a("li",[e._v("包装对象只有一个属性 "),a("code",[e._v(".value")])]),e._v(" "),a("li",[e._v("意义能在函数间以引用方式传递任意类型值的容器")])]),e._v(" "),a("h3",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#computed",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("computed")]),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("创建计算属性")])]),e._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#watch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("watch")]),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("参数1数据源")]),e._v(" "),a("li",[e._v("参数2回调函数，数据源发生改变触发")])]),e._v(" "),a("h3",{attrs:{id:"生命周期钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("生命周期钩子函数"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[a("s",[a("code",[e._v("beforeCreate")])]),e._v(" -> 使用 "),a("code",[e._v("setup()")])]),e._v(" "),a("li",[a("s",[a("code",[e._v("created")])]),e._v(" -> 使用 "),a("code",[e._v("setup()")])]),e._v(" "),a("li",[a("code",[e._v("beforeMount")]),e._v(" -> "),a("code",[e._v("onBeforeMount")])]),e._v(" "),a("li",[a("code",[e._v("mounted")]),e._v(" -> "),a("code",[e._v("onMounted")])]),e._v(" "),a("li",[a("code",[e._v("beforeUpdate")]),e._v(" -> "),a("code",[e._v("onBeforeUpdate")])]),e._v(" "),a("li",[a("code",[e._v("updated")]),e._v(" -> "),a("code",[e._v("onUpdated")])]),e._v(" "),a("li",[a("code",[e._v("beforeDestroy")]),e._v(" -> "),a("code",[e._v("onBeforeUnmount")])]),e._v(" "),a("li",[a("code",[e._v("destroyed")]),e._v(" -> "),a("code",[e._v("onUnmounted")])]),e._v(" "),a("li",[a("code",[e._v("errorCaptured")]),e._v(" -> "),a("code",[e._v("onErrorCaptured")])])]),e._v(" "),a("h2",{attrs:{id:"代码结构优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码结构优化"}},[e._v("#")]),e._v(" 代码结构优化")]),e._v(" "),a("img",{staticStyle:{width:"400px"},attrs:{src:r(392),alt:"Composition API 代码结构"}}),e._v(" "),a("h2",{attrs:{id:"延伸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸"}},[e._v("#")]),e._v(" 延伸")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3.0 - github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Tg4y1z7FH",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊聊 Vue.js 3.0 Beta - 尤雨溪"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://vue-next-template-explorer.netlify.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3 Template Explorer"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://composition-api.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3.0 Composition API RFC"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);