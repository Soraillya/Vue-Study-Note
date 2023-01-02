<template>
    <div>
        <h1 ref="refTitle">一、属性 ref</h1>
        <h2>1. 为标签添加ref属性，可轻松获得指定标签的DOM，方便操作</h2>
        <button ref="refButton" @click="getDOMByRef('refTitle')">点我获取标题DOM</button>
        <h2>2. 为组件标签添加ref属性，可获得指定组件实例对象vc，方便操作</h2>
        <StudyNoteSonFirst msg="Hello StudyNoteSonFirst" :isRef="true" ref="SNSF_1" />
        <StudyNoteSonSecond msg="Hello StudyNoteSonSecond" :isRef="true" ref="SNSF_2" />
        <StudyNoteSonThird msg="Hello StudyNoteSonThird" :isRef="true" ref="SNSF_3" />
        <button @click="getDOMByRef('SNSF_1')">获取子组件1的vc</button>
        <button @click="getDOMByRef('SNSF_2')">获取子组件2的vc</button>
        <button @click="getDOMByRef('SNSF_3')">获取子组件3的vc</button>
        <hr />

        <h1>二、配置项 props</h1>
        <h2>1. 控制是否运行从外部传入值，需要控制类型</h2>
        <p>姓名：{{ myName }}</p>
        <p>性别：{{ mySex }}</p>
        <p>年龄：{{ myAge }}</p>
        <p>ID：{{ myNanoid }}</p>
        <h2>2. 因为props为外部传入，所以尽量避免修改props，而是修改data</h2>
        <h2>3. 尽量避免data与props变量名冲突，此处props中的变量优先级更高</h2>
        <p>推荐的解决方法：props:['age']; data:{myAge : this.age}</p>
        <hr />

        <h1>三、配置项 mixins 混入</h1>
        <h2>功能：可以把多个组件共用的配置提取成一个混入对象</h2>
        <p v-text="'nowTime from common.js: ' + nowTime"></p>
        <hr />

        <h1>四、插件 Vue.use(Plugins)</h1>
        <h2>导入外部插件，用于增强Vue</h2>
        <h3>1. 使用了通过插件添加的过滤器 mySlice</h3>
        <p>{{ "这个字符串原本是很长的" | mySlice }}</p>
        <h3>2. 使用了通过插件添加的自定义指令 v-def</h3>
        <input v-def="myName" />
        <h3>3. 使用了通过插件添加的方法 hello</h3>
        <button @click="hello">Click me to say hello world!!!</button>
        <hr />

        <h1>五、scoped 样式</h1>
        <h2>1. 问题：多个组件中的CSS有相同的class时会发生冲突！</h2>
        <h2>2. 解决：在组件中的style标签添加scoped： &lt;style scoped&gt;</h2>
        <StudyNoteSonFirst msg="1st: hot pink，无scoped，因组件导入顺序而被3rd覆盖" :isScoped="true" ref="SNSF_1" />
        <StudyNoteSonSecond msg="2nd: pink，有scoped，不被覆盖" :isScoped="true" ref="SNSF_2" />
        <StudyNoteSonThird msg="3rd: litte pink，无scoped" :isScoped="true" ref="SNSF_3" />
        <hr />

        <h1>六、 TodoList 案例</h1>
        <TodoList />
        <h2>组件化编码流程：</h2>
        <h3>1. 实现静态组件： 抽取组件，使用组件实现静态页面的效果</h3>
        <h3>2. 展示动态数据</h3>
        <h4>2.1 数据的类型、名称</h4>
        <h4>2.2 数据保存在哪个组件</h4>
        <h3>3. 交互——从绑定事件监听开始</h3>
        <h3></h3>
        <hr />

        <h1>七、本地存储与会话存储 localStorage & sessionStorage</h1>
        <h2>1. 本地存储 localStorage：会一直存储在磁盘里的键值对</h2>
        key: <input type="text" v-model="localStorageKey" /> value: <input type="text" v-model="localStorageValue" />
        <button @click="saveLocalStorage">保存本地存储</button>
        <button @click="removeLocalStorage">删除本地存储</button>
        <button @click="clearLocalStorage">清除本地存储</button>
        <h2>2. 会话存储 sessionStorage： 浏览器关闭后（关闭会话）后就会清除的键值对</h2>
        key: <input type="text" v-model="sessionStorageKey" /> value: <input type="text" v-model="sessionStorageValue" />
        <button @click="saveSessionStorage">保存会话存储</button>
        <button @click="removeSessionStorage">删除会话存储</button>
        <button @click="clearSessionStorage">清除会话存储</button>
        <h2>3. 查看数据：F12 -&gt; application -&gt; localStorage/sessionStorage</h2>
        <h2>4. key: String; value: String</h2>
        <hr />

        <h1>八、组件自定义事件 vm.$emit & vm.$off</h1>
        <h2>1.1 绑定 vm.$emit：通过父组件给子组件绑定一个自定义事件实现：数据由子传父。使用v-on或@</h2>
        <StudyNoteSonFirst v-on:defVOnEvent="sayHello" :isEmit="true" />
        <h2>1.1 绑定 this.refs.xxx.$on：通过父组件给子组件绑定一个自定义事件实现：数据由子传父。使用$on</h2>
        <h2>2. 解绑 vm.$off：vm.$off('defVOnEvent')</h2>
        <StudyNoteSonFirst v-on:defVOnEvent="sayHello" :isOff="true" />
        <h2>3. 组件上使用原生DOM事件 @click.native</h2>
        <StudyNoteSonFirst @click.native="sayHello('@click.native')" :isNative="true" />

        <h1>九、事件总线 Vue.prototype.$bus = this</h1>
        <h2>1. 安装事件总线：创建Vue实例对象中，将Vue.prototype.$bus = this添加到beforeCreate钩子中</h2>
        <h2>2. 绑定事件，在父组件中，将this.$bus.$on("defEvent",回调函数) 添加到mounted钩子中</h2>
        <h2>3. 销毁事件，在父组件中，将this.$bus.$off("defEvent") 添加到beforeDestroy钩子中</h2>
        <h2>4. 触发事件，在子组件中，将this.$bus.$emit("defEvent",参数) 添加到事件(如按钮)中</h2>
        <StudyNoteSonFirst :isBus="true" />
        <hr />
    </div>
