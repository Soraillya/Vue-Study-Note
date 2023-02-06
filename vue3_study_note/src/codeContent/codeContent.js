export default {
    cc1_6: `// data, methods, computed 都写进了 setup，且不建议 Vue2 与 Vue3 写法同时存在
setup() {
    let content_2_1 = ref("在 setup() 中定义一个响应式的数据");
    function sayHello(){
        console.log("Hello World!!!")
    }
    return { content_2_1, sayHello };
}`,

    cc1_8: `console.log("要想将props传入setup先配置props进行接收:", props);
console.log("既然setup没有了this, 需要传入第二个参数--上下文:", context);
console.log(context.attrs);
console.log(context.slots);
console.log(context.emit);`,

    cc4_2: `let person = { name: "Sora", age: 23 }; // 代理目标可为 Object / Array

const proxyPerson = new Proxy(person, {
    get(target, propName) {
        console.log("有人读取了 " + target + " 身上的 " + propName + " 属性。");
        // 此处进行页面渲染。。。
        // return target[propName]; // 无法捕获错误，使用 Reflect 进行属性操作，下同
        return Reflect.get(target, propName); // 返回的是布尔值，用于捕获错误，而不需要try-catch，下同
    },
    // set 不仅仅在修改的时候调用，追加属性时也调用
    set(target, propName, value) {
        console.log("有人修改了 " + target + " 身上的 " + propName + " 属性，更新为 " + value + " 。");
        // 此处进行页面渲染。。。
        // target[propName] = value;
        Reflect.set(target, propName, value);
    },
    deleteProperty(target, propName) {
        console.log("有人删除了 " + target + " 身上的 " + propName + " 属性。");
        // 此处进行页面渲染。。。
        // return delete target[propName];
        return Reflect.deleteProperty(target, propName);
    },
});
// 操作 person 里属性的值，proxyPerson 就会进行拦截出理
person.name = "sora" // 修改属性
person.age += 1 // 修改属性
person.sex = "male" // 添加属性`,

    cc5_2: `// 导入computed
import { computed } from "vue";

let nameAndAge = computed({
    get() {
        return p.name + " --- " + p.age;
    },
    set(value) {
        const nameArr = value.split(" --- ");
        if (nameArr.length > 1) {
            p.name = nameArr[0];
            p.age = typeof nameArr[1] === Number ? +nameArr[1] : p.age;
        }
    },
});`,

    cc6_3: `// 导入 watch
import { watch } from "vue";

let myWatch = reactive({
    msg: "Message of myWatch.",
    childs: {
        child1: {
            msg: "Message of myWatch's child1.",
        },
        child2: {
            msg: "Message of myWatch's child2.",
        },
    },
});

watch(
    // 一、监视 ref 定义的响应式数据 / 监视多个，传入的基本数据类型 content_2_1 的 RefImpl 对象不需要加 .value，而对象 pRefImpl 的 RefImpl 对象需要加 .value
    // content_2_1, / pRefImpl.value, / [ content_2_1, person ],
    // 二、监视一整个 reactive 定义的响应式数据，无法获取 oldValue，且强制开启深度监视 deep: true 可能影响性能
    // myWatch,
    // 三、监视 reactive 响应式数据的单个或多个属性，必须写成函数返回值形式。可以获取 oldValue，且深度监视配置生效
    [() => myWatch.childs.child1, () => myWatch.childs.child2],
    (newValue, oldValue) => {
        console.log("有人修改了child1/child2", newValue, oldValue);
    },
    // immediate 挂载后立即执行 / deep 深度监视
    { immediate: true, deep: true }
);`,

    cc6_4: `// watchEffect 监视函数，传入回调函数中用到了哪个响应式数据发生改变时就会执行
watchEffect(() => {
    console.log("watchEffect 函数所指定的回调执行了！修改的是：", myWatch.msg);
});`,
    cc7_3: `// 导入生命周期钩子
import { onMounted, onBeforeMount, onUnmounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from "vue";

// 生命周期
setup(){
    onBeforeMount(() => {
        console.log("=== onBeforeMount ===");
    });
    onMounted(() => {
        console.log("=== onMounted ===");
    });
    onBeforeUpdate(() => {
        console.log("=== onBeforeUpdate ===");
    });
    onUpdated(() => {
        console.log("=== onUpdated ===");
    });
    onBeforeUnmount(() => {
        console.log("=== onBeforeUnmount ===");
    });
    onUnmounted(() => {
        console.log("=== onUnmounted ===");
    });
}`,
};
