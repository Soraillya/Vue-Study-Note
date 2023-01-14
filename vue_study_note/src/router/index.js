/**
 * 该文件专门用于创建整个应用的路由器
 */

// 引用插件
import VueRouter from "vue-router";

// 引用路由指定所需的组件
import StudyNoteSonFirst from "../components/StudyNoteSonFirst";
import StudyNoteSonSecond from "../components/StudyNoteSonSecond";
import StudyNoteSonThird from "../components/StudyNoteSonThird";

// 创建一个路由器
// const router = new VueRouter({routes:[{path:"",component:"",}]});
export default new VueRouter({
    routes: [
        {
            // http://localhost:8080/#/StudyNoteSonFirst
            path: "/StudyNoteSonFirst",
            component: StudyNoteSonFirst,
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
