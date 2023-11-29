<script setup="">
import {ref} from 'vue'

const valueOpenAndClose = ref(false)
const valueOpenAndCloseSecond = ref(false)
const valueOpenAndCloseThird = ref(false)

const openAndCloseMenu = () => {
  valueOpenAndClose.value = !valueOpenAndClose.value
}
const openAndCloseMenuSecond = () => {
  valueOpenAndCloseSecond.value = !valueOpenAndCloseSecond.value
}
const openAndCloseMenuThird = () => {
  valueOpenAndCloseThird.value = !valueOpenAndCloseThird.value
}

</script>

<template>
  <div class="wrap_menu">
    <div class="header">
      <a class="title_main" href="/">Reytor LTD</a>
    </div>

    <div class="panel_menu">
      <h1 @click="openAndCloseMenu()" class="menu_title">Company</h1>
      <div v-if="valueOpenAndClose" class="panel_menu_absolute">
        <a href="#" class="menu_text">About Us</a>
        <a href="#" class="menu_text">Contacts</a>
      </div>
    </div>

    <!--      Кнопки-->
    <div class="buttons_menu">
      <div class="button_active"><a href="/catalog/" class="href_active">Catalogue</a></div>
      <div class="button_active"><a href="#" class="href_active">News</a></div>
      <div class="button_active"><a href="#" class="href_active">Career</a></div>
    </div>

    <div class="panel_menu">
      <h1 @click="openAndCloseMenuSecond()" class="menu_title">Press Centre</h1>
      <div v-if="valueOpenAndCloseSecond" class="panel_menu_absolute">
        <a href="#" class="menu_text">Terms And Conditions</a>
        <a href="#" class="menu_text">Media</a>
      </div>
    </div>

    <div class="search_block">
      <v-text-field
          clearable
          label="Search"
          prepend-icon="fa-brands fa-searchengin"
          density="compact"
          variant="outlined"
          class="search_block_v_text_field"
      ></v-text-field>
    </div>

    <div class="panel_menu_third">
      <h1 @click="openAndCloseMenuThird()" class="menu_title">En</h1>
      <div v-if="valueOpenAndCloseThird" class="panel_menu_absolute">
        <a href="#" class="menu_text">En</a>
        <a href="#" class="menu_text">Ru</a>
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
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: $primary;
}

// Header

.header {
  width: 220px;
  height: 100%;
  display: flex;
}

.title_main {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid $surface;
  border-left: 1px solid $surface;
  color: $primary;
  background-color: $surface;
}

.title_main:hover {
  transition: all 0.3s ease-in-out;
  font-weight: 700;
  color: $surface;
  background-color: $primary;
}

// Expansions

.panel_menu, .panel_menu_third {
  width: 180px;
  height: 50px;
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
  width: 100%;
  min-height: 150%;
  display: flex;
  flex-direction: column;
}

.menu_text {
  width: 100%;
  height: 50%;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 4px 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  background-color: $primary;
}

.menu_text:hover {
  transition: all 0.3s ease-in-out;
  color: $primary;
  background-color: $textSpan;
}

// Third

.panel_menu_third {
  width: 100px;
}

// Buttons

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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  background-color: $primary;
}

.href_active:hover {
  transition: all 0.3s ease-in-out;
  color: $primary;
  background-color: $textSpan;
}

.search_block {
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-text-field {
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 5px 8px 5px 8px;
  color: $surface;
  background-color: $primary;
}

.search_block_v_text_field {

}

// Language



</style>
