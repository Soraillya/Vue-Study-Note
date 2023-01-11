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
        <b>推荐的解决方法：props:['age']; data:{myAge : this.age}</b>
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
        <h2>5. 使用第三方js库也可以实现的组件间通信的方式：消息订阅与发布 pubsub-js（react中使用，vue则不需要）</h2>
        <h3>5.1 安装 npm i pubsub-js, 引入 import pubsub from "pubsub-js"</h3>
        <h3>5.2 订阅消息，mounted()中：this.pubId = pubsub.subscribe("hello", (订阅名msg, 发布消息的形参params) =&gt; {})</h3>
        <h3>5.3 发布消息，methods()中：pubsub.publish("hello", params)</h3>
        <h3>5.4 取消订阅消息(要通过id取消)，beforeDestroy()中, pubsub.unsubscribe(this.pubId)</h3>
        <hr />

        <h1>十、this.$nextTick(function())</h1>
        <h2>1. 作用：在下一轮DOM渲染更新结束后执行其回调（常用）</h2>
        <h2>2. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行</h2>
        <h2>3. 演示：点击按钮显示输入框，并自动获取其焦点</h2>
        <div>
            <button @click="showInputByNextTick">this.$nextTick</button>
            <input ref="inputByNextTick" type="text" v-show="isShowInputByNextTick" placeholder="isShowInputByNextTick" />
        </div>
        <div>
            <button @click="showInputBySetTimeout">setTimeout</button>
            <input ref="inputBySetTimeout" type="text" v-show="isShowInputBySetTimeout" placeholder="isShowInputBySetTimeout" />
        </div>
        <div>
            <button @click="showInputByNone">不使用nextTick或setTimeout</button>
            <input ref="inputByNone" type="text" v-show="isShowInputByNone" placeholder="isShowInputByNone" />
        </div>
        <hr />

        <h1>十一、过渡与动画标签 transition / transition-group</h1>
        <h2>1. 作用：在插入、更新或移除DOM元素时，在核实的时候给元素添加样式类名</h2>
        <h2>2. vue 会自动给目标元素添加/移除特定的class</h2>
        <h2>3. 过渡的相关css样式类名：</h2>
        <h3>3.1 元素进入的样式</h3>
        <h4>3.1.1 v-enter: 进入的起点 (过渡)</h4>
        <h4>3.1.2 v-enter-active: 进入过程中 (动画)</h4>
        <h4>3.1.3 v-enter-to: 进入的终点 (过渡)</h4>
        <h3>3.2 元素离开的样式</h3>
        <h4>3.2.1 v-leave: 离开的起点 (过渡)</h4>
        <h4>3.2.2 v-leave-active: 离开过程中 (动画)</h4>
        <h4>3.2.3 v-leave-to: 离开的终点 (过渡)</h4>
        <h2>4. transition 动画实例</h2>
        <button @click="spliceBoolean(0)">显示/隐藏 0</button>
        <transition name="say-hello" appear>
            <div v-show="isAnime[0]" class="say-hello"><span>say-hello~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
        </transition>
        <h2>5. transition 过渡实例</h2>
        <button @click="spliceBoolean(1)">显示/隐藏 1</button>
        <transition name="say-hello2" appear>
            <div v-show="isAnime[1]" class="say-hello"><span>say-hello2~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
        </transition>
        <h2>6. transition-group 多个元素的动画与过渡</h2>
        <button @click="spliceBoolean(2)">显示/隐藏 2</button>
        <button @click="spliceBoolean(3)">显示/隐藏 3</button>
        <transition-group name="say-hello2" appear>
            <div v-show="isAnime[2]" class="say-hello" key="1"><span>say-hello~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
            <div v-show="isAnime[3]" class="say-hello" key="2"><span>say-hello2~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
        </transition-group>
        <h2>7. 集成第三方动画库，npm中的animate库</h2>
        <h3>7.1 网站：<a href="https://animate.style/">https://animate.style/</a></h3>
        <h3>7.2 安装：npm install animate.css, 引入：import "animate.css"</h3>
        <h3>7.3 在标签中配置固定class/transition标签中的name属性："animate__animated animate__bounce"</h3>
        <h3>7.4 在transition标签中配置属性enter-active-class和leave-active-class</h3>
        <button @click="spliceBoolean(4)">显示/隐藏 4</button>
        <button @click="spliceBoolean(5)">显示/隐藏 5</button>
        <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__fadeInDown" leave-active-class="animate__fadeOutDown">
            <div v-show="isAnime[4]" class="say-hello" key="1"><span>say-hello~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
            <div v-show="isAnime[5]" class="say-hello" key="2"><span>say-hello2~你好~你好~你好~你好~你好~你好~你好~你好~</span></div>
        </transition-group>
        <hr />

        <h1>十二、数据交互 配置代理 axios 阿克塞哦嘶</h1>
        <h2>1. 安装：npm i axios</h2>
        <h2>2. 发出 axios 请求: <a href="http://localhost:5050/todoList_1">http://localhost:5050/todoList_1</a></h2>
        <button @click="getTodoListFromServer(1)">获取todoList_1</button>
        <h2>3. 跨域问题</h2>
        <img src="../assets/image/跨域请求失败.png" alt="找不到图片！" />
        <h2>4. 解决跨域问题 vue-cli 中配置代理</h2>
        <h3>4.1 在 vue.config.js 中配置sevServer，开启代理服务器</h3>
        <p>devServer: { proxy: "http://localhost:5050", },</p>
        <h3>4.2 发出 axios 请求: <a href="http://localhost:5050/todoList_2">http://localhost:8080/getTodo/todoList_2</a></h3>
        <button @click="getTodoListFromServer(2)">获取todoList_2</button>
        <p>{{ TodoListFromServer }}</p>

        <h1>十三、搜索获取GitHub用户案例</h1>
        <GetGitHubUserList />
        <hr />

        <h1>十四、闭包</h1>
        <button @click="closure">closure</button>
        <hr />

        <h1>十五、插槽标签 &lt;slot&gt;&lt;/slot&gt;</h1>
        <h2>1. 默认插槽 插入到单个插槽中</h2>
        <div class="container">
            <StudyNoteSonFirst :isSlot="true">
                <img src="../assets/image/你喵.png" alt="你喵来不了咯！" style="width: 100%" />
                <p>你喵来啰</p>
            </StudyNoteSonFirst>
            <StudyNoteSonFirst :isSlot="true">
                <img src="../assets/image/弹开.gif" alt="弹不开了咯！" style="width: 100%" />
                <p>弹开</p>
            </StudyNoteSonFirst>
            <StudyNoteSonFirst :isSlot="true">
                <video controls src="../assets/video/猫猫汉堡.mp4" style="width: 100%"></video>
                <p>呜呜喵喵</p>
            </StudyNoteSonFirst>
        </div>
        <h2>2. 具名插槽 插入到多个插槽中，添加对应的插槽slot以及对应的命名name。</h2>
        <div class="container">
            <StudyNoteSonSecond :isSlot="true">
                <img slot="source" src="../assets/image/你喵.png" alt="你喵来不了咯！" style="width: 100%" />
                <p slot="title">你喵来啰</p>
            </StudyNoteSonSecond>
            <StudyNoteSonSecond :isSlot="true">
                <img slot="source" src="../assets/image/弹开.gif" alt="弹不开了咯！" style="width: 100%" />
                <p>此处镶嵌在具名插槽中，但被塞到了多余的插槽部分</p>
                <p slot="title">弹开</p>
                <p>此处填充多余的插槽~~~~~</p>
            </StudyNoteSonSecond>
            <StudyNoteSonSecond :isSlot="true">
                <video slot="source" controls src="../assets/video/猫猫汉堡.mp4" style="width: 100%"></video>
                <template v-slot:title>
                    <p>呜呜喵喵</p>
                    <p>v-slot:name 只能写在template结构的写法，用于包裹多层结构</p>
                </template>
            </StudyNoteSonSecond>
        </div>
        <h2>3. 作用域插槽</h2>
        <h3>3.1 数据在包含插槽的组件中，在slot添加数据，供插槽的使用者使用</h3>
        <h3>3.2 使用者必须用template包裹并添加slot-scope属性用于接收插槽传递过来的所有数据</h3>
        <div class="container">
            <StudyNoteSonThird :isSlot="true">
                <template slot-scope="assets">
                    <img v-show="assets.source[0]" src="../assets/image/你喵.png" alt="你喵来不了咯！" style="width: 100%" />
                    <p>assets.source[0]: {{ assets.source[0] }}</p>
                    <p>assets.title[0]: {{ assets.title[0] }}</p>
                </template>
            </StudyNoteSonThird>
            <StudyNoteSonThird :isSlot="true">
                <!-- 使用解构赋值 -->
                <template slot-scope="{ source, title }">
                    <img v-show="source[1]" src="../assets/image/弹开.gif" alt="弹不开了咯！" style="width: 100%" />
                    <p>title[1]: {{ title[1] }}</p>
                    <p>source[1]: {{ source[1] }}</p>
                </template>
            </StudyNoteSonThird>
            <StudyNoteSonThird :isSlot="true">
                <template slot-scope="{ source, title }">
                    <video v-show="source[2]" controls src="../assets/video/猫猫汉堡.mp4" style="width: 100%"></video>
                    <p>title[2]: {{ title[2] }}</p>
                    <p>source[2]: {{ source[2] }}</p>
                </template>
            </StudyNoteSonThird>
        </div>
        <hr />
        <h1>十六、vuex 插件</h1>
        <h2>
            1. 概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
        </h2>
        <h2>2. 什么时候用？</h2>
        <h3>2.1 多个组件依赖于同一个状态</h3>
        <h3>2.2 来自不同组件的行为需要变更同一状态</h3>
        <h2>3. 工作原理图</h2>
        <img src="../assets/image/vuex.png" alt="vuex工作原理" />
        <h2>4. 数字控制器案例，拆分到多个组件中</h2>
        <p style="text-align: center; font-size: 40px; font-weight: 3000">当前数字: {{ $store.state.sum }}</p>
        <p style="text-align: center; font-size: 40px; font-weight: 3000">当前数字放大十倍: {{ $store.getters.bigSum }}</p>
        <div class="container">
            <StudyNoteSonFirst :isVuex="true" />
            <StudyNoteSonSecond :isVuex="true" />
            <StudyNoteSonThird :isVuex="true" />
        </div>
        <hr />
        <hr />
        <!-- <div class="show-messge" v-show="$store.state.isPopup">{{ $store.state.popupMsg }}</div> -->
        <input ref="bottom" type="text" />
    </div>
