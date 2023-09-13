<template>
  <section id="heating">
    <div class="container">
      <div class="title">
        <h2>Варианты обогрева</h2>
        <p>На что стоит обратить внимание, чтобы принять решение?</p>
      </div>

      <div class="heating-items">
        <div class="swiper-wrapper">
          <heating-item
            v-for="(heat, index) in heatings"
            :key="index"
            :heat="heat"
            class="swiper-slide"
          />
        </div>

        <swiper-navigation
          navClass="heating-navigation"
          prevClass="heating-btn__prev"
          nextClass="heating-btn__next"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Colors from "../types/ColorsEnum";
import IHeating from "../types/IHeating";
import HeatingItem from "./HeatingItem.vue";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import { Swiper, Navigation, FreeMode } from "swiper";

let heatings: Array<IHeating> = [
  {
    title: "Конвектор/тепловая пушка",
    img: {
      src: "heating-analog-1",
      alt: "Аналог буржуйки VITA",
    },
    items: [
      {
        icon: Colors.Red,
        text: "Мощность — до 2,5&nbsp;кВт тепла",
      },
      {
        icon: Colors.Red,
        text: "Большой расход электричества — 1150&nbsp;кВт&nbsp;в&nbsp;месяц",
      },
      {
        icon: Colors.Red,
        text: "Часто ломается, трудно починить самостоятельно",
      },
      {
        icon: Colors.Red,
        text: "Не мобильна, не работает без электричества",
      },
      {
        icon: Colors.Red,
        text: "Опасно использовать дольше 4&nbsp;часов подряд",
      },
    ],
  },
  {
    title: "Отопитель на дизеле",
    img: {
      src: "heating-analog-2",
      alt: "Аналог буржуйки VITA",
    },
    items: [
      {
        icon: Colors.Red,
        text: "Мощность — до 5&nbsp;кВт&nbsp;тепла",
      },
      {
        icon: Colors.Red,
        text: "Большой расход топлива — 0,9&nbsp;л/час",
      },
      {
        icon: Colors.Red,
        text: "Часто ломается, трудно починить самостоятельно",
      },
      {
        icon: Colors.Green,
        text: "Мобильная конструкция. Имеются разные&nbsp;размеры",
      },
      {
        icon: Colors.Red,
        text: "Создаёт много шума и неприятный&nbsp;запах",
      },
    ],
  },
  {
    title: "Буржуйка VITA",
    img: {
      src: "heating-vita",
      alt: "Буржуйка VITA в сравнении с аналогами",
    },
    items: [
      {
        icon: Colors.Green,
        text: "Мощность — до 15&nbsp;кВт&nbsp;тепла",
      },
      {
        icon: Colors.Green,
        text: "Работает на любом твёрдом&nbsp;топливе",
      },
      {
        icon: Colors.Green,
        text: "Простая конструкция, в которой просто нечему&nbsp;ломаться",
      },
      {
        icon: Colors.Green,
        text: "Печка может работать где&nbsp;угодно",
      },
      {
        icon: Colors.Green,
        text: "Легко разбирать и&nbsp;переносить",
      },
      {
        icon: Colors.Green,
        text: "Быстрая установка",
      },
    ],
  },
];

export default defineComponent({
  components: {
    HeatingItem,
    SwiperNavigation,
  },
  data() {
    return {
      heatings: heatings.reverse(),
    };
  },

  mounted() {
    let myPresentsSwiper;
    const presentsSwiper = () => {
      myPresentsSwiper = new Swiper(".heating-items", {
        // slidesPerView: 1,
        // slidesPerGroup: 1,
        // spaceBetween: 20,
        loop: false,
        grabCursor: true,
        freeMode: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,

        breakpoints: {
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },

          993: {
            spaceBetween: 30,
            slidesPerView: "auto",
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },

        navigation: {
          nextEl: ".heating-btn__next",
          prevEl: ".heating-btn__prev",
        },
        modules: [Navigation, FreeMode],
      });
    };

    presentsSwiper();

    // const presentsSwiperbreakpoint = window.matchMedia("(min-width: 993px)");
    // const breakpointChecker = () => {
    //   if (!presentsSwiperbreakpoint.matches) {
    //     return presentsSwiper();
    //   } else {
    //     if (myPresentsSwiper) {
    //       return myPresentsSwiper.destroy(true, true);
    //     }
    //   }
    // };

    // presentsSwiperbreakpoint.addListener(breakpointChecker);
    // breakpointChecker();
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#heating {
  overflow: hidden;

  .heating-items {
    // width: 100%;
    position: relative;

    padding-bottom: 100px;

    @media (max-width: 992px) {
      padding-bottom: 60px;
      // overflow: hidden;

      .swiper-slide {
        opacity: 0;
        transition: opacity 0.1s 0s;

        &-active {
          opacity: 1;
        }
      }
    }

    @media (max-width: 576px) {
      padding: 0 10px 60px;
    }
  }

  .swiper-button-disabled {
    opacity: 0.7;
  }

  .heating-navigation {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      position: absolute;
      bottom: 84px;
      gap: 35px;
      left: 50%;
      z-index: 5;
      transform: translateX(-50%);
    }
  }
}
</style>
