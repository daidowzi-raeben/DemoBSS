import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcomPage.vue'
import signIn from '../views/signIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CLIB HOME',
      component: signIn,
    },
    {
      path: '/:menuId',
      name: 'CLIB',
      component: welcome,
    },
  ],
})

export default router
