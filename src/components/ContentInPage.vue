<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
const {name} = useDisplay()

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
    <div class="content_introduction"></div>
    <div class="content_about_us"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_content {
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  background-color: rgba(0, 0, 255, 0.35);
}

// Carousel

.content_carousel {
  width: 100%;
  min-height: 300vh;
}

.v-carousel {
  width: 100%;
  height: 100vh;
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

//


</style>
