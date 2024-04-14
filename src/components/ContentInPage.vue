<script setup="">
import {ref, computed, watch, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
import {useDisplay} from 'vuetify'
import photoHomePage from '../assets/photo/photoInHomePage.jpg'
import {YoutubeIframe} from '@vue-youtube/component';
import 'animate.css';

import mainImage from '../assets/photo/backgroundPhotoInCarousel1.png'
import secondaryImage1 from '../assets/photo/backgroundPhotoInCarousel2.png'
import secondaryImage2 from '../assets/photo/backgroundPhotoInCarousel3.png'
const slides = ref([
  {
    title: 'KEEP SAFE',
    src: mainImage
  },
  {
    title: 'HUMAN LIFE IS PRICELESS',
    src: secondaryImage1
  },
  {
    title: 'TRUST THE PROFESSEIONALS',
    src: secondaryImage2
  }
])
const currentIndex = ref(0)

const printedText = ref('');

let typingSpeed = 100; // Скорость печатания (миллисекунды)

const typeText = (text) => {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i <= text.length) {
      printedText.value = text.substring(0, i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, typingSpeed);
}

onMounted(() => {
  typeText(slides.value[currentIndex.value].title);
  const intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    printedText.value = '';
    typeText(slides.value[currentIndex.value].title);
  }, 5000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});



const {name} = useDisplay()

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


// const images = ref([mainImage, secondaryImage1, secondaryImage2])

const h1Visible = ref(false);

const checkVisibility = () => {
  const h1 = document.querySelector('.v-carousel-item-title.active');
  if (h1) {
    const rect = h1.getBoundingClientRect();
    h1Visible.value = rect.top < window.innerHeight && rect.bottom >= 0;
  } else {
    h1Visible.value = false;
  }
};

watch(currentIndex, () => {
  checkVisibility();
});

// carousel


</script>

<template>
  <div class="wrap_content">
    <div class="content_carousel">

      <div class="carousel" v-for="(slide, index) in slides" :key="index">
        <img alt="" :src="slide.src" :class="{ active: index === currentIndex }" class="image" />
        <h1 class="v-carousel-item-title" :class="{ active: index === currentIndex }">
          <span class="v-carousel-item-title-span">{{ printedText }}</span><span class="cursor">|</span>
        </h1>
      </div>



      <!--        <div class="carousel-wrapper">-->
<!--          <v-carousel-->
<!--              cycle-->
<!--              height="100vh"-->
<!--              hide-delimiters-->
<!--              interval="1000"-->
<!--              :show-arrows="false"-->
<!--              direction="vertical"-->
<!--              continuous-->
<!--              :center-align="true"-->
<!--              class="carousela"-->
<!--          >-->
<!--            <v-carousel-item-->
<!--                v-for="(item, i) in slides"-->
<!--                :key="i"-->
<!--                :src="item.src"-->
<!--                cover-->
<!--            >-->
<!--              <h1 class="v-carousel-item-title animate__animated animate__fadeInRightBig">{{ item.title }}</h1>-->
<!--            </v-carousel-item>-->
<!--          </v-carousel>-->

<!--        </div>-->


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
            <div class="map">
              <img class="img_map" src="../assets/photo/mapEN.jpeg" alt="">
            </div>
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
  background-color: $text;
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
  left: -10vw;
  transform: rotate(-90deg);
  font-size: 4rem;
  font-weight: 550;
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
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.img_map {
  width: 85%;
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
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 500;
  font-family: "Segoe UI", sans-serif;
  color: #ffffff;
}

//

.carousel-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}


.v-carousel-item-title {
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 3.5rem;
  font-weight: 600;
  z-index: 0;
  transition: opacity 1s;
  color: #ffffff;
}


.carousel {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 1s;
  z-index: 0;
}

.active {
  z-index: 1;
  opacity: 1;
}

.image:not(.active) {
  opacity: 0;
}


.v-carousel-item-title:not(.active) {
  opacity: 0;
}

// asdsa

.cursor {
  animation: blink-caret 0.75s step-end infinite;
}

.v-carousel-item-title-span {
  font-size: 3.5rem;
  font-weight: 600;
  //font-family: Helvetica, sans-serif;
  font-family: Verdana, sans-serif;
  z-index: 0;
  transition: opacity 1s;
  color: #ffffff;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

</style>
