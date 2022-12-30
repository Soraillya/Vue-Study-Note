<template>
    <div class="my-list">
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <div><input type="checkbox" v-model="todo.done" /> {{ todo.name }}</div>
                <button @click="removeTodoItem(todo.id)">移除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyList",
    props: {
        todos: Array,
    },
    methods: {
        removeTodoItem(id) {
            this.$emit("removeTodoItem", id);
        },
    },
};
</script>

<style>
.my-list {
    width: 100%;
}
.my-list ul {
    display: flex;
    flex-flow: column wrap;
}

.my-list li {
    border: 1px solid pink;
    border-radius: 4px 4px;
    margin-top: 2px;
    padding: 4px 4px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.my-list button {
    border: none;
    padding: 0px 4px;
    border-radius: 2px 2px;
    color: #fff;
    background-color: pink;
    display: none;
    cursor: pointer;
}
.my-list li:hover button {
    display: block;
}
</style>
