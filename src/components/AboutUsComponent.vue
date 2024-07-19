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
})

</script>

<template>
  <div class="wrap-address">
    <div class="address" v-for="item in addressArray">
      <h1 class="address-title"><v-icon icon="fa-solid fa-location-dot" />Address: {{ item.address }}</h1>
      <h1 class="address-phone"><v-icon icon="fa-solid fa-phone" />Phone: {{ item.phone }}</h1>
      <h1 class="address-email"><v-icon icon="fa-solid fa-envelope" />Email: {{ item.email }}</h1>
      <br>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {}

@media screen and (min-width: 376px) and (max-width: 600px) {}

@media screen and (min-width: 600px) and (max-width: 960px) {}

@media screen and (min-width: 960px) and (max-width: 1280px) {}

@media screen and (min-width: 1280px) and (max-width: 1920px) {}

@media screen and (min-width: 1920px) and (max-width: 2560px) {}

@media screen and (min-width: 2560px) {

  .wrap-address {}

  .address {

  }

  .address-title, .address-phone, .address-email {
    font-size: 2rem;
    font-weight: 600;
    color: $textSpan;
  }

}



</style>