import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Login/Login.vue"),
  },
  {
    path: "/ContSection",
    name: "ContSection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/ContSection.vue"),
  },
  {
    path: "/ChageInfoRetv",
    name: "ChageInfoRetv",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/ChageInfoRetv.vue"),
  },
  {
    path: "/BillChage",
    name: "BillChage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/BillChage.vue"),
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
