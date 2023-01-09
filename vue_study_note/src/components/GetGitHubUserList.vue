<template>
    <div class="root">
        <div class="title">
            <span>Search GitHub Users</span>
        </div>
        <div class="search">
            <div class="search-input">
                <input type="text" v-model="keyword" placeholder="Enter the keyword of name you want to search" @keyup.enter="search(keyword)" />
            </div>
            <div class="search-button">
                <button @click="search(keyword)">Search</button>
            </div>
        </div>
        <div v-show="users.length === 0" class="welcome">Hello World!!!</div>
        <ul class="users">
            <li class="user" v-for="user in users" :key="user.id">
                <!-- <a :href="user.html_url" target="blank"> -->
                <div class="name">
                    <span>{{ user.login }}</span>
                </div>
                <div class="avtar">
                    <div class="avtar-image">
                        <img :src="user.avatar_url" alt="not found!" />
                    </div>
                </div>
                <!-- </a> -->
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "GetGitHubUserList",
    data() {
        return {
            keyword: "", // 输入的关键词
            users: [], // 通过api获取的用户列表
        };
    },
    methods: {
        search(keyword) {
            if (keyword.trim() === "") {
                return alert("输入不能为空");
            }
            console.log(keyword);
            // https://api.github.com/search/users?q=xxxx 后端已通过cors解决跨域问题
            axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
                (response) => {
                    console.log("请求成功了!", response.data);
                    this.users = response.data.items;
                    console.log(this.users);
                },
                (error) => {
                    console.log(error.message);
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
}
.title span {
    color: #fff;
    font-size: 32px;
    margin-left: 20px;
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
.welcome {
    width: 100%;
    height: 140px;
    color: #fff;
    border-top: 1px solid #7f8c8d;
    font-size: 32px;
    line-height: 140px;
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
.name span {
    color: #fff;
    font-size: 1.2em;
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
.avtar-image img {
    width: 100%;
    border-radius: 50% 50%;
}
</style>
