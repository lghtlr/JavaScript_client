import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Список дел'
    },
    component: () => import('@/views/Home.vue')
  },
 
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/views/About.vue')
  },

  {
    path: '/person',
    name: 'Person',
    meta: {
      title: 'Личная информация'
    },
    component: () => import('@/views/Person.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
