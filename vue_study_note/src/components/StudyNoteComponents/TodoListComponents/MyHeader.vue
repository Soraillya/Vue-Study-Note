<template>
    <div class="my-header">
        <input type="text" placeholder="请输入待做事项，按 Enter 键添加" @keyup.enter="addTodoItem(newTodoItemName)" v-model="newTodoItemName" />
    </div>
</template>

<script>
export default {
    name: "MyHeader",
    data() {
        return {
            newTodoItemName: "",
        };
    },
    methods: {
        addTodoItem(newTodoItemName) {
            newTodoItemName = newTodoItemName.trim();
            if (newTodoItemName) {
                this.$emit("addNewItem", newTodoItemName);
                this.newTodoItemName = "";
            }
        },
    },
};
</script>

<style scoped>
.my-header {
    width: 100%;
    background-color: pink;
}
.my-header input {
    width: 100%;
    padding: 4px 4px;
    border: 2px solid pink;
    border-radius: 2px 2px;
    direction: none;
    line-height: 24px;
    font-size: 16px;
}
.my-header input:focus {
    outline: 0;
    border: 2px solid pink;
}
</style>
