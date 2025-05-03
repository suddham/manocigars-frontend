// import './assets/css/main.scss'
import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { HiSun, HiMoon, HiHome, HiUser, HiCog } from 'oh-vue-icons/icons'
addIcons(HiSun, HiMoon, HiHome, HiUser, HiCog);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
