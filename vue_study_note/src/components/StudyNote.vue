<template>
    <div>
        <h1 ref="refTitle">一、属性 ref</h1>
        <h2>1. 为标签添加ref属性，可轻松获得指定标签的DOM，方便操作</h2>
        <p style="margin: 0; text-align: center">&lt;h1 ref="refTitle"&gt;一、属性 ref&lt;/h1&gt;</p>
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

        <h1>十六、共享状态管理模式 Vuex 插件</h1>
        <h2>1. 概念</h2>
        <p>① 专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。</p>
        <p>② 安装：vue2 安装 npm i vue@3; vue3 安装 npm i vuex@4 (默认版本)</p>
        <h2>2. 什么时候用？</h2>
        <p>① 多个组件依赖于同一个状态</p>
        <p>② 来自不同组件的行为需要变更同一状态</p>
        <h2>3. 工作原理图</h2>
        <img src="../assets/image/vuex.png" width="500" height="400" alt="vuex工作原理" />
        <h3>3.1 工作流程</h3>
        <p>① VC-->Actions: vc 触发事件后调用 this.$store.dispatch("actionName", ...params) 进入 Actions</p>
        <p>② Actions-->Mutations: actionName(context, ...params) 中完成了复杂业务逻辑操作(如发出网络请求)后，再调用context.commit("mutationName", ...params) 进入 Mutations</p>
        <p>③ Mutations-->State: mutationName(state, ...params) 中完成了对数据最后的赋值处理，即修改了state(状态)</p>
        <p>④ State-->VC: 最终store中的state响应到VC上，this.$store.state 进行页面渲染</p>
        <h3>3.2 配置</h3>
        <p>① 创建 src/store/index.js ，存储Vue配置项store</p>
        <p>② 配置文件store(index.js)中，导入包 Vue 和 Vuex</p>
        <p>③ store 使用插件 Vue.use(Vuex), 此步骤需在将store配置项被导入并添加到Vue实例之前完成，因此只能在store中完成</p>
        <p>④ store 添加配置项 actions(业务逻辑), mutations(状态/数据处理), state(状态/数据), getters(进一步加工state, 相当于computed)</p>
        <p>⑤ 导出store实例对象，export default new Vuex.Store({ actions, mutations, state, getters, ...})</p>
        <p>⑥ vm 导入配置文件，在 Vue 实例中添加 store 配置项</p>
        <h3>3.3 vc中的代码优化: import {mapXXXX} from "vuex", 借助 map 生成 store 中的数据与方法</h3>
        <h4>3.3.1 写法：...mapXXX({ xxx1 : "xxx1", xxx2 : "xxx2" }) 或 ...mapXXX([ "xxx1", "xxx2" ])</h4>
        <h4>3.3.2 mapState / mapGetters: 适合在 vc 的 computed 中 添加</h4>
        <h4>3.3.3 mapActions / mapMutations: 适合在 vc 的 methods 中 添加 ，需要注意默认传参为触发onClick调用函数时的传参</h4>
        <h4>3.3.4 注意：使用对象写法，不能简写为 ...mapXXX({ xxx }), 此写法等同 ...mapXXX({ xxx : xxx }), 而 xxx 通常是一个未定义的变量而不是字符串！</h4>
        <h2>4. 数字控制器案例，拆分到多个组件中</h2>
        <p class="counter-header">当前数字: {{ sum }}</p>
        <p class="counter-header">当前数字放大十倍: {{ bigSum }}</p>
        <p class="counter-header">{{ content }}</p>
        <button @click="getContent">来点儿</button>
        <div class="container">
            <StudyNoteSonFirst :isVuex="true" />
            <StudyNoteSonSecond :isVuex="true" />
            <StudyNoteSonThird :isVuex="true" />
        </div>
        <hr />

        <h1>十七、路由 Vue-router 插件</h1>
        <h2>1. 概念</h2>
        <h3>1.1 vue-router 的理解</h3>
        <p>① vue 的一个插件库，专门用来实现 SPA 应用</p>
        <p>② 安装：vue2 安装 npm i vue-router@3; vue3 安装 npm i vue-router@4 (默认版本)</p>
        <h3>1.2 对 SPA 应用的理解</h3>
        <p>① SPA: Single Page web Application 单页面应用</p>
        <p>② 整个应用只有一个完整得页面</p>
        <p>③ 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。</p>
        <p>④ 数据需要通过 ajax 请求获取</p>
        <h3>1.3 对路由的理解</h3>
        <h4>1.3.1 路由</h4>
        <p>① 路由就是：一组 key--value 的对应关系</p>
        <p>② key 为路径，value 可能是 function 或 VueComponent</p>
        <p>③ 多个路由，需要经过路由器的管理，实现SPA</p>
        <h4>1.3.2 路由的分类</h4>
        <h5>1.3.2.1 后端路由</h5>
        <p>① 理解：value 是 function，用于处理客户端提交的请求。</p>
        <p>② 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。</p>
        <h5>1.3.2.2 前端路由</h5>
        <p>① 理解：value 是 VueComponent，用于展示页面内容。</p>
        <p>② 工作过程：当浏览器的路径改变时，对应的组件就会显示。</p>

        <h2>2. 使用</h2>

        <h3>2.1 安装 vue-router 插件</h3>
        <p>npm i vue-router</p>

        <h3>2.2 应用 vue-router 插件</h3>
        <p>import VueRouter from "vue-router"</p>
        <p>Vue.use(VueRouter)</p>

        <h3>2.3 编写 router 配置项 ( src/router/index.js )</h3>
        <h4>引入 VueRouter 以及需要配置的组件</h4>
        <p>import VueRouter from "vue-router"</p>
        <p>import VueComponent1 from "../components/VueComponent1"</p>
        <p>import VueComponent ... ...</p>
        <h4>创建router实例对象，去管理一组一组的路由规则</h4>
        <p>const router = new VueRouter({ route: [ { path: "/VueComponent1", component: VueComponent1 }, ... ] })</p>
        <h4>暴露router</h4>
        <p>export default router</p>

        <h4>注意点：</h4>
        <p>① 路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹</p>
        <p>② 通过切换。“隐藏”了的路由组件，默认是被销毁的，需要的时候再去挂载</p>
        <p>③ 每个组件都有自己的$route属性，里面存储组件的路由信息（如url中携带的query params）</p>
        <p>④ 整个应用只有一个router，可以通过组件的$router属性获取到（存放了一些路由相关的方法）</p>

        <h3>2.4 实现切换 ( active-class )</h3>
        <p><b style="color: blue">&lt;router-link active-class="active" to="/VueComponentName"&gt;</b> VueComponentName <b style="color: blue">&lt;/router-link&gt;</b></p>

        <h3>2.5 指定展示位置</h3>
        <p><b style="color: blue">&lt;router-view&gt;&lt;/router-view&gt; </b></p>

        <h3>2.6 嵌套多级路由</h3>
        <h4>在route数组元素对象中添加children属性，并添加子组件的配置</h4>
        <h4>注意点：① 虽然可以多层嵌套，但层级不推荐大于四级；② 子组件的path不需要斜杠</h4>
        <p>route: [ { path: "/VueComponent1", component: VueComponent1 , children: [ { path: "child", component, children }, ... ]}</p>
        <h4>路由跳转，需要写完整路径</h4>
        <p><b style="color: blue">&lt;router-link active-class="active" to="/VueComponent1/child"&gt;</b>child<b style="color: blue">&lt;/router-link&gt;</b></p>

        <h3>2.7 路由中query参数的传递与接收</h3>
        <h4>① 跳转并携带query参数，to的字符串写法</h4>
        <p>&lt;router-link active-class="active" <b style="color: blue">to="/VueComponentName?id=123&title=你好"</b>&gt; VueComponentName &lt;/router-link&gt;</p>
        <h4>② 跳转并携带query参数，to的对象写法</h4>
        <p>...<b style="color: blue">:to="{ path: '/VueComponentName', query: { id: 123, title: '你好' } }"</b>...</p>
        <h4>③ 接收query参数</h4>
        <p>$route.query.id, $route.query.title</p>

        <h3>2.8 路由中params参数的传递与接收</h3>
        <h4>① 配置路由，在path中使用占位符声明可接收params参数</h4>
        <p>path: "VueComponent/:id/:title" , name: "VueComponentName"</p>
        <h4>② 跳转并携带params参数，to的字符串写法</h4>
        <p>&lt;router-link active-class="active" <b style="color: blue">to="/xxx/xxx/VueComponent/123/你好"</b>&gt; VueComponentName &lt;/router-link&gt;</p>
        <h4>③ 跳转并携带params参数，to的对象写法（必须使用name配置）</h4>
        <p>...<b style="color: blue">:to="{ name: 'VueComponentName', params: { id: 123, title: '你好' } }"</b>...</p>
        <h4>④ 接收params参数</h4>
        <p>$route.params.id, $route.params.title</p>

        <h3>2.9 命名路由</h3>
        <h4>1. 作用</h4>
        <p>可以简化路由的跳转，多级路由中可设置 name 进行语义化命名，但有可能影响可读性（路由层级关系不清楚）</p>
        <h4>2. 具体编码</h4>
        <p>① 给路由命名，route配置中为路由添加name属性</p>
        <p>children: [ { path, component, name: "nameOfComponent" } ]</p>
        <p>② 简化跳转</p>
        <p>简化前 => to="/xxx/xxx/xxx?querys=..."</p>
        <p>简化后 => :to=" { name: 'nameOfComponent', query: [ ... ] } "</p>

        <h3>2.10 路由的props配置</h3>
        <h4>1. 作用</h4>
        <p>让路由组件更方便地收到参数，在路由目标组件中配置props的属性即可接收</p>
        <h4>2. 具体编码</h4>
        <p><b>写法一</b>：props值为对象，该对象中所有的key-value的组合最终都会通过props传给组件</p>
        <p>props: { a: 100, b: "Hello"}</p>
        <p><b>写法二</b>：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给组件</p>
        <p>props: true</p>
        <p><b>写法三</b>：props值为函数，该函数返回的对象中的每一组key-value都会通过props传给组件</p>
        <p>props( route ) { return { a: route.query.a, b: route.query.b } }</p>

        <h3>2.11 &lt;router-link&gt;的replace属性</h3>
        <h4>1. 作用</h4>
        <p>控制路由跳转时操作浏览器历史记录的模式</p>
        <h4>2. 浏览器的历史记录有两种写入方式</h4>
        <p><b>push</b> 追加历史记录</p>
        <p><b>replace</b> 替换当前记录，路由跳转时上一条记录被替换（无痕浏览）</p>
        <h4>3. 在&lt;router-link&gt;标签添加replace即可，不添加则默认为push</h4>

        <h3>2.12 编程式路由导航</h3>
        <h4>1. 作用</h4>
        <p>不借助&lt;router-link&gt;也可实现路由跳转，让路由跳转更加灵活</p>
        <h4>2. 具体编码</h4>
        <p>使用$router 的两个API： push(), replace()</p>
        <p>this.$router.push/replace({name, params})</p>
        <h4>3. $router 的其他 API 也可使用</h4>
        <p>① back() 后退</p>
        <p>② forward() 前进</p>
        <p>③ go(num) 跳转到第num个访问记录</p>

        <h3>2.13 缓存路由组件</h3>
        <h4>1. 作用</h4>
        <p>让不展示的路由组件保持挂载，不被销毁</p>
        <h4>2. 具体编码</h4>
        <p>使用 keep-alive 标签包裹着 router-view 标签, 可在该标签中添加属性 include 组件名以指定作用的组件，不添加则默认全部缓存</p>
        <p>&lt;keep-alive :include="['ComponentName1', 'ComponentName2', ...]"&gt;</p>
        <p>&lt;router-view&gt;&lt;/router-view&gt;</p>
        <p>&lt;/keep-alive&gt;</p>

        <h3>2.14 两个 router 中独有的生命周期钩子</h3>
        <p>案例：在需要缓存的组件中存在一个定时器。当组件激活时定时器开启，当组件失活时取消定时器，但组件中缓存的内容不能消失！</p>
        <h4>1. 作用</h4>
        <p>路由组建所独有的两个钩子，用于捕获路由组件的激活状态</p>
        <h4>2. 具体名字</h4>
        <p><b>activated </b> 激活，路由组件被激活时触发</p>
        <p><b>disactivated </b> 失活，路由组件失活时触发</p>

        <h3>2.15 路由守卫</h3>
        <h4>注：在route config中，为组件添加属性 meta: { isAuth: true, title:"xxx" } 可在路由守卫中用于判断是否鉴权</h4>
        <h4>1. 全局路由守卫</h4>
        <p>在 route config 中，添加全局路由守卫函数，在跳转任何路由时都会执行</p>
        <p><b>route.beforeEach((to,from,next)=>{ ... })</b> 全局前置路由守卫，跳转前执行，可添加鉴权相关逻辑</p>
        <p><b>route.afterEach((to,from)=>{ ... })</b> 全局后置路由守卫，跳转后执行，可添加修改页面title相关逻辑</p>
        <h4>2. 独享路由守卫</h4>
        <p>在 route config 中，为单个组件添加全局路由守卫函数，跳转至该组件时执行</p>
        <p><b>beforeEnter: (to,from,next) => { ... } </b>顺序在全局路由守卫之后，两者都会执行，也可添加鉴权相关配置</p>
        <h4>3. 组件内路由守卫</h4>
        <p>在组件中配置路由的生命钩子</p>
        <p><b> beforeRouteEnter(to,from,next){ ... } </b> 在通过路由进入组件前时调用</p>
        <p><b> beforeRouteLeave(to,from,next){ ... } </b> 在通过路由进入组件前时调用</p>

        <h3>2.16 路由器的两种工作模式 history 模式 和 hash 模式</h3>
        <h4>1. 对于一个url来说，什么是hash值？———— #及其后面的内容就是hash值</h4>
        <h4>2. hash值不会包含在HTTP请求中，即：hash值不会带给服务器</h4>
        <h4>3. hash模式</h4>
        <p>① 地址中永远带着 # 号，不美观</p>
        <p>② 若以后地址通过地方手机分享，若app校验严格，则地址会被标记为不合法</p>
        <p>③ 兼容性比较好</p>
        <h4>4. history模式</h4>
        <p>① 地址干净，美观</p>
        <p>② 兼容性和hash模式相比略差</p>
        <p>③ 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题</p>

        <h2>3. 案例</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <div class="iphone-app">
            <ul class="iphone-app-nav">
                <li>
                    <router-link class="iphone-app-link" active-class="active" to="/StudyNoteSonFirst"> 组件一 </router-link>
                </li>
                <li>
                    <router-link
                        class="iphone-app-link"
                        active-class="active"
                        :to="{
                            path: '/StudyNoteSonSecond',
                            query: {
                                routeHelloTwo: 'routeHelloTwo Hello World From Query!',
                                routeMsgTwo: 'routeMsgTwo From Query!',
                            },
                        }"
                    >
                        组件二
                    </router-link>
                </li>
                <li>
                    <router-link class="iphone-app-link" active-class="active" to="/StudyNoteSonThird"> 组件三 </router-link>
                </li>
            </ul>
            <div class="iphone-app-section">
                <router-view :isRouter="true"></router-view>
            </div>
        </div>
        <hr />

        <h1>十八、Vue UI 组件库</h1>
        <h2>1. 常用 UI 组件库</h2>
        <h3>1.1 移动端</h3>
        <p>① Vant 网址：<a href="https://youzan.github.io/vant">https://youzan.github.io/vant</a></p>
        <p>② Cube UI 网址：<a href="https://didi.github.io/cube-ui">https://didi.github.io/cube-ui</a></p>
        <p>③ Mint UI 网址：<a href="http://mint-ui.github.io">http://mint-ui.github.io</a></p>
        <h3>1.2 PC 端</h3>
        <p>① Element Ul 网址：<a href="https://element.eleme.cn">https://element.eleme.cn</a></p>
        <p>② IView Ul 网址：<a href="https://www.iviewui.com">https://www.iviewui.com</a></p>
        <h2>2. 尝试使用 Element UI 吧</h2>
        <button>这是原生的按钮</button>
        <el-row>
            <el-button>这是Element UI的默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <h2>3. 建议按需引入element ui组件</h2>
        <p>注意点：babel相关配置中，es2015 已不适配，须使用 @babel/preset-env</p>

        <!-- <div class="triangle">你好</div> -->
        <!-- <div class="faker">
            <div class="fake"></div>
        </div> -->
        <hr />
        <!-- <div class="show-messge" v-show="$store.state.isPopup">{{ $store.state.popupMsg }}</div> -->
        <!-- <input ref="bottom" type="text" /> -->
    </div>
