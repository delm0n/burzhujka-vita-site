<template>
  <section id="feedback">
    <div class="container">
      <div class="title">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div class="feedback-wrapper__container">
        <div class="feedback-wrapper">
          <div class="swiper-wrapper">
            <div v-for="(feed, i) in feedbacks" :key="i" class="swiper-slide">
              <div class="feedback-item">
                <div class="feedback-item__img">
                  <image-lazy
                    :alt="'Отзыв клиента на круглую буржуйку VITA'"
                    :src="feed.img"
                    :srcMedia="992"
                    :animation="false"
                  />
                </div>
                <div class="feedback-item__line">
                  <div class="gorizontal-line"></div>
                </div>

                <div class="feedback-item__btn">
                  <div class="link-flash" @click="read(i)">Читать отзыв</div>
                </div>
              </div>
            </div>
          </div>

          <swiper-navigation
            navClass="feedback-navigation"
            prevClass="feedback-btn__prev"
            nextClass="feedback-btn__next"
          />
        </div>
      </div>
      <div class="feedback-button">
        <button :disabled="getReview" @click="openModal()" class="button">
          <span class="button-background"></span>
          <span class="button-text">{{
            getReview ? "Отзыв отправлен" : "Оставить отзыв"
          }}</span>
        </button>
      </div>
    </div>

    <div v-if="modalContent" id="feedback-modal" style="display: none">
      <p v-html="modalContent"></p>
    </div>
  </section>
</template>

