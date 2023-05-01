<template>
  <form action="" class="question-form">
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

    <p class="decr">
      Менеджеры свяжутся с вами в ближайшее время, <br />
      для уточнения деталей заказа
    </p>
    <FormHelicon />
  </form>
</template>

<script>
import FormHelicon from "../helpers/FormHelicon.vue";
import { mapMutations } from "vuex";
import buttonAnimated from "../mixins/buttonAnimated";

export default {
  mixins: [buttonAnimated],

  components: {
    FormHelicon,
  },
  methods: mapMutations(["openModalSuccessManager"]),
  mounted() {
    // this.btnAnim(".question-form", "button.button");
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_global.scss";

.button {
  @extend %button;
  margin: 24px auto;

  .button-text {
    @media (max-width: 375px) {
      font-size: 12px !important;
    }
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

.decr {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #2b2b2b;

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
