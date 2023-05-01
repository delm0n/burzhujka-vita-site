<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    :class="color"
  >
    <circle cx="16" cy="16" r="14.7" stroke="white" stroke-width="2.6" />
    <path class="vertical" d="M14.75 8.09961H16H17.25V23.8996H14.75V8.09961Z" />
    <path d="M8.09961 17.25V16V14.75H23.8996V17.25H8.09961Z" />
  </svg>
</template>

<script lang="ts">
import Colors from "../types/ColorsEnum";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String as PropType<Colors>,
      default: Colors.White,
    },
  },
});
</script>

<style lang="scss" scoped>
$colors: (
  "white": #fff,
  "green": #468217,
  "red": #d65555,
);

svg {
  flex-shrink: 0;
  @each $name, $color in $colors {
    &.#{$name} {
      circle {
        stroke: $color;
      }

      path {
        fill: $color;
      }

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  &.red {
    .vertical {
      display: none;
    }
  }

  &.white {
    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
    filter: drop-shadow(0px 2px 5px rgb(255 255 255 / 0));
    transition: all 0.8s;

    &:hover {
      filter: drop-shadow(0px 2px 5px rgb(255 255 255 / 0.6));
      transform: scale(1.05);
    }
  }
}
</style>
