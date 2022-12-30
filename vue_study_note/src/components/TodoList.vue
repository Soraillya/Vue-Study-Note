<template>
    <div class="todo-list-container">
        <MyHeader @addNewItem="addNewItem" />
        <MyList :todos="todos" />
        <MyFooter @selectAll="selectAll" @removeDones="removeDones" :todos="todos" />
    </div>
</template>

<script>
import MyHeader from "./TodoListComponents/MyHeader";
import MyList from "./TodoListComponents/MyList";
import MyFooter from "./TodoListComponents/MyFooter";
import { nanoid } from "nanoid";
export default {
    name: "TodoList",
    components: {
        MyHeader,
        MyList,
        MyFooter,
    },
    data() {
        return {
            todos: JSON.parse(window.localStorage.getItem("todos")) || [],
        };
    },
    methods: {
        addNewItem(newTodoItemName) {
            let newTodoItem = {
                id: nanoid(),
                name: newTodoItemName,
                done: false,
            };
            this.todos.unshift(newTodoItem);
            window.localStorage.setItem("todos", JSON.stringify(this.todos));
            console.log(this.todos);
        },
        selectAll(selectAll) {
            this.todos.forEach((todo) => (todo.done = selectAll));
        },
        removeDones() {
            if (confirm("确认清除吗？")) {
                this.todos = this.todos.filter((todo) => !todo.done);
            }
            // console.log(this.todos);
        },
    },
};
</script>

<style>
.todo-list-container {
    width: 500px;
    padding: 8px 8px;
    border: 1px solid pink;
    border-radius: 4px 4px;
    box-shadow: 1px 1px 4px pink;
    margin: auto;
}
</style>
