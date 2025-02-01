<template>
  <layout>
    <div class="container">
      <h1>Welcome to To Do List</h1>

      <button-ui @click="goToUsers">Open users</button-ui>
    </div>
  </layout>
</template>

<script>
import Layout from "@/components/layout/Layout.vue";
import ButtonUi from "@/components/IU/ButtonUI.vue";

export default {
  components: { ButtonUi, Layout },
  methods: {
    goToUsers() {
      this.$router.push("/users");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
}

h1 {
  color: #ffffff;
}
</style>
