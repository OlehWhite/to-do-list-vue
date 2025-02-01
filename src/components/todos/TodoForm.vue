<template>
  <form class="section-add-person" @submit.prevent>
    <input-ui type="text" placeholder="..." v-model="todo.name" />

    <button-ui type="submit" @click="createUser()" :disabled="!todo.name">
      Add new todo
    </button-ui>

    <p class="users-list-empty" v-if="todos.length === 0">
      List todos is empty!
    </p>
  </form>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      todo: {
        id: "",
        name: "",
        completed: false,
      },
    };
  },
  methods: {
    createUser() {
      this.todo.id = new Date().getTime();

      this.$emit("create", this.todo);

      this.todo = {
        id: "",
        name: "",
        completed: false,
      };
    },
  },
};
</script>

<style scoped>
.section-add-person {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
}

.users-list-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  height: 40px;
}
</style>
