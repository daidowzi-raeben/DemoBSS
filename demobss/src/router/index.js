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
    path: "/ComCdAdm",
    name: "ComCdAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/ComCdAdm.vue"),
  },
  {
    path: "/AutAdm",
    name: "AutAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AutAdm.vue"),
  },
  {
    path: "/AutMappgAdm",
    name: "AutMappgAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AutMappgAdm.vue"),
  },
  {
    path: "/HoliAdm",
    name: "HoliAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/HoliAdm.vue"),
  },
  {
    path: "/CustInfoRetvAdm",
    name: "CustInfoRetvAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/CustInfoRetvAdm.vue"),
  },
  {
    path: "/MaskRelesAdm",
    name: "MaskRelesAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/MaskRelesAdm.vue"),
  },
  {
    path: "/BatchSclgAdm",
    name: "BatchSclgAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/BatchSclgAdm.vue"),
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
