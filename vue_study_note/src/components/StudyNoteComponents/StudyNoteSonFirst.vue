<template>
    <div>
        <b v-if="isRef">{{ message }}</b>
        <b v-if="isScoped" class="message">{{ message }}</b>
        <button v-if="isEmit" @click="emitDefVOnEvent">点我触发</button>
        <button v-if="isOff" @click="emitDefVOnEvent">点我触发</button>
        <button v-if="isOff" @click="unbindDefVOnEvent">点我解绑</button>
        <div class="native" v-if="isNative">点我触发组件上的原生click事件</div>
        <button v-if="isBus" @click="clickMeToSayNanoid">Get a new nanoid</button>
        <div class="slot" v-if="isSlot">
            <slot> 这里是插槽！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <p>插槽一</p>
        </div>
        <div v-if="isVuex">
            <h1>{{ vc1 }}</h1>
            <select v-model.number="n" style="width: 80px; font-size: larger">
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
                <option :value="5">5</option>
            </select>
            <button @click="vuexPlus" style="font-size: large">&nbsp;&nbsp;+&nbsp;&nbsp;</button>
        </div>
        <div v-if="isRouter">
            <h1 style="text-align: center">我是组件一</h1>
            <hr style="margin: 0" />
            <div class="router-container">
                <ul class="router-nav">
                    <li v-for="tab in tabs" :key="tab.name">
                        <!-- 添加了replace属性，无痕浏览。push模式下浏览器的历史纪录压栈，而replace模式下浏览，则是替换上一个记录 -->
                        <!-- 例如浏览顺序：组件一 => 组件二 => 组件一 => First => Second => Third, 点后退则回到组件二而不是Second -->
                        <!-- <router-link replace class="router-tab" to="/StudyNoteSonFirst/FirstChild?id=666&name=Sb" active-class="router-nav-active"> -->
                        <!-- <router-link class="router-tab" to="/StudyNoteSonFirst/ThirdChild/666/Sb" active-class="router-nav-active"> -->
                        <!-- <router-link class="router-tab" :to="`/StudyNoteSonFirst/${tab.componentName}?msg=${tab.msg}`" active-class="router-nav-active"> -->
                        <router-link
                            class="router-tab"
                            :to="{
                                path: '/StudyNoteSonFirst/' + tab.componentName,
                                query: {
                                    msg: tab.msg,
                                    hello: 'Hello World',
                                },
                            }"
                            replace
                            active-class="router-nav-active"
                        >
                            {{ tab.name }}
                        </router-link>
                    </li>
                </ul>
                <div class="router-section">
                    <keep-alive include="FirstChild">
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";

export default {
    name: "StudyNoteSonFirst",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isEmit: Boolean,
        isOff: Boolean,
        isNative: Boolean,
        isBus: Boolean,
        isSlot: Boolean,
        isVuex: Boolean,
        isRouter: Boolean,
    },
    data() {
        return {
            message: this.msg,
            n: 1,
            tabs: [
                { name: "First", componentName: "FirstChild", msg: "组件一信息" },
                { name: "Second", componentName: "SecondChild", msg: "组件二信息" },
                { name: "Third", componentName: "ThirdChild", msg: "组件三信息" },
            ],
        };
    },
    computed: {
        ...mapState("counter", { vc1: "vc1" }),
        // ...mapState({ vc1: "vc1" }),
        //不能简写为 ...mapState({ vc1 }), 这代表着...mapState({ vc1:vc1 })，而赋值需要一个字符串而不是一个未定义的变量名！
    },
    methods: {
        getDOMByRef() {
            console.log(this.$refs.refTitle);
        },
        emitDefVOnEvent() {
            // emit 触发事件defVOnEvent，传入参数message给defVOnEvent中绑定的方法
            let message = "这是StudyNoteSonFirst的数据";
            this.$emit("defVOnEvent", message);
        },
        unbindDefVOnEvent() {
            this.$off("defVOnEvent"); //解绑单个
            // this.$off(["defVOnEvent","defVOnEvent2","defVOnEven3"]);    //解绑多个
            // this.$off();    //解绑所有
            alert("已解绑defVOnEvent事件");
        },
        clickMeToSayNanoid() {
            // 触发全局事件总线上的clickMeToSayNanoid，并传入参数
            this.$bus.$emit("clickMeToSayNanoid", nanoid(), "hello");
        },
        vuexPlus() {
            // 此处为完整流程 ① Dispatch --> Actions
            console.log("① Dispatch 按钮的点击事件触发了 $store.dispatch('plus', this.n) ！");
            // this.$store.dispatch("plus", this.n);
            this.$store.dispatch("counter/plus", this.n);
            console.log("① Dispatch End！");
        },
    },
    mounted() {
        console.log("组件一StudyNoteSonFirst挂载完毕！");
    },
    beforeDestroy() {
        console.log("组件一StudyNoteSonFirst即将被销毁！");
    },
};
</script>
<style lang="css">
.message {
    color: hotpink;
}
.native {
    width: 200px;
    height: 200px;
    background-color: pink;
    margin: 0 auto;
    display: grid;
    place-items: center;
}
.slot {
    width: 300px;
    height: 400px;
    margin: 0 auto;
}

p {
    padding: 0;
    margin: 0 auto;
    text-align: center;
}

.router-container {
    width: 100%;
    padding: 8px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.router-nav {
    padding: 0 8px;
    display: flex;
    flex-flow: column nowrap;
    list-style: none;
}

.router-tab {
    width: 10rem;
    height: 3.6rem;
    font-weight: lighter;
    line-height: 3.6rem;
    border: 1px solid rgb(212, 212, 212);
    border-bottom: none;
    display: block;
    text-decoration: none;
}

.router-tab:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: rgb(82, 136, 187);
}
.router-nav > li:first-child > .router-tab {
    border-radius: 6px 6px 0px 0px;
}

.router-nav > li:last-child > .router-tab {
    border-radius: 0px 0px 6px 6px;
    border-bottom: 1px solid rgb(212, 212, 212);
}

.router-nav-active,
.router-nav-active:visited {
    color: #ffffff;
    background-color: rgb(82, 136, 187);
}

.router-section {
    padding: 0 8px;
    display: flex;
    flex: 1;
}
</style>
