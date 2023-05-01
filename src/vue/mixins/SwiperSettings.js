import { Swiper, Navigation } from "swiper";

export default {
  methods: {
    swiperInit(swiper, next, prev) {
      let myPresentsSwiper;
      const presentsSwiper = () => {
        myPresentsSwiper = new Swiper(swiper, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          modules: [Navigation],
        });
      };

      const presentsSwiperbreakpoint = window.matchMedia("(min-width: 993px)");
      const breakpointChecker = () => {
        if (!presentsSwiperbreakpoint.matches) {
          return presentsSwiper();
        } else {
          if (myPresentsSwiper) {
            return myPresentsSwiper.destroy(true, true);
          }
        }
      };

      presentsSwiperbreakpoint.addListener(breakpointChecker);
      breakpointChecker();
    },
  },
};
