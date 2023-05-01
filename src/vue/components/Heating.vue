<template>
  <section id="heating">
    <div class="heating-container">
      <div class="title">
        <h2>Варианты обогрева</h2>
        <p>На что стоит обратить внимание, чтобы принять решение?</p>
      </div>

      <div class="heating-items">
        <div class="swiper-wrapper">
          <HeatingItem
            v-for="(heat, index) in heatings"
            :key="index"
            :heat="heat"
            class="swiper-slide"
          />
        </div>

        <SwiperNavigation
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
import { heatings } from "../types/Heating";
import HeatingItem from "./HeatingItem.vue";
import SwiperSettings from "../mixins/SwiperSettings.js";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";

export default defineComponent({
  components: {
    HeatingItem,
    SwiperNavigation,
  },
  data() {
    return {
      heatings: window.innerWidth > 992 ? heatings : heatings.reverse(),
    };
  },
  mixins: [SwiperSettings],
  mounted() {
    //mixin
    this.swiperInit(
      ".heating-items",
      ".heating-btn__next",
      ".heating-btn__prev"
    );
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#heating {
  .heating-container {
    @media (min-width: 993px) {
      max-width: 1610px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
  }

  .heating-items {
    width: 100%;
    position: relative;

    padding-bottom: 100px;

    @media (max-width: 992px) {
      padding-bottom: 60px;
      overflow: hidden;
    }

    @media (max-width: 576px) {
      padding: 0 10px 60px;
    }
  }

  .swiper-wrapper {
    @media (min-width: 993px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @include gapWrapper();
    }
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
