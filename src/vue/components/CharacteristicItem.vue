<template>
  <article class="characteristic-item">
    <div class="container">
      <div class="characteristic-item-container">
        <div :class="['characteristic-wraper', { reverse: reverse }]">
          <div class="characteristic-wraper__title">
            <h2 v-html="char.title"></h2>
            <p v-if="char.subtitle" class="subtitle" v-html="char.subtitle"></p>
          </div>

          <div class="characteristic-wraper__content">
            <template v-if="char.anycontent">
              <slot></slot>
            </template>

            <template v-else>
              <p
                v-for="(par, index) in char.text"
                :key="index"
                v-html="par"
              ></p>
            </template>
          </div>
          <div class="characteristic-wraper__line">
            <div class="line"></div>
          </div>

          <div class="characteristic-wraper__media">
            <template v-if="char.anymedia">
              <slot></slot>
            </template>

            <template v-else>
              <template v-if="char.video">
                <VideoLazy :src="char.video" />
              </template>

              <template v-else>
                <ImageLazy
                  class="media--img"
                  :src="char.img.src"
                  :alt="char.img.alt"
                  :srcMedia="425"
                />
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ICharacter from "../types/Characteristic";
import type { PropType } from "vue";
import ImageLazy from "../helpers/ImageLazy.vue";
import VideoLazy from "../helpers/VideoLazy.vue";

export default defineComponent({
  props: {
    char: {
      type: Object as PropType<ICharacter>,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ImageLazy,
    VideoLazy,
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

article.characteristic-item {
  @extend %indent-p;

  .container {
    height: 100%;

    .characteristic-wraper {
      @media (min-width: 993px) {
        height: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    height: auto;
    padding-bottom: 80px;
  }

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }

  .characteristic-item-container {
    height: 100%;
    @extend %shadow-block;
    padding: 70px;

    @media (max-width: 1366px) {
      padding: 40px;
    }

    @media (max-width: 1280px) {
      padding: 30px;
    }

    @media (max-width: 992px) {
      padding: 34px 34px;
    }

    @media (max-width: 576px) {
      padding: 24px 14px;
    }
  }

  .characteristic-wraper {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 50px;

    @media (max-width: 1366px) {
      column-gap: 40px;
    }

    @media (max-width: 1280px) {
      align-items: center;
      column-gap: 30px;
    }

    // @media (max-width: 992px) {
    //   grid-template-columns: 1fr;
    //   grid-template-rows: auto 350px 11px auto;
    //   gap: 32px;
    //   @include mobileContent();
    // }

    // @media (max-width: 576px) {
    //   grid-template-rows: auto 240px 11px auto;
    // }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 11px auto;
      gap: 32px;
      @include mobileContent();
    }

    @media (max-width: 576px) {
      grid-template-rows: auto auto 11px auto;
    }

    &__media {
      grid-row: 1/3;
      grid-column: 3/4;

      @media (max-width: 992px) {
        grid-row: 2/3;
        grid-column: 1/2;
        height: 100%;
        // max-height: 350px;
      }

      // @media (max-width: 576px) {
      //   max-height: 240px;
      // }

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

      video {
        height: 100%;
        display: block;
        width: 100%;

        @media (max-width: 992px) {
          width: 95%;
          margin: 0 auto;
        }
      }
    }

    &__title {
      grid-row: 1/2;
      grid-column: 1/2;

      @media (max-width: 992px) {
        align-self: flex-start;
      }

      h2 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        color: $gray;
        font-size: 60px;
        margin-bottom: 30px;

        @include fluidFontSize(40, 60, 993, 1920);
        @media (max-width: 1366px) {
          margin-bottom: 22px;
        }
        @media (max-width: 992px) {
          text-align: center;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          font-weight: 700;
          font-size: 28px;
          line-height: 100%;
        }

        @media (max-width: 576px) {
          width: calc(100% + 6px);
          transform: translateX(-3px);
        }
      }

      p.subtitle {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        line-height: 115%;
        color: $gray;
        margin-bottom: 30px;
        font-size: 40px;

        @include fluidFontSize(24, 40, 993, 1920);

        @media (max-width: 1366px) {
          margin-bottom: 22px;
        }

        @media (max-width: 992px) {
          margin-bottom: 0;
          width: 80%;
          text-align: center;
        }

        @media (max-width: 768px) {
          font-weight: 500;
          font-size: 22px;
          line-height: 26px;
        }

        @media (max-width: 576px) {
          width: calc(100% + 18px);
          transform: translateX(-9px);
        }
      }
    }

    &__content {
      grid-row: 2/3;
      grid-column: 1/2;
      align-self: start;

      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: 1366px) {
        gap: 20px;
      }

      @media (max-width: 992px) {
        grid-row: 4/5;
        grid-column: 1/2;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        line-height: 115%;
        color: $gray;
        font-size: 22px;

        @include fluidFontSize(18, 22, 993, 1920);

        @media (max-width: 768px) {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
        }

        span {
          font-weight: 700;
        }
      }
    }

    &__line {
      grid-row: 1/3;
      grid-column: 2/3;

      @media (max-width: 992px) {
        grid-row: 3/4;
        grid-column: 1/2;
        margin: 5px auto;
      }

      .line {
        height: 100%;
        background: #cecece;
        @media (max-width: 992px) {
          height: 2px;
        }
      }

      height: 100%;
      width: 100%;
    }

    @media (min-width: 993px) {
      &.reverse {
        .characteristic-wraper__media {
          grid-row: 1/3;
          grid-column: 1/2;
        }

        .characteristic-wraper__content {
          grid-row: 2/3;
          grid-column: 3/4;
        }

        .characteristic-wraper__title {
          grid-row: 1/2;
          grid-column: 3/4;
        }
      }
    }
  }
}
</style>
