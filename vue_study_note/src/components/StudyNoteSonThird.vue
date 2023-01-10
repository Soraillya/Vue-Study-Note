<template>
    <div>
        <b v-show="isRef">{{ message }}</b>
        <b v-show="isScoped" class="message">{{ message }}</b>
        <div class="slot" v-show="isSlot">
            <slot :source="source" :title="title"> 这里是插槽！如果使用者没有传入具体结构，则会显示这条信息！</slot>
            <p>插槽三</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonThird",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
        isSlot: Boolean,
    },

    data() {
        return {
            message: this.msg,
            source: [true, true, false], //这里因为传输文件路径，渲染不生效，故不适用= =
            title: ["你喵", "弹开", "猫猫汉堡"],
        };
    },
    methods: {
        changeSource(index) {
            console.log(this.source[index]);
            this.source[index] = !this.source[index];
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
