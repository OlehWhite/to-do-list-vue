<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "input-ui",
  props: {
    modelValue: [String, Number],
  },
  emits: ["update:modelValue"],
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(56, 56, 56, 0.79);
  border: 1px solid rgba(255, 255, 255, 0.89);
}

.input:focus {
  border: 1px solid turquoise;
  outline: none;
}

.input::placeholder {
  color: rgba(0, 255, 227, 0.6);
}
</style>
