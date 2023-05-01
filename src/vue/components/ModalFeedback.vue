<template>
  <div id="modal-feedback">
    <template v-if="getModalFeedback">
      <h3>
        Напишите отзыв <br />
        о товаре
      </h3>
      <div>
        <div class="inputs-container">
          <input
            class="vita-input"
            aria-label="Ваше имя"
            type="text"
            autocomplete="off"
            placeholder="Ваше имя"
            v-model="name"
          />

          <input
            class="vita-input"
            aria-label="Ваше место жительства"
            type="text"
            autocomplete="off"
            placeholder="Ваше место жительства"
            v-model="city"
          />

          <input
            :class="['vita-input', errors.email ? 'vita-input--error' : '']"
            aria-label="Ваш e-mail"
            type="email"
            autocomplete="off"
            placeholder="Ваш e-mail"
            v-model="email"
            @click="errors.email = false"
          />

          <InputFile v-tabindex />

          <textarea
            :class="['vita-input', errors.text ? 'vita-input--error' : '']"
            aria-label="Ваш отзыв"
            type="email"
            placeholder="Ваш отзыв..."
            rows="7"
            v-model="text"
            style="resize: none"
            @click="errors.text = false"
          ></textarea>
        </div>

        <button
          :disabled="
            !(this.text && this.city && this.email && this.name) &&
            !errors.email &&
            !errors.text
          "
          class="button"
          @click="validateForm()"
        >
          <span class="button-background"></span>
          <span class="button-text">Написать отзыв</span>
        </button>

        <div class="decr">
          Нажимая на кнопку «Написать отзыв», вы соглашаетесь на обработку
          персональных данных, а также с политикой конфиденциальности
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InputFile from "../helpers/InputFile.vue";

export default {
  data() {
    return {
      email: "",
      text: "",
      city: "",
      name: "",

      errors: {
        email: false,
        text: false,
      },
    };
  },
  directives: {
    tabindex: {
      inserted(el) {
        el.setAttribute("tabindex", 0);
      },
    },
  },
  computed: mapGetters(["getModalFeedback"]),
  methods: {
    validateForm() {
      this.emailError();
      this.textError();

      let send = true; //отправляем
      for (var key in this.errors) {
        this.errors[key] ? (send = false) : "";
      }

      if (send) {
        Fancybox.close();
        this.openModalSuccess("Ваш отзыв отправлен.");
        this.writeReview();
        Fancybox.show([
          {
            src: "#modal-success",
          },
        ]);
      }
    },

    ...mapMutations(["openModalSuccess", "writeReview"]),

    emailError() {
      !/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)
        ? ((this.errors.email = true), alert("Email указан не корректно"))
        : (this.errors.email = false);
    },

    textError() {
      this.text.length < 10
        ? ((this.errors.text = true),
          alert("Отзыв должен содержать минимум 10 символов"))
        : (this.errors.text = false);
    },
  },
  components: {
    InputFile,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-feedback {
  .vita-input--error {
    &::placeholder {
      color: rgb(214 85 85 / 70%);
      opacity: 1;
    }
  }

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
    margin-bottom: 40px;

    @media (max-width: 992px) {
      margin-bottom: 25px;
    }
  }

  .button {
    @extend %button;
    margin: 42px auto 30px;

    @media (max-width: 576px) {
      margin-top: 34px;
      margin-bottom: 17px;
      width: 145px;
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
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 19px;
    }
  }

  .inputs-container {
    max-width: 575px;
    margin: 0 auto;

    display: flex;
    gap: 14px;
    flex-direction: column;

    @media (max-width: 576px) {
      gap: 10px;
      max-width: 330px;
    }
  }
}
</style>
