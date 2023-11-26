<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
const {name} = useDisplay()
import { YoutubeIframe } from '@vue-youtube/component';

const slides = ref([
  {
    src: 'https://www.dezega.com/sites/default/files/2023-01/3_background-min.png',
    title: 'Keep safe'
  },
  {
    src: 'https://www.dezega.com/sites/default/files/2023-01/1_background-min-p-70.png',
    title: 'Human life is priceless'
  },
  {
    src: 'https://www.dezega.com/sites/default/files/2023-01/4_background-min.png',
    title: 'Trust the professionals'
  }
])

const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '400'
  } else if (name.value === 'sm') {
    return '400'
  } else if (name.value === 'md') {
    return '400'
  } else if (name.value === 'lg') {
    return '580'
  } else if (name.value === 'xl') {
    return '700'
  } else if (name.value === 'xxl') {
    return '800'
  }
}

</script>

<template>
  <div class="wrap_content">
    <div class="content_carousel">
      <v-carousel
          cycle
          :height="heightFuncInCarousel()"
          hide-delimiter-background
          :show-arrows="false"
          show-arrows="hover"
      >
        <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            :src="item.src"
            cover
        >
          <h1 class="v-carousel-item-title">{{ item.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="content_introduction">
      <div class="introduction_youtube">
        <h1 class="introduction_youtube_title">INTRODUCTION</h1>
        <youtube-iframe video-id="PllzEKkfw5I" />
      </div>
    </div>
    <div class="content_about_us">
      <v-img src="#"></v-img>
      <div class="about_us_block_main">
        <div class="about_us_block">
          <div class="block_icon"></div>
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
  padding-top: 50px;
}

// Carousel

.content_carousel {
  width: 100%;
  min-height: 100vh;
}

.v-carousel {
  width: 100%;
  height: 100%;
}

.v-carousel-item {
  width: 100%;
  height: 100%;
  position: relative;
}

.v-carousel-item-title {
  position: absolute;
  top: 30%;
  left: 20%;
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
}

// YouTube

.content_introduction {
  width: 100%;
  min-height: 100vh;
  background-color: $surface;
}

.introduction_youtube {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
}

.introduction_youtube_title {
  position: absolute;
  left: 0;
  transform: rotate(-90deg);
  font-size: 3rem;
  color: $primary;
}

//

</style>
