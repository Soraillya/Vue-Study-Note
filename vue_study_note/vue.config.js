const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭语法检查

    //开启代理服务器
    // 方式一
    // devServer: {
    //     proxy: "http://localhost:5050",
    // },

    // 方式二
    devServer: {
        proxy: {
            // 匹配所有以 "/getTodo"开头的请求路径
            "/getTodo": {
                // 代理目标的基础路径
                target: "http://localhost:5050",
                // 请求 url 时为http://localhost:5050/getTodo/xxxx，添加正则将getTodo覆写
                pathRewrite: { "^/getTodo": "" },
                // 用于支持websocket
                ws: true,
                // 用于控制请求头中host值(发出请求url来源)，设置为true时显示代理端口5050，设置为false显示为8080，默认为true
                changeOrigin: false,
            },
        },
    },
});
