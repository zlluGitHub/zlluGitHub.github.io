(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{396:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"全局安装-pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-pm2"}},[a._v("#")]),a._v(" 全局安装 pm2")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" pm2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"检查-pm2-是否安装成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查-pm2-是否安装成"}},[a._v("#")]),a._v(" 检查 pm2 是否安装成")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pm2 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("若出现版本号则安装成功")]),a._v(" "),s("p",[s("img",{attrs:{src:"/artical/20200223193607.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"可能遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可能遇到的问题"}},[a._v("#")]),a._v(" 可能遇到的问题")]),a._v(" "),s("p",[a._v("若出现如下报错")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bash: pm2: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" not found"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法")]),a._v(" "),s("p",[a._v("找到 pm2 安装路径（pm2安装时有提示，自己找找）就是红框中的路径")]),a._v(" "),s("p",[s("img",{attrs:{src:"/artical/20200223190634.png",alt:""}})]),a._v(" "),s("p",[a._v("然后执行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /data/software/node-v8.11.4-linux-x64/bin/pm2 /usr/local/bin/pm2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果有提示：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ln: creating symbolic "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/usr/local/bin/pm2'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" File exists\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("就使用")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /usr/local/bin/pm2 /tmp/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除，然后再次执行第一步就ok了")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后再次输入pm2 -v 出现版本号，则安装成功，或者输入 pm2 出现如下图所示，则安装成功。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/artical/20200223190859.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);