// 分别导出
export const date = {
    data() {
        return {
            nowTime: 0,
        };
    },
    methods: {
        getNow() {
            this.nowTime = Date.now();
            console.log("Date.now() :>> ", this.nowTime);
        },
    },
    mounted() {
        this.getNow();
    },
};
