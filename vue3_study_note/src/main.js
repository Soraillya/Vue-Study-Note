// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

// ElementUI-plus完整引入
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";

// 无需通过new关键字，把外壳组件App传入后创建app应用实例对象，类似Vue2中的vm，但比vm更“轻”
// createApp(App).mount("#app");
const app = createApp(App);

// 使用插件
// ElementUI-plus导入
app.use(ElementPlus, { locale: zhCn });

app.mount("#app");

console.log("createApp: ", app);

// new Vue({
//     render: h => h(App)
// }).$mount("#app");
