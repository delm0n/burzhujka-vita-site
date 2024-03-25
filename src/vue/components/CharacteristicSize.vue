<template>
  <section class="characteristic-size">
    <div class="container">
      <div class="title title-desktop">
        <h2>
          Характеристики
          <span class="block">
            <span class="title">VITA</span>
          </span>
        </h2>
        <p>Печь на все случаи жизни</p>
      </div>

      <div class="size-container">
        <div class="size-wrapper">
          <div class="title title-mobile">
            <h2>
              Характеристики
              <span class="block">
                <span class="title">VITA</span>
              </span>
            </h2>
            <p>Печь на все случаи жизни</p>
          </div>

          <div class="size-wrapper__toggle">
            <div class="toggle-container">
              <div
                :class="[
                  'toggle-tab',
                  activePech == PechType.Mini ? 'toggle-tab--active' : '',
                ]"
                @click="changeActive(PechType.Mini)"
              >
                <span> Mini</span>
              </div>
              <div
                :class="[
                  'toggle-tab',
                  activePech == PechType.Standart ? 'toggle-tab--active' : '',
                ]"
                @click="changeActive(PechType.Standart)"
              >
                <span> Standart</span>
              </div>
            </div>
          </div>

          <div class="size-wrapper__img">
            <picture>
              <source
                :srcset="
                  'build/images/x05/' +
                  objectPech[activePech].img.src +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                type="image/webp"
                media="(max-width: 425px)" />

              <img
                :src="
                  'build/images/' +
                  objectPech[activePech].img.src +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                :alt="objectPech[activePech].img.alt"
            /></picture>
          </div>

          <div class="size-wrapper__char">
            <div class="char-wrap">
              <div class="char-wrap__row">
                <div class="char-wrap__item">
                  <h3>Габариты:  </h3>
                  <p class="profile-subtitle profile-subtitle__first">
                    в собранном виде —
                    <span
                      class="span--animation"
                      v-html="objectPech[activePech].profile.collect"
                    ></span
                    > 
                  </p>
                  <p class="profile-subtitle">
                    в разобранном виде —
                    <span
                      class="span--animation"
                      v-html="objectPech[activePech].profile.appart"
                    ></span
                    > 
                  </p>
                  <p class="profile-decription">
                    Печь можно переносить вручную или перевозить удобным для вас
                    способом: на тележке, санках, в багажнике автомобиля.
                  </p>
                </div>

                <div class="char-wrap__item">
                  <h3>
                    <span v-html="objectPech[activePech].paint"></span>
                  </h3>
                  <p>
                    Покрытие имеет подтверждённый срок службы до 25 лет и
                    соответствует пожаробезопасным группам Г1, В1, Т2, Д2.
                  </p>
                </div>
              </div>

              <div class="char-wrap__row">
                <div class="char-wrap__item">
                  <h3>
                    Площадь обогрева: до&nbsp;<span
                      class="span--animation"
                      v-html="objectPech[activePech].square"
                    ></span>
                  </h3>
                  <p>
                    Подойдёт для жилого дома, сада, дачи, зимовки, гаража,
                    шалаша, теплицы, склада и других небольших помещений.
                  </p>
                </div>

                <div class="char-wrap__item">
                  <h3>
                    Толщина стали СТ3:
                    <span v-html="objectPech[activePech].density"></span>
                  </h3>
                  <p>VITA надёжно защищена от прогорания.</p>
                </div>

                <!-- <div class="char-wrap__item">
                  <h3>
                    Глубина топки:
                    <span
                      class="span--animation"
                      v-html="objectPech[activePech].firewood"
                    ></span>
                  </h3>
                  <p>
                    Выберите приемлемую глубину топки для своих потребностей.
                  </p>
                </div> -->
              </div>

              <div
                :class="[
                  'char-wrap__row',
                  len % 2 == 0 ? '' : 'char-wrap__row--last',
                ]"
              >
                <div class="char-wrap__item">
                  <h3>
                    Вес: до
                    <span
                      class="span--animation"
                      v-html="objectPech[activePech].weight"
                    ></span>
                  </h3>
                  <p>
                    Благодаря облегчённой конструкции вы можете взять печку с
                    собой куда угодно! 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="size-wrapper__button">
            <a
              target="__blank"
              :href="objectPech[activePech].ozon"
              class="button button-ozon"
            >
              <span class="button-background"></span>
              <span class="button-text">Купить на OZON</span>
            </a>

            <a
              @click="openModal(activePech)"
              class="button button-order"
              data-fancybox
              href="#modal-order"
            >
              <span class="button-background"></span>
              <span class="button-text">Купить у производителя</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mapMutations, mapGetters } from "vuex";
