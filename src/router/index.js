import HomeView from '@/views/HomeView.vue'
import Questions from '@/views/Questions.vue'
import Result from '@/views/Result.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: Questions,
    },

    {
       path: '/results',
      name: 'results',
      component: Result,
    },
  ],
})

export default router
