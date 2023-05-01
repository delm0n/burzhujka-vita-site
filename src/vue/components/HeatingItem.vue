<template>
  <article class="heating-item">
    <div class="heating-item-container">
      <div class="heating-wrap">
        <div class="heating-wrap__image">
          <ImageLazy :src="heat.img.src" :alt="heat.img.alt" :srcMedia="425" />
        </div>
        <div class="gorizontal-line"></div>
        <div class="heating-wrap__features">
          <h3 v-html="heat.title"></h3>
          <div
            v-for="(item, index) in heat.items"
            :key="index"
            class="features-item"
          >
            <IconPlus :color="item.icon" />
            <p v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import ImageLazy from "../helpers/ImageLazy.vue";
import IconPlus from "../helpers/IconPlus.vue";
import IHeating from "../types/Heating";

export default defineComponent({
  props: {
    heat: {
      type: Object as PropType<IHeating>,
      required: true,
    },
  },
  components: {
    ImageLazy,
    IconPlus,
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

article.heating-item {
  height: auto;

  .heating-item-container {
    @extend %shadow-block;
    height: 100%;
    padding: 40px;

    @media (max-width: 1280px) {
      padding: 30px 20px;
    }

    @media (max-width: 1024px) {
      padding: 25px 14px 30px;
    }

    @media (max-width: 992px) {
      max-width: calc(720px - 10px * 2);
      width: 100%;
      margin: 0 auto;
      padding: 34px 34px 88px;
    }

    @media (max-width: 768px) {
      max-width: calc(540px - 10px * 2);
    }

    @media (max-width: 576px) {
      padding: 24px 14px 88px;
    }
  }
}

.heating-wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 992px) {
    @include mobileContent();
  }
  &__image {
    width: 100%;
    img {
      width: 100%;

      @media (max-width: 992px) {
        max-width: 400px;
        margin: 0 auto;
        display: block;
        width: 92%;
      }

      @media (max-width: 425px) {
        width: auto;
      }
    }
  }

  &__features {
    h3 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 115%;
      color: $gray;
      margin: 20px 0;

      @include fluidFontSize(20, 24, 993, 1920);

      @media (max-width: 1280px) {
        margin-top: 0;
      }
    }

    .features-item {
      @include flex-center-x(12px);

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 1280px) {
          margin-bottom: 18px;
        }

        @media (max-width: 576px) {
          margin-bottom: 22px;
        }
      }

      svg {
        margin-top: 2px;

        @media (max-width: 1366px) {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 576px) {
          width: 21px;
          height: 21px;
          margin-top: 0px;
        }
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 125%;
        color: #323232;

        @include fluidFontSize(16, 22, 993, 1920);

        @media (max-width: 576px) {
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
}
</style>
