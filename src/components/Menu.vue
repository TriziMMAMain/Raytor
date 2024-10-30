<script setup="">
import {onMounted, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import logoReytor from '../assets/photo/mataruev_logo_REYTOR_2.svg'
import {useDisplay} from "vuetify";
const {name} = useDisplay()
// Router

const router = useRouter()

// Value

const valueOpenAndCloseLanguage = ref(false)
const openAndCloseMenuLanguage = (language) => {
  console.log(language);
  valueOpenAndCloseLanguage.value = false
}
const openAndCloseMenu = () => {
  valueOpenAndCloseLanguage.value = !valueOpenAndCloseLanguage.value
}
const tabs = ref(null)
//

const mobileDrawerFunc = () => {
  if (name.value === 'xs') {
    return false
  } else if (name.value === 'sm') {
    return false
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
const mobileDrawerFunc2 = () => {
  if (name.value === 'xs') {
    return true
  } else if (name.value === 'sm') {
    return true
  } else if (name.value === 'md') {
    return false
  } else if (name.value === 'lg') {
    return false
  } else if (name.value === 'xl') {
    return false
  } else if (name.value === 'xxl') {
    return false
  }
}
const openNavigationDrawerFunc = () => {
  drawerValue.value = !drawerValue.value
}
const drawerClose = () => {
  drawerValue.value = false
}
const mobileDrawerValue = mobileDrawerFunc()
const drawerValue = ref(false)

const checkAddress = (href) => {
  const routerHref = ref(router.currentRoute.value.href)
  if (href === routerHref.value) {
    drawerValue.value = !drawerValue.value
  }
}
//

const isHovered = ref(false);
const barPosition = ref(0);

watch(isHovered, (newValue) => {
  if (newValue) {
    setInterval(() => {
      if (barPosition.value < 200) {
        barPosition.value += 5;
      } else {
        barPosition.value = 0;
      }
    }, 50);
  }
});

//
</script>

<template>
  <div class="wrap_menu">
    <div class="header">
      <a class="title_main" href="/"><img class="logoReytor" :src="logoReytor" alt=""></a>
    </div>
    <div class="panel_buttons_actions">
      <div class="v-tabs" v-if="mobileDrawerValue">
        <router-link class="v-tab" to="/">HOME</router-link>
        <router-link class="v-tab" to="/products/1">PRODUCTS</router-link>
        <router-link class="v-tab" to="/about/">ABOUT US</router-link>
<!--        <h1 class="v-tab" @click="">EN-->
<!--          <v-icon class="faArrowDownVIcon" icon="fa-solid fa-arrow-down"></v-icon>-->
<!--        </h1>-->
      </div>
      <div class="v-tabs" v-else>
        <h1 @click="openNavigationDrawerFunc()" class="v-tab-open"><v-icon icon="fa-solid fa-bars"></v-icon></h1>
      </div>
    </div>
    <v-layout full-height>
      <v-navigation-drawer style="width: 100%; z-index: 875;" class="bg-transparent" v-model="drawerValue">
        <div class="wrap_drawer_main" >
          <div class="wrap_drawer">
            <h1 class="wrap_drawer_close" @click="drawerClose()"><v-icon icon="fa-solid fa-xmark"></v-icon></h1>
            <router-link @click="checkAddress('/')" class="wrap_drawer_tab" to="/">HOME</router-link>
            <router-link @click="checkAddress('/products/1')" class="wrap_drawer_tab" to="/products/1">PRODUCTS</router-link>
            <router-link @click="checkAddress('/about/')" class="wrap_drawer_tab" to="/about/">ABOUT US</router-link>
<!--            <h1 class="wrap_drawer_tab">EN-->
<!--              <v-icon class="faArrowDownVIcon" icon="fa-solid fa-arrow-down"></v-icon>-->
<!--            </h1>-->
          </div>
        </div>
      </v-navigation-drawer>

    </v-layout>

  </div>

</template>

<style lang="scss" scoped>
// Import
@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {
  // Menu

  .wrap_menu {
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 107;
    overflow: hidden;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 85%;
    height: 100%;
    display:flex;
    justify-content: start;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    //width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 5px;
    //background-color: $surface;

  }

  .logoReytor {
    width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;

    display: flex;
    justify-content: start;
  }

  // Expansions

  .panel_buttons_actions {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  //.menu_title {
  //  width: 100%;
  //  height: 100%;
  //  font-size: 1.3rem;
  //  font-weight: 600;
  //  padding: 8px 12px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  transition: all 0.3s ease-in-out;
  //  color: $textSpan;
  //  background-color: $primary;
  //}
  //
  //.menu_title:hover {
  //  cursor: pointer;
  //  transition: all 0.3s ease-in-out;
  //  background-color: $primary
  //}

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .v-tab {
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .v-tab-open {
    width: 100%;
    height: 100%;
    padding: 3px 7px;
    font-size: 1.5rem;
    letter-spacing: 7px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .v-tab-open:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab-open::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  .v-navigation-drawer {
    background: transparent;
  }

  .wrap_drawer_main {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(4px);
    background-color: rgba(161, 161, 161, 0.69);
  }

  .wrap_drawer {
    width: 100%;
    height: 50%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 15vh;
  }

  .wrap_drawer_close {
    width: 45px;
    height: 45px;
    color: #FFFFFF;
    //border: 1px solid #FFFFFF;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    position: absolute;
    //border-radius: 15px;
    right: 6%;
    top: 5%;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_close:hover {
    cursor: pointer;
    color: $primary;
    //border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_tab {
    width: 100%;
    height: 60px;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 4px;
    margin-top: 3%;
    //margin-left: 5%;
    margin-bottom: 3%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    //color: #d8d8d8;
    color: #FFFFFF;
    //background-color: $background;
    transition: all 0.3s ease-in-out;
    //box-shadow: 0 0 1px 1px #ffffff;
  }

  .wrap_drawer_tab:hover {
    color: $primary;
    //box-shadow: 0 10px 10px 0.1px #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .faArrowDownVIcon {
    font-size: 1rem;
  }

}

@media screen and (min-width: 376px) and (max-width: 599px) {
  // Menu

  .wrap_menu {
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 107;
    overflow: hidden;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 85%;
    height: 100%;
    display:flex;
    justify-content: start;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    //width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 5px;
    //background-color: $surface;

  }

  .logoReytor {
    width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;

    display: flex;
    justify-content: start;
  }

  // Expansions

  .panel_buttons_actions {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  //.menu_title {
  //  width: 100%;
  //  height: 100%;
  //  font-size: 1.3rem;
  //  font-weight: 600;
  //  padding: 8px 12px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  transition: all 0.3s ease-in-out;
  //  color: $textSpan;
  //  background-color: $primary;
  //}
  //
  //.menu_title:hover {
  //  cursor: pointer;
  //  transition: all 0.3s ease-in-out;
  //  background-color: $primary
  //}

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .v-tab {
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .v-tab-open {
    width: 100%;
    height: 100%;
    padding: 3px 7px;
    font-size: 1.5rem;
    letter-spacing: 7px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .v-tab-open:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab-open::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  .v-navigation-drawer {
    background: transparent;
  }

  .wrap_drawer_main {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(4px);
    background-color: rgba(161, 161, 161, 0.69);
  }

  .wrap_drawer {
    width: 100%;
    height: 50%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 15vh;
  }

  .wrap_drawer_close {
    width: 45px;
    height: 45px;
    color: #FFFFFF;
    //border: 1px solid #FFFFFF;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    position: absolute;
    //border-radius: 15px;
    right: 6%;
    top: 5%;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_close:hover {
    cursor: pointer;
    color: $primary;
    //border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_tab {
    width: 100%;
    height: 60px;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 4px;
    margin-top: 3%;
    //margin-left: 5%;
    margin-bottom: 3%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    //color: #d8d8d8;
    color: #FFFFFF;
    //background-color: $background;
    transition: all 0.3s ease-in-out;
    //box-shadow: 0 0 1px 1px #ffffff;
  }

  .wrap_drawer_tab:hover {
    color: $primary;
    //box-shadow: 0 10px 10px 0.1px #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .faArrowDownVIcon {
    font-size: 1rem;
  }

}

@media screen and (min-width: 600px) and (max-width: 959px) {
  // Menu

  .wrap_menu {
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 107;
    overflow: hidden;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 85%;
    height: 100%;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    //background-color: $surface;

  }

  .logoReytor {
    //width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    //display: none;
  }

  // Expansions

  .panel_buttons_actions {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  //.menu_title {
  //  width: 100%;
  //  height: 100%;
  //  font-size: 1.3rem;
  //  font-weight: 600;
  //  padding: 8px 12px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  transition: all 0.3s ease-in-out;
  //  color: $textSpan;
  //  background-color: $primary;
  //}
  //
  //.menu_title:hover {
  //  cursor: pointer;
  //  transition: all 0.3s ease-in-out;
  //  background-color: $primary
  //}

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .v-tab {
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .v-tab-open {
    width: 100%;
    height: 100%;
    padding: 3px 7px;
    font-size: 1.5rem;
    letter-spacing: 7px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .v-tab-open:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab-open::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab-open:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  .v-navigation-drawer {
    background: transparent;
  }

  .wrap_drawer_main {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(4px);
    background-color: rgba(161, 161, 161, 0.69);
  }

  .wrap_drawer {
    width: 100%;
    height: 50%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 15vh;
  }

  .wrap_drawer_close {
    width: 45px;
    height: 45px;
    color: #FFFFFF;
    //border: 1px solid #FFFFFF;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    position: absolute;
    //border-radius: 15px;
    right: 6%;
    top: 5%;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_close:hover {
    cursor: pointer;
    color: $primary;
    //border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .wrap_drawer_tab {
    width: 100%;
    height: 70px;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin-top: 2%;
    //margin-left: 5%;
    margin-bottom: 2%;
    padding: 10px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    //color: #d8d8d8;
    color: #FFFFFF;
    //background-color: $background;
    transition: all 0.3s ease-in-out;
    //box-shadow: 0 0 1px 1px #ffffff;
  }

  .wrap_drawer_tab:hover {
    color: $primary;
    //box-shadow: 0 10px 10px 0.1px #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .faArrowDownVIcon {
    font-size: 1.5rem;
  }

}

@media screen and (min-width: 960px) and (max-width: 1279px) {
  // Menu

  .wrap_menu {
    width: 100%;
    height: 50px;
    display: flex;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 400px;
    height: 100%;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    //background-color: $surface;

  }

  .logoReytor {
    //width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    //display: none;
  }

  // Expansions

  .panel_buttons_actions {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  //.menu_title {
  //  width: 100%;
  //  height: 100%;
  //  font-size: 1.3rem;
  //  font-weight: 600;
  //  padding: 8px 12px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  transition: all 0.3s ease-in-out;
  //  color: $textSpan;
  //  background-color: $primary;
  //}
  //
  //.menu_title:hover {
  //  cursor: pointer;
  //  transition: all 0.3s ease-in-out;
  //  background-color: $primary
  //}

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .v-tab {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .faArrowDownVIcon {
    margin-left: 5px;
    font-size: 1rem;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1919px) {
  // Menu

  .wrap_menu {
    width: 100%;
    height: 50px;
    display: flex;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 400px;
    height: 100%;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    //background-color: $surface;

  }

  .logoReytor {
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    //display: none;
  }

  // Expansions

  .panel_buttons_actions {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    backdrop-filter: blur(4px);
    background-color: rgba(104, 102, 102, 0.56);
  }

  //.menu_title {
  //  width: 100%;
  //  height: 100%;
  //  font-size: 1.3rem;
  //  font-weight: 600;
  //  padding: 8px 12px;
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  transition: all 0.3s ease-in-out;
  //  color: $textSpan;
  //  background-color: $primary;
  //}
  //
  //.menu_title:hover {
  //  cursor: pointer;
  //  transition: all 0.3s ease-in-out;
  //  background-color: $primary
  //}

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    width: 65%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .v-tab {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .faArrowDownVIcon {
    margin-left: 5px;
    font-size: 1rem;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2559px) {
  // Menu

  .wrap_menu {
    width: 1920px;
    height: 80px;
    display: flex;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 30%;
    height: 100%;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    //background-color: $surface;

  }

  .logoReytor {
    //width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    //display: none;
  }

  // Expansions

  .panel_buttons_actions {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .menu_title {
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_title:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: $primary
  }

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .v-tab {
    width: 260px;
    height: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .faArrowDownVIcon {
    margin-left: 5px;
    font-size: 1.6rem;
  }
}

@media screen and (min-width: 2560px) {
  // Menu

  .wrap_menu {
    width: 1920px;
    height: 80px;
    display: flex;
    //background-color: $textSpan;
  }

  // Header

  .header {
    width: 30%;
    height: 100%;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .title_main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    //background-color: $surface;

  }

  .logoReytor {
    //width: 100%;
    height: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    //display: none;
  }

  // Expansions

  .panel_buttons_actions {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .menu_title {
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_title:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: $primary
  }

  .panel_menu_absolute {
    width: 230px;
    position: absolute;
    right: 0;
    bottom: -120px;
    display: flex;
    flex-direction: column;
  }

  .menu_text {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: $textSpan;
    background-color: $primary;
  }

  .menu_text:hover {
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    background-color: #e1988e;
  }

  // Third

  .v-tabs {
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .v-tab {
    width: 260px;
    height: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    color: #ffffff;
    //background-color: $textSpan;
    //backdrop-filter: blur(4px);
    //background-color: rgba(104, 102, 102, 0.56);
  }

  .v-tab:hover {
    cursor: pointer;
    color: $primary;
    //color: #023dce;
  }

  .v-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px; /* высота линии */
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .v-tab:hover::after {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }


  .panel_menu_third {
    width: 100px;
  }

  .buttons_menu {
    min-width: 20%;
    height: 100%;
    display: flex;
  }

  .button_active {
    width: 130px;
    height: 50px;
  }

  .href_active {
    width: 200px;
    height: 80px;

  }

  .faArrowDownVIcon {
    margin-left: 5px;
    font-size: 1.8rem;
  }
}

</style>
