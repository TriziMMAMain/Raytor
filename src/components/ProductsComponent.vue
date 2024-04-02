<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
const {name} = useDisplay()

const productsList = ref([
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-09/r-70_450x265px_0.jpg?itok=9_SrLQUF',
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA P-70',
    text: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus.'
  },
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-06/1_carbo-30_450x265px_0.jpg?itok=foPfg6Vb',
    title: 'DEZEGA self-contained self-rescuer CARBO 30',
    text: 'CARBO 30 self-rescuer is a personal respiratory protective device on chemically bound oxygen with a closed breathing circuit…'
  },
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2022-07/kompresor_450x265px.jpg?itok=xzOnXi1m',
    title: 'DEZEGA OXYGEN GAS BOOSTER SYSTEM HIHPG2',
    text: 'HIHPG2 is necessary equipment for closed-circuit SCBAs of P-30EX, P-70 type and other self-contained breathing apparatuses…'
  },
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/3_emscape_450x265px.jpg?itok=aXXR1sXk',
    title: 'Emergency escape hood DEZEGA EmSCAPE',
    text: 'DEZEGA EmSCAPE Emergency Escape Hood is a chemical oxygen personal respiratory protective device with a closed breathing…'
  },
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2021-09/carbo_1_450x265px_5.jpg?itok=7Dtni8ib',
    title: 'DEZEGA self-contained self-rescuer CARBO 60',
    text: 'A personal respiratory protective device on chemically bound oxygen with a closed breathing circuit, used for escape from…'
  },
  {
    url: '#',
    photo: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2019-10/checkup_1_450x265px_0.jpg?itok=cPBCCZng',
    title: 'Breathing equipment test set DEZEGA CheckUp',
    text: 'The test set will test the parameters of any self-contained breathing apparatus, self-contained panoramic masks and…'
  },
])
const productsFilter = ref([
  {
    title: 'STANDARD',
    text: ['En','DSTU','IS','SANS','Others'],
  },
  {
    title: 'MANUFACTURER',
    text: ['DEZEGA SP', 'DONSORB'],
  },
  {
    title: 'FIELD',
    text: ['SCSR', 'Closed-circuit SCBA', 'Emergency escape hood','Auxiliary equipment'],
  }
])

const titleLink = () => {
  window.location.reload()
}

const checkboxChange = () => {
  console.log(vCheckboxValue.value);
}
const vCheckboxValue = ref([])
const resetFocus = () => {
  document.activeElement.blur(); // Снимаем фокус с текущего активного элемента
}
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
const page = ref(1)
</script>

<template>
  <v-container class="wrap_main">
<!--    <h1 class="title_absolute">CATALOGUE</h1>-->
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
              <v-checkbox  color="primary" v-model="vCheckboxValue" v-for="text in i.text"
                           :value="text" :label="text"
                           @change="checkboxChange()"></v-checkbox>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>


    </div>
    <div class="card_catalog">
      <div class="card_block" v-for="i in productsList">
        <div class="photo_block">
          <img class="block_img" alt="" :src="i.photo">
        </div>
        <div class="card_content">
          <h1 @click="titleLink" class="card_title">{{ i.title }}</h1>
          <p class="card_text">{{ i.text }}</p>

        </div>
        <div class="card_actions">
          <v-btn :height="heightFuncInCarousel()">More</v-btn>
        </div>
      </div>
    </div>
    <div class="paginator">
      <v-pagination
          v-model="page"
          rounded="circle"
          :length="4"></v-pagination>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_main {
  min-height: 100vh;
  margin-top: 100px;
  position: relative;
  background-color: #FFFFFF;
}

.title_absolute {
  font-size: 3rem;
  font-weight: 600;
  position: absolute;
  top: 40%;
  left: -15%;
  transform: rotate(-90deg);
  color: $secondary;
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
  font-weight: 600;
  text-align: center;
  color: $textSpan;
}

.v-expansion-panels {
  margin-top: 50px;
}

.v-expansion-panel-title {
  padding: 35px;
}

.v-expansion-panel-title-h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
}

.v-expansion-panel-text {}

.v-expansion-panel-text-div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.v-checkbox {
  width: 50%;
}



// Card

.card_catalog {
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card_block {
  width: 450px;
  min-height: 650px;
  margin-top: 70px;
  margin-bottom: 70px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  background-color: #ffffff;
}

.photo_block {
  width: 100%;
  display: flex;
  justify-content: center;
}

.block_img {
  width: 100%;
}

.card_content {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.card_title {
  min-height: 200px;
  font-size: 1.7rem;
  font-weight: 700;
  padding-top: 30px;
  color: $primary;
}

.card_title:hover {
  cursor: pointer;
  text-decoration: $background underline;
  text-underline-offset: 0.4rem;
}

.card_text {
  min-height: 100px;
  font-size: 1.1rem;
  font-weight: 700;
  padding-top: 30px;
  padding-bottom: 30px;
  color: $textSpan;
}

.card_actions {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: end;
  justify-content: center;
}

.v-btn {
  width: 350px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  background-color: $primary;
}

.v-btn:hover {
  transition: all 0.3s ease-in-out;
  color: $primary;
  background-color: #ffffff;
}

.card_block:hover {
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
  -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
  box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);

  .card_title {

  }
  .card_text {

  }
}

// Paginator

.paginator {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 50px;
}

.v-pagination {
  color: $primary;
  background-color: $textSpan;
}

</style>
