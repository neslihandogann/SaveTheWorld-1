import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from "./views/Dashboard.vue"
import Register from './views/Register.vue'
import Blog from './views/Blog.vue'
import Class from './views/Class.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
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
  {
    path: '/blog',
    meta: { title: 'Blog' },
    component: Blog,
  },
  {
    path: '/class',
    meta: { title: 'Class' },
    component: Class,
  },
  {
    path: '/Dashboard',
    meta: { title: 'Dashboard' },
    component: Dashboard,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
