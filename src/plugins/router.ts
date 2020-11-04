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
    path: "/about",
    name: "About",
    component: () => import("@/views/About/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
