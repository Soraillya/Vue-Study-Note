<template>
    <div>
        <b v-show="isRef">{{ message }}</b>
        <b v-show="isScoped" class="message">{{ message }}</b>
        <div class="slot" v-show="isSlot">
            <slot name="source"> 这里是插槽source！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot name="title"> 这里是插槽title！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <slot>这里是多余的插槽！</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonSecond",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isSlot: Boolean,
    },
    data() {
        return {
            message: this.msg,
        };
    },
    methods: {},
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
