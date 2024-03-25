<script setup="">
import {ref} from 'vue'

import Menu from '../components/Menu.vue'
import Content from '../components/ContentInPage.vue'
import News from '../components/NewsComponent.vue'

</script>

<template>

  <v-container fluid class="pa-0">
    <div class="wrap">
      <!--    Content -->
      <div class="content">
        <Content></Content>
      </div>

    </div>
  </v-container>

</template>

<style lang="scss" scoped>
// Import
@import '../assets/mixins.scss';

.wrap {
  width: 100%;
  min-height: 300vh;
  position: relative;
  //background-color: $surface;
}


// Content

.content {
  width: 100%;
}


</style>
