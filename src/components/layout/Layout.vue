<template>
  <background />

  <div class="container">
    <div class="wrapper">
      <slot />
    </div>

    <footer>
      <a
        href="https://github.com/OlehWhite/to-do-list-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub code Vue.js</a
      >
    </footer>
  </div>
</template>

<script>
import Background from "@/components/layout/Background.vue";

export default {
  components: { Background },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper {
  position: relative;
  overflow: hidden;
  background-color: rgba(56, 56, 56, 0.47);
  width: 100%;
  max-width: 500px;
  height: 75%;
  min-height: 800px;
  border-radius: 20px;
  border: 1px solid turquoise;
}

footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: turquoise;
  opacity: 0;
  animation: fadeInFooter 1s ease-out 0.5s forwards;
}

footer a {
  text-decoration: none;
  color: #000;
  transition: 0.5s;
}

footer a:hover {
  transition: 0.5s;
  color: #ffffff;
}

@keyframes fadeInFooter {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width: 500px) {
  .wrapper {
    height: 100%;
    border-radius: 0;
  }
}
</style>
