import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {i18n} from './plugin/i18n'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  components,
  directives,
})
const app = createApp(App)

app.use(router)
app.use(i18n)

app.use(vuetify)

app.mount('#app')
