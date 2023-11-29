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
  <div class="wrap_main">
    <h1 class="title_absolute">CATALOGUE</h1>
    <div class="filter_menu">
      <div class="filter_block">
        <h1 class="filter_title">Standard</h1><v-icon icon="fa-solid fa-bars"></v-icon>
        <div class="filter_block_hiden">
          <h1 class="hiden_title_main">- Any -</h1>
          <br>
          <h1 class="hiden_title">En</h1>
          <h1 class="hiden_title">DSTU</h1>
          <h1 class="hiden_title">IS</h1>
          <h1 class="hiden_title">SANS</h1>
          <h1 class="hiden_title">Others</h1>
        </div>
      </div>
      <div class="filter_block">
        <h1 class="filter_title">Manufacturer</h1><v-icon icon="fa-solid fa-bars"></v-icon>
        <div class="filter_block_hiden">
          <h1 class="hiden_title_main">- Any -</h1>
          <br>
          <h1 class="hiden_title">DEZEGA SP</h1>
          <h1 class="hiden_title">DONSORB</h1>
        </div>

      </div>
      <div class="filter_block">
        <h1 class="filter_title">Field</h1><v-icon icon="fa-solid fa-bars"></v-icon>
        <div class="filter_block_hiden">
          <h1 class="hiden_title_main">- Any -</h1>
          <br>
          <h1 class="hiden_title">SCSR</h1>
          <h1 class="hiden_title">Closed-circuit SCBA</h1>
          <h1 class="hiden_title">Emergency escape hood</h1>
          <h1 class="hiden_title">Auxiliary equipment</h1>
        </div>

      </div>
    </div>
    <div class="card_catalog">
      <div class="card_block" v-for="i in productsList">
        <div class="photo_block">
          <img class="block_img" alt="" :src="i.photo">
        </div>
        <div class="card_content">
          <h1 class="card_title">{{ i.title }}</h1>
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
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_main {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
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
  height: 120px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.filter_block {
  width: 450px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  background-color: $textSpan;
}

.filter_title {
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 25px;
  color: $primary;
}

.v-icon {
  padding-right: 25px;
  font-size: 2.5rem;
  color: $primary;
}

.filter_block_hiden {
  display: none;
}

.hiden_title_main {
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 700;
  color: $textSpan;
}

.hiden_title {
  width: fit-content;
  font-size: 1.1rem;
  font-weight: 500;
  color: $textSpan;
}

.hiden_title_main:hover, .hiden_title:hover {
  cursor: pointer;
  text-decoration: underline;
}

.filter_block:hover {
  position: relative;
  .filter_block_hiden {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 130px;
    position: absolute;
    top: -20px;
    padding: 10px;
    background-color: $primary;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  }
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
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
  background-color: $textSpan;
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
  font-size: 1.5rem;
  font-weight: 700;
  padding-top: 30px;
  color: $primary;
}

.card_text {
  font-size: 1rem;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #ffffff;
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
  border: 1px solid $textSpan;
  color: $textSpan;
  background-color: $primary;
}

.v-btn:hover {
  transition: all 0.3s ease-in-out;
  border: 1px solid $primary;
  color: $primary;
  background-color: $textSpan;
}

.card_block:hover {
  transition: all 0.3s ease-in-out;
  transform: translateY(-10px);
  background-color: $primary;

  .card_title {
    font-weight: 700;
    color: $textSpan;
  }
  .card_text {
    color: $textSpan;
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
