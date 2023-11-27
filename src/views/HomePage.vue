<script setup="">
import {ref} from 'vue'

import Menu from '../components/Menu.vue'
import Content from '../components/ContentInPage.vue'
import News from '../components/NewsComponent.vue'
</script>

<template>
  <!--    Menu-->
  <div class="menu">
    <Menu></Menu>
  </div>
  <v-container class="pa-0">
    <div class="wrap">
      <!--    Content -->
      <div class="content">
        <Content></Content>
      </div>
      <!--    News -->
      <div class="news">
        <News></News>
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
  background-color: $text;
}

// Menu

.menu {
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 105;
}

// Content

.content {
  width: 100%;
}

// News

.news {
  width: 100%;
}

</style>
