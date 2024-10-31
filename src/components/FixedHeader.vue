<script setup lang="jsx">
import { useRouter } from 'vue-router'
const router = useRouter()

import {useDisplay} from 'vuetify'
const {mdAndUp} = useDisplay()
defineProps({
})

const getButtonSize = () => {
  return mdAndUp.value ? 'x-large' : 'medium'
}
const getImageSize = () => {
  return mdAndUp.value ? '' : 'header-small-logo'
}
const onclickButton = (id) => {
  document.querySelector(`#${id}`).scrollIntoView()
}
const onclickLogo = () => {
  router.push('/')
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
</script>
<template>
  <div class="header-class py-0">
    <div>
      <v-container>
        <v-row class="header-button-group">
          <v-col :cols="mdAndUp ? 2 : 4" class="py-1 header-col">
            <img class="header-logo" :class="getImageSize()" src="/src/assets/img/whitelogo1024.png" @click="onclickLogo()" />
          </v-col>
          <v-col :cols="mdAndUp ? 2 : 4" class="py-1 header-col">
            <v-btn variant="text" color="white" :size="getButtonSize()" @click="onclickButton('recent')">
              {{ $t('header.buttons.recent') }}
            </v-btn>
          </v-col>
          <v-col :cols="mdAndUp ? 2 : 4" class="py-1 header-col">
            <v-btn variant="text" color="white" :size="getButtonSize()" @click="onclickButton('devlog')">
              {{ $t('header.buttons.devlog') }}
            </v-btn>
          </v-col>
          <v-col :cols="mdAndUp ? 2 : 4" class="py-1 header-col">
            <v-btn variant="text" color="white" :size="getButtonSize()" @click="onclickButton('contact')">
              {{ $t('header.buttons.contact') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.header-class {
  top: 0;
  width: 100vw;
  min-height: 60px;
  max-height: 100px;
  position: sticky;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.85) ;
  overflow: auto;
}
.header-logo {
  max-height: 80px;
  cursor: pointer;
}
.header-small-logo {
  height: 50px;
}
.header-col {
  display: flex;
  align-items: center;
}
.header-button-group {
  display: flex;
  justify-content: space-around;
}
.v-col {
  text-align: center;
}

</style>