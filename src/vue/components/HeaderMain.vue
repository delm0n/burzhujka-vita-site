<template>
  <div class="container">
    <div class="header-wrap">
      <div class="title">
        <h1>
          <span class="before">Круглая буржуйка</span>
          <span class="decr"
            >Самая бюджетная <br />
            конвекторная печь</span
          >
          <span class="name">VITA</span>
        </h1>
      </div>

      <div class="features-wrap">
        <div class="features">
          <div class="features-row">
            <div class="features-item">
              <h2>Повышенный КПД на 23%</h2>
              <p>
                Благодаря установленному в камере <br />
                буржуйки&nbsp;отбойнику
              </p>
            </div>

            <div class="features-item">
              <h2>На все случаи жизни</h2>
              <p>Обогреет палатку, дом, гараж</p>
            </div>
          </div>

          <div class="features-row">
            <div class="features-item">
              <h2>Стильный дизайн</h2>
              <p>
                Винтаж, лофт и английская классика — <br />
                в&nbsp;одном изделии
              </p>
            </div>

            <div class="features-item">
              <h2>Любые виды твёрдого топлива</h2>
              <p>Дрова, уголь, брикеты</p>
            </div>

            <div class="features-item features-item-mobile">
              <h2>Ограниченное предложение!</h2>
              <p>
                Закажите буржуйку VITA до {{ getLastDayOfMonth }} <br />
                со скидкой<span>&nbsp;49% </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="sale-wrap">
        <p>Ограниченное предложение!</p>
        <p>Закажите буржуйку VITA до {{ getLastDayOfMonth }} со скидкой 49%</p>
      </div>

      <div class="offer-wrap">
        <div class="offer">
          <a class="button" data-fancybox href="#modal-order">
            <span class="button-background"></span>
            <span class="button-text">Заказать</span>
          </a>

          <div class="prices">
            <p class="new-price">от 6990 ₽</p>
            <p class="old-price">11 790 ₽</p>
          </div>
        </div>
      </div>

      <div class="components-wrap">
        <div v-bind:class="['pech-bg ', getWebp]"></div>
        <div class="components">
          <div
            v-for="(item, index) in pluses"
            v-bind:key="index"
            :class="'component ' + item.class + ' will-change--active'"
            @click="tippyModal(item.content)"
            ref="icons"
          >
            <icon-plus :color="Colors.White" />
          </div>
        </div>

        <div class="video-container" style="height: 100%">
          <a class="video" data-fancybox href="https://youtu.be/Te5sxFVxLR8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
            >
              <path
                d="M66.4736 53.268C67.807 54.0378 67.807 55.9623 66.4736 56.7321L50.7631 65.8026C49.4298 66.5724 47.7631 65.6101 47.7631 64.0705L47.7631 45.9296C47.7631 44.39 49.4298 43.4277 50.7631 44.1975L66.4736 53.268Z"
                fill="#E2BC85"
              />
              <circle
                opacity="0.7"
                cx="55.7235"
                cy="54.2763"
                r="39.8026"
                fill="#E2BC85"
              />
              <circle opacity="0.5" cx="55" cy="55" r="54.5" stroke="#E2BC85" />
            </svg>

            <p>
              Посмотреть <br />
              видео
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import buttonAnimated from "../mixins/buttonAnimated.js";
import IconPlus from "../helpers/IconPlus.vue";
import Colors from "../types/ColorsEnum";
import { defineComponent } from "vue";
import tippy from "tippy.js";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      pluses: [
        {
          class: "component-1",
          content: `<span>Надёжный крюк-замок</span>Плотно прижимает дверь и перекрывает отверстие топки на&nbsp;2&nbsp;см. При этом ручка не нагревается — браться за неё можно голыми руками.`,
        },

        {
          class: "component-2",
          content: `<span>Удобный зольник-совок</span>Регулирует тягу первичного сгорания. Не имеет задней стенки, поэтому можно использовать как обычный совок для выноса золы.`,
        },

        {
          class: "component-3",
          content: `<span>Съёмная усиленная дверца</span>Когда нужно почистить печь, дверца снимается с петель.
            Её можно заменить на стеклянную или оставить стандартную, из углеродистой стали&nbsp;Ст3.`,
        },
      ],
      Colors,
    };
  },
  components: {
    IconPlus,
  },
  mounted() {
    window.addEventListener("DOMContentLoaded", () => {
      //@ts-ignore
      this.gsap.from(["header .component"], {
        delay: 1.3,
        duration: 0.6,
        opacity: 0,
        stagger: 0.4,
        scale: 0.8,
        onComplete: () => {
          document.querySelectorAll("header .component")!.forEach((element) => {
            element["style"] = "";
            setTimeout(
              () => element.classList.remove("will-change--active"),
              2000
            );
          });
        },
      });
    });

    this.$nextTick(function () {
      if (window.innerWidth > 768) {
        for (let index = 0; index < this.pluses.length; index++) {
          // setTimeout(() => {
          tippy("." + this.pluses[index].class + " svg", {
            content: this.pluses[index].content,
            theme: "green", //App.vue scss
            allowHTML: true,
            delay: 100,
            animation: "scale",
          });
          // }, 100);
        }
      }
    });
  },
  methods: {
    tippyModal(content) {
      if (window.innerWidth <= 768) {
        this.$emit("updateParent", content);

        setTimeout(() => {
          //@ts-ignore
          Fancybox.show([
            {
              src: "#component-modal",
            },
          ]);
        }, 10);
      }
    },
    tippyModalClose() {
      //@ts-ignore
      Fancybox.close();
    },
  },
  computed: mapGetters(["getWebp", "getLastDayOfMonth"]),
});
</script>

