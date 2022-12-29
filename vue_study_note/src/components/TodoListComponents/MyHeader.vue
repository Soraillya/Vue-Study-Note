<template>
    <div class="my-header">
        <input type="text" placeholder="请输入待做事项，按 Enter 键添加" @keyup.enter="a" />
    </div>
</template>

<script>
export default {
    name: "MyHeader",
};
</script>

<style scoped>
.my-header {
    width: 100%;
}
.my-header input {
    width: 96%;
    line-height: 24px;
    font-size: 16px;
}
</style>
