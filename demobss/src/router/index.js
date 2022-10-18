import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {    
    path: '/ContMgt',
    name: 'ContMgt',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ContMgt.vue')
  },
  {
    path: '/',
    name: 'ChageInfoRetv',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ChageInfoRetv.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
