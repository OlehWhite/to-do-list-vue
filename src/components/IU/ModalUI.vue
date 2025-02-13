<template>
  <div v-if="show" class="container" @click="closeModal">
    <div class="wrapper">
      <p>Remove this block - {{ item.name }}?</p>

      <div class="wrapper-buttons">
        <button-ui @click="closeModal">Cancel</button-ui>
        <button-ui @click="removeItem">Remove</button-ui>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUi from "@/components/IU/ButtonUI.vue";

export default {
  name: "modal-ui",
  components: { ButtonUi },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:show", "remove"],
  methods: {
    closeModal() {
      this.$emit("update:show", false);
    },
    removeItem() {
      this.$emit("remove", this.item.id);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background: rgba(0, 0, 0, 0.51);
  transition: 1s;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid turquoise;
  background-color: #ffffff;
}

.wrapper-buttons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
