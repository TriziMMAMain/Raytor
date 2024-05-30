<script setup="">
import CatalogComponent from '../components/ProductsComponent.vue'
</script>

<template>
  <div class="wrap">
    <CatalogComponent></CatalogComponent>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #FFFFFF;
}

</style>
