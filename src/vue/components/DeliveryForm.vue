<template>
  <form action="" class="delivery-form">
    <h3>Рассчитать стоимость доставки</h3>

    <input type="hidden" name="statePanel" value="calcDelivery" />
    <input
      type="hidden"
      class="comment"
      name="comment"
      value="Рассчитать доставку. "
    />

    <div class="user-info">
      <input
        class="vita-input"
        aria-label="Номер телефона"
        type="tel"
        name="phone"
        autocomplete="off"
        placeholder="Номер телефона"
        required
      />
      <input
        class="vita-input"
        aria-label="Адрес доставки"
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Адрес доставки"
        required
      />
    </div>

    <button @click="openModalSuccessManager()" class="button">
      <span class="button-background"></span>
      <span class="button-text">{{
        size > 425 ? "Заказать звонок" : "Заказать"
      }}</span>
    </button>

    <FormHelicon :main="true" />
  </form>
</template>

<style lang="scss">
@import "../../scss/_global.scss";
.delivery-form {
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: $gray;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 23px;
      font-weight: 500;
      text-align: center;
      margin: -10px auto 10px;
    }
  }

  .button {
    @extend %button;
    margin: 40px auto 0;
    width: 263px;

    @media (max-width: 576px) {
      width: 145px;
      height: 45px;
      margin-top: 24px;
    }
  }
  .user-info {
    display: flex;
    gap: 14px;
    flex-direction: column;

    @media (max-width: 576px) {
      gap: 10px;
      max-width: 330px;
      margin: 0 auto;
    }
  }
}
</style>

<script>
import FormHelicon from "../helpers/FormHelicon.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      size: window.innerWidth,
    };
  },
  methods: mapMutations(["openModalSuccessManager"]),
  components: {
    FormHelicon,
  },
};
</script>
