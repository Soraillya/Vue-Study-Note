/**
 * 该文件专门用于创建整个应用的路由器
 */

// 引用插件
import VueRouter from "vue-router";

// 引用路由指定所需的组件
import StudyNoteSonFirst from "../components/StudyNoteComponents/StudyNoteSonFirst";
import FirstChild from "../components/StudyNoteComponents/StudyNoteSonFirstComponents/FirstChild";
import SecondChild from "../components/StudyNoteComponents/StudyNoteSonFirstComponents/SecondChild";
import ThirdChild from "../components/StudyNoteComponents/StudyNoteSonFirstComponents/ThirdChild";
import StudyNoteSonSecond from "../components/StudyNoteComponents/StudyNoteSonSecond";
import StudyNoteSonThird from "../components/StudyNoteComponents/StudyNoteSonThird";
// 创建一个路由器
// const router = new VueRouter({routes:[{path:"",component:"",}]});
// export default new VueRouter({
const router = new VueRouter({
    // linkActiveClass: "active",

    // history模式 与 hash模式
    // history: url无 # 井号，兼容性略差，美观
    // 注意：在使用 nodeServer 运行页面后，通过路由进入组件后再刷新就会出现404 (Not Found)！
    //      因为是根据静态资源路径去寻求页面，但组件并不是单个页面。
    //      需要使用特殊解决方法：从后端方面，详情查看 nodeServer/server.js
    // mode: "history",

    // hash: url带 # 井号，兼容性好，无 history 所存在的寻求资源的问题
    mode: "hash",

    routes: [
        {
            // http://localhost:8080/#/StudyNoteSonFirst

            // 命名路由，在跳转链接使用的时候不需要填写完整路由，直接写name，不可且不推荐重复
            // 但是需要给to配置完整对象形式：
            // to = "{
            //  name: "StudyNoteSonFirst",
            //  query: {
            //    query1 : "q1",
            //    query2 : "q2"
            //  }
            // }"
            name: "StudyNoteSonFirst",

            path: "/StudyNoteSonFirst",
            component: StudyNoteSonFirst,

            // 嵌套路由 children
            children: [
                {
                    // 子路由不需要加上斜杠/
                    path: "FirstChild",
                    component: FirstChild,
                },
                {
                    path: "SecondChild",
                    component: SecondChild,
                },
                {
                    // 路由的params参数 ==> "localhost:8080/StudyNoteSonFirst/ThirdChild/组件三信息/Hello World!"
                    // path: "ThirdChild/:msg/:hello",
                    path: "ThirdChild",
                    component: ThirdChild,

                    // props: 接收多个key:value, 该对象中的所有kv都会以props的形式传给组件
                    // props:{a:'a',b:'b',c:'c'} // 写法一，用的很少，因为键值写死
                    // 第二写法，值为布尔值，若为true，就会把该路由组件收到的所有 params 参数以 props 形式传给组件
                    // props: true,

                    //第三写法，值为回调函数，固定传参为 $route
                    // props($route){
                    //     return {
                    //         msg: $route.query.msg,
                    //         hello: $route.query.hello,
                    //     }
                    // }
                    // 连续解构赋值，但代码可阅读性较差
                    props({ query: { msg, hello } }) {
                        return {
                            msg,
                            hello,
                        };
                    },
                },
            ],

            // 路由守卫，添加鉴权标志
            meta: { isAuth: true, title: "学习笔记-组件一" },

            // 独享路由守卫，只有前置路由守卫，没有后置
            beforeEnter(to, from, next) {
                console.log("此处与全局路由守卫配置一样");
                console.log("执行顺序：先执行全局，再执行独享");
                next();
            },
        },
        {
            path: "/StudyNoteSonSecond",
            component: StudyNoteSonSecond,
            props({ query: { routeHelloTwo, routeMsgTwo } }) {
                return {
                    routeHelloTwo,
                    routeMsgTwo,
                };
            },
        },
        {
            path: "/StudyNoteSonThird",
            component: StudyNoteSonThird,
        },
    ],
});
// 全局前置路由守卫 —— 初始化的时候、每次路由切换的之前调用
router.beforeEach((to, from, next) => {
    // console.log("beforeEach to:", to);      // 目标路由
    // console.log("beforeEach from:", from);   // 起始路由
    // console.log("beforeEach next:", next);   // 跳转到目标路由的函数

    console.log("beforeEach to.meta.isAuth:", to.meta.isAuth);
    // 目标路由需要鉴权
    if (to.meta.isAuth) {
        if (confirm("来自全局路由守卫的提示：是否进入？")) {
            next();
        } else {
            console.log("不作任何跳转");
        }
    } else {
        // 目标路由不需要鉴权
        next();
    }
});

// 全局后置路由守卫 —— 初始化的时候、每次路由切换之后调用
// router.afterEach((to,from) => {  // from 用不上，可省略
router.afterEach((to) => {
    // 可在此改变当前页面的标题
    document.title = to.meta.title ? to.meta.title : "vue_study_note";
});

export default router;
