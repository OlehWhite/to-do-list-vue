<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-ui",
};
</script>

<style scoped>
.btn {
  background: #000;
  color: #fff;
  border: 1px solid turquoise;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 1s;
}

.btn:hover {
  background-color: turquoise;
  transition: 1s;
  color: #000;
  border: 1px solid #000;
}

.btn:disabled {
  cursor: not-allowed;
  background-color: rgba(141, 141, 141, 0.45);
  transition: 1s;
  color: #ababab;
  border: 1px solid #6e6e6e;
}
</style>
