<template>
  <section class="characteristic-complectation">
    <vita-block :char="complectation">
      <div class="complectation-wrapper">
        <div class="complectation-wrapper__item">
          <div v-for="(item, index) in text1" :key="index">
            <div class="row">
              <span>{{ index + 1 }}</span>
              <p v-html="item.content"></p>
            </div>
            <ul v-if="item.list">
              <li v-for="(li, i) in item.list" :key="i">
                •&nbsp;&nbsp;{{ li }}
              </li>
            </ul>
          </div>
        </div>

        <div class="complectation-wrapper__item">
          <div v-for="(item, index) in text2" :key="index">
            <div class="row">
              <span>{{ index + 1 + text1.length }}</span>
              <p v-html="item.content"></p>
            </div>
          </div>
        </div>
      </div>
      <a class="button" data-fancybox href="#modal-order">
        <span class="button-background button-animation"></span>
        <span class="button-text">Заказать</span>
      </a>
    </vita-block>
  </section>
</template>

<script lang="ts">
import VitaBlock from "../helpers/VitaBlock.vue";
import IVitaContent from "../types/IVitaContent";
import { defineComponent } from "vue";

let complectation: IVitaContent = {
  title: "Комплектация печи",
  img: {
    src: "char-complect",
    alt: "Комплектация печи буржуйка",
  },
  anycontent: true,
};

export default defineComponent({
  components: {
    VitaBlock,
  },
  data() {
    return {
      complectation: complectation,
      text1: [
        {
          content: "Печь-буржуйка «VITA»",
          list: ["Съёмные ножки", "Зольник/совок"],
        },
        { content: "Внутренний<br> шестигранный&nbsp;ключ" },
      ],

      text2: [
        { content: "Гарантийный талон" },
        { content: "Гаечный ключ М8" },
        { content: "Купон на 1000 рублей" },
        { content: "Инструкция" },
      ],
    };
  },
});
</script>

<style lang="scss">
.characteristic-complectation {
  .characteristic-wraper {
    @media (max-width: 768px) {
      p {
        br {
          display: none;
        }
      }
    }

    @media (max-width: 576px) {
      grid-template-rows: auto auto 11px auto !important;
      gap: 20px !important;

      .media--img {
        img {
          width: 100%;
          max-height: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-complectation {
  .button {
    @extend %button;

    @media (max-width: 992px) {
      margin: 0 auto;
    }
  }

  .characteristic-wraper {
    @media (max-width: 576px) {
      gap: 20px;
    }

    &__media {
      @media (max-width: 576px) {
        height: auto;
      }

      img {
        @media (max-width: 992px) {
          aspect-ratio: 520 /369;
        }

        @media (max-width: 425px) {
          aspect-ratio: 268/315;
        }
      }
    }
  }

  .complectation-wrapper {
    margin: 60px 0 22px;
    display: flex;
    width: calc(100% + 15px);
    gap: 15px;

    @media (max-width: 992px) {
      margin: 0px 0 15px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: max-content;
      margin: 0 auto 15px;
    }

    @media (max-width: 425px) {
      margin: 0 0 10px;
      width: 100%;
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;

      @media (min-width: 769px) {
        max-width: 48%;
      }

      &:first-child {
        justify-content: space-between;
      }
    }
  }

  ul {
    padding-left: calc(29px + 15px);
    margin: 10px 0 5px;

    @media (max-width: 1280px) {
      margin: 5px 0 0;
      padding-left: calc(29px + 10px);
    }
    li {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 135%;
      color: #2b2b2b;

      @include fluidFontSize(14, 20, 768, 1440);

      @media (max-width: 425px) {
        font-size: 14px;
        line-height: 23px;
      }
    }
  }

  .row {
    display: flex;
    gap: 15px;
    align-items: center;

    @media (max-width: 1280px) {
      gap: 10px;
    }

    span {
      width: 29px;
      height: 29px;
      border-radius: 100%;
      background: #e2bc85;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      @media (max-width: 992px) {
        width: 20px;
        height: 20px;
        font-size: 15px;
        line-height: 23px;
      }
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 125%;
      color: #2b2b2b;

      @include fluidFontSize(16, 22, 768, 1440);

      @media (max-width: 425px) {
        font-size: 16px;
        line-height: 23px;
        br {
          display: none;
        }
      }
    }
  }
}
</style>