<script>
import SwiperNavigation from "../helpers/SwiperNavigation.vue";
import { Swiper, Navigation } from "swiper";
import ImageLazy from "../helpers/ImageLazy.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      modalContent: "",
      feedbacks: [
        {
          img: "feedback-item-1",
          text: `Здравствуйте! Купил печь буржуйку для дачи еще в прошлом месяце. Выбирал, чтобы и смотрелась хорошо, и тепло держала. Установил сам, дома ничего не говорил. А 8 марта поехали на шашлыки. Жена когда ее увидела, полдня вокруг ходила любовалась. Вечером растопили. Тепло, сидим, огнём любуемся через стеклянную дверцу. Все хорошо, греет, дым в комнаты не идёт. И красивая, приятно посмотреть. Сейчас думаю к лету ещё трубы обновить. Не нашёл в магазине. Так что покупкой очень доволен, спасибо вам!`,
        },

        {
          img: "feedback-item-2",
          text: `Здравствуйте! Вы просили написать о отзыв о буржуйке Вита. На прошлой неделе мы забрали наш заказ на пункте выдачи. Покупали стандартную версию, в загородный дом. Упакована была очень хорошо, аккуратно, в коробке и с пупыркой. Вмятин на металле не обнаружено.Тем же вечером муж установил буржуйку на место. Протопили сразу. Поначалу запах чувствовался неприятный, но сейчас уже выветрился. В интерьер замечательно вписалась, глаза радуются. Передавайте спасибо менеджеру Светлане, помогла определиться с выбором!`,
        },

        {
          img: "feedback-item-3",
          text: `Здравствуйте! Вы про буржуйку Вита, да? Всё отлично👍 Я уже и забыл про вас. Сейчас всё напишу. Пришла печка месяц назад, все целое. Установил я её, протопил на улице, как вы рекомендовали. Потом только принес в дом на дачу. Дизайн у нее нравится, есть индивидуальность. Соседу понравилась, отдал ему купон на скидку, купит себе такую же у вас.`,
        },

        {
          img: "feedback-item-4",
          text: `А, значит, это мне повезло. У меня буржуйка Вита мини. В гараж, в мастерскую, я машины старые ремонтирую. Сейчас же, знаете, с этими санкциями как цены подскочили? Ну это вам не надо. В общем, бизнес у меня. А когда зимой пришли счета за электричество.. мать моя женщина! Нет, думаю, так не пойдет, расходы сокращать надо. Походил по сайтам, сравнил и купил вашу Виту для мастерской. Взял сразу теплообменник к ней чтоб ещё и воду грела. И знаете что? Я доволен. Хоть небольшая, а экономия. Покупатели сразу замечают, спрашивают, где такую купил? А я мол, так и так, в таком-то магазине. В общем, пора мне за рекламу доплачивать, вашу работу делаю!`,
        },

        {
          img: "feedback-item-5",
          text: `Добрый! Да, всё ок, получил, буржуйка работает. Ну а что с ней может быть не так? Конструкция простая, не электроника же. Не помятая, сколов краски тоже нет. Топлю - греет, все как положено печке. Дизайн мне ещё на картинке понравился, но вживую вообще классная. Скорость доставки впечатляет, вы прям мега-экспресс. респект. За два дня привезли, я даже место под нее приготовить не успел!`,
        },

        {
          img: "feedback-item-6",
          text: `Доброго! Вы знаете, я долго откладывал покупку новой печи, пользовался электрообогревателем. В гараже у меня уже пылилась самодельная буржуйка из баллона, еще со времен СССР. Не пользовался ей, жрёт много, а тепла не прибывает. А буржуйку Вита увидел в рекламе, посмотрел, думаю, а чего тянуть? Цена вполне адекватная, и с конвекторами сразу. В общем, сделал сам себе подарок, установил в гараже. Топлю деревом, прогревается воздух быстро, тягу регулирую через зольник, чтобы жара надолго хватило. Металл толстый, надеюсь, не скоро прогорит. Да и затраты на электричество меньше. Всем доволен!`,
        },

        {
          img: "feedback-item-7",
          text: `Приветствую. Получил буржуйку Вита мини, все хорошо, комплектация, как и заказывал. Печь что надо! Самое то с собой возить. Пару раз протопил для проверки, ну и обжечь пыль. Горячий воздух хорошо гоняет! Маленькая, как игрушечная, а жару дает, я офигел. Буржуйку на рыбалку с собой возить буду и в походы. Весной ночи холодные. Готовлю я обычно на костре, в котелке, а вот в палатке к утру вообще дубак. Сейчас проблема решена, спасибо!`,
        },

        {
          img: "feedback-item-8",
          text: `И вам доброго дня! Да, всё получил, спасибо) Буржуйку покупал не себе, а бате. В подарок, поэтому выбирал красивую, но в пределах определенной суммы. У отца дом частный, газовая котельная внизу. В том году сделал пристрой, мастерскую расширил. Там было холоднее, чем в других помещениях. Он уже подумывал отопление проводить, а тут я заявляюсь с печкой 😄 Батя оценил: в общий лофтовый стиль буржуйка вписалась, тепло даёт и перестраивать ничего не надо. В общем, спасибо вам, и от него тоже👍`,
        },
      ],
    };
  },
  computed: mapGetters(["getReview"]),
  methods: {
    ...mapMutations(["openModalFeedback"]),

    openModal() {
      this.openModalFeedback();

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-feedback",
          },
        ]);
      }, 10);
    },

    read(i) {
      this.modalContent = this.feedbacks[i].text;
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#feedback-modal",
          },
        ]);
      }, 10);
    },
  },
  mounted() {
    const swiper = new Swiper(".feedback-wrapper", {
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".feedback-btn__next",
        prevEl: ".feedback-btn__prev",
      },

      breakpoints: {
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },

        993: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },

        769: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
      modules: [Navigation],
    });
  },
  components: {
    SwiperNavigation,
    ImageLazy,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin paddingContent() {
  padding: 0 30px 50px;

  @media (max-width: 1280px) {
    padding: 0 30px 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 20px 30px;
  }

  @media (max-width: 768px) {
    padding-bottom: 95px;
  }
}

#feedback {
  overflow: hidden;
  @extend %indent-p;

  .feedback-wrapper {
    padding: 0 10px;
    @media (min-width: 769px) {
      padding: 0 20px;
      margin: 10px 50px;
    }
    &__container {
      position: relative;
    }

    .swiper-wrapper {
      padding-bottom: 50px;

      @media (max-width: 992px) {
        padding-bottom: 40px;
      }

      .swiper-slide {
        opacity: 0;
        transition: opacity 0.1s 0s;

        &-active {
          opacity: 1;
        }

        @media (min-width: 993px) {
          &-next + .swiper-slide {
            opacity: 1;
          }
        }

        @media (min-width: 769px) {
          &-next {
            opacity: 1;
          }
        }
      }
    }

    .feedback-navigation {
      @media (max-width: 768px) {
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: auto;
        bottom: 20px;
        transform: translateY(calc(-60px)) translateX(-50%);
        left: 50%;
        width: 130px;
      }

      .feedback-btn__prev,
      .feedback-btn__next {
        position: absolute;
        z-index: 5;
        top: 50%;
        transform: translateY(calc(-50% - 60px));

        @media (max-width: 768px) {
          position: static;
          transform: translateY(0);
          left: auto;
          right: auto;
        }
      }

      .feedback-btn__prev {
        left: 0px;
      }

      .feedback-btn__next {
        right: 0px;
      }
    }
  }

  .feedback-item {
    overflow: hidden;
    @extend %shadow-block;
    // box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.1);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 992px) {
      // box-shadow: 5px 15px 15px rgb(0 0 0 / 10%);
      gap: 20px;
    }

    @media (max-width: 768px) {
      max-width: 300px;
      margin: 0 auto;
    }

    &__line {
      @include paddingContent();
      padding-bottom: 0 !important;
    }

    &__btn {
      @include paddingContent();
      display: flex;
      justify-content: center;

      .link-flash {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 115%;
        white-space: nowrap;
        text-align: center;

        @media (max-width: 768px) {
          font-size: 16px;
        }
        @include fluidFontSize(14, 22, 320, 1920);
        @include linkHover($gray);
      }
    }

    &__img {
      img {
        display: block;
        width: 100%;

        aspect-ratio: 451/777;
      }
    }
  }

  .feedback-button {
    button {
      @extend %button;
      margin: 0 auto;
    }
  }
}

#feedback-modal {
  max-width: 615px;
  width: 100%;
  padding: 30px 25px 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 125%;
  color: #323232;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 30px 10px 10px;
    font-size: 16px;
    border-radius: 16px;
  }

  @include fluidFontSize(14, 24, 320, 1920);
}
</style>
