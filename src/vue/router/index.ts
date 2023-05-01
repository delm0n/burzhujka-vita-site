import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
import Opt from "../views/Opt.vue";
import Dostavka from "../views/Dostavka.vue";

const routes: Array<RouteRecordRaw> = [
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
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
