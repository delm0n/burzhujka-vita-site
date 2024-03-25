import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
// const Dostavka = () => import("../views/Dostavka.vue");
// const Opt = () => import("../views/Opt.vue");

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/opt",
    name: "opt",
    component: () => import(/* webpackChunkName: "opt" */ "../views/Opt.vue"),
    // component: Opt,
  },
  {
    path: "/dostavka",
    name: "dostavka",
    component: () =>
      import(/* webpackChunkName: "dostavka" */ "../views/Dostavka.vue"),
    // component: Dostavka,
  },
];

const router = createRouter({
  // history: createWebHistory("/burzhujka-vita-site/"),
  // history: createWebHistory(""),
  history:
    process.env.NODE_ENV == "development"
      ? createWebHistory("")
      : createWebHistory("/burzhujka-vita-site/"),

  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
