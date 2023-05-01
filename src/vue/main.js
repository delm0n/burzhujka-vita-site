import { createApp } from "vue";
import App from "./App.vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.config({ nullTargetWarn: false });

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";

//vuex хранилище, свзязывающее компоненты
import store from "./store/store.js";
// import router from "./router/index.ts";

createApp(App)
  .use(store)
  // .use(router)
  .mixin({
    created: function () {
      this.gsap = gsap;
    },
  })
  .mount("#app");