import { defineComponent } from "vue";
import { characteristicSize } from "../types/PechSize";
import { PechType } from "../types/IPech";

// import buttonAnimated from "../mixins/buttonAnimated.js";

export default defineComponent({
  data() {
    return {
      PechType,
      activeTab: PechType.Mini,
      objectPech: characteristicSize,
      len: 0,
    };
  },
  // mixins: [buttonAnimated],
  // mounted() {
  //   //mixin
  //   //@ts-ignore
  //   this.btnAnim(
  //     ".characteristic-size",
  //     ".size-wrapper__button a.button-order"
  //   );
  //   //@ts-ignore
  //   this.btnAnim(".characteristic-size", ".size-wrapper__button a.button-ozon");
  //   this.$nextTick(function () {
  //     this.len = document.querySelectorAll(".char-wrap__item").length;
  //   });
  // },
  methods: {
    changeActive(bool: PechType) {
      if (this.activeTab != bool) {
        this.activeTab = bool;

        //@ts-ignore
        this.gsap.fromTo(
          ".size-wrapper__img img",
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            duration: 0.4,
            scale: 1,
          }
        );

        //@ts-ignore
        this.gsap.fromTo(
          ".size-wrapper__char .span--animation",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        );
      }
    },
    ...mapMutations(["changePechModel"]),
    openModal(id) {
      this.changePechModel(id);
    },
  },
  computed: {
    activePech() {
      return this.activeTab;
    },
    ...mapGetters(["getWebp"]),
  },
});
</script>


<style lang="scss" >
@import "../../scss/_global.scss";

