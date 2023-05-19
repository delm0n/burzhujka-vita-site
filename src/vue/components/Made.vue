<template>
  <section id="made">
    <vita-block :char="made">
      <div class="made-items">
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
                :media="'(max-width:' + 425 + 'px)'"
                :type="getWebp == 'webp' ? 'image/webp' : 'image/png'"
              />

              <img
                :src="
                  'build/images/' +
                  item.src +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                :alt="item.alt"
              />
            </picture>
          </div>
        </div>
        <swiper-navigation
          navClass="made-navigation"
          prevClass="made-btn__prev"
          nextClass="made-btn__next"
        />
      </div>
      <div class="ref-container">
        <a href="https://helicon-prom.ru/" target="_blank"
          >Сайт завода изготовителя печек-буржуек</a
        >
      </div>
    </vita-block>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VitaBlock from "../helpers/VitaBlock.vue";
import { Swiper, Autoplay, Navigation } from "swiper";
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import ImageLazy from "../helpers/ImageLazy.vue";
import IImage from "../types/IImage";
import IVitaContent from "../types/IVitaContent";

let made: IVitaContent = {
  title: "Вы заказываете печь-буржуйку напрямую с завода!",
  subtitle: "Для вас это означает:",
  anymedia: true,
  text: [
    "Без посредников и наценок",
    "Печки всегда в наличии,  отправка <br> будет&nbsp;незамедлительно",
    "Вся продукция проходит отдел ОТК — брак исключён",
    `Мы работаем в соответствии с российским законодательством, а это значит, 
    что все наши гарантии зафиксированны в <a target="_blank" href="static/uploadupdate/oferta-rus.pdf">"Договоре"</a>`,
  ],
};

export default defineComponent({
  data() {
    return {
      made: made,
      slider: [
        {
          src: "made-2",
          alt: "Печь без брака",
        },
        {
          src: "made-3",
          alt: "Быстрая доставка печей",
        },
        {
          src: "made-4",
          alt: "Закажите печь с завода",
        },
      ] as Array<IImage>,
    };
  },
  components: {
    VitaBlock,
    ImageLazy,
    SwiperNavigation,
  },

  mounted() {
    const myPresentsSwiper = new Swiper(".made-items", {
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".made-btn__next",
        prevEl: ".made-btn__prev",
      },
      modules: [Navigation, Autoplay],
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

  .characteristic-item-container {
    @media (max-width: 768px) {
      position: relative;
      padding: 34px 34px 80px;
    }
    @media (max-width: 768px) {
      position: relative;
      padding: 24px 14px 80px;
    }
  }

  .made-items {
    @media (min-width: 769px) {
      position: relative;
    }
    .made-navigation {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 99%;
      top: 50%;
      left: 50%;
      transform: translate(-50%);

      @media (max-width: 768px) {
        top: auto;
        bottom: 20px;
        transform: translateX(-50%);
        width: 130px;
      }
    }

    .swiper-slide {
      border-radius: 10px;
    }
  }

  .characteristic-wraper {
    @media (max-width: 567px) {
      gap: 24px;
    }
  }

  .characteristic-wraper__media {
    overflow: hidden;

    img {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      display: block;

      border-radius: 10px;

      @media (max-width: 1280px) {
        width: 80%;
      }

      @media (max-width: 992px) {
        aspect-ratio: 208/191;
      }

      @media (max-width: 425px) {
        max-width: 100%;
        aspect-ratio: 85/78;
        width: auto;
      }
    }
  }

  .characteristic-wraper__content {
    p {
      padding-left: calc(14px + 13px);
      position: relative;

      @media (max-width: 375px) {
        br {
          display: none;
        }
      }

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
      line-height: 115%;

      @include fluidFontSize(20, 22, 992, 1920);
    }
  }
}
</style>
