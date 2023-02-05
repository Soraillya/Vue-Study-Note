import { reactive, onMounted, onBeforeUnmount } from "vue";

export default function (status) {
    let point = reactive({
        x: 0,
        y: 0,
        // 手动添加 / 移除监听
        isAddEventListener: () => {
            status ? window.addEventListener("click", savePoint) : window.removeEventListener("click", savePoint);
        },
    });

    // 监听的回调
    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log("point.x:", point.x, " point.y:", point.y);
    }

    // 组件挂载时移除监听
    onMounted(() => {
        status ? window.addEventListener("click", savePoint) : 0;
    });

    // 组件卸载时移除监听
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
        window.removeEventListener("click", savePoint);
    });

    return point;
}
