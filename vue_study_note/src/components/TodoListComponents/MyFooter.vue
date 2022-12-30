<template>
    <div class="my-footer" v-if="todosLength">
        <div><input type="checkbox" v-model="selectAll" />已完成 {{ donesLength }} /全部 {{ todosLength }}</div>
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
        return {
            selectAll: false,
        };
    },
    watch: {
        selectAll() {
            this.$emit("selectAll", this.selectAll);
        },
    },
    computed: {
        todosLength() {
            return this.todos.length;
        },
        donesLength() {
            return this.todos.reduce((pre, todo) => {
                return todo.done ? pre + 1 : pre;
            }, 0);
        },
    },
    methods: {
        removeDones() {
            this.$emit("removeDones");
            this.selectAll = false;
        },
    },
};
</script>

<style>
.my-footer {
    width: 100%;
    padding: 8px 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.remove-dones {
    padding: 0px 8px;
    align-items: flex-end;
    background-color: pink;
    color: #fff;
    border: none;
    border-radius: 4px 4px;
    cursor: pointer;
}
</style>
