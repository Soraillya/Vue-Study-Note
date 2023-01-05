<template>
    <div class="todo-list-container">
        <MyHeader @addNewItem="addNewItem" />
        <MyList @removeTodoItem="removeTodoItem" @editTodoItem="editTodoItem" @saveTodoItem="saveTodoItem" :todos="todos" />
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
            this.todos.push(newTodoItem);
        },
        selectAll(selectAll) {
            this.todos.forEach((todo) => (todo.done = selectAll));
        },
        removeTodoItem(id) {
            if (confirm("确认移除吗？")) {
                this.todos = this.todos.filter((todo) => todo.id !== id);
            }
        },
        removeDones() {
            if (confirm("确认清除吗？")) {
                this.todos = this.todos.filter((todo) => !todo.done);
            }
        },
        editTodoItem(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    if (todo.isEdit === undefined) {
                        // 为todo添加isEdit属性
                        this.$set(todo, "isEdit", true);
                    } else {
                        todo.isEdit = true;
                    }
                }
            });
        },
        saveTodoItem(id, newName) {
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.name = newName;
                    todo.isEdit = false;
                }
            });
        },
    },
    watch: {
        todos: {
            deep: true,
            handler: function (val, oldVal) {
                window.localStorage.setItem("todos", JSON.stringify(val));
            },
        },
    },
    beforeCreate() {
        // 清除isEdit状态
        let localTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
        localTodos.forEach((todo) => {
            if (todo.isEdit) {
                todo.isEdit = false;
            }
        });
        window.localStorage.setItem("todos", JSON.stringify(localTodos));
    },
};
</script>

<style>
.todo-list-container {
    width: 500px;
    padding: 16px 8px 4px 8px;
    border: 1px solid pink;
    border-radius: 4px 4px;
    box-shadow: 1px 1px 4px pink;
    margin: auto;
}
</style>
