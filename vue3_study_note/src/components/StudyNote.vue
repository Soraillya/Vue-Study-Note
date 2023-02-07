<template>
    <div>
        <h1>一、setup()</h1>
        <h2>1. Vue3 中一个全新的配置项，值为一个函数</h2>
        <h2>2. setup() 是所有 Composition API (组合API) 的基础</h2>
        <h2>3. 组件中所用到的：data() 数据、methods() 方法、computed() 计算属性等等，均要配置在 setup() 中.</h2>
        <h2>4. setup() 的两种返回值</h2>
        <h3>4.1 返回一个对象：对象中的属性、方法，在模板中均可直接使用。</h3>
        <h3 style="color: gray">4.2 返回一个渲染函数：可以自定义渲染内容（不常用）</h3>
        <h2>5. 注意点</h2>
        <h3>5.1 尽量不与 Vue2 配置项混合使用</h3>
        <p>○ Vue2 配置（data、methods、computed...）中可以访问到 setup 中的属性、方法</p>
        <p>○ 但 setup() 中不能访问到 Vue2 配置</p>
        <p>○ 如果重名，setup() 优先</p>
        <h3>5.2 setup() 不能是一个 async 函数，因为返回值不再是一个对象/渲染函数，而是一个 Promise 对象，模板看不到 return 中的属性</h3>
        <h2>6. 具体编码</h2>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc1_6" :read_only="true"></CodeEditor>

        <h2>7. setup() 的执行时机</h2>
        <p>○ 在 beforeCreate() 之前执行一次，所以 this 是 undefined</p>
        <h2>8. setup( props, context ) 可以有两个参数</h2>
        <p>○ props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性</p>
        <p>○ context：上下文对象，包含以下三个属性</p>
        <p>===> atrrs：值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性，相当于 this.$atrrs</p>
        <p>===> slots：收到的插槽内容，相当于 this.$slots</p>
        <p>===> emit: 分发自定义事件的函数，相当于 this.$emit</p>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc1_8" :read_only="true"></CodeEditor>
        <hr />

        <h1>二、ref()</h1>
        <h2>1. 作用</h2>
        <p>{{ content_2_1 }}</p>
        <h2>2. 语法</h2>
        <code>const xxx = ref(value)</code>
        <p>○ 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）</p>
        <p>○ JS中操作数据：<code>xxx.value</code></p>
        <p>○ 模板中读取数据：不需要<code>.value</code>，直接 { { xxx } }</p>
        <h2>3. 注意点</h2>
        <p>○ 接收的数据可以是：基本类型、对象类型</p>
        <p>○ 基本类型数据：响应式依然是靠<code>Object.defineProperty()</code>的 get 和 set 完成</p>
        <p>○ 对象类型数据：内部 “借助” Vue3 的新函数 ———— <code>reactive()</code></p>
        <hr />

        <h1>三、reactive()</h1>
        <h2>1. 作用</h2>
        <p>定义一个对象类型的响应式数据（基本类型不能使用）</p>
        <p>姓名：{{ personReactive.name }}</p>
        <p>年龄：{{ personReactive.age }}</p>
        <h2>2. 语法</h2>
        <p>函数接收一个对象/数组，返回一个代理器对象(Proxy对象)</p>
        <code>const proxyObject = reactive(object)</code>
        <h2>3. reactive 定义的响应式数据是“深层次的”</h2>
        <h2>4. 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的</h2>
        <hr />

        <h1>四、Vue3 中的响应式原理 Proxy 与 Reflect (ES6)</h1>
        <h2>1. 实现原理</h2>
        <h3>1.1 通过 Proxy (代理)</h3>
        <p>拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性删除</p>
        <h3>1.2 通过 Reflect (反射)</h3>
        <p>对原对象（被代理对象）的属性进行操作</p>
        <h2>2. 具体实现</h2>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc4_2" :read_only="true"></CodeEditor>
        <h2></h2>
        <hr />

        <h1>五、computed 计算属性</h1>
        <h2>1. 与 Vue2 中配置功能一致</h2>
        <p>nameAndAge: {{ nameAndAge }}</p>
        <p>修改 name: <el-input style="width: 20em" type="text" v-model="personReactive.name" /></p>
        <p>修改 age: <el-input style="width: 20em" type="number" max="100" min="0" v-model="personReactive.age" /></p>
        <p>修改 nameAndAge: <el-input style="width: 20em" type="text" v-model="nameAndAge" /></p>
        <h2>2. 写法</h2>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc5_2" :read_only="true"></CodeEditor>
        <hr />

        <h1>六、watch 监测函数</h1>
        <h2>1. 与 Vue2 中配置功能一致</h2>
        <p>myWatch.msg: {{ myWatch.msg }}</p>
        <p>myWatch.childs.child1.msg: <el-input style="width: 25em" type="text" v-model="myWatch.childs.child1.msg" /></p>
        <p>myWatch.childs.child2.msg: <el-input style="width: 25em" type="text" v-model="myWatch.childs.child2.msg" /></p>
        <p></p>
        <p></p>
        <h2>2. 两个坑</h2>
        <h3>○ 监视 reactive 定义的响应式数据：oldValue 无法正确获取，强制开启了深度监视（deep 配置失效）</h3>
        <h3>○ 监视 reactive 定义的响应式数据中的某个属性时：deep 配置生效</h3>
        <h2>3. watch写法</h2>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc6_3" :read_only="true"></CodeEditor>
        <h2>4. 新增 watchEffect 函数</h2>
        <h3>○ watch 的套路：既要指明监视的属性，也要指明监视的回调</h3>
        <h3>○ watchEffect 的套路：无需指明监视的属性，回调中用到哪个属性都会进行监视</h3>
        <h3>○ watchEffect 类似 computed，但是它并不需要返回值</h3>
        <p>myWatch.msg: <el-input style="width: 25em" type="text" v-model="myWatch.msg" /></p>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc6_4" :read_only="true"></CodeEditor>
        <hr />

        <h1>七、生命周期</h1>
        <h2>1. 变化</h2>
        <p>Vue3 中可以继续使用 Vue2 中的生命周期钩子，但有两个钩子已被更名：</p>
        <p>○ <b>beforeDestroy 改名为 beforeUnmount</b></p>
        <p>○ <b>destroyed 改名为 unMounted</b></p>
        <h2>2. Composition API</h2>
        <p>Vue3 中提供了 Composition API 形式的生命周期钩子，与 Vue2 中的钩子对应关系：</p>
        <code style="display: block"> ○ <b> beforeCreate ====> setup</b> </code>
        <code style="display: block"> ○ <b> created =========> setup</b> </code>
        <code style="display: block"> ○ <b> beforeMount =====> onBeforeMount</b> </code>
        <code style="display: block"> ○ <b> mounted =========> onMounted</b> </code>
        <code style="display: block"> ○ <b> beforeUpdate ====> onBeforeUpdate</b> </code>
        <code style="display: block"> ○ <b> beforeDestroy ===> onBeforeUnmount</b> </code>
        <code style="display: block"> ○ <b> destroyed =======> onUnmounted</b> </code>
        <h2>3. 写法</h2>
        <CodeEditor class="code-editor" min_width="1000px" font_size="1.6rem" :value="codeContents.cc7_3" :read_only="true"></CodeEditor>
        <hr />

        <h1>八、自定义 hook 钩子函数</h1>
        <h2>1. 本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装</h2>
        <p>
            <el-button
                type="primary"
                @click="
                    isShowPoint = !isShowPoint;
                    point.isAddEventListener(isShowPoint);
                "
                >显示 / 隐藏 鼠标点击事件
            </el-button>
            <template v-if="isShowPoint">捕获当前鼠标的坐标：pageX: {{ point.x }}, pageY: {{ point.y }}</template>
        </p>
        <p>
            <el-date-picker v-model="time" type="datetime" :disabled="timer ? true : false" placeholder="选择日期时间"> </el-date-picker>
            <el-button type="primary" @click="isUseCountdown">{{ timer ? "关闭" : "开启" }}定时器</el-button>
            {{ countDateMsg }}
        </p>
        <h2>2. 类似 Vue2 中的 mixin</h2>
        <h2>3. 优势：复用代码，让 setup 中的逻辑更清晰易懂</h2>
        <hr />

        <h1>九、toRef 与 toRefs</h1>
        <h2>1. 作用</h2>
        <p>创建一个 ref 对象，其 value 值指向另一个对象的某个属性</p>
        <h2>2. 语法</h2>
        <p><code>const personName = toRef( personReactive, "name" )</code></p>
        <p><code>const personAge = toRef( personReactive, "age" )</code></p>
        <h2>3. 应用</h2>
        <p>要将响应式对象中的某个属性单独提供给外部使用时</p>
        <h2>4. 扩展：toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象( 注意: 解构赋值会有与其他对象中的属性命名重复的可能 )</h2>
        <code> return { ...toRefs(person) }</code>
        <p>个人姓名 personName: {{ personName }}, {{ personName }}, {{ personName }}</p>
        <p>个人年龄 personAge: {{ personAge }}, {{ personAge }}, {{ personAge }}</p>
        <p>个人信息.姓名 personReactive.name: {{ personReactive.name }}, {{ personReactive.name }}, {{ personReactive.name }}</p>
        <p>个人信息.年龄 personReactive.age: {{ personReactive.age }}, {{ personReactive.age }}, {{ personReactive.age }}</p>
    </div>
