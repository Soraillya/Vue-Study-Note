<template>
    <div>
        <b v-show="isRef">{{ message }}</b>
        <b v-show="isScoped" class="message">{{ message }}</b>
        <div class="slot" v-show="isSlot">
            <slot name="source"> 这里是插槽source！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot name="title"> 这里是插槽title！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot>这里是多余的插槽！</slot>
        </div>
        <div v-show="isVuex">
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
    },
    data() {
        return {
            message: this.msg,
            n: 1,
        };
    },
    computed: {
        ...mapState(["vc2"]),
    },
    methods: {
        vuexMinus() {
            console.log("② Commit 按钮的点击事件触发了 $store.commit('minus', this.n) ！跳过了Dispatch操作！");
            // this.$store.dispatch("minus", this.n);
            // 因为不用对数据进行额外操作，可以跳过Dispatch，直接commit
            this.$store.commit("MINUS", this.n);
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
</style>
