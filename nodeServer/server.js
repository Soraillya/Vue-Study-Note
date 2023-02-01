// 搭建 node server 需要导入 express 插件
// 在此运行 vue_study_note
const express = require("express");

const app = express();

/**
 * 此处解决 vue-router中，配置 history mode时产生的问题
 * 需要安装并引入中间件 connect-history-api-fallback
 */
const history = require("connect-history-api-fallback");
app.use(history()); // 必须在下一句之前作用

// 配置静态资源中的主页
app.use(express.static(__dirname + "/static"));

app.get("/person", (req, res) =>
    //给客户端返回数据
    res.send({
        name: "Sora",
        age: 23,
    })
);

app.listen(5005, (err) => {
    // 直接打开了static下的index.html
    if (!err) console.log("服务器启动了！");
});
