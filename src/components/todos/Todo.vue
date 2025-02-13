<template>
  <div v-bind:class="todo.completed ? 'wrapper-inactive' : 'wrapper-active'">
    <div class="content">
      <checkbox-ui
        v-model="todo.completed"
        @change="$emit('completed', todo)"
      />

      <input-ui v-if="isChanged" v-model="todo.name" />

      <p v-if="!isChanged && !todo.completed" class="todo-name">
        {{ todo.name }}
      </p>

      <s v-if="isChanged || todo.completed" class="disabled-todo-name">
        {{ todo.name }}
      </s>
    </div>

    <div class="wrapper-buttons">
      <button class="btn-change" :disabled="!todo.name" @click="changeTodoName">
        {{ isChanged ? "✅" : "✍️" }}
      </button>

      <button class="btn-remove" @click="openModal">🗑</button>
    </div>
  </div>

  <modal-ui v-model:show="open" :item="todo" @remove="$emit('remove', todo)" />
</template>

<script lang="ts">
import ModalUi from "@/components/IU/ModalUI.vue";
import InputUi from "@/components/IU/InputUI.vue";
import CheckboxUi from "@/components/IU/CheckboxUI.vue";

export default {
  components: { CheckboxUi, InputUi, ModalUi },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isChanged: false,
      open: false,
    };
  },
  emits: ["remove", "completed", "update"],
  methods: {
    changeTodoName() {
      this.isChanged = !this.isChanged;
      this.$emit("update", this.todo);
    },
    openModal() {
      this.open = true;
    },
  },
};
</script>

<style scoped>
.wrapper-active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid turquoise;
  text-align: center;
  overflow: hidden;
  animation: fadeIn 1s;
  flex-shrink: 0;
  transition: transform 0.5s;
}

.wrapper-inactive {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid #a69898;
  text-align: center;
  overflow: hidden;
  animation: fadeIn 1s;
  flex-shrink: 0;
  transition: transform 0.5s;
}

.wrapper-inactive .content p {
  color: #000000;
}

.content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo-name {
  padding: 10px 0;
  color: #fff;
  font-size: 22px;
}

.disabled-todo-name {
  font-size: 22px;
}

.wrapper-buttons {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wrapper-buttons .btn-remove,
.wrapper-buttons .btn-change {
  transition: 0.5s;
  cursor: pointer;
  padding: 10px;
  border: 0;
  font-size: 16px;
}

.btn-remove {
  background-color: #e75d5d;
  border-left: 1px solid #e75d5d;
}

.btn-change {
  background-color: turquoise;
  border-left: 1px solid turquoise;
}

.btn-remove:hover,
.btn-change:hover {
  background-color: rgba(255, 255, 255, 0.45);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
  }
}
</style>
