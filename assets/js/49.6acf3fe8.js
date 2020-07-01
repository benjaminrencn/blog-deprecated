(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{449:function(e,v,_){"use strict";_.r(v);var l=_(11),t=Object(l.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"flex-布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[e._v("#")]),e._v(" Flex 布局")]),e._v(" "),_("p",[e._v("#小程序开发指南#\n#微信小程序团队#\n#应用场景#\n#Flex 布局#\n#微信小程序#")]),e._v(" "),_("p",[e._v("微信小程序 Flex 布局 概念、容器属性（"),_("code",[e._v("display")]),e._v("、"),_("code",[e._v("flex-direction")]),e._v("、"),_("code",[e._v("flex-wrap")]),e._v("、"),_("code",[e._v("justify-content")]),e._v("、"),_("code",[e._v("align-items")]),e._v("、"),_("code",[e._v("align-content")]),e._v("）、项目属性（"),_("code",[e._v("order")]),e._v("、"),_("code",[e._v("flex-shrink")]),e._v("、"),_("code",[e._v("flex-grow")]),e._v("、"),_("code",[e._v("flex-basis")]),e._v("、"),_("code",[e._v("flex")]),e._v("、"),_("code",[e._v("align-self")]),e._v("）。")]),e._v(" "),_("ul",[_("li",[e._v("小程序要求兼容到 iOS 8 以下版本"),_("br"),e._v("\n详情 -> 本地设置 -> 上传代码时样式自动补全")]),e._v(" "),_("li",[e._v("本文约定术语\n"),_("ul",[_("li",[e._v("容器 container\n"),_("ul",[_("li",[e._v("采用 flex 布局的元素")])])]),e._v(" "),_("li",[e._v("项目 item\n"),_("ul",[_("li",[e._v("容器内的元素")])])])])])]),e._v(" "),_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),_("ul",[_("li",[e._v("flex 最早2009年被提出")]),e._v(" "),_("li",[e._v("目的是提供更灵活的布局模型"),_("br"),e._v("\n容器能通过改变里面的高宽、顺序。来对可用空间实现最佳的填充，方便适配不同大小的内容区域")]),e._v(" "),_("li",[e._v("flex 属性集\n"),_("ul",[_("li",[e._v("容器属性\n"),_("ul",[_("li",[_("code",[e._v("display: flex;")])]),e._v(" "),_("li",[_("code",[e._v("flex-direction: row（默认值） | row-reverse | column | column-reverse")])]),e._v(" "),_("li",[_("code",[e._v("flex-wrap: nowrap（默认值） | wrap | wrap-reverse")])]),e._v(" "),_("li",[_("code",[e._v("justify-content: flex-start（默认值） | flex-end | center |space-between | space-around | space-evenly")])]),e._v(" "),_("li",[_("code",[e._v("align-items: stretch（默认值） | center | flex-end | baseline | flex-start")])]),e._v(" "),_("li",[_("code",[e._v("align-content: stretch（默认值） | flex-start | center | flex-end | space-between | space-around | space-evenly")])])])]),e._v(" "),_("li",[e._v("项目属性\n"),_("ul",[_("li",[_("code",[e._v("order: 0（默认值） | <integer>")])]),e._v(" "),_("li",[_("code",[e._v("flex-shrink: 1（默认值） | <number>")])]),e._v(" "),_("li",[_("code",[e._v("flex-grow: 0（默认值） | <number>")])]),e._v(" "),_("li",[_("code",[e._v("flex-basis: auto（默认值） | <length>")])]),e._v(" "),_("li",[_("code",[e._v("flex: none | auto | @flex-grow @flex-shrink @flex-basis")])]),e._v(" "),_("li",[_("code",[e._v("align-self: auto（默认值） | flex-start | flex-end |center | baseline | stretch")])])])])])]),e._v(" "),_("li",[e._v("坐标轴\n"),_("ul",[_("li",[e._v("默认水平方向是主轴（main axis）、垂直方向是交叉轴（cross axis）")]),e._v(" "),_("li",[e._v("交叉轴垂直于主轴，方向取决于主轴方向")]),e._v(" "),_("li",[e._v("项目在主轴上排列，排满后在交叉轴方向换行")])])])]),e._v(" "),_("h2",{attrs:{id:"容器属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容器属性"}},[e._v("#")]),e._v(" 容器属性")]),e._v(" "),_("h3",{attrs:{id:"flex-direction"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex-direction")])]),e._v(" "),_("ul",[_("li",[e._v("设置坐标轴方向")]),e._v(" "),_("li",[_("code",[e._v("flex-direction: row（默认值） | row-reverse | column | column-reverse")])]),e._v(" "),_("li",[_("code",[e._v("row")]),e._v("（默认值）：主轴横向从左往右")]),e._v(" "),_("li",[_("code",[e._v("row-reverse")]),e._v("：主轴横向从右往左")]),e._v(" "),_("li",[_("code",[e._v("column")]),e._v("：主轴纵向从上往下")]),e._v(" "),_("li",[_("code",[e._v("column-reverse")]),e._v("：主轴纵向从下往上")])]),e._v(" "),_("h3",{attrs:{id:"flex-wrap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex-wrap")])]),e._v(" "),_("ul",[_("li",[e._v("设置是项目否允许多行排列及换行方向")]),e._v(" "),_("li",[_("code",[e._v("flex-wrap: nowrap（默认值） | wrap | wrap-reverse")])]),e._v(" "),_("li",[_("code",[e._v("nowrap")]),e._v("（默认值）：不换行，溢出容器")]),e._v(" "),_("li",[_("code",[e._v("wrap")]),e._v("：换行排列")]),e._v(" "),_("li",[_("code",[e._v("warp-reverse")]),e._v("：换行排列，方向为 "),_("code",[e._v("wrap")]),e._v(" 反方向")])]),e._v(" "),_("h3",{attrs:{id:"justify-content"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[e._v("#")]),e._v(" "),_("code",[e._v("justify-content")])]),e._v(" "),_("ul",[_("li",[e._v("设置项目在主轴上的对齐方式，及项目之间及其周围多余的空间")]),e._v(" "),_("li",[_("code",[e._v("justify-content: flex-start（默认值） | flex-end | center | space-between | space-around | space-evenly")])]),e._v(" "),_("li",[_("code",[e._v("flex-start")]),e._v("（默认值）：对齐主轴起点，项目间不留空隙")]),e._v(" "),_("li",[_("code",[e._v("center")]),e._v("：居中排列，项目间不留空隙。第一个项目离主轴起点距离等于最后一个项目离主轴终点距离")]),e._v(" "),_("li",[_("code",[e._v("flex-end")]),e._v("：对齐主轴终点，项目间不留空隙")]),e._v(" "),_("li",[_("code",[e._v("space-between")]),e._v("：项目间间距相等。第一个项目离主轴起点、最后一个项目离主轴终点距离为0")]),e._v(" "),_("li",[_("code",[e._v("space-around")]),e._v("：项目间间距相等。第一个项目离主轴起点、最后一个项目离主轴终点距离为中建项目间间距一半")]),e._v(" "),_("li",[_("code",[e._v("space-evenly")]),e._v("：项目间间距、第一个项目离主轴起点、最后一个项目离主轴终点距离相等")])]),e._v(" "),_("h3",{attrs:{id:"align-items"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[e._v("#")]),e._v(" "),_("code",[e._v("align-items")])]),e._v(" "),_("ul",[_("li",[e._v("设置项目在行中的对齐方式")]),e._v(" "),_("li",[_("code",[e._v("align-items: stretch（默认值） | center | flex-end | baseline | flex-start")])]),e._v(" "),_("li",[_("code",[e._v("stretch")]),e._v("（默认值）：拉伸填满行高")]),e._v(" "),_("li",[_("code",[e._v("flex-start")]),e._v("：顶部与行起点对齐")]),e._v(" "),_("li",[_("code",[e._v("center")]),e._v("：行中居中对齐")]),e._v(" "),_("li",[_("code",[e._v("flex-end")]),e._v("：底部与行终点对齐")]),e._v(" "),_("li",[_("code",[e._v("base-line")]),e._v("：项目的第一行文字的基线对齐")])]),e._v(" "),_("h3",{attrs:{id:"align-content"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[e._v("#")]),e._v(" "),_("code",[e._v("align-content")])]),e._v(" "),_("ul",[_("li",[e._v("多行排列时，设置行在交叉轴上的对齐方式，及分配行之间及周围多余的空间")]),e._v(" "),_("li",[_("code",[e._v("align-content: stretch（默认值） | flex-start | center | flex-end | space-between | space-around | space-evenly")])]),e._v(" "),_("li",[_("code",[e._v("stretch")]),e._v("（默认值）："),_("br"),e._v("\n当未设置尺寸，将各行中的项目拉伸填满交叉轴"),_("br"),e._v("\n当设置尺寸，项目尺寸不变，项目行拉伸填满交叉轴")]),e._v(" "),_("li",[_("code",[e._v("flex-start")]),e._v("：首行在交叉轴起点开始排列，不留行间距")]),e._v(" "),_("li",[_("code",[e._v("center")]),e._v("：行在交叉轴中点排列，不留行间距，首行离交叉轴起点、行尾离交叉轴终点距离相等")]),e._v(" "),_("li",[_("code",[e._v("flex-end")]),e._v("：行尾在交叉轴终点开始排列，不留行间距")]),e._v(" "),_("li",[_("code",[e._v("space-between")]),e._v("：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为0")]),e._v(" "),_("li",[_("code",[e._v("space-around")]),e._v("：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为行间距一半")]),e._v(" "),_("li",[_("code",[e._v("space-evenly")]),e._v("：行间距相等，首行离交叉轴起点、行尾离交叉轴终点距离为行间距相等")])]),e._v(" "),_("h2",{attrs:{id:"项目属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目属性"}},[e._v("#")]),e._v(" 项目属性")]),e._v(" "),_("h3",{attrs:{id:"order"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[e._v("#")]),e._v(" "),_("code",[e._v("order")])]),e._v(" "),_("ul",[_("li",[e._v("设置项目沿主轴方向上的排列顺序，数值越小，排列越靠前，属性值为整数")]),e._v(" "),_("li",[_("code",[e._v("order: 0（默认值） | <integer>")])])]),e._v(" "),_("h3",{attrs:{id:"flex-shrink"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex-shrink")])]),e._v(" "),_("ul",[_("li",[e._v("当项目在主轴方向上溢出时，设置项目收缩因子压缩项目适应容器，属性值为非负数")]),e._v(" "),_("li",[_("code",[e._v("flex-shrink: 1（默认值） | <number>")])])]),e._v(" "),_("h3",{attrs:{id:"flex-grow"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex-grow")])]),e._v(" "),_("ul",[_("li",[e._v("当项目在主轴方向上还有剩余空间时，设置项目扩张因子分配剩余空间，属性值为非负数")]),e._v(" "),_("li",[_("code",[e._v("flex-grow: 0（默认值） | <number>")])])]),e._v(" "),_("h3",{attrs:{id:"flex-basis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex-basis")])]),e._v(" "),_("ul",[_("li",[e._v("与项目主轴方向尺寸有关，"),_("code",[e._v("flex-direction")]),e._v(" 为 "),_("code",[e._v("row")]),e._v("、"),_("code",[e._v("row-reverse")]),e._v(" 时是 "),_("code",[e._v("width")]),e._v("，"),_("code",[e._v("flex-direction")]),e._v(" 为 "),_("code",[e._v("column")]),e._v("、"),_("code",[e._v("column-reverse")]),e._v(" 时是 "),_("code",[e._v("height")]),_("br"),e._v("\n同时存在 "),_("code",[e._v("flex-basis")]),e._v(" 优先级高于项目主轴方向尺寸，值非 "),_("code",[e._v("auto")]),e._v(" 属性优先级更高")])]),e._v(" "),_("h3",{attrs:{id:"flex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[e._v("#")]),e._v(" "),_("code",[e._v("flex")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("flex")]),e._v(" 是 "),_("code",[e._v("flex-grow")]),e._v("、"),_("code",[e._v("flex-shrink")]),e._v("、"),_("code",[e._v("flex-basis")]),e._v(" 的简写")]),e._v(" "),_("li",[e._v("值 "),_("code",[e._v("none")]),e._v(" 等价于 "),_("code",[e._v("0 0 auto")])]),e._v(" "),_("li",[e._v("值 "),_("code",[e._v("auto")]),e._v(" 等价于 "),_("code",[e._v("1 1 auto")])])]),e._v(" "),_("h3",{attrs:{id:"align-self"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[e._v("#")]),e._v(" "),_("code",[e._v("align-self")])]),e._v(" "),_("ul",[_("li",[e._v("设置项目在行中交叉轴方向上的对齐方式，覆盖容器的 "),_("code",[e._v("align-items")])]),e._v(" "),_("li",[_("code",[e._v("align-self: auto（默认值） | flex-start | flex-end |center | baseline | stretch")])]),e._v(" "),_("li",[e._v("默认 "),_("code",[e._v("auto")]),e._v(" 继承容器的 "),_("code",[e._v("align-items")]),e._v(" 值")]),e._v(" "),_("li",[e._v("当容器没有设置 "),_("code",[e._v("align-items")]),e._v(" 时，属性为 "),_("code",[e._v("stretch")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);