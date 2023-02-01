module.exports = {
    presets: [
        "@vue/cli-plugin-babel/preset",
        // ["es2015", { modules: false }] // ElementUI 按需引入的配置，但已不适用
        ["@babel/preset-env", { modules: false }],
    ],
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk",
            },
        ],
    ],
};
