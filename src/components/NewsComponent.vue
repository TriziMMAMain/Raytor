<script setup="">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'

const {name} = useDisplay()

//

const newsContent = ref([
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-11/2_carbo-30_newz_web-_au.jpg?itok=ml_cUxpp',
    date: '22.11.2023',
    title: 'DEZEGA CARBO 30 approved in Australia for IDHL atmosphere applications',
    text: 'We are pleased to announce the successful certification of our new product, the CARBO 30 self-…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/vinacomin_newz_web.jpg?itok=qP_-3T2a',
    date: '18.10.2023',
    title: "We're proud to be part of VINACOMIN 2023 with our partner, MIECO",
    text: 'DEZEGA is excited to announce its successful participation in the VINACOMIN 2023 Semi-Professional…',
    urlInNews: '#'
  },
  {
    photoUrl: 'https://www.dezega.com/sites/default/files/styles/news_front_page/public/2023-10/imrb_2023_newz_web_final.jpg?itok=Pd1GhIcQ',
    date: '12.10.2023',
    title: 'IMRB 2023: A Memorable Event!',
    text: 'International Mines Rescue Body Conference (IMRB 2023) held in South Africa from the 1st till the…',
    urlInNews: '#'
  }
])
const window = ref(0)
const heightFuncInBtn = () => {
  if (name.value === 'xs') {
    return '50'
  } else if (name.value === 'sm') {
    return '50'
  } else if (name.value === 'md') {
    return '50'
  } else if (name.value === 'lg') {
    return '60'
  } else if (name.value === 'xl') {
    return '60'
  } else if (name.value === 'xxl') {
    return '60'
  }
}
</script>

<template>
  <div class="wrap_news">
    <div class="block_news_main">

      <v-slide-group
          show-arrows
      >

        <v-slide-group-item
            class="pa-3"
            v-for="n in newsContent"
            :key="n"
        >

          <div class="block_news">
            <div class="block_news_divider_left"></div>
            <div class="block_news_divider_right"></div>
            <div class="news_img">
              <div class="news_img_photo">
                <img class="news_img_photo_main" alt="" :src="n.photoUrl">
              </div>
            </div>
            <div class="news_content">
              <p class="content_date"><ion-icon name="calendar-outline"></ion-icon> {{ n.date }}</p>
              <h1 class="content_title">{{ n.title }}</h1>
              <p class="content_text">{{ n.text }}</p>
            </div>
            <div class="content_button">
              <v-btn  :height="heightFuncInBtn()" :href="n.urlInNews">More</v-btn>
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.wrap_news {
  width: 100%;
  padding: 20px 0 20px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('../assets/photo/backgroundPhotoInHomePage.jpg');
  background-size: cover;
  //background-color: $surface;
}

.block_news_main {
  width: 100%;
}

.v-slide-group {
  width: 90%;
  margin: 0 auto;
  min-height: 650px;
}

.v-slide-group-item {
}

.block_news_divider_left, .block_news_divider_right {
  width: 75px;
  height: 75px;
  transition: all 0.3s ease-in-out;
}

.block_news_divider_left {
  position: absolute;
  top: -20px;
  left: -20px;
  border-top: 1px solid $warning;
  border-left: 1px solid $warning;
}

.block_news_divider_right {
  position: absolute;
  bottom: -20px;
  right: -20px;
  border-right: 1px solid $warning;
  border-bottom: 1px solid $warning;

}

.block_news {
  width: 350px;
  min-height: 650px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 150px;
  padding: 25px;
  transition: all 0.3s ease-in-out;
  border: 1px solid #8b8989;
  background-color: $textSpan;
}

.block_news:hover {

  .v-btn {
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    color: #ffffff;
    background-color: $primary;
  }

  .block_news_divider_left, .block_news_divider_right {
    width: 250px;
    height: 250px;
  }

  .block_news_divider_left {
    border-top: 2px solid $warning;
    border-left: 2px solid $warning;
  }

  .block_news_divider_right {
    border-right: 2px solid $warning;
    border-bottom: 2px solid $warning;
  }
}

.news_img {
  width: 100%;
}

.news_img_photo {
  width: 100%;
  position: relative;
  right: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8b8989;
}

.news_img_photo_main {
  width: 100%;
  padding: 7px;
}

.news_content {
  width: 100%;
  min-height: 400px;
  margin-top: 40px;
}

ion-icon {
  font-size: 1.7rem;
  margin-right: 5px;
}

.content_date {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
}

.content_title {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;
  margin-top: 30px;
  color: $primary;
}

.content_text {
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  margin-top: 30px;
  margin-bottom: 150px;
  color: #ffffff;
}

.content_button {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 5%;
  display: flex;
  justify-content: center;
}

.v-btn {
  width: 300px;
  font-size: 2rem;
  font-family: "Calibri Light", sans-serif;
  transition: all 0.3s ease-in-out;
  border: 1px solid #8b8989;
  color: #8b8989;
  background-color: transparent;
}

</style>
