<template>
    <div class="my-footer" v-if="todosLength">
        <div><input type="checkbox" v-model="selectAll" @click="selectAllDones" /> 已完成 {{ donesLength }} / 全部 {{ todosLength }}</div>
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
            selectAll:
                (this.todos.reduce((pre, todo) => {
                    return todo.done ? pre + 1 : pre;
                }, 0) ===
                    this.todos.length) &
                (this.todos.length > 0)
                    ? true
                    : false,
        };
    },
    watch: {
        todosLength() {
            this.selectAll = (this.donesLength === this.todosLength) & (this.todosLength > 0) ? true : false;
        },
        donesLength() {
            this.selectAll = (this.donesLength === this.todosLength) & (this.todosLength > 0) ? true : false;
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
        selectAllDones(e) {
            this.$emit("selectAll", e.target.checked);
        },
        removeDones() {
            this.$emit("removeDones");
        },
    },
};
</script>

<style>
.my-footer {
    width: 100%;
    padding: 8px 4px;
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
</style>
