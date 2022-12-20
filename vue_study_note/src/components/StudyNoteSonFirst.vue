<template>
    <div>
        <h1 v-if="isRef">{{ message }}</h1>
        <h1 v-if="isScoped" class="message">{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonFirst",
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
    methods: {
        getDOMByRef() {
            console.log(this.$refs.refTitle);
        },
    },
};
</script>
<style lang="css">
.message {
    color: hotpink;
}
</style>
