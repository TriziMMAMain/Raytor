<script setup="">
import {ref} from 'vue'

const aboutUsArray = ref([{
  title: 'Raytor LTD',
  photo: '',
  phone: '+380999254512',
  email: 'raytor@gmail.com'
}])
</script>

<template>
  <div class="wrap-about-us">
    <h1 class="about-us-title">ABOUT US</h1>
    <div class="about-us-block">
      <div class="about-us" v-for="info in aboutUsArray">
        <div class="us-description">
          <h1 class="us-description-title">{{ info.title }}</h1>
          <h1 class="us-description-phone">{{ info.phone }}</h1>
          <h1 class="us-description-email">{{ info.email }}</h1>
        </div>
        <div class="us-photo">
          <img class="us-photo-img" :src="info.photo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

// Wrap
.wrap-about-us {
  width: 90%;
  height: 100vh;
  margin: 70px auto;
}
// Title
.about-us-title {
  font-size: 3rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: 7px;
  color: $primaryText;
}
// Block
.about-us-block {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: red;
}
// Block v-for
.about-us {

}
// Description
.us-description {}

.us-description-title {}

.us-description-phone {}

.us-description-email {}
// Photo
.us-photo {}

.us-photo-img {}

</style>