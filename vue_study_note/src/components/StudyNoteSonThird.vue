<template>
    <div>
        <b v-if="isRef">{{ message }}</b>
        <b v-if="isScoped" class="message">{{ message }}</b>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonThird",
    props: {
        msg: String,
        isRef: Boolean,
        isScoped: Boolean,
    },

    data() {
        return {
            message: this.msg,
        };
    },
    methods: {},
};
</script>

<style lang="css">
.message {
    color: pink;
}
</style>
