<script setup="">
import {onMounted, ref, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Router




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

// currentUrl

const currentUrl = ref(null)
const tabsCounter = async (currentUrl) => {
  if (await currentUrl === 'http://localhost:5173/') {
    tabs.value = 1
  } else if (await currentUrl === 'http://localhost:5173/products/' || await currentUrl === 'http://localhost:5173/products') {
    tabs.value = 2
  } else if (await currentUrl === 'http://localhost:5173/news/' || await currentUrl === 'http://localhost:5173/news') {
    tabs.value = 3
  }
}

//

onMounted(async () => {
  currentUrl.value = window.location.href;
  await tabsCounter(currentUrl.value)
})
</script>

<template>
  <div class="wrap_menu">
    <div class="header">
      <a class="title_main" href="/">REYTOR LTD</a>
    </div>
    <div class="panel_buttons_actions">
      <v-tabs
          v-model="tabs"
          height="70px"
      >
        <v-tab href="/" :value="1">HOME</v-tab>
        <v-tab href="/products/" :value="2">PRODUCTS</v-tab>
        <v-tab href="/news/" :value="3">NEWS</v-tab>
        <v-tab :value="4" @click="openAndCloseMenu()">EN</v-tab>
      </v-tabs>
      <div v-if="valueOpenAndCloseLanguage" class="panel_menu_absolute">
        <a @click="openAndCloseMenuLanguage('En')" href="#" class="menu_text">En</a>
        <a @click="openAndCloseMenuLanguage('Ru')" href="#" class="menu_text">Ru</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Import
@import '../assets/mixins.scss';

// Menu

.wrap_menu {
  width: 100%;
  height: 70px;
  display: flex;
  //background-color: $textSpan;
  //background-color: rgba(255, 0, 0, 0.64);
}

// Header

.header {
  width: 30%;
  height: 100%;
}

.title_main {
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  text-decoration: none;
  color: $primary;
  background-color: $surface;
}

// Expansions

.panel_buttons_actions {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}

.panel_menu {

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
  color: $primary;
  background-color: $surface;
}

.panel_menu_absolute {
  width: 200px;
  position: absolute;
  right: 0;
  bottom: -120px;
  display: flex;
  flex-direction: column;
}

.menu_text {
  width: 100%;
  height: 60px;
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
  text-decoration: 1px solid $textSpan;
  background-color: rgba(174, 113, 54, 0.9);
}

// Third

.v-tabs {
  height: 70px;
  justify-content: center;
  align-items: center;
}

.v-tab {
  width: 230px;
  height: 100%;
  font-size: 2rem;
  text-decoration: none;
  color: $textSpan;
  background-color: $primary;
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



// Language


</style>
