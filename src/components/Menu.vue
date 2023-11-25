<script setup="">

</script>

<template>
  <div class="wrap_menu">
    <div class="header">
      <a class="title_main" href="#">Reytor LTD</a>
    </div>
    <div class="expansion_panel_menu">
      <!--      Выпадающая менюшка 1-->
      <v-expansion-panels variant="accordion">
        <v-expansion-panel>
          <v-expansion-panel-title collapse-icon="none" expand-icon="none">
            <h1 class="expansionPanelTitle">
              Company
            </h1>
          </v-expansion-panel-title>

          <v-expansion-panel-text>

            <a class="expansionPanelText" href="#">About Us</a>
          </v-expansion-panel-text>

          <v-expansion-panel-text>
            <a class="expansionPanelText" href="#">Contacts</a>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!--      Кнопки-->
    <div class="buttons_menu">
      <div class="button_active"><a href="#" class="href_active">Catalogue</a></div>
      <div class="button_active"><a href="#" class="href_active">News</a></div>
      <div class="button_active"><a href="#" class="href_active">Career</a></div>
    </div>

    <div class="expansion_panel_menu">
      <!--      Выпадающая менюшка 2-->
      <v-expansion-panels variant="accordion">
        <v-expansion-panel>
          <v-expansion-panel-title collapse-icon="none" expand-icon="none">
            <h1 class="expansionPanelTitle">
              Press centre
            </h1>
          </v-expansion-panel-title>

          <v-expansion-panel-text>

            <a class="expansionPanelText" href="#">Terms And Conditions</a>
          </v-expansion-panel-text>

          <v-expansion-panel-text>
            <a class="expansionPanelText" href="#">Media</a>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

    </div>


    <div class="search_block">
      <v-text-field
          clearable
          label="Search"
          prepend-icon="fa-brands fa-searchengin"
          variant="outlined"
      ></v-text-field>
    </div>
    <div class="languageTranslate">
      <h1 class="languageTranslateTitle">En</h1>
    </div>
    <!--  <div class="title_color"></div>-->
    <!--  <div class="title_color2"></div>-->
    <!--  <div class="title_color3"></div>-->
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
  justify-content: center;
  background-color: aqua;
}

// Header

.header {
  width: 220px;
  height: 100%;
  margin-right: 10px;
  display: flex;
}

.title_main {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.8rem;
  padding: 7px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: $primary;
  background-color: $surface;
}

.title_main:hover {
  transition: all 0.3s ease-in-out;
  color: $surface;
  background-color: $primary;
}

// Expansions

.expansion_panel_menu {
  width: 100px;
  height: 100%;

  background-color: red;
}

.v-expansion-panels {
  width: 100px;
  height: 70px;
}

.v-expansion-panel {
  width: 100px;
  background-color: $primary;
}

.v-expansion-panel-title {
  width: 100%;
  background-color: $primary;
}

.expansionPanelTitle {
  font-size: .75rem;
}

.v-expansion-panel-text {

  background-color: $primary;
}

// Buttons

.buttons_menu {
  min-width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}

.button_active {
  width: 100px;
  height: 70px;
  background-color: red;
}

.href_active {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}

.search_block {
  min-width: 20%;
  margin-left: 10px;
  padding: 0 10px 0 10px;
  background-color: $surface;
}

.languageTranslate {
  min-width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.languageTranslateTitle {
  font-size: 1.5rem;
  color: $background;
}

</style>
