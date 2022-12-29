<template>
    <div class="todo-list-container">
        <MyHeader @addNewItem="addNewItem" />
        <MyList />
        <MyFooter />
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
            console.log(this.todos);
        },
    },
};
</script>

<style>
.todo-list-container {
    width: 500px;
    padding: 4px 4px;
    border: 1px solid #777;
    border-radius: 4px 4px;
    box-shadow: 1px 1px 4px #777;
    margin: auto;
}
</style>
