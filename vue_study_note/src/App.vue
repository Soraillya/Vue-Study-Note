<template>
    <div id="app">
        <!-- 给子组件传值(props)，使用v-bind:的单向绑定可使双引号内变为js表达式 -->
        <StudyNote name="Sora" :sex="'男'" :age="22" />
    </div>
</template>

<script>
import StudyNote from "./components/StudyNote";

export default {
    name: "App",
    components: {
        StudyNote,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}
h1,
h2,
h3,
h4,
h5,
p,
hr {
    margin: 16px auto;
    text-align: left;
}
h1 {
    font-size: 3.2rem;
}
h2 {
    font-size: 2.4rem;
    padding-left: 2rem;
}
h3 {
    font-size: 2rem;
    padding-left: 4rem;
}
h4 {
    font-size: 1.6rem;
    padding-left: 6rem;
}
h5 {
    font-size: 1.6rem;
    padding-left: 7rem;
}
p {
    font-size: 1.6rem;
    padding-left: 8rem;
}
b,
strong,
div,
span {
    font-size: 1.6rem;
}
a:visited {
    color: pink;
    text-decoration: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
