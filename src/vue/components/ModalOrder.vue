<template>
  <div id="modal-order">
    <h3>
      Заказать печь -<br />
      буржуйку VITA
    </h3>

    <div class="price">
      <p ref="newPrice" class="new-price">{{ price }} ₽</p>
      <p ref="oldPrice" class="old-price">{{ oldPrice }} ₽</p>
    </div>

    <form action="" v-on:submit.prevent class="spnForm">
      <div class="user-info">
        <input
          class="vita-input"
          aria-label="Ваше имя"
          type="text"
          name="name"
          autocomplete="off"
          placeholder="Ваше имя"
          required
        />
        <input
          class="vita-input"
          aria-label="Ваш номер"
          type="tel"
          name="phone"
          autocomplete="off"
          placeholder="Ваш номер телефона"
          required
        />
      </div>

      <div class="user-check">
        <div>
          <p class="user-check__title title-size">Выберите размер:</p>
          <pech-model-checkbox />
        </div>

        <div>
          <p class="user-check__title title-dops">Добавьте в заказ:</p>
          <div class="dops-checkbox">
            <label
              class="checkbox"
              v-for="(dop, index) in getDops"
              :key="index"
            >
              <input type="checkbox" v-model="dop.active" />
              <div class="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M1 7.56424L5.92308 12.4531L17 1.45312"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span> {{ dop.name }} </span></label
            >
          </div>
        </div>

        <rassrochka-checkbox class="title-rassr" />
      </div>

      <button @click="openModalSuccessManager()" type="submit" class="button">
        <span class="button-background"></span>
        <span class="button-text">Заказать</span>
      </button>

      <p class="decr">
        Менеджеры свяжутся с вами в ближайшее время, <br />
        для уточнения деталей заказа
      </p>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import PechModelCheckbox from "../helpers/PechModelCheckbox.vue";
import RassrochkaCheckbox from "../helpers/RassrochkaCheckbox.vue";

export default {
  computed: {
    ...mapGetters([
      "getUser",
      "getPrice",
      "getOldPrice",
      "getDops",
      "getPechModelsIdActive",
    ]),

    price() {
      this.gsap.fromTo(
        this.$refs.newPrice,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
        }
      );

      return this.getPrice.toLocaleString();
    },

    oldPrice() {
      this.gsap.fromTo(
        this.$refs.oldPrice,
        {
          opacity: 0,
        },
        {
          opacity: 0.6,
          duration: 0.8,
        }
      );

      return this.getOldPrice.toLocaleString();
    },
  },
  components: {
    PechModelCheckbox,
    RassrochkaCheckbox,
  },
  methods: mapMutations(["openModalSuccessManager"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin container() {
  max-width: 575px;
  margin: 0 auto;

  @media (max-width: 576px) {
    max-width: 330px;
  }
}

#modal-order {
  @extend %modal;
  max-width: 860px;
  width: 100%;
  padding: 46px 30px 26px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 30px 11px 14px;
    border-radius: 16px;
  }

  h3 {
    margin-bottom: 35px;

    @media (max-width: 992px) {
      margin-bottom: 20px;
    }
  }

  .price {
    @include flex-center-x(14px);
    justify-content: center;
    margin-bottom: 45px;

    @media (max-width: 1024px) {
      margin-bottom: 25px;
    }

    .new-price {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 115%;
      color: $gray;

      @media (max-width: 576px) {
        font-size: 20px;
      }

      @include fluidFontSize(20, 40, 320, 1024);
    }

    .old-price {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 115%;
      text-decoration-line: line-through;

      @media (max-width: 576px) {
        font-size: 12px;
      }

      @include fluidFontSize(12, 24, 320, 1024);

      color: $gray;
      opacity: 0.6;
    }
  }

  .dops-checkbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 576px) {
      gap: 10px;
    }
  }

  .decr {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #707070;

    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 14px;
    }

    @media (max-width: 375px) {
      font-size: 11px;
    }
  }

  .button {
    @extend %button;
    margin: 40px auto 44px;

    @media (max-width: 576px) {
      margin-top: 30px;
      margin-bottom: 24px;
      width: 145px;
    }
  }
  .user-check {
    @include container();
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 577px) {
      .title-size {
        margin-bottom: 23px;
      }

      .title-dops {
        margin-bottom: 18px;
      }

      .title-rassr {
        padding-top: 10px;
      }
    }
    &__title {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: $gray;

      @media (max-width: 576px) {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
  .user-info {
    @include container();
    display: flex;
    gap: 14px;
    flex-direction: column;

    @media (max-width: 576px) {
      gap: 10px;
    }
  }
}
</style>
