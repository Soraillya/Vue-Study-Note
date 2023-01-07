/**
 * todoList 服务器，根据请求内容响应数据
 */
// 1. 引入 http 模块
const http = require("http");

// 2. 创建服务器
const server = http.createServer();

// 3. 设置服务器响应事件
server.on("request", (req, res) => {
    let ret = "<h1>404 not found!!!</h1>";
    let url = req.url;
    let method = req.method;
    let todoList_1 = `[
        {
            id: "ylu1p5m6cqtrsXp_cAagq",
            name: "睡觉",
            done: false,
        },
        {
            id: "Z87F_vy5ejnF16om5U_O9",
            name: "打胶",
            done: false,
        },
        {
            id: "2TA0UhY9o6oXXjNB0QmT5",
            name: "炉管",
            done: false,
        }
    ]`;
    let todoList_2 = `[
        {
            id: "vz2HQ7LNT6O8EFPimgdT_",
            name: "学习",
            done: false,
        },
        {
            id: "HMtSmX8dwJfFDR9FzhVLI",
            name: "听歌",
            done: true,
        },
        {
            id: "Wd_O9aC6XMzBBGCSSnQeT",
            name: "游戏",
            done: true,
        }
    ]`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    console.log(`Your request url is ${url}, request method is ${method}`);

    if (url === "/todoList_1") {
        res.end(todoList_1);
    } else if (url === "/todoList_2") {
        res.end(todoList_2);
    } else {
        res.end(ret);
    }
});

server.listen(5050, () => {
    console.log("Server todoList running at http://127.0.0.1:5050");
});
