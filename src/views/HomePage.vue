<script setup="">
import {ref} from 'vue'

import Menu from '../components/Menu.vue'
</script>

<template>
  <v-container class="pa-0">
    <div class="wrap">
      <!--    Menu-->
      <div class="menu">
        <Menu></Menu>
      </div>
      <!--    Content -->
      <div class="content">

      </div>
      <!--    News -->
      <div class="news">

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
  background-color: #ae7878;
}

// Menu

.menu {
  width: 100%;
  height: 70px;
  background-color: blue;
}

// Content

.content {

}

// News

.news {
}

</style>
