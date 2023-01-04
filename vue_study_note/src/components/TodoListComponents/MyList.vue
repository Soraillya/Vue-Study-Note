<template>
    <div class="my-list">
        <ul>
            <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__flipInX" leave-active-class="animate__flipOutX">
                <li v-for="todo in todos" :key="todo.id">
                    <div class="item">
                        <input type="checkbox" v-model="todo.done" />
                        <span v-show="!todo.isEdit"> {{ todo.name }}</span>
                        <input v-show="todo.isEdit" type="text" placeholder="输入新的事项名字" :ref="todo.id" @blur="saveTodoItem(todo)" />
                    </div>
                    <div class="btns">
                        <button v-show="!todo.isEdit" @click="editTodoItem(todo)">编辑</button>
                        <button v-show="todo.isEdit" @click="saveTodoItem(todo)">保存</button>
                        <button @click="removeTodoItem(todo.id)">移除</button>
                    </div>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import "animate.css";
export default {
    name: "MyList",
    props: {
        todos: Array,
    },
    methods: {
        removeTodoItem(id) {
            this.$emit("removeTodoItem", id);
        },
        editTodoItem(todo) {
            this.$emit("editTodoItem", todo.id);
            // 使用nextTick在下一轮DOM渲染更新结束后执行其回调
            this.$nextTick(() => {
                // 聚焦在Input框上
                this.$refs[todo.id][0].value = todo.name;
                this.$refs[todo.id][0].focus();
            });
        },
        // 失去焦点@blur/点击保存按钮@click时的回调
        saveTodoItem(todo) {
            let newName = this.$refs[todo.id][0].value;
            if (newName.trim() === "") {
                this.$emit("saveTodoItem", todo.id, todo.name);
                alert("名字不能为空！");
            } else {
                this.$emit("saveTodoItem", todo.id, newName);
            }
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
.item {
    display: flex;
    flex-flow: row nowrap;
}
.item * {
    margin-left: 4px;
}
.item input {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 20px;
}

.my-list li {
    height: 40px;
    border: 1px solid pink;
    border-radius: 4px 4px;
    margin-top: 4px;
    padding: 4px 4px;
    display: flex;
    flex-flow: row nowrap; /* 水平不换行 */

    align-items: center; /* 垂直居中 */
    justify-content: space-between; /* 左右分离 */
}

.my-list li:hover {
    background-color: rgb(253, 223, 228);
}

.btns {
    display: flex;
    flex-flow: row nowrap;
}

.my-list button {
    border: none;
    padding: 4px 8px;
    border-radius: 2px 2px;
    color: #fff;
    background-color: pink;
    display: none;
    cursor: pointer;
}
.my-list li:hover button {
    display: block;
}
.my-list li button:hover {
    background-color: rgb(255, 176, 189);
}
</style>
