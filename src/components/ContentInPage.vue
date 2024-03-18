<script setup="">
import {ref, onMounted} from 'vue'
import {useDisplay} from 'vuetify'
import photoHomePage from '../assets/photo/photoInHomePage.jpg'
import L from 'leaflet';
import { YoutubeIframe } from '@vue-youtube/component';
const {name} = useDisplay()

const slides = ref([
  {
    title: 'KEEP SAFE'
  },
  {
    title: 'HUMAN LIFE IS PRICELESS'
  },
  {
    title: 'TRUST THE PROFESSEIONALS'
  }
])
const content = ref([
  {
    icon: 'globe-outline',
    title: 'LLC "REITOR LTD"'
  },
  {
    icon: 'navigate-outline',
    title: 'st. Zverinetskaya 63, Kyiv, 01014, Ukraine',
  },
  {
    icon: 'call-outline',
    title: '+(380) 95 588 9773',
  },
  {
    icon: 'at-circle-outline',
    title: 'reitorltd@gmail.com',
  }
])

// Leaflet

const map = ref(null);

onMounted(() => {
  const mymap = L.map('map').setView([50.405814, 30.555269], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(mymap);
  const newMarker = L.marker([50.405814, 30.555269]).addTo(mymap);

  map.value = mymap;
});
</script>

<template>
  <div class="wrap_content">
    <div class="content_carousel">
      <v-carousel
          cycle
          height="100vh"
          hide-delimiter-background
          :show-arrows="false"
          show-arrows="hover"
      >
        <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            cover
        >
          <h1 class="v-carousel-item-title">{{ item.title }}</h1>
        </v-carousel-item>
        <div class="background_photo_carousel">
          <img class="background_photo_carousel_img" alt="" :src="photoHomePage">
        </div>
      </v-carousel>
    </div>
    <div class="content_introduction">
      <div class="introduction_youtube">
        <h1 class="introduction_youtube_title">INTRODUCTION</h1>
        <youtube-iframe video-id="PllzEKkfw5I" />
      </div>
    </div>
    <div class="content_about_us_main">
      <h1 class="block_main_title">ABOUT US</h1>
     <div class="content_about_us">
       <div class="block_img">
<!--         карта Киева-->
         <div id="map"></div>
       </div>
       <div class="about_us_block_main">
         <div class="about_us_block" v-for="i in content">
           <div class="block_icon">
             <ion-icon :name="i.icon"></ion-icon>
           </div>
           <div class="block_content">
             <h1 class="content_title">{{ i.title }}</h1>
           </div>
         </div>
       </div>
     </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_content {
  width: 100%;
  min-height: 100vh;
  background-color: $surface;
}

// Carousel

.content_carousel {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  background-size: cover;
}

.v-carousel {
  width: 100%;
  height: 100vh;
}

.background_photo_carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
}

.background_photo_carousel_img {
  width: 100%;
  height: 100%;
}

.v-carousel-item {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
}

.v-carousel-item-title {
  position: absolute;
  top: 30%;
  left: 20%;
  width: 600px;
  font-size: 6.5rem;
  font-weight: 600;
  font-family: "Candara", sans-serif;
  color: #ffffff // $primary;
}

// YouTube

.content_introduction {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  background-size: cover;
  //background-color: $surface;
}

.introduction_youtube {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
}

.introduction_youtube_title {
  position: absolute;
  left: 0;
  transform: rotate(-90deg);
  font-size: 3rem;
  font-weight: 600;
  color: $text;
}

// Content About Us

.content_about_us_main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  background-size: cover;
}


.block_main_title {
  width: 100%;
  position: absolute;
  top: 0;

  text-align: center;
  font-size: 5rem;
  font-weight: 600;
  color: $text;
}

.content_about_us {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
}

// Photo

.block_img {
  width: 55%;
  margin-left: 50px;
  transform: translateY(50%, -50%);
}


#map {
  z-index: 2;
  height: 600px;
  background-color: #333;
  color: #fff;
}

.leaflet-control-container {
  background-color: #333;
  color: #fff;
}

// About Us Main

.about_us_block_main {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.about_us_block {
  width: 70%;
  min-height: 120px;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  background-color: $textSpan;
}

.block_icon {
  width: 120px;
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-icon {
  font-size: 4rem;
  padding: 15px;
  color: $primary;
}

.block_content {
  width: 450px;
  padding: 10px;
}

.content_title {
  font-size: 2rem;
  font-weight: 500;
  color: $primary;
}

//

</style>
