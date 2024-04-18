import '@/assets/main.css'
import '@/assets/index.css'

import { createApp } from 'vue'
import {createWebHistory, createRouter} from 'vue-router'

import { VueFire } from 'vuefire'
import App from '@/App.vue'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutProject.vue'
import AlternateResources from '@/components/AlternateResources.vue'
import ChatBox from '@/components/ChatBox.vue'

import { firebaseApp } from '@/firebase'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/alternate', component: AlternateResources},
    { path: '/chatroom', component: ChatBox, name: 'chat', meta: { refresh: true} }
  ]
})

app.use(router)
app.use(VueFire, {
  firebaseApp
})

app.mount('#app')
