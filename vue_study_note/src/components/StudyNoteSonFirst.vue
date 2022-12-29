<template>
    <div>
        <h1 v-if="isRef">{{ message }}</h1>
        <h1 v-if="isScoped" class="message">{{ message }}</h1>
        <button v-if="isEmit" @click="emitDefVOnEvent">点我触发</button>
        <button v-if="isOff" @click="emitDefVOnEvent">点我触发</button>
        <button v-if="isOff" @click="unbindDefVOnEvent">点我解绑</button>
        <div class="native" v-if="isNative">点我触发组件上的原生click事件</div>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonFirst",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isEmit: Boolean,
        isOff: Boolean,
        isNative: Boolean,
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
</style>
