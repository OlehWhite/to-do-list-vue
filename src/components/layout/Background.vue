<template>
  <div class="wrapper-bgs">
    <div class="green-element">
      <GreenBgIcon />
    </div>

    <div class="black-element">
      <BlackBgIcon />
    </div>
  </div>
</template>

<script>
import GreenBgIcon from "@/icons/GreenBgIcon.vue";
import BlackBgIcon from "@/icons/BlackBgIcon.vue";

export default {
  components: { GreenBgIcon, BlackBgIcon },
};
</script>

<style scoped>
.wrapper-bgs {
  width: 100%;
  position: relative;
  overflow-x: clip;
  z-index: -1;
  animation: fadeIn 2s forwards;
}

.green-element {
  position: absolute;
  z-index: 1;
  left: 0;
}

.black-element {
  position: absolute;
  z-index: 2;
  right: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
