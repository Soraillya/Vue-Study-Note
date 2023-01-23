<template>
    <div>
        <b v-if="isRef">{{ message }}</b>
        <b v-if="isScoped" class="message">{{ message }}</b>
        <div class="slot" v-if="isSlot">
            <slot name="source"> 这里是插槽source！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot name="title"> 这里是插槽title！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot>这里是多余的插槽！</slot>
        </div>
        <div v-if="isVuex">
            <h1>{{ vc2 }}</h1>
            <select v-model.number="n" style="width: 80px; font-size: larger">
                <option v-for="i in 10" :value="i" :key="i">{{ i }}</option>
                <!-- <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
                <option :value="5">5</option> -->
            </select>
            <button @click="vuexMinus" style="font-size: large">&nbsp;&nbsp;-&nbsp;&nbsp;</button>
        </div>
        <div v-if="isRouter">
            <h1 style="text-align: center">我是组件二</h1>
            <hr />
            <h2>{{ routeHelloTwo }}</h2>
            <h2>{{ routeMsgTwo }}</h2>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "StudyNoteSonSecond",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isSlot: Boolean,
        isVuex: Boolean,
        isRouter: Boolean,
        routeHelloTwo: String,
        routeMsgTwo: String,
    },
    data() {
        return {
            message: this.msg,
            n: 1,
        };
    },
    computed: {
        // ...mapState(["vc2"]),
        ...mapState("counter", ["vc2"]),
    },
    methods: {
        vuexMinus() {
            console.log("② Commit 按钮的点击事件触发了 $store.commit('minus', this.n) ！跳过了Dispatch操作！");
            // this.$store.dispatch("minus", this.n);
            // 因为不用对数据进行额外操作，可以跳过Dispatch，直接commit
            // this.$store.commit("MINUS", this.n);
            this.$store.commit("counter/MINUS", this.n);
            console.log("② Commit End！");
        },
    },
};
</script>

<style scoped>
.message {
    color: rgb(250, 155, 171);
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
</style>
