import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
const Dostavka = () => import("../views/Dostavka.vue");
const Opt = () => import("../views/Opt.vue");

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/opt",
    name: "opt",
    component: Opt,
  },
  {
    path: "/dostavka",
    name: "dostavka",
    component: Dostavka,
  },
];

const router = createRouter({
  history: createWebHistory("/burzhujka-vita-site/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
