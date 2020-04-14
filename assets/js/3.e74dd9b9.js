(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(s,a,t){s.exports=t.p+"assets/img/v8-cheney.9ede2d67.png"},215:function(s,a,t){s.exports=t.p+"assets/img/v8-mark-sweep.3be6241f.png"},216:function(s,a,t){s.exports=t.p+"assets/img/v8-mark-compact.4e2766aa.png"},228:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"javascript-中内存管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中内存管理"}},[s._v("#")]),s._v(" JavaScript 中内存管理")]),s._v(" "),n("p",[s._v("#网易云课堂#\n#高级前端开发工程师#\n#Javascript 进阶#\n#函数#\n#javascript 中内存管理#\n#JavaScript#\n#js#")]),s._v(" "),n("p",[s._v("为什么学习内存、JS 数据类型、JS 内存机制、垃圾回收机制、V8 引擎内存管理机制。")]),s._v(" "),n("h2",{attrs:{id:"为什么学习内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么学习内存"}},[s._v("#")]),s._v(" 为什么学习内存")]),s._v(" "),n("ul",[n("li",[s._v("程序运行需要内存分配空间。")]),s._v(" "),n("li",[s._v("防止页面占用内存过大，导致客户端卡顿、无响应")]),s._v(" "),n("li",[s._v("Node.js 使用 V8 引擎，内存对后端服务的性能至关重要。"),n("br"),s._v("\n因为后端服务的持久性，更容易造成内存溢出。")])]),s._v(" "),n("h2",{attrs:{id:"js-数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-数据类型"}},[s._v("#")]),s._v(" JS 数据类型")]),s._v(" "),n("h3",{attrs:{id:"原始数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[s._v("#")]),s._v(" 原始数据类型")]),s._v(" "),n("ul",[n("li",[s._v("字符串 String")]),s._v(" "),n("li",[s._v("数字 Number")]),s._v(" "),n("li",[s._v("布尔 Boolean")]),s._v(" "),n("li",[s._v("空对象 Null")]),s._v(" "),n("li",[s._v("未定义 Undefined")]),s._v(" "),n("li",[s._v("Symbol")])]),s._v(" "),n("h3",{attrs:{id:"引用数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[s._v("#")]),s._v(" 引用数据类型")]),s._v(" "),n("ul",[n("li",[s._v("对象 Object")])]),s._v(" "),n("h2",{attrs:{id:"js-内存机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-内存机制"}},[s._v("#")]),s._v(" JS 内存机制")]),s._v(" "),n("h3",{attrs:{id:"栈内存-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-stack"}},[s._v("#")]),s._v(" 栈内存 Stack")]),s._v(" "),n("ul",[n("li",[s._v("运算受限的线性表"),n("br"),s._v("\n仅允许在表的一端（栈顶）进行插入、删除运算\n"),n("ul",[n("li",[s._v("入栈（进栈、压栈）"),n("br"),s._v("\n放在栈顶元素上使其成为新的栈顶元素")]),s._v(" "),n("li",[s._v("出栈（退栈）"),n("br"),s._v("\n删除栈顶元素使其相邻元素成为新的栈顶元素")])])]),s._v(" "),n("li",[s._v("原始数据类型值有固定大小"),n("br"),s._v("\n系统自动分配存储空间")]),s._v(" "),n("li",[s._v("存储原始数据类型")])]),s._v(" "),n("h3",{attrs:{id:"堆内存-heap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆内存-heap"}},[s._v("#")]),s._v(" 堆内存 Heap")]),s._v(" "),n("ul",[n("li",[s._v("引用数据类型值大小不固定")]),s._v(" "),n("li",[s._v("存储引用数据类型")]),s._v(" "),n("li",[s._v("js 不允许直接访问堆内存、操作堆内存空间"),n("br"),s._v("\n需要操作引用（可以理解为存储在栈内存中的内存地址，与堆内存中的实际值相关联）")])]),s._v(" "),n("h3",{attrs:{id:"定义原始数据类型变量-let-a-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义原始数据类型变量-let-a-10"}},[s._v("#")]),s._v(" 定义原始数据类型变量 "),n("code",[s._v("let a = 10;")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("10")]),s._v(" 存入内存空间")]),s._v(" "),n("li",[s._v("当前作用域中声明变量 "),n("code",[s._v("a")]),n("br"),s._v(" "),n("code",[s._v("a")]),s._v(" 的值为 "),n("code",[s._v("undefined")])]),s._v(" "),n("li",[n("code",[s._v("a")]),s._v(" 与 "),n("code",[s._v("10")]),s._v(" 进行关联")])]),s._v(" "),n("h3",{attrs:{id:"存储对象-let-obj1-a-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存储对象-let-obj1-a-10"}},[s._v("#")]),s._v(" 存储对象 "),n("code",[s._v("let obj1 = { a: 10 };")])]),s._v(" "),n("ul",[n("li",[s._v("堆内存中开辟一块空间"),n("br"),s._v("\n以键值对的形式存储对象"),n("br"),s._v("\n对应一个内存地址")]),s._v(" "),n("li",[s._v("栈内存中声明变量 "),n("code",[s._v("obj1")]),n("br"),s._v("\n关联的值是堆内存中的内存地址"),n("br"),s._v("\n可以通过该变量访问对象了")])]),s._v(" "),n("h3",{attrs:{id:"声明函数-function-fn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明函数-function-fn"}},[s._v("#")]),s._v(" 声明函数 "),n("code",[s._v("function fn () {}")])]),s._v(" "),n("ul",[n("li",[s._v("堆内存中开辟一块空间"),n("br"),s._v("\n以字符串的形式存储函数体中的代码\n对应一个内存地址")]),s._v(" "),n("li",[s._v("讲堆内存的内存地址赋值给栈内存中声明函数名变量 "),n("code",[s._v("fn")]),n("br"),s._v("\n函数任以字符串的形式存储在堆内存中")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\nfn "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ƒ fn() { return 1; }")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"垃圾回收机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[s._v("#")]),s._v(" 垃圾回收机制")]),s._v(" "),n("ul",[n("li",[s._v("垃圾回收\n"),n("ul",[n("li",[s._v("找出不再继续使用的变量，释放其所占用的内存")]),s._v(" "),n("li",[s._v("垃圾回收器周期性执行垃圾回收")]),s._v(" "),n("li",[s._v("自动执行")]),s._v(" "),n("li",[s._v("不可见的")])])]),s._v(" "),n("li",[s._v("优势\n"),n("ul",[n("li",[s._v("简化内存管理代码"),n("br"),s._v("\n减低负担")])])]),s._v(" "),n("li",[s._v("劣势\n"),n("ul",[n("li",[s._v("JavaScript 未暴露内存 API"),n("br"),s._v("\n无法干预内存管理")])])]),s._v(" "),n("li",[s._v("目的\n"),n("ul",[n("li",[s._v("了解垃圾回收机制有助于编写更优秀的代码")])])])]),s._v(" "),n("h2",{attrs:{id:"垃圾收集策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集策略"}},[s._v("#")]),s._v(" 垃圾收集策略")]),s._v(" "),n("h3",{attrs:{id:"引用计数（reference-counting）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用计数（reference-counting）"}},[s._v("#")]),s._v(" 引用计数（reference counting）")]),s._v(" "),n("ul",[n("li",[s._v("跟踪值被引用次数，每次引用+1，释放减-1，当值的引用次数变成0时，回收其内存空间")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明一个变量并给其赋值一个引用类型的值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 则该引用类型的值的引用次数为1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同一个引用类型的值被赋值给另一个变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 则该引用类型的值的引用次数+1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当变量被赋值另一个值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 则该引用类型的值得引用次数-1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当变量被赋值 null，解除了应用类型的引用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时该引用类型的值的引用次数为0，无法再访问该引用类型的值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当垃圾回收机制运行的时候就会释放该引用类型的值所占用的空间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("缺点"),n("br"),s._v("\n循环引用（相互引用）造成无法回收内存"),n("br"),s._v("\nIE8- 浏览器会出现的问题")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 循环引用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"标记清除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[s._v("#")]),s._v(" 标记清除")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("当变量进入执行环境时标记为“进入环境”，当变量离开环境时标记为“离开环境”"),n("br"),s._v("\n垃圾收集器完成内存清除，销毁带标记的值，回收其所占用的内存空间")])]),s._v(" "),n("li",[n("p",[s._v("执行环境"),n("br"),s._v("\n定义了变量或函数有权访问的其他数据，决定了各自的行为"),n("br"),s._v("\n每个执行环境都有一个变量对象（variable object），以存储所有定义的变量和函数。代码无法访问，由解析器使用")])]),s._v(" "),n("li",[n("p",[s._v("全局执行环境")]),s._v(" "),n("ul",[n("li",[s._v("最外围的执行环境")]),s._v(" "),n("li",[s._v("浏览器中是 window"),n("br"),s._v("\nnode 中是 global")]),s._v(" "),n("li",[s._v("执行环境中所有代码执行完毕后，该环境被销毁，其中所有变量和函数的定义也被销毁")]),s._v(" "),n("li",[s._v("全局执行环境直到应用程序退出、关闭网页、关闭浏览器时被销毁")])])]),s._v(" "),n("li",[n("p",[s._v("局部执行环境（环境栈）")]),s._v(" "),n("ul",[n("li",[s._v("每个函数都有自己的执行环境")]),s._v(" "),n("li",[s._v("当指令流进入一个函数时，函数的环境就会被退出一个环境栈中。"),n("br"),s._v("\n当函数执行后，栈将其环境弹出，把控制权返还给之前的执行环境。")]),s._v(" "),n("li",[s._v("ECMAScript 程序中的执行流由此机制控制。")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 被标记进入环境")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 被标记进入环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行完毕")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a、b 被标记离开环境，内存被回收")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("目前主流浏览器使用标记清除")])])]),s._v(" "),n("h2",{attrs:{id:"v8-内存管理机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v8-内存管理机制"}},[s._v("#")]),s._v(" V8 内存管理机制")]),s._v(" "),n("h3",{attrs:{id:"限制内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制内存"}},[s._v("#")]),s._v(" 限制内存")]),s._v(" "),n("ul",[n("li",[s._v("64位系统约为 1.4G，32位系统约 0.7G")]),s._v(" "),n("li",[s._v("原因\n"),n("ul",[n("li",[s._v("最初为浏览器设计，不大可能存在大量内存使用场景")]),s._v(" "),n("li",[s._v("防止垃圾回收所导致的线程暂停执行时间过长")])])]),s._v(" "),n("li",[s._v("可以修改内存限制设置")]),s._v(" "),n("li",[s._v("使用 Buffer 对象（c++ 层面分配内存）")])]),s._v(" "),n("h3",{attrs:{id:"回收策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回收策略"}},[s._v("#")]),s._v(" 回收策略")]),s._v(" "),n("ul",[n("li",[s._v("分代回收"),n("br"),s._v("\n新生代、老生代")]),s._v(" "),n("li",[s._v("新生代（Scavenge 的 Cheney 算法）\n"),n("ul",[n("li",[s._v("存储存活时间较短的对象")]),s._v(" "),n("li",[s._v("将堆内存分成2个 semispace 空间，处于使用状态的 from 空间存储不需要被回收的对象，处于闲置状态的 to 空间存储需要被回收的对象\n"),n("img",{attrs:{src:t(214),alt:"cheney"}})])])]),s._v(" "),n("li",[s._v("老生代（Mark-Sweep（标记清除）、Mark-Compact（标记合并））\n"),n("ul",[n("li",[s._v("存储存活时间常或常驻内存对象")]),s._v(" "),n("li",[s._v("内存空间是一个连续的结构")]),s._v(" "),n("li",[s._v("Mark-Sweep（标记清除）"),n("br"),s._v("\n将需要回收的对象进行标记，在垃圾回收运行时直接释放对应的内存空间"),n("br"),s._v("\n垃圾回收后产生内存不连续的问题\n"),n("img",{attrs:{src:t(215),alt:"mark-sweep"}})]),s._v(" "),n("li",[s._v("Mark-Compact（标记合并）"),n("br"),s._v("\n将存活的对象移动到一边，将需要被回收的对象移动到另一边，对需要被回收的对象区域做整体的垃圾回收\n"),n("img",{attrs:{src:t(216),alt:"mark-compact"}})])])]),s._v(" "),n("li",[s._v("新生代对象的晋升\n"),n("ul",[n("li",[s._v("新生代对象移动到老生代进行管理")]),s._v(" "),n("li",[s._v("当一个对象多次景经过复制后依然存活，将被认为生命周期较长的对象晋升")]),s._v(" "),n("li",[s._v("在 from 空间、to 空间反转时，如果 to 空间使用量超过 25%，将 from 空间中的对象晋升")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);