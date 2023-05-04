<template>
  <section id="peculiar">
    <div class="container">
      <div class="title">
        <h2>Узнайте про особенности работы буржуйки</h2>
      </div>
      <div class="peculiar-items">
        <div class="swiper-wrapper">
          <article
            v-for="(peculiar, index) in peculiars"
            :key="index"
            class="swiper-slide peculiar-wrapper"
          >
            <div class="peculiar-wrapper__image">
              <div
                :class="[
                  peculiar.img.src == 'peculiars-1'
                    ? 'img--bottom'
                    : peculiar.img.src == 'peculiars-7'
                    ? 'img--left'
                    : '',
                  ' img--container',
                ]"
              >
                <ImageLazy
                  :animation="false"
                  :src="peculiar.img.src"
                  :alt="peculiar.img.alt"
                  :srcMedia="992"
                />
              </div>
            </div>

            <div class="peculiar-wrapper__content">
              <div class="content-line"></div>
              <div class="content-content">
                <h4 v-html="peculiar.title"></h4>
                <p v-html="peculiar.text"></p>
              </div>
            </div>
          </article>
        </div>
        <SwiperNavigation
          navClass="peculiar-navigation"
          prevClass="peculiar-btn__prev"
          nextClass="peculiar-btn__next"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, Navigation } from "swiper";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import ImageLazy from "../helpers/ImageLazy.vue";
import { peculiars } from "../types/Peculiars";

export default defineComponent({
  data() {
    return {
      peculiars: peculiars,
    };
  },
  mounted() {
    const myPresentsSwiper = new Swiper(".peculiar-items", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".peculiar-btn__next",
        prevEl: ".peculiar-btn__prev",
      },
      modules: [Navigation],
    });
  },
  components: {
    ImageLazy,
    SwiperNavigation,
  },
});
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#peculiar {
  // @extend %indent-p;
  overflow: hidden;
  padding-bottom: 48px;

  .peculiar-items {
    position: relative;

    .swiper-slide {
      opacity: 0;
      transition: opacity 0.1s 0s;

      &-active {
        opacity: 1;
        transition: opacity 0s 0s;
      }
    }

    .peculiar-navigation {
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

      .peculiar-btn__prev,
      .peculiar-btn__next {
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

      .peculiar-btn__prev {
        left: 25px;
      }

      .peculiar-btn__next {
        right: 25px;
      }
    }
  }

  article {
    @extend %shadow-block;
    padding: 0 70px;
    display: grid;
    height: auto;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 576px) {
      padding: 0 14px;
    }
  }

  .peculiar-wrapper {
    &__image {
      height: 100%;

      img {
        width: 100%;

        @media (max-width: 992px) {
          max-width: 350px;
          width: 100%;
          margin: 24px auto;
          display: block;
        }
      }
    }

    &__content {
      @include flex-center-x(50px);

      padding: 60px 0;

      @media (max-width: 1366px) {
        column-gap: 40px;
      }

      @media (max-width: 1280px) {
        column-gap: 30px;
        padding: 40px 0px;
      }

      @media (max-width: 992px) {
        column-gap: 0px;
        padding: 0px 0px calc(24px + 24px + 40px);

        @include mobileContent();
      }

      .content-line {
        height: 100%;
        background: #cecece;
        width: 2px;

        @media (max-width: 992px) {
          display: none;
        }
      }

      .content-content {
        h4 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 115%;
          color: $gray;
          margin-bottom: 30px;

          @media (max-width: 1024px) {
            margin-bottom: 24px;
          }

          @media (max-width: 768px) {
            font-size: 20px;
            line-height: 27px;
          }
        }

        p {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 26px;
          color: $gray;

          @include fluidFontSize(18, 22, 993, 1920);

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 19px;
          }

          span {
            font-weight: 700;
          }
        }
      }
    }

    .img--bottom {
      display: flex;
      align-items: flex-end;
      height: 100%;

      @media (max-width: 992px) {
        justify-content: center;
      }
      img {
        display: block;
        width: 94%;
        margin-right: auto;
      }
    }

    .img--left {
      img {
        width: 90%;
        display: block;
        margin-left: auto;
        @media (max-width: 992px) {
          height: auto;
          margin-bottom: -20px;
        }
      }
    }

    .img--container {
      @media (max-width: 992px) {
        min-height: 312px;
      }

      @media (max-width: 768px) {
        min-height: 200px;
      }
    }
  }
}
</style>