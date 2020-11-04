import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    alias: "/",
    component: () => import("@/views/Index/index.vue")
  },
  {
    path: "/products/hoisters",
    name: "Products.Hoisters",
    component: () => import("@/views/Products.Hoisters/index.vue")
  },
  {
    path: "/products/agv",
    name: "Products.Agv",
    component: () => import("@/views/Products.Agv/index.vue")
  },
  {
    path: "/products/rgv",
    name: "Products.Rgv",
    component: () => import("@/views/Products.Rgv/index.vue")
  },
  {
    path: "/products/asrs",
    name: "Products.Asrs",
    component: () => import("@/views/Products.Asrs/index.vue")
  },
  {
    path: "/products/palletizing-robot",
    name: "Products.PalletizingRobot",
    component: () => import("@/views/Products.PalletizingRobot/index.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About/index.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/views/Service/index.vue")
  },
  {
    path: "/prices/hoister",
    name: "HoisterPrice",
    component: () => import("@/views/Prices.Hoister/index.vue"),
    children: [
      {
        path: "created",
        name: "HoisterCreated",
        component: () => import("@/views/Prices.Hoister/Created.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
