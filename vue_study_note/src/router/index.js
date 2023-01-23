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
export default new VueRouter({
    // linkActiveClass: "active",
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
