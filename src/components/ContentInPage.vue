<script setup="">
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'
import {useDisplay} from 'vuetify'
import photoHomePage from '../assets/photo/photoInHomePage.jpg'
import {YoutubeIframe} from '@vue-youtube/component';

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

// Carousel

const mainImage = 'https://sportishka.com/uploads/posts/2023-12/1701737070_sportishka-com-p-gori-amanos-vkontakte-6.jpg';
const secondaryImage1 = 'https://proprikol.ru/wp-content/uploads/2022/10/kartinki-s-mezhdunarodnym-dnem-gor-26.jpg';
const secondaryImage2 = 'http://vsegda-pomnim.com/uploads/posts/2022-04/1649124761_13-vsegda-pomnim-com-p-priroda-gor-foto-17.jpg';

const secondaryImageOpacity = ref(0);
const thirdImageOpacity = ref(0);
const fourImageOpacity = ref(0);

const secondaryImageDelay = ref(0);
const thirdImageDelay = ref(0);
const fourImageDelay = ref(0);

const changeImage = () => {
  setInterval(() => {
    if (secondaryImageOpacity.value === 0) {
      secondaryImageOpacity.value = 100;
    } else if (thirdImageOpacity.value === 0) {
      thirdImageOpacity.value = 100
      fourImageOpacity.value = 100
    } else {
      secondaryImageOpacity.value = 0
      thirdImageOpacity.value = 0
      fourImageOpacity.value = 0

      secondaryImageDelay.value = 2
      thirdImageDelay.value = 2
      fourImageDelay.value = 1
    }
  }, 3000)
}

changeImage();
</script>

<template>
  <div class="wrap_content">
    <div class="content_carousel">

      <div class="carousel">
        <div class="carousel-wrapper">
          <div class="main-image" :class="{ 'show-divider': secondaryImageOpacity > 0 }">
            <img :src="mainImage" alt="" class="main-image-content">
          </div>
          <div class="secondary-image" :style="{ opacity: secondaryImageOpacity + '%', transition: 'opacity 1s ' + secondaryImageDelay + 's' }">
            <img :src="secondaryImage1" alt="" class="secondary-image-content">
          </div>
          <div class="secondary-image2" :style="{opacity: secondaryImageOpacity + '%', transition: 'opacity 1s ' + secondaryImageDelay + 's' }">
            <img :src="secondaryImage1" alt="" class="secondary-image-content2">
          </div>
          <div class="secondary-image3" :style="{opacity: fourImageOpacity + '%', transition: 'opacity 1s ' + fourImageDelay + 's' }">
            <img :src="secondaryImage2" alt="" class="secondary-image-content3">
          </div>
        </div>
      </div>

    </div>

    <v-container>
      <div class="content_introduction">
        <div class="introduction_youtube">
          <h1 class="introduction_youtube_title">INTRODUCTION</h1>
          <youtube-iframe video-id="PllzEKkfw5I"/>
        </div>
      </div>
      <div class="content_about_us_main">
        <h1 class="block_main_title">ABOUT US</h1>
        <div class="content_about_us">
          <div class="block_img">
            <!--         карта Киева-->
            <div class="map"></div>
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
    </v-container>


  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_content {
  min-height: 100vh;
  margin-bottom: 5vh;
  background-color: #ffffff;
}

// Carousel

.content_carousel {
  width: 100%;
  height: 100vh;
  //background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  //background-size: cover;
  background-color: rgba(255, 0, 0, 0.87);
}


// YouTube

.content_introduction {
  width: 100%;
  min-height: 100vh;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  //background-size: cover;
  //background-color: $surface;
}

.introduction_youtube {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduction_youtube_title {
  position: absolute;
  left: -5vw;
  transform: rotate(-90deg);
  font-size: 4rem;
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
  flex-direction: column;
  //background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  //background-size: cover;
}


.block_main_title {
  width: 100%;

  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  color: $text;
}

.content_about_us {
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
}

// Photo

.block_img {
  width: 55%;
  transform: translateY(50%, -50%);
}


.map {
  z-index: 2;
  height: 600px;
  background-color: $surface;
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
.carousel {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-image {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 0;
  background-color: yellow;
  transition: border-bottom 1s;
}

.main-image-content {
  width: 100%;
  height: 100vh;
}

.secondary-image {
  width: 100%;
  height: 100vh;
  left: -20%;
  z-index: 1;
  transition: opacity 1s;
  transform: skewY(-45deg);
  overflow: hidden; /* Скрыть содержимое, выходящее за пределы блока */
}

.secondary-image-content {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 36%;
  left: 20%;
  transform: skewY(45deg);
}

.secondary-image2 {
  width: 100%;
  height: 140vh;
  position: absolute;
  top: 0;
  left: 30%;
  z-index: 2;
  transition: opacity 1s;
  transform: skewY(-45deg);
  overflow: hidden;
}

.secondary-image-content2 {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: -38%;
  left: -30%;
  transform: skewY(45deg);
}

.secondary-image3 {
  width: 120%;
  height: 140vh;
  position: absolute;
  top: 0;
  left: 30%;
  z-index: 2;
  transition: opacity 1s;
  transform: skewY(-45deg);
  overflow: hidden;
}

.secondary-image-content3 {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: -51%;
  left: -25%;
  transform: skewY(45deg);
}

</style>
