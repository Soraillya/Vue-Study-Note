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
                    path: "ThirdChild",
                    component: ThirdChild,
                },
            ],
        },
        {
            path: "/StudyNoteSonSecond",
            component: StudyNoteSonSecond,
        },
        {
            path: "/StudyNoteSonThird",
            component: StudyNoteSonThird,
        },
    ],
});
