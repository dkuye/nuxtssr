// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#16994C',
    'primary-darken-1': '#3700B3',
    secondary: '#494949',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,

    // global css defaults
    defaults: {
      VBtn: {
        style: [{ textTransform: 'none' }, { borderRadius: '20px' }, { fontWeight: '600' }]
      }
    },

    // theme
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  })
  app.vueApp.use(vuetify)
})
