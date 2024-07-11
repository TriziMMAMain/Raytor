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
      <h1 class="address-title">{{ item.address }}</h1>
      <h1 class="address-phone">{{ item.phone }}</h1>
      <h1 class="address-email">{{ item.email }}</h1>
      <br>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

.address-title, .address-phone, .address-email {
  font-size: 2rem;
  font-weight: 600;
  color: $textSpan;
}

</style>