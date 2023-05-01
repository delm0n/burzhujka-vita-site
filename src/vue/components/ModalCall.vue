<template>
  <div id="modal-call">
    <h3>
      Заказать <br />
      обратный звонок
    </h3>

    <form action="" class="spnForm">
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

      <button @click="openModalSuccessManager()" type="submit" class="button">
        <span class="button-background"></span>
        <span class="button-text">Заказать звонок</span>
      </button>

      <p class="decr">Мы свяжемся с Вами в течение 10 минут</p>
      <FormHelicon />
    </form>
  </div>
</template>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-call {
  @extend %modal;
  max-width: 865px;
  width: 100%;
  padding: 60px 40px 30px;
  @media (max-width: 576px) {
    padding: 30px 10px;
    border-radius: 16px;
  }

  h3 {
    margin-bottom: 55px;

    @media (max-width: 992px) {
      margin-bottom: 30px;
    }

    @media (max-width: 576px) {
      margin-bottom: 15px;
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
  .user-info {
    display: flex;
    gap: 14px;
    flex-direction: column;
    max-width: 575px;
    margin: 0 auto;
    @media (max-width: 576px) {
      gap: 10px;
      max-width: 330px;
    }
  }
}
</style>

<script>
import { mapMutations } from "vuex";
import FormHelicon from "../helpers/FormHelicon.vue";

export default {
  methods: mapMutations(["openModalSuccessManager"]),
  components: {
    FormHelicon,
  },
};
</script>
