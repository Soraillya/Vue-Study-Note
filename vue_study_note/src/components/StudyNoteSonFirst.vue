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
    </div>
</template>

<script>
import { nanoid } from "nanoid";

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
    },
    data() {
        return {
            message: this.msg,
        };
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
