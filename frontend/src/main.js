import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import store from "./store"
import 'vue-snap/dist/vue-snap.css'
import appAxios from '@/utils/appAxios'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

import Footer from "@/components/appLayout/Footer.vue"
import Navbar from "@/components/appLAyout/Navbar.vue"

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.component("Footer", Footer);
app.component("Navbar", Navbar);
app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')
