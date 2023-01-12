<template>
    <div>
        <b v-show="isRef">{{ message }}</b>
        <b v-show="isScoped" class="message">{{ message }}</b>
        <button v-show="isEmit" @click="emitDefVOnEvent">点我触发</button>
        <button v-show="isOff" @click="emitDefVOnEvent">点我触发</button>
        <button v-show="isOff" @click="unbindDefVOnEvent">点我解绑</button>
        <div class="native" v-show="isNative">点我触发组件上的原生click事件</div>
        <button v-show="isBus" @click="clickMeToSayNanoid">Get a new nanoid</button>
        <div class="slot" v-show="isSlot">
            <slot> 这里是插槽！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <p>插槽一</p>
        </div>
        <div v-show="isVuex">
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
    },
    data() {
        return {
            message: this.msg,
            n: 1,
        };
    },
    computed: {
        ...mapState({ vc1: "vc1" }),
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
            this.$store.dispatch("plus", this.n);
            console.log("① Dispatch End！");
        },
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
</style>
