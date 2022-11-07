import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/ContSection",
    name: "ContSection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/ContSection.vue"),
  },
  {
    path: "/",
    name: "ChageInfoRetv",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/ChageInfoRetv.vue"),
  },
  {
    path: "/common",
    name: "Common",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/CommonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
