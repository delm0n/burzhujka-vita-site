<template>
  <section id="characteristic">
    <div class="characteristic-items">
      <div class="swiper-wrapper">
        <CharacteristicItem
          class="swiper-slide"
          v-for="(char, index) in characteristics"
          :key="index"
          :char="char"
          :reverse="index % 2 == 1 ? true : false"
        />
      </div>

      <SwiperNavigation
        navClass="characteristic-navigation"
        prevClass="characteristic-btn__prev"
        nextClass="characteristic-btn__next"
      />
    </div>
  </section>
</template>

<script lang="ts">
import CharacteristicItem from "./CharacteristicItem.vue";
import { defineComponent } from "vue";
import { characteristics } from "../types/Characteristic";
import SwiperSettings from "../mixins/SwiperSettings.js";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";

export default defineComponent({
  components: {
    CharacteristicItem,
    SwiperNavigation,
  },

  data() {
    return {
      characteristics: characteristics,
    };
  },
  mixins: [SwiperSettings],
  mounted() {
    //mixin
    this.swiperInit(
      ".characteristic-items",
      ".characteristic-btn__next",
      ".characteristic-btn__prev"
    );
  },
});
</script>

<style lang="scss">
#characteristic {
  .characteristic-items {
    width: 100%;
    overflow: hidden;
    position: relative;

    .characteristic-item-container {
      @media (max-width: 992px) {
        padding: 34px 34px calc(24px + 24px + 40px);
      }

      @media (max-width: 576px) {
        padding: 24px 14px calc(24px + 24px + 40px);
      }
    }
  }

  .characteristic-navigation {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      position: absolute;
      bottom: 104px;
      gap: 35px;
      left: 50%;
      z-index: 5;
      transform: translateX(-50%);
    }

    // @media (max-width: 768px) {
    //   bottom: 84px;
    // }
  }

  .swiper-wrapper {
    @media (min-width: 993px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      // gap: 100px;

      @media (max-width: 1280px) {
        grid-template-rows: repeat(4, auto);
        align-items: center;
      }
    }
  }

  article.characteristic-item .characteristic-wraper__media {
    @media (max-width: 992px) {
      max-height: 350px;
    }

    @media (max-width: 576px) {
      max-height: 240px;
    }
  }
}
</style>