</template>

<script>
import StudyNoteSonFirst from "./StudyNoteSonFirst.vue";
import StudyNoteSonSecond from "./StudyNoteSonSecond.vue";
import StudyNoteSonThird from "./StudyNoteSonThird.vue";
import TodoList from "./TodoList.vue";
import GetGitHubUserList from "./GetGitHubUserList.vue";

import { date } from "../common/js/common.js";
import { nanoid } from "nanoid";
import axios from "axios";
import "animate.css";

export default {
    name: "StudyNote",
    components: {
        StudyNoteSonFirst,
        StudyNoteSonSecond,
        StudyNoteSonThird,
        TodoList,
        GetGitHubUserList,
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
            isShowInputByNextTick: false,
            isShowInputBySetTimeout: false,
            isShowInputByNone: false,
            isAnime: [false, false, false, false, false, false],
            TodoListFromServer: "",
            x: this.hello(0),
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
        showInputByNextTick(e) {
            this.isShowInputByNextTick = !this.isShowInputByNextTick;
            this.$nextTick(() => {
                this.$refs.inputByNextTick.focus();
            });
        },
        showInputBySetTimeout() {
            this.isShowInputBySetTimeout = !this.isShowInputBySetTimeout;
            setTimeout(() => {
                this.$refs.inputBySetTimeout.focus();
            }, 0);
        },
        showInputByNone() {
            this.isShowInputByNone = !this.isShowInputByNone;
            this.$refs.inputByNone.focus();
        },
        spliceBoolean(index) {
            // 修改数组内的数据，需要使用数组本身的方法！
            this.isAnime.splice(index, 1, !this.isAnime[index]);
        },
        getTodoListFromServer(server) {
            let url = "";
            if (server === 1) {
                // 出现跨域问题
                url = "http://localhost:5050/todoList_1";
            } else if (server === 2) {
                // 使用代理服务器解决跨域问题，请求的url端口与当前域一致，需要添加代理服务器端口5050
                // url = "http://localhost:8080/todoList_2"; 方式一
                // 方式二
                url = "http://localhost:8080/getTodo/todoList_2";
            }
            axios.get(url).then(
                (response) => {
                    console.log(url + "请求成功了！", response.data);
                    this.TodoListFromServer = response.data;
                },
                (error) => {
                    console.log(url + "请求失败了！", error.message);
                }
            );
        },

        hello(sum) {
            let count = sum;
            return {
                plusOne() {
                    ++count;
                    // return ++count;
                },
                plusTwo() {
                    return count + 2;
                },
                printCount() {
                    console.log(`sum: ${sum}, count: ${count}`);
                },
            };
        },
        closure() {
            console.log(this.x);
            this.x.plusOne();
            console.log(this.x.plusTwo());
            this.x.printCount();
            this.x.plusOne();
            console.log(this.x.plusTwo());
            this.x.printCount();
            this.x.plusOne();
            console.log(this.x.plusTwo());
            this.x.printCount();
            this.x.plusOne();
            console.log(this.x.plusTwo());
            this.x.printCount();
        },
    },
    mixins: [date],
    mounted() {
        //绑定clickMeToSayNanoid到全局事件总线上
        this.$bus.$on("clickMeToSayNanoid", (nanoid, msg) => {
            alert(`StudyNoteSonFirst, nanoid: ${nanoid}, msg: ${msg}`);
        });
        // 聚焦到页尾
        this.$refs.bottom.focus();
    },
    beforeDestroy() {
        //解绑全局事件总线上的clickMeToSayNanoid
        this.$bus.$off("clickMeToSayNanoid");
    },
};
</script>

