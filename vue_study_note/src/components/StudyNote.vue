<template>
    <div>
        <h1 ref="refTitle">一、属性 ref</h1>
        <h2>1. 为标签添加ref属性，可轻松获得指定标签的DOM，方便操作</h2>
        <button ref="refButton" @click="getDOMByRef('refTitle')">点我获取标题DOM</button>
        <h2>2. 为组件标签添加ref属性，可获得指定组件实例对象vc，方便操作</h2>
        <StudyNoteSonFirst ref="SNSF_1" />
        <StudyNoteSonSecond ref="SNSF_2" />
        <StudyNoteSonThird ref="SNSF_3" />
        <button @click="getDOMByRef('SNSF_1')">获取子组件1的vc</button>
        <button @click="getDOMByRef('SNSF_2')">获取子组件2的vc</button>
        <button @click="getDOMByRef('SNSF_3')">获取子组件3的vc</button>
        <hr />
        <h1>二、配置项 props</h1>
        <h2>1. 控制是否运行从外部传入值，需要控制类型</h2>
        <p>姓名：{{ myName }}</p>
        <p>性别：{{ mySex }}</p>
        <p>年龄：{{ myAge }}</p>
        <h2>2. 因为props为外部传入，所以尽量避免修改props，而是修改data</h2>
        <h2>3. 尽量避免data与props变量名冲突，此处props中的变量优先级更高</h2>
        <p>推荐的解决方法：props:['age']; data:{myAge : this.age}</p>
        <hr />
        <h1>三、配置项 mixin 混入</h1>
        <h2>功能：可以把多个组件共用的配置提取成一个混入对象</h2>
        <p v-text="'nowTime from common.js: ' + nowTime"></p>
        <hr />
        <h1>四、插件</h1>
        <h2>导入外部插件，用于增强Vue</h2>
        <h3>1. 使用了通过插件添加的过滤器 mySlice</h3>
        <p>{{ "这个字符串原本是很长的" | mySlice }}</p>
        <h3>2. 使用了通过插件添加的自定义指令 v-def</h3>
        <input v-def="myName" />
        <h3>3. 使用了通过插件添加的方法 hello</h3>
        <button @click="hello">Click me to say hello world!!!</button>
    </div>
</template>

<script>
import StudyNoteSonFirst from "./StudyNoteSonFirst.vue";
import StudyNoteSonSecond from "./StudyNoteSonSecond.vue";
import StudyNoteSonThird from "./StudyNoteSonThird.vue";

import { date } from "../common/js/common.js";
export default {
    name: "StudyNote",
    components: {
        StudyNoteSonFirst,
        StudyNoteSonSecond,
        StudyNoteSonThird,
    },
    // props: [name, sex, age], 简单声明接收，但仍要注意一下传入值的类型
    props: {
        // 接收的同时对数据进行类型限制
        name: String, // 默认该数据必须传入，无默认值
        sex: {
            type: String,
            require: true, // 该数据必须传入, 与default相斥
        },
        age: {
            type: Number,
            default: 18, // 默认值, 与require相斥
        },
    },
    data() {
        return {
            msg: "Hello StudyNote",
            myName: this.name,
            mySex: this.sex,
            myAge: this.age,
        };
    },
    methods: {
        getDOMByRef(ref) {
            console.log("this.$refs:", this.$refs);
            console.log("this.$refs['" + ref + "']:", this.$refs[ref]);
        },
    },
    mixins: [date],
    mounted() {
        console.log(" Hello Vue ");
    },
};
</script>

<style></style>
