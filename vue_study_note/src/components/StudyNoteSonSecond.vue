<template>
    <div>
        <b v-if="isRef">{{ message }}</b>
        <b v-if="isScoped" class="message">{{ message }}</b>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonSecond",
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

<style scoped>
.message {
    color: rgb(250, 155, 171);
}
</style>
