<template>
  <section class="section-users">
    <h2 v-if="users.length > 0">Users</h2>

    <user
      v-for="user in users"
      :key="user.id"
      :user="user"
      @remove="$emit('remove', user.id)"
    />
  </section>
</template>

<script>
import User from "@/components/users/User.vue";

export default {
  components: { User },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {},
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
