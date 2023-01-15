<template>
    <div class="root">
        <p>{{ msg }}</p>
        <p>嵌套路由展示三</p>
        <p>$route.query.msg: {{ $route.query.msg }}</p>
        <p>$route.query.hello: {{ $route.query.hello }}</p>
    </div>
</template>

<script>
export default {
    name: "ThirdChild",
    data() {
        return {
            msg: "StudyNoteSonFirst - Third Child",
        };
    },
};
</script>

<style scoped>
.root {
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 4px #777;
    border-radius: 4px 4px;
    display: flex;
    flex-flow: column;
    justify-content: center;
}
p {
    padding: 0;
    margin: 4px auto;
    text-align: center;
}
</style>
