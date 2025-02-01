<template>
  <layout>
    <user-form @create="createUser" :users="users" />
    <users-list @remove="removeUser" :users="users" />

    <div class="border-bottom" />
    <button-ui class="btn-back" @click="goToHome">Back</button-ui>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "@/components/layout/Layout.vue";
import User from "@/components/users/User.vue";
import UserForm from "@/components/users/UserForm.vue";
import UsersList from "@/components/users/UsersList.vue";
import ButtonUi from "@/components/IU/ButtonUI.vue";

export default defineComponent({
  components: { ButtonUi, Layout, User, UserForm, UsersList },
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },
  methods: {
    createUser(user) {
      this.users.unshift(user);
      this.updateUsers();
    },
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
      this.updateUsers();
    },
    goToHome() {
      this.$router.push("/");
    },
    updateUsers() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
  },
});
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