<style>
button {
    margin: 4px 4px;
    padding: 4px 8px;
    color: #fff;
    background-color: pink;
    border: none;
    border-radius: 4px 4px;
    cursor: pointer;
}

/* 动画与过渡 */
.say-hello,
.say-hello2 {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    background-color: pink;
    display: grid;
    place-items: center;
}
/* 1. 动画 */
/* 默认name => .v-enter-active { */
.say-hello-enter-active {
    animation: anime 2s linear;
}
/* 默认name => .v-leave-active { */
.say-hello-leave-active {
    animation: anime 2s linear reverse;
}

@keyframes anime {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}

/* 2. 过渡 */

/* .say-hello2 {
    transition: 0.5s linear;
} */
/* 为了不破坏原div，可在以下两个class添加过渡效果 */
.say-hello2-enter-active,
.say-hello2-leave-active {
    transition: 0.5s linear;
}

/* 进入时的起点 */
/* 默认name: v-enter */
.say-hello2-enter,
.say-hello2-leave-to {
    transform: translateX(-100%);
}
/* 进入后的终点 */
/* 默认name: v-enter-to */
.say-hello2-enter-to,
.say-hello2-leave {
    transform: translateX(0);
}
/* 离开时的起点 */
/* 默认name: v-leave */
/* .say-hello2-leave {
    transform: translateX(0);
} */
/* 离开后的终点 */
/* 默认name: v-leave-to */
/* .say-hello2-leave-to {
    transform: translateX(100%);
} */

.container {
    width: 100%;
    min-width: 900px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    border: 1px solid pink;
}
.container > div {
    box-shadow: 1px 1px 8px pink;
}
</style>
