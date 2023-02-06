import { onMounted, onBeforeUnmount, reactive } from "vue";

/**
 * 倒计时，可定义指定日期的指定时间
 * @param {Date, Number} time
 * @param {String} type : "D/d", "H/h", "M/m", "S/s"
 */
export default function (time, type) {
    // time : 2023.2.5 01:00:00
    // type : D/d

    // 日期格式化
    Date.prototype.format = (template) => {
        if (typeof template !== "String") {
            console.log(typeof template);
            console.warn('Template "' + template + '" is not a String.');
            return 0;
        }
        let date = "";
        // try {
        //     date = new Date(locale);
        // } catch (error) {
        //     console.log(error);
        // }
        const YYYY_UPPER = "YYYY";
        const YYYY_LOWER = "yyyy";
        const MM_UPPER = "MM";
        const DD_UPPER = "DD";
        const DD_LOWER = "dd";
        const HH_UPPER = "HH";
        const hh_LOWER = "hh";
        const mm_LOWER = "mm";
        const SS_UPPER = "SS";
        const SS_LOWER = "ss";
    };

    function countdownFunc(countdownTime) {
        let gapMs = new Date(countdownTime) - new Date();
        let s = Math.floor((Math.abs(gapMs) / 1000) % 60);
        let m = Math.floor((Math.abs(gapMs) / 1000 / 60) % 60);
        let h = Math.floor((Math.abs(gapMs) / 1000 / 60 / 60) % 24);
        let d = Math.floor((Math.abs(gapMs) / 1000 / 60 / 60 / 24) % 365);
        let y = Math.floor(Math.abs(gapMs) / 1000 / 60 / 60 / 24 / 365);
        if (gapMs >= 0) {
            countdown.countDateMsg = "倒计时 " + (y !== 0 ? `${y}年` : "") + `${d}天${h}时${m}分${s}秒`;
        } else {
            countdown.countDateMsg = "已过去 " + (y !== 0 ? `${y}年` : "") + `${d}天${h}时${m}分${s}秒`;
        }
    }

    let isAddTimer = (time) => {
        if (time) {
            if (countdown.timer) {
                clearInterval(countdown.timer);
            } else countdown.timer = true;

            // 添加到本地存储
            window.localStorage.setItem("countdown", time);

            countdownFunc(time);
            countdown.timer = setInterval(() => {
                countdownFunc(time);
            }, 1000);
            console.log("已开始定时器: countdown");
        } else {
            clearInterval(countdown.timer);
            countdown.countDateMsg = "";
            countdown.timer = false;
            console.log("已关闭定时器: countdown");
        }
    };

    let countdown = reactive({
        time: "",
        timer: 0,
        countDateMsg: "",
        isAddTimer,
    });

    onMounted(() => {
        countdown.timer ? countdown.isAddTimer(false) : time ? countdown.isAddTimer(time) : 0;
        // 加载本地的计时器
        countdown.time = window.localStorage.getItem("countdown");
        countdown.isAddTimer(countdown.time);
    });

    onBeforeUnmount(() => {
        countdown.isAddTimer(false);
    });

    return countdown;
}
