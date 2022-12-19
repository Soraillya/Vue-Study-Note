<template>
    <div>
        <h1>Hello StudyNoteSonFirst</h1>
    </div>
</template>

<script>
export default {
    name: "StudyNoteSonFirst",
    data() {
        return {
            msg: "ref属性",
        };
    },
    methods: {
        getDOMByRef() {
            console.log(this.$refs.refTitle);
        },
    },
};
</script>

<style></style>
