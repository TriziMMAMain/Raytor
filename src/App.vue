<script setup="">
import {onMounted, ref} from "vue";
import {useDisplay} from 'vuetify'


// Page's
import HomePage from './views/HomePage.vue'
import Catalog from './views/ProductsPage.vue'
// Components
import Menu from './components/Menu.vue'
//
const {name} = useDisplay()
const widthValue = () => {
  if (name.value === 'xs') {
    return true
  } else if (name.value === 'sm') {
    return true
  } else if (name.value === 'md') {
    return true
  } else if (name.value === 'lg') {
    return false
  } else if (name.value === 'xl') {
    return false
  } else if (name.value === 'xxl') {
    return false
  }
}

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
onMounted(() => {})
</script>

<template>
  <div class="wrap" :style="{ overflowX: widthValue() ? 'hidden' : 'auto' }">
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
  top: 0;
  z-index: 105;
}

// Content

.content {
  width: 100%;
  min-height: 100vh;
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
  //background-color: $textSpan;
  //background-color: $background;
  background-color: #8a8a8a;
}

.footer_title, .footer_title_second {
  width: 25%;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
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
  justify-content: center;
}

.footer_link {
  min-width: 7%;
  height: 50px;
  margin-left: 15px;
  margin-right: 15px;
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
  color: #c6c6c6;
  border: 1px solid #c6c6c6;
  background-color: transparent;
}

</style>
