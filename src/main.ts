import './assets/css/global.scss'
import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'
import App from './App.vue'
import { router } from '~/route/route'

const appTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#D1F561',
  },
}

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'appTheme',
    themes: { appTheme },
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
