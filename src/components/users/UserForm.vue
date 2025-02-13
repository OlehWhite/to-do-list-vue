<template>
  <form class="section-add-person" @submit.prevent>
    <input-ui type="text" placeholder="..." v-model="user.name" />

    <button-ui type="submit" @click="createUser()" :disabled="!user.name">
      Add new user
    </button-ui>

    <p class="users-list-empty" v-if="users.length === 0">
      List users is empty!
    </p>
  </form>
</template>

<script>
import InputUi from "@/components/IU/InputUI.vue";
import ButtonUi from "@/components/IU/ButtonUI.vue";

export default {
  components: { ButtonUi, InputUi },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        todos: [],
      },
    };
  },
  emits: ["create"],
  methods: {
    createUser() {
      this.user.id = new Date().getTime();

      this.$emit("create", this.user);

      this.user = {
        id: "",
        name: "",
        todos: [],
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
