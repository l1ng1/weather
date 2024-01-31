import { createRouter, createWebHistory } from 'vue-router'
import Horoscope from '@/components/Horoscope.vue'
import Weather from '@/components/Weather.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/horoscope',
      component:Horoscope
    },
    {
      path:'/weather',
      component:Weather
    },
    {
      path:'/',
      component:Weather
    }
  ]
})

export default router
