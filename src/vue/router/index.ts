import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
import Opt from "../views/Opt.vue";
import Dostavka from "../views/Dostavka.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/burzhujka-vita-site",
    name: "main",
    component: Main,
  },
  {
    path: "burzhujka-vita-site/opt",
    name: "opt",
    component: Opt,
  },
  {
    path: "burzhujka-vita-site/dostavka",
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
