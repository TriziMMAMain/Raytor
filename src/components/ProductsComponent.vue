<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'

const {name} = useDisplay()

import photoProducts from '../assets/photo/photo380x250.jpg'

const productsList = ref([
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA P-70',
    text: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus.'
  },
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'DEZEGA self-contained self-rescuer CARBO 30',
    text: 'CARBO 30 self-rescuer is a personal respiratory protective device on chemically bound oxygen with a closed breathing circuit…'
  },
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'DEZEGA OXYGEN GAS BOOSTER SYSTEM HIHPG2',
    text: 'HIHPG2 is necessary equipment for closed-circuit SCBAs of P-30EX, P-70 type and other self-contained breathing apparatuses…'
  },
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'Emergency escape hood DEZEGA EmSCAPE',
    text: 'DEZEGA EmSCAPE Emergency Escape Hood is a chemical oxygen personal respiratory protective device with a closed breathing…'
  },
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'DEZEGA self-contained self-rescuer CARBO 60',
    text: 'A personal respiratory protective device on chemically bound oxygen with a closed breathing circuit, used for escape from…'
  },
  {
    url: '#',
    photo: 'https://sensorika-tm.ru/wp-content/uploads/2023/10/gornospasatel-gs-10-427.jpg',
    title: 'Breathing equipment test set DEZEGA CheckUp',
    text: 'The test set will test the parameters of any self-contained breathing apparatus, self-contained panoramic masks and…'
  },
])
const productsFilter = ref([
  {
    title: 'STANDARD',
    text: ['En', 'DSTU', 'IS', 'SANS', 'Others'],
  },
  {
    title: 'MANUFACTURER',
    text: ['DEZEGA SP', 'DONSORB'],
  },
  {
    title: 'FIELD',
    text: ['SCSR', 'Closed-circuit SCBA', 'Emergency escape hood', 'Auxiliary equipment'],
  }
])

const titleLink = () => {
  window.location.reload()
}

const checkboxChange = () => {
  console.log(vCheckboxValue.value);
}
const vCheckboxValue = ref([])
const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '50'
  } else if (name.value === 'sm') {
    return '50'
  } else if (name.value === 'md') {
    return '50'
  } else if (name.value === 'lg') {
    return '50'
  } else if (name.value === 'xl') {
    return '50'
  } else if (name.value === 'xxl') {
    return '60'
  }
}
const sizeFuncPaginator = () => {
  if (name.value === 'xs') {
    return 'small'
  } else if (name.value === 'sm') {
    return 'large'
  } else if (name.value === 'md') {
    return 'x-large'
  } else if (name.value === 'lg') {
    return 'x-large'
  } else if (name.value === 'xl') {
    return 'x-large'
  } else if (name.value === 'xxl') {
    return 'x-large'
  }
}
const page = ref(1)
</script>

<template>
  <v-container class="wrap_main">
    <div class="filter_menu">

      <h1 class="filter_menu_title">FILTER</h1>

      <v-expansion-panels variant="accordion">
        <v-expansion-panel
            v-for="i in productsFilter"
            :key="i"
        >
          <v-expansion-panel-title>
            <h1 class="v-expansion-panel-title-h1">{{ i.title }}</h1>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <div class="v-expansion-panel-text-div">
              <v-checkbox color="primary" v-model="vCheckboxValue" v-for="textValue in i.text"
                          :value="textValue"
                          @change="checkboxChange()">
                <template v-slot:label>
                  <p class="v_checkbox_label">
                    {{ textValue }}
                  </p>
                </template>
              </v-checkbox>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>


    </div>
    <div class="card_catalog">
      <h1 class="title_absolute">CATALOGUE</h1>
      <div class="card_block" v-for="i in productsList">
        <div class="photo_block">
          <img class="block_img" alt="" :src="i.photo">
        </div>
        <div class="card_content">
          <div class="content_title">
            <h1 @click="titleLink" class="card_title">{{ i.title }}</h1>
          </div>
          <div class="content_text">
            <p class="card_text">{{ i.text }}</p>
          </div>

        </div>
        <div class="card_actions">
          <v-btn tag="a" class="v-btn" :height="heightFuncInCarousel()">MORE</v-btn>
        </div>
      </div>
    </div>
    <div class="paginator">
      <v-pagination
          v-model="page"
          rounded="circle"
          :size="sizeFuncPaginator()"
          :total-visible="3"
          :length="5"></v-pagination>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 30px 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 150px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 170px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 350px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 350px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 400px;
    min-height: 350px;
    margin: 50px 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    letter-spacing: 4px;
    padding: 35px;
    height: 100px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .checkboxValue {
    font-size: 5rem;
  }

  .checkboxValueLabel {
    font-size: 1.5rem;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.5rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.8rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    min-height: 650px;
    margin: 70px 50px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 200px;
    padding-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);

  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 2560px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    letter-spacing: 4px;
    padding: 35px;
    height: 130px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .checkboxValue {
    font-size: 5rem;
  }

  .checkboxValueLabel {
    font-size: 1.5rem;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.5rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.8rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    min-height: 650px;
    margin: 70px 50px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 200px;
    padding-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

</style>
