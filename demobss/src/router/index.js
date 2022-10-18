import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
<<<<<<< Updated upstream
    path: '/',
    name: 'ChageInfoRetv',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ChageInfoRetv.vue')
  },
=======
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
>>>>>>> Stashed changes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
