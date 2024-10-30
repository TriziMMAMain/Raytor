<script setup="">

</script>

<template>
  <div class="main">
    <h1 class="titlePage">Don't found 404</h1>
    <router-link to="/" class="titlePage">Home</router-link>
  </div>

</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titlePage {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: $primary;
}

</style>