<template>
  <section id="questions">
    <div class="container">
      <div class="questions-wrapper">
        <div class="questions-wrapper__content">
          <h2>Остались вопросы?</h2>
          <p class="phone">8 800 250 59 32</p>
          <p class="subtitle">
            Позвоните нам прямо сейчас или оставьте свои контактные данные,
            чтобы мы могли связаться с вами в ближайшее время.
          </p>

          <questions-form />
        </div>

        <div class="questions-wrapper__img">
          <picture>
            <img
              :src="
                'build/images/' +
                'questions-img' +
                (getWebp == 'webp' ? '.webp' : '.png')
              "
              alt="заказать звонок"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import QuestionsForm from "../components/QuestionsForm.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    QuestionsForm,
  },
  computed: mapGetters(["getWebp"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#questions {
  @extend %indent-p;
  .questions-wrapper {
    @extend %shadow-block;
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      border: none;
      box-shadow: none;
      border-radius: 0;
      justify-content: center;
    }

    &__content {
      form {
        max-width: 585px;
      }

      @media (min-width: 993px) {
        max-width: 50%;
      }
      padding: 70px;

      @media (max-width: 1440px) {
        padding: 55px;
      }

      @media (max-width: 1366px) {
        padding: 40px;
      }

      @media (max-width: 1280px) {
        padding: 30px;
      }

      @media (max-width: 1024px) {
        padding: 24px;
      }
      @media (max-width: 992px) {
        padding: 0;
        text-align: center;
        max-width: 520px;
        width: 100%;
      }

      h2 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 100%;
        color: #2b2b2b;
        margin-bottom: 30px;
        margin-top: 40px;

        @media (max-width: 1440px) {
          margin-top: 0px;
        }

        @media (max-width: 1150px) {
          margin-top: 0px;
          margin-bottom: 20px;
        }

        @include fluidFontSize(40, 60, 993, 1920);

        @media (max-width: 576px) {
          margin-bottom: 14px;
          font-size: 28px;
          line-height: 100%;
        }
      }

      .subtitle {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 115%;
        color: #2b2b2b;
        margin-bottom: 40px;

        @media (max-width: 1150px) {
          margin-bottom: 20px;
        }

        @media (max-width: 992px) {
          max-width: 400px;
          margin: 0 auto 20px;
          width: 100%;
        }

        @include fluidFontSize(15, 22, 993, 1920);

        @media (max-width: 576px) {
          margin-bottom: 14px;
          font-size: 12px;
          line-height: 14px;
        }
      }

      .phone {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 115%;
        color: #2b2b2b;
        margin-bottom: 40px;

        @media (max-width: 1150px) {
          margin-bottom: 25px;
        }

        @include fluidFontSize(24, 40, 993, 1920);

        @media (max-width: 576px) {
          margin-bottom: 14px;
          font-size: 22px;
        }
      }
    }

    &__img {
      display: none;
      @media (min-width: 993px) {
        display: block;
        position: relative;
        align-self: stretch;
        flex-grow: 1;
        margin-right: 2%;
        overflow: hidden;
      }

      img {
        position: absolute;
        bottom: -7px;
        right: 0;
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
