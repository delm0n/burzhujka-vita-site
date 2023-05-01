<template>
  <div>
    <div class="container">
      <div class="header-wrap">
        <div class="title">
          <h1>
            <span class="before">Круглая буржуйка</span>
            <span class="decr"
              >Самая дешевая <br />
              конвекторная печь</span
            >
            <span class="name">VITA</span>
          </h1>
        </div>

        <div class="features-wrap">
          <div class="features">
            <div class="features-row">
              <div class="features-item">
                <h3>Прогрев всего за 15 минут</h3>
                <p>Повышенный на 23% КПД</p>
              </div>

              <div class="features-item">
                <h3>На все случаи жизни</h3>
                <p>Обогреет палатку, дом, гараж, дачные дома</p>
              </div>
            </div>

            <div class="features-row">
              <div class="features-item">
                <h3>Стильный дизайн</h3>
                <p>
                  Винтаж, лофт и английская классика — <br />
                  в&nbsp;одном изделии
                </p>
              </div>

              <div class="features-item">
                <h3>Любые виды топлива</h3>
                <p>Дрова, уголь, брикеты, пеллеты</p>
              </div>
            </div>
          </div>
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
          <div class="pech-bg"></div>
          <div class="components">
            <div
              v-for="(item, index) in pluses"
              v-bind:key="index"
              :class="'component ' + item.class + ' will-change--active'"
              @click="tippyModal(item.content)"
              ref="icons"
            >
              <IconPlus :color="Colors.White" />
            </div>
          </div>

          <div class="video-container">
            <a
              class="video"
              data-fancybox
              href="https://www.youtube.com/watch?v=V8TqI1c2evs"
            >
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
                <circle
                  opacity="0.5"
                  cx="55"
                  cy="55"
                  r="54.5"
                  stroke="#E2BC85"
                />
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
  </div>
</template>

<script lang="ts">
import HeaderTop from "./HeaderTop.vue";
import buttonAnimated from "../mixins/buttonAnimated";
import IconPlus from "../helpers/IconPlus.vue";
import Colors from "../types/ColorsEnum";
import { defineComponent } from "vue";
import tippy from "tippy.js";

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
    HeaderTop,
  },
  mixins: [buttonAnimated],
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

          //mixin
          // this.btnAnim("header", ".offer a.button");
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
  padding: 260px 0 230px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1537px) {
    padding: 180px 0 140px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 500px auto auto;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 130px 0 0px;
    grid-template-rows: auto 350px auto auto;
  }

  @media (max-width: 576px) {
    padding: 100px 0 0px;
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

  @media (max-width: 1366px) {
    margin-top: 80px;
  }

  @media (max-width: 992px) {
    grid-column: 1/2;
    grid-row: 3/4;
    margin-top: 20px;
  }
}

.offer-wrap {
  margin-top: 98px;
  grid-column: 1/2;
  grid-row: 3/4;
  z-index: 4;

  @media (max-width: 1366px) {
    margin-top: 80px;
  }

  @media (max-width: 992px) {
    grid-column: 1/2;
    grid-row: 4/5;
    margin-top: 48px;
    margin-bottom: 30px;
  }
}

.components-wrap {
  grid-column: 1/3;
  grid-row: 2/4;
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
    column-gap: 5px;
    max-width: 450px;
    width: 100%;
    align-items: end;

    @media (min-width: 769px) {
      margin-left: 40px;
    }
  }

  @media (max-width: 768px) {
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

      @media (max-width: 992px) {
        grid-column: 1/3;
        font-size: 50px;
        line-height: 110%;
      }

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 70px;
      line-height: 67px;

      @media (max-width: 768px) {
        font-weight: 700;
        font-size: 28px;
        line-height: 100%;
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
        font-size: 85px;
        line-height: 90%;
        margin-top: 0;
      }

      @media (max-width: 768px) {
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

      @media (max-width: 768px) {
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

    h3 {
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

      @media (max-width: 425px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}

.pech-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../images/pech.webp") no-repeat;
  background-size: 700px;
  background-position: top 0 right 16.7%;

  @media (max-width: 1920px) {
    background-size: contain;
    background-position: top 0 right 173px;
  }

  @media (max-width: 1537px) {
    background-position: top 0 right 145px;
  }

  @media (max-width: 1366px) {
    background-position: top 0 right 22px;
  }

  @media (max-width: 992px) {
    display: none;
  }
}

.components {
  .component {
    position: absolute;
    z-index: 8;

    @media (min-width: 1921px) and (max-width: 2222px) {
      transform: translateX(-3vw);
    }
  }

  .component-1 {
    top: 645px;
    right: 31%;

    @media (max-width: 1920px) {
      right: 650px;
    }

    @media (max-width: 1537px) {
      top: 525px;
      right: 545px;
    }

    @media (max-width: 1366px) {
      top: 595px;
      right: 465px;
    }

    @media (max-width: 992px) {
      top: 475px;
      right: 58vw;
    }

    @media (max-width: 768px) {
      top: 327px;
    }

    @media (max-width: 475px) {
      top: 320px;
      right: 62vw;
    }
  }

  .component-2 {
    top: 805px;
    right: 25%;

    @media (max-width: 1920px) {
      right: 485px;
    }

    @media (max-width: 1537px) {
      top: 690px;
      right: 405px;
    }

    @media (max-width: 1366px) {
      top: 772px;
      right: 315px;
    }

    @media (max-width: 992px) {
      top: 582px;
      right: auto;
      left: 49vw;
    }

    @media (max-width: 768px) {
      top: 396px;
    }
  }

  .component-3 {
    top: 585px;
    right: 20%;

    @media (max-width: 1920px) {
      right: 355px;
    }

    @media (max-width: 1537px) {
      top: 485px;
      right: 305px;
    }

    @media (max-width: 1366px) {
      top: 547px;
      right: 205px;
    }

    @media (max-width: 992px) {
      top: 442px;
      right: auto;
      left: 58vw;
    }

    @media (max-width: 768px) {
      left: 56vw;
      top: 295px;
    }
  }
}

.video {
  position: absolute;
  z-index: 6;
  bottom: 135px;
  left: 50%;
  transform: translateX(-25%);

  @media (max-width: 1366px) {
    bottom: 26px;
    left: 73%;
    transform: translateX(-50%);
  }

  @media (max-width: 1024px) {
    left: 68%;
  }

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
    bottom: 101px;
    left: 52%;

    &-container {
      position: relative;
      height: 100%;
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
    bottom: 61px;
  }

  @media (max-width: 576px) {
    bottom: 29px;
  }
}
</style>
