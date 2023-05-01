<template>
  <section id="made">
    <CharacteristicItem :char="made">
      <div class="made-items">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in made.slider"
            :key="index"
            class="swiper-slide"
          >
            <ImageLazy :src="item.src" :alt="item.alt" :srcMedia="425" />
          </div>
        </div>
        <SwiperNavigation
          navClass="made-navigation"
          prevClass="made-btn__prev"
          nextClass="made-btn__next"
        />
        <div class="swiper-pagination made-pagination"></div>
      </div>
      <div class="ref-container">
        <a href="https://helicon-prom.ru/" target="_blank"
          >Сайт завода изготовителя печек-буржуек</a
        >
      </div>
    </CharacteristicItem>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { made } from "../types/Characteristic";
import CharacteristicItem from "./CharacteristicItem.vue";
import {
  Swiper,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import ImageLazy from "../helpers/ImageLazy.vue";

export default defineComponent({
  data() {
    return {
      made: made,
    };
  },
  components: {
    CharacteristicItem,
    ImageLazy,
    SwiperNavigation,
  },

  mounted() {
    const myPresentsSwiper = new Swiper(".made-items", {
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        scale: 0.85,
        stretch: 200,
        modifier: 1,
        slideShadows: false,
        depth: 200,
      },
      allowTouchMove: false,
      centeredSlides: true,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 0,

      navigation: {
        nextEl: ".made-btn__next",
        prevEl: ".made-btn__prev",
      },

      pagination: {
        el: ".made-pagination",
        type: "bullets",
        clickable: false,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      modules: [Pagination, Autoplay, EffectCoverflow, Navigation],
    });
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#made {
  overflow: hidden;
  h2 {
    @include fluidFontSize(28, 47, 768, 1920);
    width: calc(100% + 2%);
    transform: translateX(-1%);
  }

  .made-items {
    .made-navigation {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      opacity: 0;

      .made-btn__prev,
      .made-btn__next {
        width: 12%;
        cursor: pointer;
      }
    }

    .swiper-slide {
      opacity: 0.5;
      filter: blur(0.5px);
      transition: all 0.5s;

      &-active {
        opacity: 1;
        filter: blur(0px);
      }
    }

    .made-pagination {
      position: static;

      .swiper-pagination-bullet {
        background: transparent;
        border: 2px solid $main;
        width: 17px;
        height: 17px;
        &-active {
          background: $main;
        }
      }
    }
  }

  .characteristic-wraper {
    @media (max-width: 992px) {
      grid-template-rows: auto auto 11px auto !important;
    }
  }

  .characteristic-wraper__media {
    overflow: hidden;

    img {
      width: 100%;
      max-width: 500px;
      margin: 0 auto 20px;
      display: block;

      @media (max-width: 1280px) {
        width: 80%;
      }
    }
  }

  .characteristic-wraper__content {
    p {
      padding-left: calc(14px + 13px);
      position: relative;

      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: "";

        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNy42MTExMUw2IDEyLjVMMTUgMS41IiBzdHJva2U9IiNFMkJDODUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
          no-repeat;
        height: 16px;
        width: 16px;
        background-size: 100%;
        background-position: center;
      }
    }
  }

  a {
    @include linkHover($gray);
  }

  .ref-container {
    margin-top: 27px;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }

    a {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
    }
  }
}
</style>