<style lang="scss">
.tippy-box[data-theme~="green"] {
  background: #468217 !important;
  border-radius: 20px;
  padding: 14px 16px;
  min-width: 404px !important;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none !important;
  }

  .tippy-content {
    span {
      display: block;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.03em;
      margin-bottom: 8px;
      color: #ffffff;

      @media (max-width: 768px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 31px;
      }
    }

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.03em;
    color: #ffffff;

    @media (max-width: 768px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../scss/_global.scss";
@import "tippy.js/animations/scale.css";

.header-wrap {
  padding: 260px 0 130px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  // @media (max-width: 1440px) {
  @media (max-width: 1537px) {
    padding: 160px 0 100px;
  }

  @media (max-width: 1366px) {
    padding: 180px 0 70px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 130px 0 0px;
    grid-template-rows: auto 375px auto auto;
  }

  @media (max-width: 576px) {
    padding: 100px 0 0px;
    grid-template-rows: auto 320px auto auto;
  }
}

.title {
  grid-column: 1/3;
  grid-row: 1/2;
  z-index: 5;

  @media (max-width: 992px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
}

.features-wrap {
  margin-top: 110px;
  grid-column: 1/2;
  grid-row: 2/3;
  z-index: 4;

  @media (max-width: 1537px) {
    // @media (max-width: 1440px) {

    margin-top: 50px;
  }
  @media (max-width: 1366px) {
    margin-top: 80px;
  }

  @media (max-width: 992px) {
    grid-column: 1/2;
    grid-row: 3/4;
    margin-top: 20px;
  }
}

.sale-wrap {
  grid-column: 1/3;
  grid-row: 3/4;
  margin: 85px 0 calc(8px + 5px);
  z-index: 4;
  width: max-content;

  @media (max-width: 992px) {
    display: none;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    color: #ffffff;
    &:first-child {
      font-weight: 700;
      font-size: 27px;
      line-height: 126%;
    }

    &:last-child {
      font-weight: 500;
      font-size: 22px;
      line-height: 34px;

      span {
        font-weight: 900;
        font-size: 26px;
        line-height: 33px;
      }
    }
  }
}

.offer-wrap {
  margin-top: 58px;
  grid-column: 1/2;
  grid-row: 4/5;
  z-index: 4;
  width: max-content;

  @media (max-width: 1366px) {
    margin-top: 80px;
  }

  @media (max-width: 992px) {
    width: auto;
    grid-column: 1/2;
    grid-row: 4/5;
    margin-top: 48px;
    margin-bottom: 30px;
  }
}

.components-wrap {
  grid-column: 1/3;
  grid-row: 2/5;
  z-index: 2;

  @media (max-width: 992px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
}

h1 {
  display: grid;
  grid-template-columns: 606px 1fr;
  column-gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 3fr 2fr;
    width: 100%;
    max-width: 290px;
    align-items: center;
    gap: 4px;
  }

  span {
    display: block;
    color: #fff;
    white-space: nowrap;

    &.before {
      grid-column: 1/2;
      grid-row: 1/2;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 70px;
      line-height: 67px;

      @media (max-width: 992px) {
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
        grid-column: 1/3;
      }
    }

    &.name {
      grid-column: 2/3;
      grid-row: 1/3;

      margin-top: 10px;
      font-family: "Phudu";
      font-style: normal;
      font-weight: 700;
      font-size: 131.646px;
      line-height: 88px;

      @media (max-width: 992px) {
        grid-column: 2/3;
        grid-row: 2/3;
        margin-top: 0;
        font-weight: 700;
        font-size: 50px;
        line-height: 31px;
      }
    }

    &.decr {
      grid-column: 1/2;
      grid-row: 2/3;

      br {
        display: none;
      }

      @media (max-width: 992px) {
        font-size: 27px;
        line-height: 115%;
        margin-top: 0;

        br {
          display: block;
        }
      }

      margin-top: 10px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 42px;

      @media (max-width: 992px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;
      }
    }
  }
}

.features {
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1366px) {
    gap: 24px;
  }

  &-row {
    border-top: 1px solid #ffffff;
    display: flex;

    .features-item-mobile {
      @media (min-width: 993px) {
        display: none;
      }

      span {
        font-weight: 700;
        font-size: 18px;
      }
    }

    @media (max-width: 1366px) {
      flex-wrap: wrap;
      border-top: none;
      gap: 24px;

      &:not(:last-child) {
        .features-item {
          &:not(:first-child) {
            border-top: 1px solid #ffffff;

            @media (max-width: 992px) {
              border-top: 1px solid #cecece;
            }
          }
        }
      }

      &:not(:first-child) {
        .features-item {
          border-top: 1px solid #ffffff;

          @media (max-width: 992px) {
            border-top: 1px solid #cecece;
          }
        }
      }
    }

    @media (max-width: 992px) and (min-width: 769px) {
      justify-content: center;
    }
  }

  &-item {
    width: 373px;
    padding-top: 6px;

    @media (max-width: 425px) {
      width: 100%;
    }

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 27px;
      color: #ffffff;

      @media (max-width: 992px) {
        color: $gray;
      }

      @media (max-width: 768px) {
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
      }
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
      margin-top: 3px;
      white-space: nowrap;

      @media (max-width: 992px) {
        color: $gray;
      }

      @media (max-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        white-space: normal;

        br {
          display: none;
        }
      }
    }
  }
}

.offer {
  @include flex-center-x(24px);

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 8px;
  }

  .button {
    @extend %button;
  }

  .prices {
    display: flex;
    flex-direction: column;

    @media (max-width: 992px) {
      @include flex-center-x(14px);
      justify-content: center;
      flex-direction: row;
    }

    .new-price {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 47px;
      color: #ffffff;
      white-space: nowrap;

      @media (max-width: 992px) {
        color: $gray;
      }

      @media (max-width: 768px) {
        font-size: 30px;
      }

      @media (max-width: 425px) {
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
      }
    }

    .old-price {
      white-space: nowrap;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 37px;
      text-decoration-line: line-through;
      color: #ffffff;
      opacity: 0.6;

      @media (max-width: 992px) {
        color: $gray;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }
      //  @media (max-width: 576px) {
      //         font-size: 18px;
      //       }
      @media (max-width: 425px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}

$sdvg: -80px;

.components {
  @media (max-width: 992px) {
    // height: 100%;
    position: relative;
  }
  .component {
    position: absolute;
    z-index: 8;
    cursor: pointer;
  }

  .component-1 {
    top: 668px;
    right: calc(668px + $sdvg);

    @media (max-width: 1537px) {
      right: calc(540px + $sdvg);
      // }

      // @media (max-width: 1440px) {
      top: 553px;
    }

    @media (max-width: 1366px) {
      right: 497px;
      top: 674px;
    }

    @media (max-width: 992px) {
      top: 99px;
      left: 32%;
    }

    @media (max-width: 576px) {
      top: 111px;
      left: 33%;
    }

    @media (max-width: 425px) {
      top: 114px;
      right: 65%;
      left: auto;
    }
  }

  .component-2 {
    top: 858px;
    right: calc(527px + $sdvg);

    @media (max-width: 1537px) {
      right: calc(402px + $sdvg);
      // }

      // @media (max-width: 1440px) {
      top: calc(858px - 150px);
    }

    @media (max-width: 1366px) {
      right: 341px;
      top: 846px;
    }

    @media (max-width: 992px) {
      top: 62px;
      right: auto;
      left: 58%;
    }

    @media (max-width: 576px) {
      top: 85px;
      right: auto;
      left: 56%;
    }

    @media (max-width: 425px) {
      top: 88px;
    }
  }

  .component-3 {
    top: 609px;
    right: calc(417px + $sdvg);

    @media (max-width: 1537px) {
      right: calc(316px + $sdvg);
      // }

      // @media (max-width: 1440px) {
      top: calc(609px - 111px);
    }

    @media (max-width: 1366px) {
      top: 621px;
      right: 237px;
    }

    @media (max-width: 992px) {
      top: 183px;
      right: auto;
      left: 48%;
    }

    @media (max-width: 768px) {
      top: 196px;
    }
  }
}

.video {
  position: absolute;
  z-index: 10;
  bottom: 135px;
  left: 50%;
  transform: translateX(-25%);

  @media (max-width: 1537px) {
    // @media (max-width: 1440px) {

    bottom: 100px;
  }

  @media (max-width: 1366px) {
    bottom: 62px;
    left: 73%;
    transform: translateX(-50%);
  }

  // @media (max-width: 1024px) {
  //   left: 68%;
  // }

  @include flex-center-x(10px);

  svg {
    * {
      transform-origin: center;
      transition: all 0.5s;
    }
    path {
      fill: #e2bc85;
    }
    circle {
      opacity: 0.7;
    }
  }

  &:hover {
    svg {
      path {
        fill: #fff;
        transform: scale(1.2);
      }

      circle {
        opacity: 0.6;

        &:not(:last-child) {
          transform: scale(0.96);
        }

        &:last-child {
          transform: scale(0.92);
        }
      }
    }
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
  }

  @media (max-width: 992px) {
    bottom: 42px;
    left: 52%;

    &-container {
      position: relative;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }

    svg {
      // transform: scale(0.6);
      width: 55px;
      height: 55px;
    }
  }

  @media (max-width: 768px) {
    bottom: 22px;
  }

  @media (max-width: 576px) {
    bottom: 7px;
  }
}
</style>
