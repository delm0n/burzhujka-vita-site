<template>
  <div :class="navClass + ' swiper-nav__container'">
    <div :class="prevClass + ' swiper-btn__prev'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect y="0.5" width="40" height="40" rx="20" fill="#468217" />
        <path
          d="M22.4926 29.7727L24 28.2398L17.0149 21.1364L24 14.033L22.4926 12.5L14 21.1364L22.4926 29.7727Z"
          fill="white"
        />
      </svg>
    </div>
    <div :class="nextClass + ' swiper-btn__next'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect y="0.5" width="40" height="40" rx="20" fill="#468217" />
        <path
          d="M22.4926 29.7727L24 28.2398L17.0149 21.1364L24 14.033L22.4926 12.5L14 21.1364L22.4926 29.7727Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    prevClass: {
      type: String,
      required: true,
    },
    nextClass: {
      type: String,
      required: true,
    },
    navClass: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.swiper-nav__container {
  z-index: 5;
  .swiper-btn__next,
  .swiper-btn__prev {
    cursor: pointer;

    svg {
      transition: all 0.6s ease;
    }
  }

  .swiper-btn__prev {
    &:active {
      svg {
        transform: translateY(3px);
      }
    }
  }

  .swiper-btn__next {
    svg {
      transform: rotate(180deg);
    }

    &:active {
      svg {
        transform: rotate(180deg) translateY(-3px);
      }
    }
  }
}
</style>