</template>

<script>
import StudyNoteSonFirst from "./StudyNoteSonFirst.vue";
import StudyNoteSonSecond from "./StudyNoteSonSecond.vue";
import StudyNoteSonThird from "./StudyNoteSonThird.vue";
import TodoList from "./TodoList.vue";

import { date } from "../common/js/common.js";
import { nanoid } from "nanoid";
export default {
    name: "StudyNote",
    components: {
        StudyNoteSonFirst,
        StudyNoteSonSecond,
        StudyNoteSonThird,
        TodoList,
    },
    // props: [name, sex, age], 简单声明接收，但仍要注意一下传入值的类型
    props: {
        // 接收的同时对数据进行类型限制
        name: String, // 默认该数据必须传入，无默认值
        sex: {
            type: String,
            require: true, // 该数据必须传入, 与default相斥
        },
        age: {
            type: Number,
            default: 18, // 默认值, 与require相斥
        },
    },
    data() {
        return {
            msg: "Hello StudyNote",
            myName: this.name,
            mySex: this.sex,
            myAge: this.age,
            myNanoid: nanoid(),
            localStorageKey: "",
            localStorageValue: "",
            sessionStorageKey: "",
            sessionStorageValue: "",
        };
    },
    methods: {
        getDOMByRef(ref) {
            console.log("this.$refs:", this.$refs);
            console.log("this.$refs['" + ref + "']:", this.$refs[ref]);
        },
        saveLocalStorage() {
            window.localStorage.setItem(this.localStorageKey, this.localStorageValue);
        },
        removeLocalStorage() {
            window.localStorage.removeItem(this.localStorageKey);
        },
        clearLocalStorage() {
            window.localStorage.clear();
        },
        saveSessionStorage() {
            window.sessionStorage.setItem(this.sessionStorageKey, this.sessionStorageValue);
        },
        removeSessionStorage() {
            window.sessionStorage.removeItem(this.sessionStorageKey);
        },
        clearSessionStorage() {
            window.sessionStorage.clear();
        },
        sayHello(message, ...params) {
            alert("组件事件defVOnEvent被触发! 接收到信息：" + message);
        },
    },
    mixins: [date],
    mounted() {
        //绑定clickMeToSayNanoid到全局事件总线上
        this.$bus.$on("clickMeToSayNanoid", (nanoid, msg) => {
            alert(`StudyNoteSonFirst, nanoid: ${nanoid}, msg: ${msg}`);
        });
    },
    beforeDestroy() {
        //解绑全局事件总线上的clickMeToSayNanoid
        this.$bus.$off("clickMeToSayNanoid");
    },
};
</script>

<style>
button {
    margin-left: 4px;
    padding: 4px 8px;
    color: #fff;
    background-color: pink;
    border: none;
    border-radius: 4px 4px;
    cursor: pointer;
}
</style>
