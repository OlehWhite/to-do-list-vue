<template>
  <layout>
    <todo-form @create="createTodo" :todos="todos" />
    <todos-list
      @remove="removeTodo"
      @update="updateTodos"
      @completed="completedTodo"
      :todos="todos"
    />

    <div class="border-bottom" />
    <button-ui class="btn-back" @click="goToUsers">Back</button-ui>
  </layout>
</template>

<script>
import Layout from "@/components/layout/Layout.vue";
import TodoForm from "@/components/todos/TodoForm.vue";
import TodosList from "@/components/todos/TodosList.vue";
import ButtonUi from "@/components/IU/ButtonUI.vue";

export default {
  components: { ButtonUi, TodoForm, TodosList, Layout },
  data() {
    return {
      todos: this.getTodos() || [],
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.unshift(todo);
      this.updateStore();
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.updateStore();
    },
    completedTodo() {
      this.todos = this.todos.sort((a, b) => a.completed - b.completed);
      this.updateStore();
    },
    goToUsers() {
      this.$router.push("/users");
    },
    getTodos() {
      const users = this.getUsersStore();
      const id = this.getParam();
      const user = users.find((user) => user.id === id);

      return user
        ? user.todos.sort((a, b) => a.completed - b.completed) || []
        : [];
    },
    updateStore() {
      const users = this.getUsersStore();
      const id = this.getParam();

      const updatedUsersTodo = users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            todos: this.todos,
          };
        }

        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsersTodo));
    },
    updateTodos(updatedTodo) {
      const users = this.getUsersStore();
      const id = this.getParam();

      const todos = this.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );

      const updateTodoUser = users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            todos,
          };
        }

        return user;
      });

      localStorage.setItem("users", JSON.stringify(updateTodoUser));
    },
    getUsersStore() {
      return JSON.parse(localStorage.getItem("users")) || [];
    },
    getParam() {
      return Number(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.btn-back {
  position: absolute;
  left: 40px;
  bottom: 35px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}

.border-bottom {
  position: absolute;
  bottom: 101px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgba(83, 206, 202, 0.85);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
  }
}
</style>
