(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{397:function(t,d,i){t.exports=i.p+"assets/img/vue-diff.385196cf.png"},398:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-0.a3b28cca.png"},399:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-1.b0ae521a.png"},400:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-2.949b7374.png"},401:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-3.d2e068c6.png"},402:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-4.a6a8d3b8.png"},403:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-5.aef552df.png"},404:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-6.273faf17.png"},405:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-7.024d90a5.png"},406:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-8.923fead6.png"},407:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-9.ce5ee625.png"},408:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-10.1e2e2850.png"},409:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-11.fc55500b.png"},410:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-12.d4d39125.png"},411:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-13.d33f8ccd.png"},412:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-14.3a9207fd.png"},413:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-15.5de9fa3c.png"},414:function(t,d,i){t.exports=i.p+"assets/img/vnode-diff-16.54c90650.png"},493:function(t,d,i){"use strict";i.r(d);var e=i(11),a=Object(e.a)({},(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"diff-patch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-patch"}},[t._v("#")]),t._v(" diff patch")]),t._v(" "),e("p",[t._v("#网易云课堂#\n#高级前端开发工程师#\n#Vue#\n#深入 vue 源码设计#\n#diff patch#\n#JavaScript#\n#js#\n#vue.js#")]),t._v(" "),e("p",[t._v("Vue.js Virtual DOM、Diff & Patch（策略、图解）。")]),t._v(" "),e("img",{staticStyle:{width:"600px"},attrs:{src:i(397),alt:"diff patch"}}),t._v(" "),e("h2",{attrs:{id:"virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),e("ul",[e("li",[t._v("Virtual DOM\n"),e("ul",[e("li",[t._v("js 对象，至少包含 tag、props、children")])])]),t._v(" "),e("li",[t._v("优点\n"),e("ul",[e("li",[t._v("Virtual DOM diff patch 操作提高开发效率，而非应用性能")]),t._v(" "),e("li",[t._v("实现跨平台渲染")])])])]),t._v(" "),e("h2",{attrs:{id:"diff-patch-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-patch-2"}},[t._v("#")]),t._v(" Diff & Patch")]),t._v(" "),e("h3",{attrs:{id:"diff-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-策略"}},[t._v("#")]),t._v(" Diff 策略")]),t._v(" "),e("ol",[e("li",[t._v("按 tree 层级 diff（level by level）")]),t._v(" "),e("li",[t._v("按类型 diff")]),t._v(" "),e("li",[t._v("列表 diff")])]),t._v(" "),e("h3",{attrs:{id:"diff-图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-图解"}},[t._v("#")]),t._v(" Diff 图解")]),t._v(" "),e("ul",[e("li",[t._v("大圈为 VNode")]),t._v(" "),e("li",[t._v("小圈为 DOM")]),t._v(" "),e("li",[t._v("（n）对应图片 title")])]),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(398),title:"vnode diff 0",alt:"vnode diff 0"}}),t._v(" "),e("ol",[e("li",[e("p",[t._v("比较 OldStartIdx、NewStartIdx，相同（1）"),e("br"),t._v("\nOldStartIdx、NewStartIdx +1"),e("br"),t._v("\n进入下一回合")]),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(399),title:"vnode diff 1",alt:"vnode diff 1"}})]),t._v(" "),e("li",[e("p",[t._v("比较 OldStartIdx、NewStartIdx，不同（2）"),e("br"),t._v("\n比较 OldEndIdx、NewEndIdx，相同（3）"),e("br"),t._v("\nOldEndIdx、NewEndIdx -1"),e("br"),t._v("\n进入下一回合")]),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(400),title:"vnode diff 2",alt:"vnode diff 2"}}),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(401),title:"vnode diff 3",alt:"vnode diff 3"}})]),t._v(" "),e("li",[e("p",[t._v("比较 OldStartIdx、NewStartIdx，不同（4）"),e("br"),t._v("\n比较 OldEndIdx、NewEndIdx，不同（5）"),e("br"),t._v("\n比较 OldStartIdx、NewEndIdx，相同（6）"),e("br"),t._v("\n移动 OldStartIdx 指向的 VNode 的 DOM 插入到 OldEndIdx 指向的 VNode 的 DOM 后（7）"),e("br"),t._v("\nOldStartIdx +1、NewEndIdx -1"),e("br"),t._v("\n进入下一回合")]),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(402),title:"vnode diff 4",alt:"vnode diff 4"}}),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(403),title:"vnode diff 5",alt:"vnode diff 5"}}),t._v(" "),e("img",{staticStyle:{width:"500px"},attrs:{src:i(404),title:"vnode diff 6",alt:"vnode diff 6"}}),t._v(" "),e("img",{staticStyle:{width:"520px"},attrs:{src:i(405),title:"vnode diff 7",alt:"vnode diff 7"}})]),t._v(" "),e("li",[e("p",[t._v("比较 OldStartIdx、NewStartIdx，不同（8）"),e("br"),t._v("\n比较 OldEndIdx、NewEndIdx，不同（9）"),e("br"),t._v("\n比较 OldStartIdx、NewEndIdx，不同（10）"),e("br"),t._v("\n比较 OldEndIdx、NewStartIdx，相同（11）"),e("br"),t._v("\n移动 OldEndIdx 指向的 VNode 的 DOM 插入到 OldStartIdx 指向的 VNode 的 DOM 后（12）"),e("br"),t._v("\nOldEndIdx -1、NewStartIdx +1\n进入下一回合")]),t._v(" "),e("img",{staticStyle:{width:"520px"},attrs:{src:i(406),title:"vnode diff 8",alt:"vnode diff 8"}}),t._v(" "),e("img",{staticStyle:{width:"520px"},attrs:{src:i(407),title:"vnode diff 9",alt:"vnode diff 9"}}),t._v(" "),e("img",{staticStyle:{width:"520px"},attrs:{src:i(408),title:"vnode diff 10",alt:"vnode diff 10"}}),t._v(" "),e("img",{staticStyle:{width:"520px"},attrs:{src:i(409),title:"vnode diff 11",alt:"vnode diff 11"}}),t._v(" "),e("img",{staticStyle:{width:"540px"},attrs:{src:i(410),title:"vnode diff 12",alt:"vnode diff 12"}})]),t._v(" "),e("li",[e("p",[t._v("比较 OldStartIdx、NewStartIdx，不同（13）"),e("br"),t._v("\n比较 OldEndIdx、NewEndIdx，不同（14）"),e("br"),t._v("\n比较 OldStartIdx、NewEndIdx，不同"),e("br"),t._v("\n比较 OldEndIdx、NewStartIdx，不同"),e("br"),t._v("\n遍历 OldStartIdx、OldStartIdx 间节点是否存在与 NewStartIdx 相同的节点，若存在则将移动 DOM 到 OldStartIdx 指向的 VNode 的 DOM 前插入，没有存在则创建 NewStartIdx 指向的 VNode 的 DOM 在 OldStartIdx 前插入"),e("br"),t._v("\n若设置 "),e("code",[t._v("key")]),t._v(" 属性，首先寻找 "),e("code",[t._v("key")]),t._v(" 对应 VNode\nNewEndIdx -1（15）"),e("br"),t._v("\n此时 NewEndIdx < NewStartIdx，说明 New VNode 生成完毕"),e("br"),t._v("\n删除 Old VNode 多余部分 OldStartIdx、OldEndIdx 指向 VNode 及中间部分（16）"),e("br"),t._v("\n通过 Old VNode 生成 DOM 并销毁")]),t._v(" "),e("img",{staticStyle:{width:"540px"},attrs:{src:i(411),title:"vnode diff 13",alt:"vnode diff 13"}}),t._v(" "),e("img",{staticStyle:{width:"540px"},attrs:{src:i(412),title:"vnode diff 14",alt:"vnode diff 14"}}),t._v(" "),e("img",{staticStyle:{width:"560px"},attrs:{src:i(413),title:"vnode diff 15",alt:"vnode diff 15"}}),t._v(" "),e("img",{staticStyle:{width:"560px"},attrs:{src:i(414),title:"vnode diff 16",alt:"vnode diff 16"}})])]),t._v(" "),e("ul",[e("li",[t._v("设置 "),e("code",[t._v("key")]),t._v(" "),e("ul",[e("li",[t._v("算法复杂度 O(n)")])])]),t._v(" "),e("li",[t._v("未设置\n"),e("ul",[e("li",[t._v("算法复杂度\n"),e("ul",[e("li",[t._v("最好 O(n)")]),t._v(" "),e("li",[t._v("最坏 O("),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msup",[e("mjx-mi",{staticClass:"mjx-i"},[e("mjx-c",{attrs:{c:"n"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),t._v(")")],1)])])])])])])}),[],!1,null,null,null);d.default=a.exports}}]);