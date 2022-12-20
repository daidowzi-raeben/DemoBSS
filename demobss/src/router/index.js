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
      import(/* webpackChunkName: "about" */ "../pages/02/BillChage.vue"),
  },
  {
    path: "/ComCdAdm",
    name: "ComCdAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/05/ComCdAdm.vue"),
  },
  {
    path: "/AutAdm",
    name: "AutAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/05/AutAdm.vue"),
  },
  {
    path: "/AutMappgAdm",
    name: "AutMappgAdm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/05/AutMappgAdm.vue"),
  },
  {
    path: "/HoliAdm",
    name: "HoliAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/05/HoliAdm.vue"),
  },
  {
    path: "/CustInfoRetvAdm",
    name: "CustInfoRetvAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/05/CustInfoRetvAdm.vue"),
  },
  {
    path: "/MaskRelesAdm",
    name: "MaskRelesAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/05/MaskRelesAdm.vue"),
  },
  {
    path: "/BatchSclgAdm",
    name: "BatchSclgAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/05/BatchSclgAdm.vue"),
  },
  {
    path: "/BatchExeAdm",
    name: "BatchExeAdm",
    component: () =>
        import(/* webpackChunkName: "about" */ "../pages/05/BatchExeAdm.vue"),
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
