<template>
    <div class="root">
        <p>{{ titleMsg }}</p>
        <p>嵌套路由展示三</p>
        <!-- <p>$route.query.msg: {{ $route.query.msg }}</p> -->
        <!-- <p>$route.query.hello: {{ $route.query.hello }}</p> -->
        <p>$route.query.msg: {{ msg }}</p>
        <p>$route.query.hello: {{ hello }}</p>
        <button>push查看</button>
        <button>replace查看</button>
    </div>
</template>

<script>
export default {
    name: "ThirdChild",
    props: ["msg", "hello"], // 此处通过route中的props配置项获取
    data() {
        return {
            titleMsg: "StudyNoteSonFirst - Third Child",
        };
    },
    methods: {
        pushShow() {
            this.$router.push({
                
            })
        },
        replaceShow() {},
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
