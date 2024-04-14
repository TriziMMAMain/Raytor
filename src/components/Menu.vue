<script setup="">
import {onMounted, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import logoReytor from '../assets/photo/Logo_REYTOR.svg'

// Router


// Value

const valueOpenAndCloseLanguage = ref(false)
const openAndCloseMenuLanguage = (language) => {
  console.log(language);
  valueOpenAndCloseLanguage.value = false
}
const openAndCloseMenu = () => {
  valueOpenAndCloseLanguage.value = !valueOpenAndCloseLanguage.value
}
const tabs = ref(null)

// currentUrl

const currentUrl = ref(null)
const tabsCounter = async (currentUrl) => {
  if (await currentUrl === 'http://localhost:5173/') {
    tabs.value = 1
  } else if (await currentUrl === 'http://localhost:5173/products/' || await currentUrl === 'http://localhost:5173/products') {
    tabs.value = 2
  } else if (await currentUrl === 'http://localhost:5173/news/' || await currentUrl === 'http://localhost:5173/news') {
    tabs.value = 3
  }
}

//

const isHovered = ref(false);
const barPosition = ref(0);

watch(isHovered, (newValue) => {
  if (newValue) {
    setInterval(() => {
      if (barPosition.value < 200) {
        barPosition.value += 5;
      } else {
        barPosition.value = 0;
      }
    }, 50);
  }
});

//

onMounted(async () => {
  currentUrl.value = window.location.href;
  await tabsCounter(currentUrl.value)
})
</script>

<template>
  <div class="wrap_menu">
    <div class="header">
      <a class="title_main" href="/"><img class="logoReytor" :src="logoReytor" alt=""></a>
    </div>
    <div class="panel_buttons_actions">
      <div class="v-tabs">
        <a class="v-tab" href="/">HOME</a>
        <a class="v-tab" href="/products/">PRODUCTS</a>
        <a class="v-tab" href="/news/">NEWS</a>
        <h1 class="v-tab" @click="openAndCloseMenu()">EN <ion-icon name="caret-down-outline"></ion-icon></h1>
      </div>

    </div>

    <div v-if="valueOpenAndCloseLanguage" class="panel_menu_absolute">
      <a @click="openAndCloseMenuLanguage('En')" href="#" class="menu_text">EN</a>
      <a @click="openAndCloseMenuLanguage('Ua')" href="#" class="menu_text">UA</a>
    </div>

  </div>

</template>

<style lang="scss" scoped>
// Import
@import '../assets/mixins.scss';

// Menu

.wrap_menu {
  width: 100%;
  height: 80px;
  display: flex;
  //background-color: $textSpan;
}

// Header

.header {
  width: 30%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(104, 102, 102, 0.56);
}

.title_main {
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: $surface;

}

.logoReytor {
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: none;
}

// Expansions

.panel_buttons_actions {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  backdrop-filter: blur(4px);
  background-color: rgba(104, 102, 102, 0.56);
}

.panel_menu {

}

.menu_title {
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  background-color: $primary;
}

.menu_title:hover {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: $primary
}

.panel_menu_absolute {
  width: 230px;
  position: absolute;
  right: 0;
  bottom: -120px;
  display: flex;
  flex-direction: column;
}

.menu_text {
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 15px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: $textSpan;
  background-color: $primary;
}

.menu_text:hover {
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  background-color: #e1988e;
}

// Third

.v-tabs {
  height: 100%;
  justify-content: center;
  align-items: center;
}

.v-tab {
  width: 260px;
  height: 100%;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  color: #ffffff;
  //background-color: $textSpan;
  //backdrop-filter: blur(4px);
  //background-color: rgba(104, 102, 102, 0.56);
}

.v-tab:hover {
  cursor: pointer;
  color: $primary;
  //color: #023dce;
}

.v-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px; /* высота линии */
  background-color: $primary;
  transition: all 0.3s ease-in-out;
}

.v-tab:hover::after {
  width: 100%;
  transition: all 0.3s ease-in-out;
}


.panel_menu_third {
  width: 100px;
}

.buttons_menu {
  min-width: 20%;
  height: 100%;
  display: flex;
}

.button_active {
  width: 130px;
  height: 50px;
}

.href_active {
  width: 200px;
  height: 80px;

}


// Language


</style>
