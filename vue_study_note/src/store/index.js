/**
 * src/store/index.js
 * 该文件用于创建Vuex中最为核心的 store
 * 见到了store如同见到了vuex插件的使用
 * 流程：vc --①Dispatch--> actions --②Commit--> mutations --③Mutate--> state --④Render--> vc
 */
import Vue from "vue"; // 引入Vue, 以在导入store之前使用Vuex插件
import Vuex from "vuex"; // 引用Vuex

Vue.use(Vuex);

// 1. actions -- 用于响应组件中的动作 (业务逻辑层)
const actions = {
    plus(context, value) {
        // ② Actions --> Actions
        console.log("② actions 中的 plus 被调用了！");
        console.log("context: ", context, "value: ", value);
        console.log("context是mini版的store！");
        setTimeout(() => {
            // 延时1s再跳到数据操作层，模拟网络请求返回数据后再进行操作
            context.commit("PLUS", value);
        }, 1000);
        console.log("② Commit End！");
    },
    // minus(context, value) {
    //     console.log("② actions 中的 minus 被调用了！");

    //     context.commit("MINUS", value);
    // console.log("② Commit End！");
    // },
    oddPlusOne(context) {
        // 添加一些复杂业务逻辑
        console.log("② actions 中的 oddPlusOne 被调用了！");
        if (context.state.sum % 2 == 0) {
            return console.log("当前数字为偶数！不进行 commit ！");
        }
        context.commit("ODDPLUSONE");
        console.log("② Commit End！");
    },
    oddMinusOne(context) {
        // 添加一些复杂业务逻辑
        console.log("② actions 中的 oddPlusOne 被调用了！");
        if (context.state.sum % 2 !== 0) {
            return console.log("当前数字为奇数！不进行 commit ！");
        }
        context.commit("ODDMINUSONE");
        console.log("② Commit End！");
    },

    // 多个action可以嵌套
    demo1(context, value) {
        console.log("Demo1 处理了一些事情。。。");
        // 嵌套了demo2，value往下传
        context.dispatch("demo2", value);
    },
    demo2(context, value) {
        console.log("Demo2 处理了一些事情。。。");
        // 嵌套了demo3，value往下传
        context.dispatch("demo3", value);
    },
    demo3(context, value) {
        console.log("Demo3 处理了一些事情。。。");
        // Demo 最终传到 mutation
        context.commit("mutationName", value);
    },
};

// 2. mutations -- 用于操作数据（state）(数据操作层)
// vue 的开发者工具(图里的DevTools)捕获 mutation 执行状态
const mutations = {
    // 官方推荐命名，mutations中大写PLUS，对应着actions中的plus
    PLUS(state, value) {
        console.log("③ mutations 中的 PLUS 被调用了！");
        state.sum += value;
        console.log("③ Mutate End！");
    },
    MINUS(state, value) {
        console.log("③ mutations 中的 MINUS 被调用了！");
        state.sum -= value;
        console.log("③ Mutate End！");
    },
    ODDPLUSONE(state) {
        console.log("③ mutations 中的 ODDPLUSONE 被调用了！");
        ++state.sum;
        console.log("③ Mutate End！");
    },
    ODDMINUSONE(state) {
        console.log("③ mutations 中的 ODDPLUSONE 被调用了！");
        --state.sum;
        console.log("③ Mutate End！");
    },
};

// 3. state -- 用于存储数据
const state = {
    sum: 0,
    sumMsg: "当前数字",
    vc1: "[组件一: 延时加法]",
    vc2: "[组件二: 减法]",
    vc3: "[组件三]: 判断奇数/偶数",
};

// 4. getters -- 用于对 state 中的数据进行加工(computed)，不必在组件中进行加工，提高了复用 ~
const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
    bigSumMsg(state) {
        return state.sumMsg + "放大十倍";
    },
};

// 创建 store ，并传入以上配置对象
// const store = new Vuex.Store({ actions, mutations, state });

// 默认导出 store 配置
// export default store;

export default new Vuex.Store({ actions, mutations, state, getters });
