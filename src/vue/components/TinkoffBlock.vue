<template>
  <section id="tinkoff-block">
    <div class="container">
      <div class="tinkoff-block__container">
        <div class="tinkoff-title">
          <div class="title">
            <h2>Не откладывайте покупку на&nbsp;завтра!</h2>
            <p>
              Рассрочка от банка Тинькофф на 4 месяца без процентов
              и&nbsp;переплат
            </p>
          </div>
        </div>
        <div class="tinkoff-wrapper">
          <div class="features-box">
            <div
              v-for="(item, id) in featuresList"
              :key="id"
              class="features-box__item"
            >
              <p>
                {{ item.title }}
              </p>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>

          <div class="tinkoff-wrapper__content">
            <div class="step-box">
              <div v-for="(item, id) in steps" :key="id" class="step-box__row">
                <p>Шаг {{ id + 1 }}</p>
                <p>{{ item }}</p>
              </div>
            </div>

            <div class="offer-box">
              <div class="price">
                <div class="new-price">от 6990 ₽</div>
                <div class="old-price">11 790 ₽</div>
              </div>

              <a
                @click="changeUserRassrochka(true)"
                class="button"
                data-fancybox
                href="#modal-order"
              >
                <span class="button-background"></span>
                <span class="button-text">Купить в рассрочку</span>
              </a>
            </div>
          </div>
          <div class="tinkoff-wrapper__img">
            <div class="line"></div>
            <ImageLazy
              :alt="'Печь буржуйка в рассрочку'"
              :src="img"
              :srcMedia="992"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageLazy from "../helpers/ImageLazy.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      featuresList: [
        {
          title: "Без",
          text: "первоначального взноса",
        },
        {
          title: "Без",
          text: "процентов",
        },
        {
          title: "Первый платеж",
          text: "через месяц",
        },
      ],

      steps: [
        "Нажмите кнопку «Купить в рассрочку»",
        "В появившемся окне выберите нужную комплектацию",
        "Нажмите «Заказать»",
      ],
    };
  },
  components: {
    ImageLazy,
  },
  computed: {
    img() {
      return window.innerWidth < 1439 && window.innerWidth > 992
        ? "tinkoff-img--line"
        : "tinkoff-img";
    },
  },
  methods: mapMutations(["changeUserRassrochka"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff-block {
  @extend %indent-p;

  .tinkoff-block__container {
    @extend %shadow-block;
  }

  .tinkoff-title {
    padding: 0 60px;
    margin-bottom: 28px;
    @media (max-width: 992px) {
      padding: 0;
      margin-bottom: 18px;
    }

    .title {
      padding: 50px 0;
      background: #ffdd2d;
      border-radius: 14px;

      @media (max-width: 992px) {
        padding: 18px 0 13px;
        gap: 12px;
        margin-bottom: 37px;
      }

      h2,
      p {
        width: 95%;
        margin: 0 auto;
      }
    }
  }

  .tinkoff-wrapper {
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: minmax(350px, 700px) minmax(220px, 765px);
    gap: 10px;

    @media (max-width: 1439px) {
      grid-template-columns: minmax(350px, 700px) minmax(410px, 765px);
    }

    padding: 0 50px;
    @media (max-width: 1280px) {
      padding: 0 40px;
    }

    @media (max-width: 1024px) {
      padding-left: 40px;
      padding-right: 25px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }

    @media (max-width: 576px) {
      padding: 0 14px;
    }

    .features-box {
      grid-row: 1/2;
      grid-column: 1/2;
      display: flex;
      width: 100%;
      column-gap: 15px;
      max-width: 710px;

      @media (max-width: 1439px) {
        grid-column: 1/3;
        margin-top: 20px;
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
        align-items: center;
      }

      &__item {
        flex: 1 1 0;
        padding: 22px 0px;
        background: #ececec;
        border-radius: 20px;

        @media (max-width: 768px) {
          max-width: 300px;
          width: 100%;
          padding: 18px 0;
        }

        @media (max-width: 567px) {
          max-width: 280px;
          padding: 13px 0;
        }
      }

      p:first-child {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        text-align: center;
        color: #323232;

        @include fluidFontSize(20, 26, 992, 1440);

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      p:last-child {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #323232;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        @include fluidFontSize(16, 18, 992, 1440);
      }
    }

    &__content {
      grid-row: 2/3;
      grid-column: 1/2;
      padding-bottom: 40px;

      @media (max-width: 992px) {
        grid-row: 3/4;
      }

      @media (max-width: 576px) {
        padding-bottom: 24px;
      }

      .content-box {
        width: 700px;

        @media (max-width: 1366px) {
          width: 550px;
        }
      }

      .step-box {
        display: flex;
        flex-direction: column;
        gap: 36px;
        margin-top: 60px;

        @media (max-width: 1440px) {
          margin-top: 40px;
          gap: 26px;
        }

        @media (max-width: 992px) {
          margin-top: 36px;
          gap: 22px;
        }

        &__row {
          display: flex;
          gap: 14px;
          align-items: start;
        }

        p {
          font-family: "Roboto";
          font-style: normal;

          color: $gray;

          &:last-child {
            font-weight: 400;
            font-size: 22px;
            line-height: 115%;

            @media (max-width: 768px) {
              font-size: 16px;
            }

            @include fluidFontSize(16, 22, 320, 1440);
          }

          &:first-child {
            font-weight: 700;
            font-size: 24px;
            line-height: 115%;
            white-space: nowrap;
            flex-shrink: 0;

            @media (max-width: 768px) {
              font-size: 16px;
            }

            @include fluidFontSize(16, 24, 320, 1440);
          }
        }
      }

      .offer-box {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        @media (max-width: 1440px) {
          margin-top: 50px;
        }

        @media (max-width: 992px) {
          gap: 8px;
          align-items: center;
          margin-top: 40px;
        }

        .price {
          display: flex;
          flex-direction: column;

          @media (max-width: 992px) {
            flex-direction: row;
            align-items: center;
            gap: 8px;
          }
        }

        .new-price {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 115%;
          color: $gray;

          @media (max-width: 768px) {
            font-size: 20px;
          }

          @include fluidFontSize(20, 40, 320, 1440);
        }

        .old-price {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 115%;
          text-decoration-line: line-through;
          color: $gray;
          opacity: 0.6;

          @media (max-width: 768px) {
            font-size: 14px;
          }

          @include fluidFontSize(14, 24, 320, 1440);
        }

        .button {
          @extend %button;
          border-radius: 8px;
          .button-background {
            background-color: #ffdd2d;
            border-radius: 8px;
          }
          .button-text {
            color: $gray;
          }

          &:hover,
          &:focus {
            .button-background {
              background-color: #ffd600 !important;
              box-shadow: 0px 6px 24px rgba(#ffdd2d, 0.39) !important;
            }
          }
        }
      }
    }

    &__img {
      grid-row: 1/3;
      grid-column: 2/3;
      align-items: end;
      display: flex;
      margin-bottom: -5px;

      .line {
        height: 100%;
        width: 2px;
        background: #cecece;

        @media (max-width: 1439px) {
          display: none;
        }
      }

      @media (max-width: 992px) {
        grid-row: 1/2;
        grid-column: 1/2;
        margin-bottom: 0;
        justify-content: center;
      }

      img {
        width: 100%;
        display: block;

        @media (max-width: 576px) {
          width: calc(100% + 14px * 2);
          transform: translateX(-14px);
        }
      }
    }
  }
}
</style>
