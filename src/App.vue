<script setup="">
import {onMounted, ref} from "vue";
import {useDisplay} from 'vuetify'


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
    return true
  } else if (name.value === 'xl') {
    return true
  } else if (name.value === 'xxl') {
    return true
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

@media screen and (max-width: 376px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
    min-height: 100px;
  }

  .footer_main {
    width: 100%;
    height: 200px;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 25%;
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: $primary;
  }

  .footer_title {
    padding-left: 10px;
  }

  .footer_title_second {
    padding-right: 10px;
    text-align: right;
  }

  .footer_block {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer_link {
    min-width: 25%;
    height: 35px;
    margin: 10px;
    font-size: 0.5rem;
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
}

@media screen and (min-width: 376px) and (max-width: 600px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
    min-height: 100px;
  }

  .footer_main {
    width: 100%;
    height: 200px;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 25%;
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: $primary;
  }

  .footer_title {
    padding-left: 10px;
  }

  .footer_title_second {
    padding-right: 10px;
    text-align: right;
  }

  .footer_block {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer_link {
    min-width: 25%;
    height: 35px;
    margin: 10px;
    font-size: 0.5rem;
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
}

@media screen and (min-width: 600px) and (max-width: 960px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;
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
    min-height: 100px;
  }

  .footer_main {
    width: 100%;
    height: 150px;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 20%;
    font-size: 1rem;
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
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer_link {
    min-width: 15%;
    height: 40px;
    margin: 10px 20px;
    font-size: 0.8rem;
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
}

@media screen and (min-width: 960px) and (max-width: 1280px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
    min-height: 60px;
  }

  .footer_main {
    width: 100%;
    height: 100px;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 20%;
    font-size: 1.2rem;
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
    width: 60%;
    display: flex;
    justify-content: center;
  }

  .footer_link {
    min-width: 10%;
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
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
    min-height: 60px;
  }

  .footer_main {
    width: 100%;
    height: 80px;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 30%;
    font-size: 1rem;
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
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .footer_link {
    min-width: 10%;
    height: 40px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 0.7rem;
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
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {

  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
}

@media screen and (min-width: 2560px) {
  .wrap {
    width: 100%;
    background-color: #FFFFFF;

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
}

</style>
