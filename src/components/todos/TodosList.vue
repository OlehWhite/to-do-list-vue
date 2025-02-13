<template>
  <section class="section-users">
    <h2 v-if="todos.length > 0">Todos</h2>

    <todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @completed="$emit('completed', todo)"
      @update="$emit('update', todo)"
      @remove="$emit('remove', todo.id)"
    />
  </section>
</template>

<script>
import Todo from "@/components/todos/Todo.vue";

export default {
  components: { Todo },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["completed", "update", "remove"],
};
</script>

<style scoped>
.section-users {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 40px;
  overflow-y: scroll;
  height: 100%;
  max-height: 526px;
  scrollbar-width: none;
}

h2 {
  color: white;
}
</style>
