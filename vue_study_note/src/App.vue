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
h1,
h2,
h3,
h4,
hr {
    margin: 16px auto;
    text-align: left;
}
h2 {
    padding-left: 2em;
}
h3 {
    padding-left: 4em;
}
h4 {
    padding-left: 6em;
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
