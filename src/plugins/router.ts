import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { langMap } from "@/assets/lang";
import i18n from "./i18n";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Index Redirect",
    redirect: to => `/${to.params.lang}/home`
  },
  {
    path: "home",
    name: "Index",
    component: () => import("@/views/Index/index.vue")
  },
  {
    path: "products/hoisters",
    name: "Products.Hoisters",
    component: () => import("@/views/Products.Hoisters/index.vue")
  },
  {
    path: "products/agv",
    name: "Products.Agv",
    component: () => import("@/views/Products.Agv/index.vue")
  },
  {
    path: "products/rgv",
    name: "Products.Rgv",
    component: () => import("@/views/Products.Rgv/index.vue")
  },
  {
    path: "products/asrs",
    name: "Products.Asrs",
    component: () => import("@/views/Products.Asrs/index.vue")
  },
  {
    path: "products/palletizing-robot",
    name: "Products.PalletizingRobot",
    component: () => import("@/views/Products.PalletizingRobot/index.vue")
  },
  {
    path: "about",
    name: "About",
    component: () => import("@/views/About/index.vue")
  },
  {
    path: "service",
    name: "Service",
    component: () => import("@/views/Service/index.vue")
  },
  {
    path: "contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts/index.vue")
  },
  {
    path: "prices/hoister",
    name: "HoisterPrice",
    component: () => import("@/views/Prices.Hoister/index.vue"),
    children: [
      {
        path: "created",
        name: "HoisterCreated",
        component: () => import("@/views/Prices.Hoister/Created.vue")
      }
    ]
  },
  {
    path: ":catchAll(.*)",
    redirect: to => `/${(to.params as any).lang}`
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home Redirection",
      redirect: "/zh_CN"
    },
    {
      path: "/:lang",
      name: "Lang Middleware",
      component: () => import("@/views/Lang/index.vue"),
      children: routes
    }
  ],
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string || i18n.global.locale;

  if (!langMap[lang]) {
    next("/");
  } else {
    next();
  }

  i18n.global.locale = lang;
});

export default router;
