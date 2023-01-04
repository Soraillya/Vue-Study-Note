<template>
    <div class="my-footer" v-if="todosLength">
        <div><input type="checkbox" v-model="selectAll" /> 已完成 {{ donesLength }} / 全部 {{ todosLength }}</div>
        <button class="remove-dones" @click="removeDones">清除已完成事项</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: {
        todos: Array,
    },
    data() {
        return {};
    },
    computed: {
        // todolist 事项总数
        todosLength() {
            return this.todos.length;
        },
        // todolist 已完成的事项总数
        donesLength() {
            return this.todos.reduce((pre, todo) => {
                return todo.done ? pre + 1 : pre;
            }, 0);
        },
        selectAll: {
            get() {
                return (this.donesLength === this.todosLength) & (this.todosLength > 0) ? true : false;
            },
            set(val) {
                this.$emit("selectAll", val);
            },
        },
    },
    methods: {
        // 清除已完成事项
        removeDones() {
            this.$emit("removeDones");
        },
    },
};
</script>

<style>
.my-footer {
    width: 100%;
    padding: 8px 8px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.remove-dones {
    padding: 4px 8px;
    align-items: flex-end;
    background-color: pink;
    color: #fff;
    border: none;
    border-radius: 4px 4px;
    cursor: pointer;
}
.remove-dones:hover {
    background-color: rgb(255, 176, 189);
}
</style>
