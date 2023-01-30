import axios from "axios";

export default {
    namespaced: true,
    actions: {
        getContent(context) {
            // 来点小语句
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                (response) => {
                    console.log(response.data);
                    context.commit("GET_CONTENT", response.data);
                },
                (err) => {
                    alert(err + " 网络请求失败，获取小语句失败 ~ ");
                }
            );
        },
    },
    mutations: {
        GET_CONTENT(state, response) {
            state.content = response;
        },
    },
    state: {
        content: "",
    },
    getters: {
        welcomeAndContent(state) {
            return "想来点小语句吗 ~ ~ ~ " + state.content;
        },
    },
};
