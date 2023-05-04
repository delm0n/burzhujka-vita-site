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
import router from "./router/index.js";

import LazyLoad from "vanilla-lazyload";

let lazyLoadAnimation = new LazyLoad({
  elements_selector: ".image-lazy__animation",
  class_loaded: "image-lazy--loaded",
  load_delay: 600,
});
let lazyLoad = new LazyLoad({
  elements_selector: ".image-lazy",
  class_loaded: "image-lazy--loaded",
  load_delay: 100,
});

createApp(App)
  .use(store)
  .use(router)
  .mixin({
    created: function () {
      this.gsap = gsap;
      this.lazyLoadAnimation = lazyLoadAnimation;
      this.lazyLoad = lazyLoad;
    },
    mounted: function () {
      this.$nextTick(() => {
        this.lazyLoadAnimation.update();
        this.lazyLoad.update();
      });
    },
  })
  .mount("#app");
