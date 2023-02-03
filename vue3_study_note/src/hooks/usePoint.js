import { onMounted, reactive } from "vue";

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function savePoint(event) {
        point.x = event.pageX;
        point.Y = event.pageY;
        console.log("point.x, point.Y: ", point.x, point.Y);
    }

    onMounted(() => {
        window.addEventListener("click", savePoint);
    });
    onBeforeUnMounted(() => {
        window.removeEventListener("click", savePoint);
    });
}
