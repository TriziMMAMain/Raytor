<script setup="">
import {ref, onMounted} from "vue"
import {useStore} from "../stores/index.js";

const {fetchAddress} = useStore()
import {storeToRefs} from 'pinia'
// Pinia.store
const {address} = storeToRefs(useStore())
// Address

const addressArray = ref(null)

onMounted(async () => {
  await fetchAddress()
  addressArray.value = JSON.parse(localStorage.getItem('address'))
  // addressArray.value = [{
  //   address: 'sad',
  //   phone: '34',
  //   email: 'asd'
  // },]
})

</script>

<template>
  <div class="wrap-address">
    <div class="address" v-for="item in addressArray">
      <h1 class="address-title"><v-icon icon="fa-solid fa-location-dot" class="v-icon" />Address: {{ item.address }}</h1>
      <h1 class="address-phone"><v-icon icon="fa-solid fa-phone" />Phone: {{ item.phone }}</h1>
      <h1 class="address-email"><v-icon icon="fa-solid fa-envelope" />Email: {{ item.email }}</h1>
      <br>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {

  .wrap-address {
    min-height: 100vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    width: 80%;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.7;
    font-weight: 600;
    padding: 10px 0 10px 0;
    color: $textSpan;
  }

  .v-icon {
    font-size: 1.5rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 376px) and (max-width: 599px) {

  .wrap-address {
    width: 376px;
    min-height: 100vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    width: 80%;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.7;
    font-weight: 600;
    padding: 10px 0 10px 0;
    color: $textSpan;
  }

  .v-icon {
    font-size: 1.5rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 600px) and (max-width: 959px) {

  .wrap-address {
    width: 600px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    width: 85%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.4;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 1.8rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 960px) and (max-width: 1279px) {

  .wrap-address {
    width: 960px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
    line-height: 1.7;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 2.1rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1439px) {

  .wrap-address {
    width: 1180px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
    line-height: 1.7;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 2.1rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 1440px) and (max-width: 1919px) {

  .wrap-address {
    width: 1340px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.7rem;
    line-height: 1.7;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 2.1rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2559px) {

  .wrap-address {
    width: 1920px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    line-height: 1.7;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 2.2rem;
    margin-right: 10px;
    color: $primary;
  }

}

@media screen and (min-width: 2560px) {

  .wrap-address {
    width: 1920px;
    min-height: 90vh;
    margin: 80px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .address {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .address-title, .address-phone, .address-email {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    line-height: 2;
    font-weight: 600;
    color: $textSpan;
  }

  .v-icon {
    font-size: 2.2rem;
    margin-right: 10px;
    color: $primary;
  }

}



</style>