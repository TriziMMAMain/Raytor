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

const content = ref([
  {
    icon: 'medal-outline',
    title: 'Over 60 years',
    text: 'experience in designing and manufacturing of PRE'
  },
  {
    icon: 'help-buoy-outline',
    title: 'Over 500',
    text: 'lives saved in 2022'
  },
  {
    icon: 'hammer-outline',
    title: 'Modern',
    text: 'research and development center (R&D center)'
  },
  {
    icon: 'map-outline',
    title: 'Representative offices',
    text: 'in 3 regions worldwide'
  },
  {
    icon: 'construct-outline',
    title: 'Products',
    text: 'used in 50+ countries'
  },
])

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
      <h1 class="block_main_title">ABOUT US</h1>
      <div class="block_img">
        <v-img src="https://www.dezega.com/sites/default/files/2017-08/bg_2%20экран-min_0.png"></v-img>
      </div>
      <div class="about_us_block_main">
        <div class="about_us_block" v-for="i in content">
          <div class="block_icon">
            <ion-icon :name="i.icon"></ion-icon>
          </div>
          <div class="block_content">
            <h1 class="content_title">{{ i.title }}</h1>
            <p class="content_text">{{ i.text }}</p>
          </div>
          <a class="href_about_us" href="#"></a>

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

// Content About Us

.content_about_us {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: start;
  padding: 20px 0 20px 0;
  background-color: $surface;
}

// Photo

.block_img {
  width: 60%;
  height: 100%;
  margin-top: 20px;
}

.v-img {
  width: 100%;
  height: 100%;
}

// About Us Main

.about_us_block_main {
  position: absolute;
  top: 30px;
  right: 15%;
}

.href_about_us {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;

}

.block_main_title {
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 3rem;
  font-weight: 600;
  transform: rotate(90deg);
  color: $primary;
}

.about_us_block {
  width: 570px;
  height: 120px;
  position: relative;
  display: flex;
  margin-bottom: 22px;
  border: 1px solid $primary;
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
  font-size: 3rem;
  padding: 15px;
  border: 1px solid $primary;
  color: $primary;
}

.block_content {
  width: 450px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

}

.content_title {
  font-size: 1.5rem;
  font-weight: 600;
  color: $primary;
}

.content_text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff;
}



.href_about_us:hover {
  transition: all 0.3s ease-in-out;

}

//

</style>
