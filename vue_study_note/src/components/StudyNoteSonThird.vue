<template>
    <div>
        <b v-show="isRef">{{ message }}</b>
        <b v-show="isScoped" class="message">{{ message }}</b>
        <div class="slot" v-show="isSlot">
            <slot :source="source" :title="title"> 这里是插槽！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <p>插槽三</p>
        </div>
        <div v-show="isVuex">
            <h1>{{ vc3 }}</h1>
            <button @click="oddPlusOne">数字为奇数时 + 1</button>
            <button @click="oddMinusOne">数字为偶数时 - 1</button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "StudyNoteSonThird",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isSlot: Boolean,
        isVuex: Boolean,
    },

    data() {
        return {
            message: this.msg,
            source: [true, true, false], //这里因为传输文件路径，渲染不生效，故不适用= =
            title: ["你喵", "弹开", "猫猫汉堡"],
        };
    },
    computed: {
        ...mapState(["vc3"]),
    },
    methods: {
        changeSource(index) {
            console.log(this.source[index]);
            this.source[index] = !this.source[index];
        },
        oddPlusOne() {
            console.log("① Dispatch 按钮的点击事件触发了 $store.dispatch('oddPlusOne') ！");
            this.$store.dispatch("oddPlusOne");
            console.log("① Dispatch End！");
        },
        oddMinusOne() {
            console.log("① Dispatch 按钮的点击事件触发了 $store.dispatch('oddMinusOne') ！");
            this.$store.dispatch("oddMinusOne");
            console.log("① Dispatch End！");
        },
    },
};
</script>

<style lang="css">
.message {
    color: pink;
}
.slot {
    width: 300px;
    height: 400px;
    margin: 0 auto;
}
</style>
