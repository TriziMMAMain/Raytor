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
      <v-window
          v-model="window"
          show-arrows
      >
        <v-window-item
            v-for="i in newsContent"
            :key="i"
        >
          <div class="block_news">
            <div class="news_img">
              <v-img :src="i.photoUrl"></v-img>
            </div>
            <div class="news_content">
              <p class="content_date">{{ i.date }}</p>
              <h1 class="content_title">{{ i.title }}</h1>
              <p class="content_text">{{ i.text }}</p>
              <div class="content_button">
                <v-btn :height="heightFuncInBtn()" :href="i.urlInNews">More</v-btn>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
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

.v-window {
  width: 90%;
  margin: 0 auto;
}

v-window-item {}

.block_news {
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 25px;
  transition: all 0.3s ease-in-out;
  border: 1px solid $primary;
  background-color: $textSpan;
}

.news_img {
  width: 35%;
}

.v-img {
  width: 100%;
  height: 100%;
}

.news_content {
  width: 75%;
  height: 100%;
  margin-left: 25px;
}

.content_date {
  font-size: .95rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
}

.content_title {
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: $primary;
}

.content_text {
  width: 80%;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
}

.content_button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.v-btn {
  width: 300px;
  font-size: 2rem;
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

.block_news:hover {
  transition: all 0.3s ease-in-out;
  border: 1px solid $textSpan;
  background-color: $primary;

  .content_date {
    transition: all 0.3s ease-in-out;
    color: $textSpan;
  }

  .content_title {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: $textSpan;
  }

  .content_text {
    transition: all 0.3s ease-in-out;
    color: $textSpan;
  }
}

</style>
