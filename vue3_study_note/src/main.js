// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import { basicSetup } from "codemirror";
import VueCodemirror from "vue-codemirror";
import App from "./App.vue";

// 无需通过new关键字，把外壳组件App传入后创建app应用实例对象，类似Vue2中的vm，但比vm更“轻”
// createApp(App).mount("#app");
const app = createApp(App);

app.use(VueCodemirror, {
    tabSize: 2, // 缩进格式
    theme: "rubyblue", // 指定主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 是否显示行号
    //指定语言类型,如果需要编辑和显示其他语言,需要import语言js然后修改此配置
    mode: "vue",
    line: true,
    styleActiveLine: true, // 高亮选中行
    //是否为只读,如果为"nocursor" 不仅仅为只读 连光标都无法在区域聚焦
    readOnly: true,
    hintOptions: {
        completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
    extensions: [basicSetup],
});

app.mount("#app");
console.log("createApp: ", app);

// new Vue({
//     render: h => h(App)
// }).$mount("#app");
