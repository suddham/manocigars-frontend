// import './assets/css/main.scss'
import '@/assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { HiSun, HiMoon } from 'oh-vue-icons/icons'
addIcons(HiSun, HiMoon);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
