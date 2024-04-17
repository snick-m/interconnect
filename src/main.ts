import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import App from './App.vue'

import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp
})

app.mount('#app')
