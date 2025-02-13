<template>
  <label class="checkbox-label">
    <input
      class="checkbox-input"
      type="checkbox"
      :checked="modelValue"
      @change="updateValue"
    />
    <span class="custom-checkbox"></span>
  </label>
</template>

<script>
export default {
  name: "checkbox-ui",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>

<style scoped>
.checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid turquoise;
  border-radius: 5px;
  background-color: white;
  position: relative;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.checkbox-input:checked + .custom-checkbox::after {
  content: "";
  position: absolute;
  left: 4px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox-input:checked + .custom-checkbox {
  background-color: #a7b2b1;
  border-color: #a7b2b1;
}
</style>
