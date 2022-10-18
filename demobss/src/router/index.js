import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CommonView',
    component: () => import('../pages/CommonView.vue')
  },
  {
    path: '/ContMgt',
    name: 'ContMgt',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ContMgt.vue')
  },
  {
    path: '/ChageInfoRetv',
    name: 'ChageInfoRetv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ChageInfoRetv.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
