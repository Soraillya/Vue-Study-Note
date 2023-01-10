/*
  该文件是整个项目的入口文件
*/

/*
    关于不同版本的Vue：
      1. vue.js 与 vue.runtime.xxx.js 的区别：
        (1) vue.js 是完整版的Vue，包含：核心功能 + 模板解析器
        (2) vue.runtime.xxx.js 是运行版的Vue，只包含核心功能，没有模板解析器
      2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
        需要使用render函数接收到的createElement函数去指定具体内容。
*/
import Vue from "vue"; // 引入Vue
// import vueResource from "vue-resource"; // 安装vue-resource插件，替代axios
import App from "./App.vue"; // 引入App组件，它是所有组件的父组件
import Plugins from "./common/js/plugins.js"; //引入插件

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(Plugins, 1, 2, 3);
// Vue.use(vueResource);

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: (h) => h(App),
    // render(createElement) {
    //     return createElement("h1", "Hello World!!!");
    // },
    beforeCreate() {
        // 安装全局事件总线
        console.log("Vue.prototype === this.__proto__", Vue.prototype === this.__proto__);
        Vue.prototype.$bus = this;
        // this.__proto__.$bus = this;
    },
}).$mount("#app"); // el:"#app"

// 运行Vue
// sudo rm -rf node_modules package-lock.json && npm install
