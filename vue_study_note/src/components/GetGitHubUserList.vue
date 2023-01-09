<template>
    <div class="root">
        <h2 class="title">Search GitHub Users</h2>
        <div class="search">
            <div class="search-input">
                <input type="text" v-model="keyword" placeholder="Enter the keyword of name you want to search" @keyup.enter="search()" />
            </div>
            <div class="search-button">
                <button @click="search()">Search</button>
            </div>
        </div>
        <div class="message" v-show="isFirst">Hello World !!!</div>
        <div class="message" v-show="isLoading">Loading ...</div>
        <div class="message" v-show="errMsg">{{ errMsg }}</div>
        <div class="message" v-show="!isFirst & !isLoading & !errMsg & (users.length === 0)">No result ~ ~ ~</div>
        <ul class="users">
            <li class="user" v-for="user in users" :key="user.id">
                <div class="name">
                    <p>{{ user.login }}</p>
                </div>
                <a class="avtar" :href="user.html_url" target="_blank">
                    <div class="avtar-image"><img :src="user.avatar_url" alt="Avtar not found!" /></div>
                </a>
            </li>
            <!-- <li class="user">
                <div class="name">
                    <p>hello</p>
                </div>
                <a class="avtar" href="https://www.baidu.com" target="_blank">
                    <div class="avtar-image"><img src="https://avatars.githubusercontent.com/u/75765684?v=4" alt="not found!" /></div>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "GetGitHubUserList",
    data() {
        return {
            isFirst: true,
            isLoading: false,
            errMsg: "",
            keyword: "", // 输入的关键词
            users: [], // 通过api获取的用户列表
        };
    },
    methods: {
        search() {
            if (this.keyword.trim() === "") {
                return alert("输入不能为空");
            }
            if (this.isFirst) {
                this.isFirst = false;
            }
            this.isLoading = true; // 开始显示加载中
            this.users = [];
            // https://api.github.com/search/users?q=xxxx 后端已通过cors解决跨域问题
            // 此处可替换为 使用 vue-resource 插件中的 this.$http.get 发出请求，但维护更新不频繁，而axios更加优秀
            // this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                (response) => {
                    console.log("请求成功了!", response.data);
                    if (this.errMsg !== "") {
                        this.errMsg = "";
                    }
                    this.users = response.data.items;
                    this.isLoading = false;
                    console.log(this.users);
                },
                (error) => {
                    console.log(error.message);
                    this.isLoading = false;
                    this.errMsg = error.message;
                }
            );
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    background-color: #34495e;
}
.root {
    width: 80%;
    max-width: 800px;
    min-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 8px 8px #95a5a6;
    border-radius: 16px 16px;
}
.title {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 32px;
    padding-left: 20px;
}
.search {
    height: 40px;
    display: flex;
    /* 水平两向分布 */
    justify-content: space-around;
    /* 垂直居中 */
    align-items: center;
}
.search-input {
    width: 70%;
    border-radius: 16px 16px;
    background-color: #fff;
}
.search-input input {
    width: 100%;
    height: 28px;
    padding-left: 8px;
    font-size: 1em;
    background: none;
    outline: none;
    border: none;
}
.search-button {
    width: 20%;
    height: 28px;
}
.search-button button {
    width: 100%;
    height: 100%;
    border-radius: 16px 16px;
    font-size: 1em;
    background-color: #95a5a6;
}
.message {
    width: 100%;
    height: 140px;
    color: #fff;
    border-top: 1px solid #7f8c8d;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.users {
    width: 100%;
    height: 100%;
    border: 1px solid #7f8c8d;
    border-right: none;
    display: flex;
    flex-flow: row wrap;
}
.user {
    /* width: calc(25% - 1px); */
    width: 25%;
    height: 200px;
    list-style: none;
    border: 1px solid #7f8c8d;
    border-top: none;
    border-left: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: white;
}
.name {
    width: 100%;
    height: 30%;
    order: 2;
    display: flex;
    justify-content: center;
    align-content: center;
}
.name > p {
    width: 100%;
    color: #fff;
    font-size: 1em;
    /* padding: 0 16px; */
    margin: 0 auto;
    /* 以下为昵称过长的解决方案，超出两行时剩余字符串显示省略号 */
    line-height: 2;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /*重点，不能用block等其他*/
    -webkit-line-clamp: 2; /*重点IE和火狐不支持*/
    -webkit-box-orient: vertical; /*重点*/
}
.avtar {
    order: 1;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.avtar-image {
    width: 80%;
    max-width: 100px;
    /* height: 80px; */
}
.avtar-image > img {
    width: 100%;
    border-radius: 50% 50%;
}
</style>
