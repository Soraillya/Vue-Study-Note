<template>
    <div>
        <h1 v-if="isRef">{{ message }}</h1>
        <h1 v-if="isScoped" class="message">{{ message }}</h1>
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