.characteristic-size {
  @extend %indent-p;

  .size-wrapper__button .button {
    @media (max-width: 992px) {
      width: 230px;
      height: 65px;

      @media (min-width: 577px) {
        .button-text {
          font-size: 17px;
        }
      }
    }

    @media (max-width: 576px) {
      width: 195px;
      height: 55px;
    }
  }

  .title {
    gap: 30px;

    @media (max-width: 992px) {
      gap: 17px;
    }

    h2 {
      @include flex-center-x(35px);
      justify-content: center;

      @media (max-width: 992px) {
        flex-direction: column;
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
      }

      .block {
        display: inline-flex;
        align-items: center;
      }
      .quotes {
        font-weight: 500;
        font-family: "Roboto";
        font-size: 40px;
        line-height: 115%;
      }
      .title {
        font-weight: 700;
        font-size: 100px;
        line-height: 67px;
        font-family: "Phudu";

        @media (max-width: 992px) {
          font-size: 40px;
          line-height: 49px;
        }
      }
    }

    p {
      @media (max-width: 992px) {
        font-weight: 500;
        font-size: 22px;
        line-height: 29px;
      }
    }

    &.title-desktop {
      @media (max-width: 992px) {
        display: none;
      }
    }

    &.title-mobile {
      margin-bottom: 0;
      @media (min-width: 993px) {
        display: none;
      }
    }
  }

  .size-container {
    @extend %shadow-block;

    padding: 60px;
    @media (max-width: 1536px) {
      padding: 60px 40px;
    }
    @media (max-width: 1280px) {
      padding: 40px 30px;
    }
    @media (max-width: 992px) {
      padding: 34px;
    }
    @media (max-width: 576px) {
      padding: 24px 16px;
    }

    @media (max-width: 375px) {
      padding: 24px 14px;
    }
  }

  .size-wrapper {
    display: grid;
    position: relative;
    grid-template-columns: 2fr 3fr;
    row-gap: 40px;
    column-gap: 30px;

    @media (max-width: 1439px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 992px) {
      @include mobileContent();
      grid-template-columns: 1fr;
      gap: 35px;
    }

    &__img {
      grid-row: 1/4;
      grid-column: 1/2;
      width: 100%;
      align-self: center;

      img {
        width: 100%;

        @media (max-width: 992px) {
          aspect-ratio: 10 /13;
        }
      }

      @media (max-width: 1439px) {
        grid-row: 2/3;
        grid-column: 1/2;

        img {
          max-width: 370px;
          display: block;
          margin: 0 auto;
        }
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      @media (max-width: 425px) {
        img {
          max-height: 350px;
          width: auto;
        }
      }
    }

    &__char {
      grid-row: 2/3;
      grid-column: 2/3;

      @media (max-width: 1439px) {
        grid-row: 1/4;
        grid-column: 2/3;
        // align-self: center;
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 4/5;
      }
    }

    &__toggle {
      grid-row: 1/2;
      grid-column: 2/3;

      @media (max-width: 1439px) {
        grid-row: 1/2;
        grid-column: 1/2;
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &__button {
      grid-row: 3/4;
      grid-column: 2/3;

      @include flex-center-x(40px);
      justify-content: end;

      @media (max-width: 1439px) {
        grid-row: 3/4;
        grid-column: 1/2;
        @media (min-width: 993px) {
          flex-direction: column;
          gap: 20px;
        }
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 5/6;
        justify-content: space-between;
      }

      @media (max-width: 768px) {
        gap: 15px;
        flex-direction: column;
      }

      .button {
        @extend %button;

        &.button-ozon {
          .button-background {
            background-color: #0a78d4;
            box-shadow: 0px 6px 24px rgba(#0a78d4, 0);
          }

          &:hover,
          &:focus {
            .button-background {
              transition: all 0.2s ease-in 0.1s;
              background-color: darken(#0a78d4, 2%);
              box-shadow: 0px 6px 24px rgba(#0a78d4, 0.39);

              &::before {
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }

  .char-wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1439px) {
      gap: 24px;
    }

    &__row {
      border-top: 1px solid $gray;
      display: flex;
      justify-content: space-between;
      gap: 25px;

      &--last {
        @media (min-width: 993px) {
          &:last-child {
            width: max-content;
          }
        }
      }

      @media (max-width: 1439px) {
        flex-wrap: wrap;
        border-top: none;
        gap: 24px;

        .char-wrap__item {
          border-top: 1px solid $gray;

          @media (max-width: 992px) {
            border-top: 1px solid $gray;
          }
        }
      }

      @media (max-width: 992px) and (min-width: 769px) {
        justify-content: center;
      }
    }

    &__item {
      width: 420px;
      padding-top: 6px;

      @media (max-width: 1680px) {
        width: 360px;
      }

      @media (max-width: 1439px) {
        padding-top: 8px;

        width: 100%;
        max-width: 500px;
      }

      @media (max-width: 1125px) {
        max-width: 375px;
      }

      @media (max-width: 992px) {
        max-width: 100%;
      }

      h3 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 115%;
        color: $gray;

        @media (max-width: 768px) {
          font-size: 20px;
          line-height: 23px;
          font-weight: 600;
        }
      }

      .profile-subtitle {
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        font-family: "Roboto";
        font-style: normal;
        color: $gray;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 19px;

          &__first {
            margin-top: 8px;
          }
        }

        span {
          font-weight: 700;
        }
      }

      p:last-child {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 115%;
        color: $gray;
        margin-top: 10px;

        span {
          font-weight: 700;
        }

        @include fluidFontSize(18, 20, 993, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 19px;
        }
      }

      // .profile-decription {
      //   min-height: 115px;

      //   @media (max-width: 1366px) {
      //     min-height: 89px;
      //   }
      // }
    }
  }

  .toggle-container {
    display: flex;
    gap: 20px;
    width: max-content;
    margin-left: auto;

    @media (max-width: 1439px) {
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      gap: 10px;
      width: 100%;
      justify-content: center;
    }

    .toggle-tab {
      background-color: white;
      width: 160px;
      height: 50px;
      outline: 3px solid transparent;
      outline-offset: -3px;
      border: 2px solid $gray;
      border-radius: 40px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 100%;
        max-width: 130px;
        height: 40px;
      }

      &::before {
        @include before-blur();
      }

      span {
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: $gray;

        @media (max-width: 768px) {
          font-weight: 400;
          font-size: 14px;
          line-height: 100%;
        }
      }

      &--active {
        border: 2px solid $main;
        background-color: $main;

        &:before {
          animation: sheen 1.2s forwards;
        }

        span {
          color: #ffffff;
        }
      }
    }
  }
}
</style>