</template>

<script>
import StudyNoteSonFirst from "./StudyNoteComponents/StudyNoteSonFirst.vue";
import StudyNoteSonSecond from "./StudyNoteComponents/StudyNoteSonSecond.vue";
import StudyNoteSonThird from "./StudyNoteComponents/StudyNoteSonThird.vue";
import TodoList from "./StudyNoteComponents/TodoList.vue";
import GetGitHubUserList from "./StudyNoteComponents/GetGitHubUserList.vue";

import { date } from "../common/js/common.js";
import { nanoid } from "nanoid";
import axios from "axios";
import "animate.css";
import { mapGetters, mapState, mapActions } from "vuex";

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
            components: [
                { name: "StudyNoteSonFirst", content: "组件一" },
                { name: "StudyNoteSonSecond", content: "组件二" },
                { name: "StudyNoteSonThird", content: "组件三" },
            ],
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
    computed: {
        // 优化代码，不使用 this.$store.state 以及 this.$store.getters 这种麻烦的方法获取
        // mapState 与 mapGetters 取出 store 中的 state 与 getters
        // ...mapState({ sum: "sum" }), // 写法一，对象
        // ...mapGetters( ["bigSum"]), // 写法二，数组
        ...mapState("counter", { sum: "sum" }), // 写法一，对象
        ...mapGetters("counter", ["bigSum"]), // 写法二，数组

        // 来点语句
        ...mapGetters("content", { content: "welcomeAndContent" }),
    },
    methods: {
        getDOMByRef(ref) {
            console.log("this.$refs:", this.$refs);
            console.log("this.$refs['" + ref + "']:", this.$refs[ref]);
        },

        // debounce 防抖，连续触发，但最后一次触发后一定时间内不再触发时，执行
        debounce(fn, timeout) {
            var timer;
            return function () {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    console.log("执行");
                    fn();
                }, timeout);
            };
        },

        // throtting 节流，多次点击，但一定时间内只能执行一次搜索操作
        throtting(fn, timeout) {
            var valid = true;
            console.log("hello");
            return function () {
                if (!valid) {
                    console.log("节流！！");
                    return false;
                }
                valid = false;
                console.log("执行！");
                fn();
                setTimeout(function () {
                    valid = true;
                }, timeout);
            };
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
            alert("组件事件defVOnEvent被触发! 接收到信息：" + message + " " + params);
        },
        showInputByNextTick(e) {
            console.log(e.target);
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
        ...mapActions("content", ["getContent"]),
        back() {
            this.$router.back();
        },

        forward() {
            this.$router.forward();
        },
    },
    mixins: [date],
    mounted() {
        //绑定clickMeToSayNanoid到全局事件总线上
        this.$bus.$on("clickMeToSayNanoid", (nanoid, msg) => {
            alert(`StudyNoteSonFirst, nanoid: ${nanoid}, msg: ${msg}`);
        });
        // 聚焦到页尾
        // this.$refs.bottom.focus();
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

.counter-header {
    padding: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 5000;
}

.faker {
    /* margin: 0;
    padding: 0; */
    width: 500px;
    height: 500px;
    background-color: aquamarine;
}

.fake {
    width: 300px;
    height: 300px;
    background-color: pink;
    position: relative;
    opacity: 0.2;
}

.fake::before {
    content: "";
    width: 150px;
    height: 50px;
    background-color: black;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    opacity: 1;
}
.fake::after {
    content: "";
    width: 50px;
    height: 100px;
    background-color: blue;
    position: absolute;
    /* 水平垂直居中：长宽未知 */
    /* transform: translate(-50%, -50%); */
    /* top: 50%; */
    /* left: 50%; */
    /* 水平垂直居中：长宽已知 */
    /* top: calc(50% - 50px); */
    /* left: calc(50% - 50px); */
}

/* vue-router 案例 */
.iphone-app {
    width: 40rem;
    /* height: 24rem; */
    margin: 0 auto;
    box-shadow: 1px 1px 4px #2c3e50;
    display: flex;
    flex-flow: column nowrap;
}
.iphone-app-nav {
    display: flex;
    list-style: none;
    justify-content: space-around;
    position: relative;
}

.iphone-app-nav > li {
    align-items: center;
    flex: 1;
}

.iphone-app-link {
    display: block;
    text-decoration: none;
    font-size: 2.4rem;
    height: 6.4rem;
    line-height: 6.4rem;
    border-bottom: 2px solid #95a5a6;
    cursor: pointer;
}
.iphone-app-link:visited {
    text-decoration: none;
    color: #2c3e50;
}

.iphone-app-link:hover {
    border-bottom: 2px solid #62bdfa;
    color: #62bdfa;
}
.active,
.active:visited {
    border-bottom: 2px solid #62bdfa;
    color: #62bdfa;
}
/* .active:visited {
    color: #62bdfa;
} */

/* .triangle {
    font-size: 3rem;
    width: 0;
    height: 0;
    background-color: blue;
    border-style: solid;
    border-width: 0 50px 50px;
    border-color: red orange yellow pink;
    border-color: transparent transparent yellow;
    /* box-sizing: unset; 
} */
</style>
