<script setup="">
import {ref} from "vue";
// Page's
import HomePage from './views/HomePage.vue'
import Catalog from './views/ProductsPage.vue'
// Components
import Menu from './components/Menu.vue'


const link = ref([
  {
    href: '#',
    icon: 'fa-solid fa-envelope'
  },
  {
    href: '#',
    icon: 'fa-brands fa-linkedin-in'
  },
  {
    href: '#',
    icon: 'fa-brands fa-facebook'
  },
  {
    href: '#',
    icon: 'fa-brands fa-instagram'
  },
  {
    href: '#',
    icon: 'fa-brands fa-youtube'
  },

])
</script>

<template>
  <div class="wrap">
    <!--    Menu-->
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="content">
      <router-view name="Home page"></router-view>
      <router-view name="Catalog"></router-view>

      <router-view></router-view>
    </div>
    <!--      Footer-->
    <div class="footer">
      <div class="footer_main">
        <h1 class="footer_title">(с) 2014-2023 REYTOR LTD</h1>
        <div class="footer_block">
          <a v-for="i in link" :href="i.href" class="footer_link"><v-icon :icon="i.icon"></v-icon></a>
        </div>
        <h1 class="footer_title_second">LIFELONG SAFETY EXPERIENCE</h1>
      </div>
    </div>
<!--    <HomePage></HomePage>-->
<!--    <Catalog></Catalog>-->
  </div>
</template>

<style lang="scss" scoped>
@import './assets/mixins.scss';

.wrap {
  width: 100%;
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
  min-height: 100vh;
  padding-top: 50px;
}

// Footer

.footer {
  width: 100%;
  min-height: 20px;
}

.footer_main {
  width: 100%;
  height: 100%;
  padding: 15px 5px 15px 5px;
  display: flex;
  align-items: center;
  background-color: $textSpan;
}

.footer_title, .footer_title_second {
  width: 25%;
  font-size: 1.3rem;
  font-weight: 600;
  color: $primary;
}

.footer_title {
  padding-left: 15px;
}

.footer_title_second {
  padding-right: 15px;
  text-align: right;
}

.footer_block {
  width: 50%;
  display: flex;
  justify-content: space-around;
}

.footer_link {
  min-width: 7%;
  height: 50px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: $primary;
  border: 1px solid $primary;
}

.footer_link:hover {
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  border: 1px solid $textSpan;
  background-color: $primary;
}

</style>
