import 'vuetify/styles' // 🔥 Charger Vuetify en premier
import '@mdi/font/css/materialdesignicons.css' // 🔥 Charger les icônes Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'
import './assets/css/tabler.min.css'
import './assets/js/tabler.min.js'

const vuetify = createVuetify({
  components, // Ajout des composants
  directives, // Ajout des directives
})
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
