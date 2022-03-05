import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/NotFound.vue'
import { createWebHistory } from 'vue-router'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/login',
    meta: { title: 'Login', transition: 'slide-left' },
    component: Login,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/register',
    meta: { title: 'Register', transition: 'slide-left' },
    component: Register,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
