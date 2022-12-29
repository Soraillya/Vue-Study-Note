<template>
    <div class="todo-list-container">
        <MyHeader />
        <MyList />
        <MyFooter />
    </div>
</template>

<script>
import MyHeader from "./TodoListComponents/MyHeader";
import MyList from "./TodoListComponents/MyList";
import MyFooter from "./TodoListComponents/MyFooter";
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
