// 插件，使用 Vue.use(Plugins) 进行增强
export default {
    install(Vue, a, b, c) {
        console.log("Running Vue.use(Plugins)");
        console.log("a, b, c:", a, b, c);

        // 全局过滤器
        Vue.filter("mySlice", function (value) {
            // 截取字符串从下标0开始的4个字符
            return value.slice(0, 4);
        });

        // 全局自定义指令 以v-def为例
        Vue.directive("def", {
            // 指令与元素成功绑定时
            bind(element, binding) {
                if (element.value !== binding.value) element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.innerText = binding.value;
                element.focus();
                console.log("inserted");
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                if (element.value !== binding.value) element.value = binding.value;
            },
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    dataFromPlugins: "dataFromPlugins!!!",
                };
            },
        });

        // 给Vue原型上添加一个 方法（vm和vc都能用）
        Vue.prototype.hello = () => {
            alert("Hello World!!! (From Vue.prototype.hello)");
        };

        console.log("Plugins has been installed!!");
    },
};
