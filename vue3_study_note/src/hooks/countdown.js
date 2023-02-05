import { onMounted, onBeforeUnmount, reactive } from "vue";

/**
 * 倒计时，可定义指定日期的指定时间
 * @param {Date, Number} time
 * @param {String} type : "D/d", "H/h", "M/m", "S/s"
 */
export default function (time, type) {
    // time : 2023.2.5 01:00:00
    // type : D/d

    let countdown = reactive({
        countDateMsg: "",
        closeTimer: () => {
            clearInterval(timer);
            console.log("已关闭定时器: 倒计时");
        },
    });

    let timer = 0;
    let timeout = new Date() % 1000;

    function countdownFunc() {
        console.log("开始时间:", new Date().getTime(), "上次timeout", timeout);
        let gapMs = new Date(time) - new Date();
        let s = Math.floor((gapMs / 1000) % 60);
        let m = Math.floor((gapMs / 1000 / 60) % 60);
        let h = Math.floor((gapMs / 1000 / 60 / 60) % 24);
        let d = Math.floor((gapMs / 1000 / 60 / 60 / 24) % 365);
        let y = Math.floor(gapMs / 1000 / 60 / 60 / 24 / 365);
        countdown.countDateMsg = "倒计时 " + (y !== 0 ? `${y}年` : "") + `${d}天${h}时${m}分${s}秒`;
        timeout = 1000 - (new Date() % 1000);
    }

    onMounted(() => {
        timer = setInterval(() => {
            countdownFunc();
        }, timeout);
    });

    onBeforeUnmount(() => {
        countdown.value.closeTimer();
    });

    return countdown;
}
