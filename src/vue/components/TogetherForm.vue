<template>
  <form action="sendOrder.php" class="spnForm together-form">
    <h4>Заказ</h4>

    <div class="line"></div>

    <pech-model-checkbox
      class="order-model"
      :icon="true"
      :spanValue="'Буржуйка-'"
    />

    <div class="line"></div>

    <div class="order-price">
      <p>Итого к оплате:</p>
      <div ref="price">{{ price }} ₽</div>
    </div>

    <div class="line"></div>

    <div class="order-offer">
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
      <p>
        Менеджеры свяжутся с вами в ближайшее время, для уточнения деталей
        заказа
      </p>

      <button @click="openModalSuccessManager()" type="submit" class="button">
        <span class="button-background button-animation"></span>
        <span class="button-text">Заказать</span>
      </button>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PechModelCheckbox from "../helpers/PechModelCheckbox.vue";

export default {
  methods: mapMutations(["openModalSuccessManager"]),
  components: {
    PechModelCheckbox,
  },
  computed: {
    ...mapGetters(["getPrice"]),

    price() {
      this.gsap.fromTo(
        this.$refs.price,
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
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

form.together-form {
  .vita-input {
    @media (max-width: 1440px) {
      padding: 14px 18px;
      font-size: 20px;
    }

    @media (max-width: 992px) {
      padding: 12px 14px;
      font-size: 14px;
      line-height: 16px;
      border-radius: 6px;
    }
  }

  @media (max-width: 992px) {
    .order-offer button {
      @media (min-width: 577px) {
        width: 196px !important;
        height: 56px !important;
      }
    }

    .checkbox {
      div.box {
        width: 20px;
        height: 20px;

        svg {
          width: 14px;
          height: 12px;
        }
      }
    }
  }

  padding: 15px 13px 22px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .line {
    @media (max-width: 1250px) and (min-width: 767px) {
      height: 90% !important;
      grid-column: 2/3;
      align-self: center;
      grid-row: 2/4;
    }
  }

  @media (max-width: 1250px) and (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 20px;
  }

  @media (max-width: 992px) {
    padding: 24px 20px;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }

  h4 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #323232;
    margin-bottom: -6px;

    @media (max-width: 1250px) {
      grid-column: 1/4;
    }

    @media (max-width: 767px) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  .order-price {
    @media (max-width: 1250px) {
      grid-row: 3/4;
      grid-column: 1/2;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 115%;
      margin-top: 12px;
      text-align: center;
      color: #2b2b2b;

      @media (max-width: 992px) {
        font-size: 22px;
        margin-top: 0;
      }

      @include fluidFontSize(22, 30, 320, 1920);
    }
    div {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 115%;
      text-align: center;
      color: #2b2b2b;

      @media (max-width: 768px) {
        font-size: 28px;
      }

      @include fluidFontSize(28, 60, 320, 1920);
    }
  }

  .order-model {
    .checkbox span {
      @media (min-width: 576px) {
        font-size: 24px;
        font-weight: 500;

        @include fluidFontSize(20, 24, 768, 1920);
      }
    }

    .icon-container img {
      @media (max-width: 1440px) {
        max-width: 60px;
        display: block;
      }
    }

    @media (max-width: 1250px) and (min-width: 768px) {
      width: max-content;
      margin: 0 auto;
    }

    @media (max-width: 992px) {
      .icon-container img {
        max-width: 55px;
      }
    }
  }

  .order-offer {
    @media (max-width: 1250px) {
      grid-row: 2/4;
      grid-column: 3/4;
      align-self: center;
    }
    .user-info {
      display: flex;
      gap: 14px;
      flex-direction: column;

      @media (max-width: 1250px) {
        max-width: 430px;
        margin: 0 auto;
      }

      @media (max-width: 576px) {
        gap: 10px;
      }
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #707070;
      margin: 14px auto 24px;
      max-width: 430px;
      @media (max-width: 992px) {
        line-height: 14px;
        font-size: 12px;
      }
    }

    button {
      @extend %button;
      margin: 0 auto;

      @media (max-width: 1440px) and (min-width: 993px) {
        width: 250px;
        height: 74px;
      }
    }
  }
}
</style>