</template>

<script>
import { ref, toRef, toRefs, reactive, computed, watch, watchEffect } from "vue";
import CodeEditor from "simple-code-editor";
import codeContents from "../codeContent/codeContent.js";

import usePoint from "../hooks/usePoint";
import useCountdown from "../hooks/useCountdown";

export default {
    name: "StudyNote",
    components: {
        CodeEditor,
    },
    props: {
        name: String,
        sex: String,
        age: Number,
    },

    // data, methods, computed 都写进了 setup，且不建议 Vue2 与 Vue3 写法同时存在
    setup(props, context) {
        let content_2_1 = ref("在 setup() 中定义一个响应式的数据");
        let person = {
            name: "Sora",
            age: 23,
        };
        let personReactive = reactive(person);
        let pRefImpl = ref(person);

        // computed 计算属性
        let nameAndAge = computed({
            get() {
                return personReactive.name + " --- " + personReactive.age;
            },
            set(value) {
                const nameArr = value.split(" --- ");
                console.log(value, nameArr.length, nameArr[0], isNaN(nameArr[1]));
                if (nameArr.length > 1) {
                    personReactive.name = nameArr[0];
                    personReactive.age = isNaN(nameArr[1]) ? personReactive.age : +nameArr[1];
                }
            },
        });

        // watch 监视函数
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
            { immediate: false, deep: true }
        );

        // watchEffect 监视函数，传入回调函数中用到了哪个响应式数据发生改变时就会执行
        watchEffect(() => {
            console.log("watchEffect 函数所指定的回调执行了！修改的是：", myWatch.msg);
        });

        // 生命周期
        // onBeforeMount(() => {
        //     console.log("=== onBeforeMount ===");
        // });
        // onMounted(() => {
        //     console.log("=== onMounted ===");
        // });
        // onBeforeUpdate(() => {
        //     console.log("=== onBeforeUpdate ===");
        // });
        // onUpdated(() => {
        //     console.log("=== onUpdated ===");
        // });
        // onBeforeUnmount(() => {
        //     console.log("=== onBeforeUnmount ===");
        // });
        // onUnmounted(() => {
        //     console.log("=== onUnmounted ===");
        // });

        // 自定义 hook：usePoint / useCountdown
        let isShowPoint = ref(false);
        let point = usePoint(isShowPoint.value);

        let countdown = useCountdown();
        function isUseCountdown() {
            if (countdown.timer) {
                // 关闭定时器
                countdown.isAddTimer(false);
            } else if (countdown.time && !countdown.timer) {
                countdown.isAddTimer(countdown.time);
            } else if (!countdown.time) {
                alert("请选择日期时间！！！");
            }
        }

        return {
            content_2_1,
            personReactive,
            nameAndAge,
            myWatch,
            codeContents, // 代码段儿
            isShowPoint,
            point,
            ...toRefs(countdown),
            isUseCountdown,
            personName: toRef(personReactive, "name"),
            personAge: toRef(personReactive, "age"),
        };
    },
};
</script>

<style scoped>
.code-editor {
    margin-left: 8rem;
}
</style>
