<script setup="">
import {onMounted, ref} from "vue";
import {useDisplay} from 'vuetify'
import {useStore} from './stores/index.js'
import {storeToRefs} from 'pinia'
// Store
const {products} = storeToRefs(useStore())
// Action
const {fetchAllProducts} = useStore()

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
onMounted(async () => {
  await fetchAllProducts()
      .then(() => {
        console.log('Fetching')
      })
      .catch((error) => {
        // ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
        console.log(error)
      })
})
</script>

<template>
  <div class="wrap" :style="{ overflowX: widthValue() ? 'hidden' : 'auto' }">
    <!--    Menu-->
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="content">
      <router-view name="HomePage"></router-view>
      <router-view name="Products"></router-view>
      <router-view name="Product"></router-view>
      <router-view name="ProductCatalog"></router-view>
      <router-view name="ProductId"></router-view>
      <router-view name="AboutUs"></router-view>
      <router-view name="NotFoundPage404"></router-view>

      <router-view></router-view>
    </div>
    <!--      Footer-->
    <div class="footer">
      <div class="footer_main">
        <h1 class="footer_title">(с) 2014-2023 REYTOR LTD</h1>
        <div class="footer_block">
          <a v-for="i in link" :href="i.href" class="footer_link">
            <v-icon :icon="i.icon"></v-icon>
          </a>
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
    height: 160px;
    padding: 15px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    padding-left: 10px;
    color: $primary;
  }

  .footer_block {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 10px 0;
  }

  .footer_link {
    min-width: 12%;
    height: 40px;
    margin: 10px;
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
    height: 160px;
    padding: 15px 5px 15px 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    padding-left: 10px;
    color: $primary;
  }

  .footer_block {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 10px 0;
  }

  .footer_link {
    min-width: 12%;
    height: 40px;
    margin: 10px;
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
    height: 160px;
    padding: 15px 5px 15px 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #8a8a8a;
  }

  .footer_title, .footer_title_second {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    padding-left: 10px;
    color: $primary;
  }

  .footer_block {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 10px 0;
  }

  .footer_link {
    min-width: 7%;
    height: 35px;
    margin: 10px;
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
    height: 80px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
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
    display: flex;
    justify-content: center;
    background-color: #8a8a8a;

  }

  .footer_main {
    width: 1920px;
    height: 100%;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    //background-color: $textSpan;
    //background-color: $background;
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
    height: 80px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
    top: 0;
    z-index: 105;
  }

  // Content

  .content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Footer

  .footer {
    width: 100%;
    min-height: 20px;
    display: flex;
    justify-content: center;
    background-color: #8a8a8a;

  }

  .footer_main {
    width: 1920px;
    height: 100%;
    padding: 15px 5px 15px 5px;
    display: flex;
    align-items: center;
    //background-color: $textSpan;
    //background-color: $background;
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
