<template>
    <!-- 组件的结构 -->
    <div class="big">
        <p>{{ msg }}</p>
        <div class="small" @click="sayHello"></div>
        <div class="small" @click="sayHello"></div>
        <div class="small" @click="sayHello"></div>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
// export const ThreeBlock = Vue.extend({   // 分别暴露
// const ThreeBlock = Vue.extend({
//     data() {
//         return {
//             msg: "ThreeBlock Component",
//         };
//     },
// });
// export {ThreeBlock} // 统一暴露 对应的引入：import {???} from ???
// export default ThreeBlock; //默认暴露（Vue单组件推荐）对应的引入：import ??? from ???
//

// 最终简写，暴露组件options
export default {
    name: "ThreeBlock", // 最好跟文件名保持一致
    data() {
        return {
            msg: "ThreeBlock Component",
        };
    },
    methods: {
        sayHello() {
            console.log("ThreeBlock Component Say Hello World!!");
        },
    },
};
</script>

<style>
/* 组件的样式 */
.big {
    width: 200px;
    height: 200px;
    background-color: pink;
}
.small {
    width: 100px;
    height: 100px;
    background-color: orange;
    flex: 1;
}
</style>
