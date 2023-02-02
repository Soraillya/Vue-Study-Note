<template>
    <div>
        <h1>一、setup()</h1>
        <hr />
        <h1>二、ref() 与 reactive()</h1>
        <p>姓名：{{ p.name }}</p>
        <p>年龄：{{ p.age }}</p>
        <hr />
        <h1>三、Vue3 中的响应式原理 Proxy 与 Reflect (ES6)</h1>
        <h2>1. 实现原理</h2>
        <h3>1.1 通过 Proxy (代理)</h3>
        <p>拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性删除</p>
        <h3>1.2 通过 Reflect (反射)</h3>
        <p>对原对象（被代理对象）的属性进行操作</p>
        <h2>2. 具体实现</h2>
        <CodeEditor min_width="1000px" :value="codeContent3_2" :read_only="true"></CodeEditor>
        <h2></h2>
        <h2>1. 认识 window 身内置构造函数上的 Proxy</h2>
        <hr />
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import CodeEditor from "simple-code-editor";

export default {
    name: "StudyNote",
    // data, method, computed 都写进了 setup，且不建议 Vue2 与 Vue3 写法同时存在
    components: {
        CodeEditor,
    },
    setup() {
        let person = {
            name: "Sora",
            age: 23,
        };
        let p = reactive(person);

        let codeContent3_2 = ref(`const proxyPerson = new Proxy(person, {
    get(target, propName) {
        console.log("有人读取了 p 身上的 " + propName + " 属性。");
        // 此处进行页面渲染。。。
        // return target[propName]; // 无法捕获错误，使用 Reflect 进行属性操作
        return Reflect.get(target, propName); // 返回的是布尔值，用于捕获错误，而不需要try-catch，下同
    },
    // set 不仅仅在修改的时候调用，追加属性时也调用
    set(target, propName, value) {
        console.log("有人修改了 p 身上的 " + propName + " 属性，更新为 " + value + " 。");
        // 此处进行页面渲染。。。
        // target[propName] = value;
        Reflect.set(target, propName, value);
    },
    deleteProperty(target, propName) {
        console.log("有人删除了 p 身上的 " + propName + " 属性。");
        // 此处进行页面渲染。。。
        // return delete target[propName];
        return Reflect.deleteProperty(target, propName);
    },
});`);
        return {
            codeContent3_2,
            p,
        };
    },
};
</script>

<style scoped>
a {
    width: calc();
}
</style>
