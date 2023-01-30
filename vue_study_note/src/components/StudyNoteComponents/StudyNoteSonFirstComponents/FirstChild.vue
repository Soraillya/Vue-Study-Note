<template>
    <div class="root">
        <p>{{ msg }}</p>
        <p>嵌套路由展示一</p>
        <p :style="'opacity: ' + opacity">演示生命钩子，定时器正在运转。。。{{ count }}</p>
        <p>$route.query.msg: {{ $route.query.msg }}</p>
        <p>$route.query.hello: {{ $route.query.hello }}</p>
        <button @click="pushShow">push查看</button>
        <button @click="replaceShow">replace查看</button>
    </div>
</template>

<script>
export default {
    name: "FirstChild",
    data() {
        return {
            msg: "StudyNoteSonFirst - First Child",
            count: 0,
            timer: "",
            opacity: 1,
        };
    },
    methods: {
        pushShow() {},
        replaceShow() {},
    },

    // 两个 router 中独有的生命周期钩子 activated / deactivated
    // 激活，启动定时器
    activated() {
        this.timer = setInterval(() => {
            console.log("StudyNoteSonFirst/FirstChild 中的定时器正在运作！");
            this.count++;
            this.opacity -= 0.1;
            if (this.opacity <= 0) this.opacity = 1;
        }, 100);
    },
    // 失活，关闭定时器
    deactivated() {
        console.log("定时器已被关闭，计数为：", this.count);
        clearInterval(this.timer);
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
