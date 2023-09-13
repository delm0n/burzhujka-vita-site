<template>
  <div class="characteristic-beauty">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p>
          Чёрная печь с резными узорами по металлу — находка для ценителей
          классики, лофта и винтажного стиля. Буржуйка
          <span>не требует много места</span> и
          <span>органично смотрится</span> практически
          <span>в любом помещении</span>:
        </p>

        <ul>
          <li class="asp">Загородном доме</li>
          <li class="asp">Гараже</li>
          <li class="asp">Даче</li>
        </ul>

        <p>
          <span>Экспериментируйте с дизайном и окружайте себя уютом</span> —
          попробуйте заменить металлическую дверцу стеклянной, чтобы наполнить
          дом красотой и, конечно же, — теплом.
        </p>
      </template>

      <template v-slot:media>
        <div class="beauty-items">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in slider"
              :key="index"
              class="swiper-slide"
            >
              <picture>
                <source
                  :srcset="
                    'build/images/x05/' +
                    item.src +
                    (getWebp == 'webp' ? '.webp' : '.png')
                  "
                  :media="'(max-width:' + 992 + 'px)'"
                  :type="getWebp == 'webp' ? 'image/webp' : 'image/png'"
                />

                <img
                  :src="
                    'build/images/' +
                    item.src +
                    (getWebp == 'webp' ? '.webp' : '.png')
                  "
                  :alt="item.alt"
                  loading="lazy"
                />
              </picture>
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
          <swiper-navigation
            navClass="beauty-navigation"
            prevClass="beauty-btn__prev"
            nextClass="beauty-btn__next"
          />
        </div>
      </template>
    </vita-item>
  </div>
</template>

<script>
import VitaItem from "../helpers/VitaItem.vue";
import { Swiper, Navigation } from "swiper";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    VitaItem,
    SwiperNavigation,
  },
  computed: mapGetters(["getWebp"]),

  data() {
    return {
      char: {
        title: "Красота и компактность",
        subtitle: "Буржуйка подчеркнёт любое дизайнерское решение",
      },

      slider: [
        {
          src: "char-beauty-1",
          alt: "Печь буржуйка интерьер",
        },
        {
          src: "char-beauty-2",
          alt: "Печь буржуйка куда поставить",
        },
        {
          src: "char-beauty-3",
          alt: "Печь буржуйка в помещении фото",
        },
        {
          src: "char-beauty-4",
          alt: "Печь буржуйка установка",
        },
      ],
    };
  },

  mounted() {
    const beautySwiper = new Swiper(".beauty-items", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 20,
      lazy: true,
      navigation: {
        nextEl: ".beauty-btn__next",
        prevEl: ".beauty-btn__prev",
      },
      modules: [Navigation],
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-beauty {
  .beauty-items {
    // @media (min-width: 769px) {
    position: relative;
    width: 100%;
    // }
    .beauty-navigation {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 99%;
      top: 50%;
      left: 50%;
      transform: translate(-50%);

      @media (max-width: 768px) {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    .swiper-slide {
      border-radius: 10px;
    }
  }

  .vita-wraper {
    grid-template-columns: 1fr 1fr;
    @media (min-width: 993px) {
      column-gap: 0 !important;
      &__line {
        display: none;
      }
    }

    @media (max-width: 992px) {
      grid-template-rows: auto auto 2px auto !important;
    }

    &__media {
      overflow: hidden;
      grid-column: 2/3;

      @media (max-width: 992px) {
        height: auto;
      }

      img {
        border-radius: 20px 0px 0px 20px;
        width: 100%;
        display: block;

        @media (min-width: 993px) {
          border-right: 2px solid #cecece;
        }

        @media (max-width: 992px) {
          border-radius: 20px;
          aspect-ratio: 259/227;
        }

        @media (max-width: 576px) {
          border-radius: 10px;
        }
      }
    }
    &__title,
    &__content {
      @media (min-width: 993px) {
        padding-right: 50px;
        @media (max-width: 1366px) {
          padding-right: 40px;
        }
        @media (max-width: 1280px) {
          padding-right: 30px;
        }
      }
    }
  }
}
</style>
