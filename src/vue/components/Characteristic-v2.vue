<template>
  <section id="characteristic">
    <div class="container">
      <div class="characteristic-items">
        <div class="swiper-wrapper">
          <characteristic-warm class="swiper-slide" />
          <characteristic-beauty class="swiper-slide" />
          <characteristic-anything class="swiper-slide" />
          <characteristic-format class="swiper-slide" />
          <characteristic-heat class="swiper-slide" />
          <characteristic-round class="swiper-slide" />
        </div>
        <swiper-navigation
          navClass="characteristic-navigation"
          prevClass="characteristic-btn__prev"
          nextClass="characteristic-btn__next"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import { mapGetters } from "vuex";
import { Swiper, Navigation } from "swiper";

import CharacteristicWarm from "./CharacteristicWarm.vue";
import CharacteristicHeat from "./CharacteristicHeat.vue";
import CharacteristicRound from "./CharacteristicRound-v2.vue";
import CharacteristicBeauty from "./CharacteristicBeauty.vue";
import CharacteristicAnything from "./CharacteristicAnything.vue";
import CharacteristicFormat from "./CharacteristicFormat.vue";

export default defineComponent({
  components: {
    SwiperNavigation,
    CharacteristicWarm,
    CharacteristicHeat,
    CharacteristicRound,
    CharacteristicBeauty,
    CharacteristicAnything,
    CharacteristicFormat,
  },

  // computed: mapGetters(["isTest"]),

  mounted() {
    const myPresentsSwiper = new Swiper(".characteristic-items", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      grabCursor: true,
      allowTouchMove: false,
      loop: true,
      navigation: {
        nextEl: ".characteristic-btn__next",
        prevEl: ".characteristic-btn__prev",
      },
      modules: [Navigation],
    });
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#characteristic {
  overflow: hidden;
  @extend %indent-p;
  .container {
    position: relative;
  }

  .vita-item .vita-wraper__media {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    opacity: 0;
    height: auto;
    transition: opacity 0.3s;

    &-active {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }

  ul {
    margin: 20px 0 30px;
    @media (max-width: 1024px) {
      margin: 15px 0 25px;
    }
  }

  .media--img {
    img {
      width: 100%;

      @media (max-width: 992px) {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }

  .vita-item {
    @media (max-width: 992px) {
      .vita-wraper {
        grid-template-rows: auto 400px 2px auto;
        .media--img {
          @media (min-width: 376px) {
            height: 100%;
            aspect-ratio: 318/317;
            margin: auto;
          }
        }
      }
      padding-bottom: calc(34px + 24px + 40px);
    }

    @media (max-width: 576px) {
      padding-bottom: calc(24px + 24px + 40px);

      .vita-wraper {
        grid-template-rows: auto 280px 2px auto;
      }
    }

    .vita-wraper__title h2 {
      @media (max-width: 1440px) and (min-width: 993px) {
        width: calc(100% + 5px);
      }
    }
  }

  .characteristic-navigation {
    @media (max-width: 992px) {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: auto;
      bottom: 30px;
      transform: translateX(-50%);
      left: 50%;
      width: 130px;
    }

    .characteristic-btn__prev,
    .characteristic-btn__next {
      position: absolute;
      z-index: 5;
      top: 50%;
      transform: translateY(-50%);

      @media (max-width: 992px) {
        position: static;
        transform: translateY(0);
        left: auto;
        right: auto;
      }
    }

    .characteristic-btn__prev {
      left: 5px;
    }

    .characteristic-btn__next {
      right: 5px;
    }
  }
}
</style>
