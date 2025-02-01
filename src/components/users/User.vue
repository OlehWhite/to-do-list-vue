<template>
  <div class="wrapper" @click="goToToDos()">
    <input-ui v-if="isChanged" type="text" v-model="user.name" @click.prevent />

    <p v-if="!isChanged" class="user-name">{{ user.name }}`s ToDos 📋</p>

    <div class="wrapper-buttons">
      <button
        class="btn-change"
        :disabled="!user.name"
        @click.prevent.stop="changeUserName"
      >
        {{ isChanged ? "✅" : "✍️" }}
      </button>

      <button class="btn-remove" @click.prevent.stop="$emit('remove', user.id)">
        🗑
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import InputUi from "@/components/IU/InputUI.vue";

export default {
  components: { InputUi },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isChanged: false,
    };
  },
  methods: {
    changeUserName() {
      this.isChanged = !this.isChanged;
    },
    goToToDos() {
      const userId = this.user.id;

      this.$router.push(`/users/${userId}/todos`);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid turquoise;
  text-align: center;
  overflow: hidden;
  animation: fadeIn 1s;
  flex-shrink: 0;
  transition: transform 0.5s;
  cursor: pointer;
}

.wrapper:hover {
  transform: scale(1.1);
  transition: transform 0.5s;
  background-color: rgba(64, 224, 208, 0.33);
}

.user-name {
  padding: 10px 0;
  color: #fff;
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
