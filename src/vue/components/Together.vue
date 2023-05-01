<template>
  <section id="together">
    <div class="container">
      <div class="title">
        <h2>Вместе — дешевле!</h2>
        <p>При заказе печи-буржуйки скидка на&nbsp;аксессуары</p>
      </div>
      <form action="" class="spnForm">
        <div class="together-wrapper">
          <div class="together-wrapper__dops">
            <template v-for="(dop, index) in getDops" :key="index">
              <div class="checkbox dops-item">
                <input type="checkbox" v-model="dop.active" />
                <div class="box" @click="dop.active = !dop.active">
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

                <ImageLazy
                  @click="dop.active = !dop.active"
                  :src="dop.img.src"
                  :alt="dop.img.alt"
                />

                <div class="dops-item__content">
                  <h5 @click="openModal(dop.id, dop.name, dop.img.src)">
                    {{ dop.name }}
                  </h5>
                  <p class="oldprice">{{ dop.oldPrice }} ₽</p>
                  <p class="price">{{ dop.price }} ₽</p>
                </div>
              </div>
              <template v-if="index != getDops.length - 1">
                <div class="line"></div>
              </template>
            </template>
          </div>

          <div class="together-wrapper__img">
            <picture>
              <source
                :srcset="
                  'build/images/x05/' +
                  img +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                type="image/webp"
                media="(max-width: 425px)" />

              <img
                ref="img"
                :src="
                  'build/images/' + img + (getWebp == 'webp' ? '.webp' : '.png')
                "
                alt="буржуйка VITA"
            /></picture>
          </div>

          <div class="together-wrapper__order">
            <h4>Заказ</h4>

            <div class="line"></div>

            <PechModelCheckbox
              class="order-model"
              :icon="true"
              :spanValue="'Буржуйка '"
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
                Менеджеры свяжутся с вами в ближайшее время, для уточнения
                деталей заказа
              </p>

              <button
                @click="openModalSuccessManager()"
                type="submit"
                class="button"
              >
                <span class="button-background"></span>
                <span class="button-text">Заказать</span>
              </button>
            </div>
          </div>
        </div>
        <FormHelicon :main="true" />
      </form>
    </div>

    <div v-if="modalContent.title" id="together-modal" style="display: none">
      <div class="together-wrapper">
        <div class="together-wrapper__img">
          <picture>
            <img
              ref="img"
              :src="
                'build/images/' +
                modalContent.src +
                '-modal' +
                (getWebp == 'webp' ? '.webp' : '.png')
              "
              alt="буржуйка VITA"
          /></picture>
        </div>
        <div class="together-wrapper__text">
          <div class="title-text">
            {{ modalContent.title }}
          </div>

          <p v-text="modalContent.decr"></p>

          <div>
            <p v-for="(item, index) in modalContent.decrList" :key="index">
              <span>{{ item.bold }}</span> — {{ item.par }}
            </p>
          </div>

          <template v-if="modalContent.decrBottom">
            <p v-text="modalContent.decrBottom"></p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ImageLazy from "../helpers/ImageLazy.vue";
import FormHelicon from "../helpers/FormHelicon.vue";
import buttonAnimated from "../mixins/buttonAnimated";
import PechModelCheckbox from "../helpers/PechModelCheckbox.vue";
import RassrochkaCheckbox from "../helpers/RassrochkaCheckbox.vue";

export default {
  data() {
    return {
      modalContent: {
        title: "",
        src: "",
        decr: "",
        decrList: [],
        decrBottom: "",
      },

      dops: [
        {
          id: [goods.convector_standart, goods.convector_mini],
          decr: "Расположенные по бокам конвекторы пропускают комнатный воздух, согревают его и направляют обратно в помещение. Всего за полчаса комната, баня или гараж прогреваются до комфортной температуры.",
          decrList: [
            {
              bold: "Количество конвекторов",
              par: "18",
            },
            {
              bold: "Площадь нагрева одного конвектора",
              par: "267 см²",
            },
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Покрытие",
              par: "термостойкая краска ",
            },
          ],
        },

        {
          id: [goods.door_standart, goods.door_mini],
          decr: "Версия дверцы со стеклянной вставкой, которая позволяет следить за нагревом и любоваться пламенем.",
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Размер",
              par: "183x183 мм",
            },
          ],
        },

        {
          id: [goods.tubing],
          decrList: [
            {
              bold: "Диаметр",
              par: "110 мм",
            },
            {
              bold: "Материал",
              par: "сталь AISI 304",
            },
            {
              bold: "Толщина",
              par: "0,8 мм",
            },
          ],
          decr: "Трубы из стали — легче и долговечнее чугунных. Благодаря небольшому весу, их удобнее закреплять в месте расположения дымохода. Комплектация предусматривает различные варианты соединения труб.",
          decrBottom: "В комплекте 2 трубы длиной 100 см, 2 отвода и зонтик",
        },

        {
          id: [goods.coherga_standart, goods.coherga_mini],
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала ",
              par: "4 мм",
            },
            {
              bold: "Покрытие",
              par: "термостойкая краска CERTA 900",
            },
          ],
          decr: "Полезное дополнение для печи-буржуйки, мангала или камина. Кочерга имеет зубья со всех сторон, благодаря которым уголь дробится гораздо эффективнее. Чистите колосник и убирайте продукты горения ещё проще! Изделие выполнено из толстой стали, поэтому прослужит вам целую вечность!",
        },

        {
          id: [goods.list],
          decrList: [
            {
              bold: "Материал",
              par: "сталь Ст3",
            },
            {
              bold: "Толщина материала",
              par: "1 мм",
            },
            {
              bold: "Размер",
              par: "500x400 мм",
            },
          ],
          decr: "Стальной округлый лист для защиты напольного покрытия от искр, углей и сажи. Попадая на него, искры гаснут, а угли не пачкают пол, поэтому снижается риск возгорания и сохраняется чистота в помещении.",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["openModalSuccessManager"]),
    openModal(id, title, src) {
      let dop = this.dops.find((el) => el.id.includes(id));

      console.log(dop);

      this.modalContent = {
        title: title,
        src: src,
        decr: dop.decr,
        decrList: dop.decrList,
        decrBottom: dop.decrBottom,
      };
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#together-modal",
          },
        ]);
      }, 10);
    },
  },
  computed: {
    ...mapGetters([
      "getDops",
      "getWebp",
      "getPechModelsActive",
      "getPrice",
      "getDopsDoorActive",
    ]),

    pechModel() {
      return this.getPechModelsActive;
    },

    img() {
      this.gsap.fromTo(
        this.$refs.img,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          duration: 0.6,
          scale: 1,
        }
      );
      return this.getDopsDoorActive
        ? this.pechModel.img.src + "--door"
        : this.pechModel.img.src;
    },

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
  components: {
    ImageLazy,
    FormHelicon,
    PechModelCheckbox,
    RassrochkaCheckbox,
  },
  mixins: [buttonAnimated],
  mounted() {
    //mixin
    // this.btnAnim("#together ", "button.button");
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#together {
  @extend %indent-p;

  .container {
    @media (max-width: 992px) {
      min-width: calc(100% - 40px) !important;
    }
  }

  @media (max-width: 992px) {
    .vita-input {
      padding: 12px 14px;
      font-size: 14px;
      line-height: 16px;
      border-radius: 6px;
    }

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

  .together-wrapper {
    display: flex;
    width: 100%;

    @media (max-width: 1439px) {
      flex-wrap: wrap;
      justify-content: space-between;

      max-width: 1050px;
      margin: 0 auto;
      row-gap: 50px;
    }

    @media (max-width: 992px) {
      row-gap: 35px;
    }

    @media (max-width: 767px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }

    .line {
      height: 1px;
      background: #cecece;
      width: 100%;
    }

    &__dops {
      @extend %shadow-block;
      padding: 10px 20px;
      max-width: 470px;
      min-width: 200px;

      @media (max-width: 767px) {
        width: 100%;
        max-width: 390px;
        margin: 0 auto;
      }

      .dops-item {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 25px;

        @media (max-width: 1439px) {
          padding: 20px 0;
        }
        @media (max-width: 1280px) {
          img {
            max-width: 100px;
          }
        }
        @media (max-width: 992px) {
          gap: 15px;
          padding: 15px 0;
          img {
            max-width: 85px;
          }
        }

        @media (max-width: 576px) {
          gap: 10px;
          padding: 8px 0;
        }

        &__content {
          flex-grow: 1;

          h5 {
            font-weight: 500;
            font-size: 24px;
            line-height: 115%;
            margin-bottom: 14px;
            white-space: normal;
            font-family: "Roboto";
            font-style: normal;
            color: #2b2b2b;
            transition: all 0.5s ease;

            &:hover {
              text-decoration: underline;
            }

            @media (max-width: 768px) {
              font-size: 18px;
              margin-bottom: 8px;
            }

            @include fluidFontSize(18, 24, 320, 1920);
          }
          p {
            font-family: "Roboto";
            font-style: normal;
            color: #2b2b2b;

            &.oldprice {
              font-weight: 400;
              font-size: 16px;
              line-height: 115%;
              text-decoration-line: line-through;

              @media (max-width: 768px) {
                font-size: 14px;
              }

              @include fluidFontSize(14, 16, 320, 1920);
            }

            &.price {
              font-weight: 700;
              font-size: 24px;
              line-height: 115%;

              @media (max-width: 768px) {
                font-size: 20px;
              }

              @include fluidFontSize(20, 24, 320, 1920);
            }
          }
        }
      }
    }

    &__order {
      @extend %shadow-block;
      max-width: 470px;
      min-width: 200px;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      gap: 38px;

      .line {
        @media (max-width: 1439px) and (min-width: 767px) {
          height: 90%;
          grid-column: 2/3;
          align-self: center;
          grid-row: 2/4;
        }
      }

      @media (max-width: 1439px) and (min-width: 767px) {
        max-width: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        gap: 20px;
      }

      @media (max-width: 992px) {
        padding: 24px 20px;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 390px;
        margin: 0 auto;
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

        @media (max-width: 1439px) {
          grid-column: 1/4;
        }

        @media (max-width: 767px) {
          font-size: 22px;
          line-height: 26px;
        }
      }

      .order-price {
        @media (max-width: 1439px) {
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
          font-size: 24px;
          font-weight: 500;
        }

        @media (max-width: 1439px) and (min-width: 768px) {
          width: max-content;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .icon-container {
            img {
              max-width: 55px;
              display: block;
            }
          }
          .checkbox span {
            font-size: 20px;
          }
        }

        @media (max-width: 345px) {
          .checkbox span {
            line-height: 23px;
            width: min-content;
          }
        }
      }

      .order-offer {
        @media (max-width: 1439px) {
          grid-row: 2/4;
          grid-column: 3/4;
          align-self: center;
        }
        .user-info {
          display: flex;
          gap: 14px;
          flex-direction: column;

          @media (max-width: 1439px) {
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
        }
      }
    }

    &__img {
      max-width: 570px;
      min-width: 325px;
      align-self: center;
      flex-grow: 1;

      @media (max-width: 1439px) {
        align-self: auto;
        flex-grow: 0;
        @media (min-width: 993px) {
          padding-right: 4%;
        }
      }

      @media (max-width: 767px) {
        margin: 0 auto;
        min-width: auto;
      }

      img {
        width: 82%;
        display: block;
        margin: 0 auto;

        @media (min-width: 767px) {
          @media (max-width: 1439px) {
            width: auto;
            position: sticky;
            max-height: 540px;
            top: 150px;
          }

          @media (max-width: 1024px) {
            max-height: 48vw;
            min-height: 340px;
            top: 120px;
          }
        }

        @media (max-width: 767px) {
          max-width: 300px;
          width: 100%;
        }
      }
    }
  }
}

#together-modal {
  @extend %modal;
  max-width: 992px;
  @media (max-width: 768px) {
    max-width: 520px;
    padding: 30px 12px 12px;
  }
  .together-wrapper {
    display: flex;
    gap: 25px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__img {
      width: 33%;
      @media (max-width: 768px) {
        width: 240px;
      }
      img {
        display: block;
        width: 100%;
      }
    }

    &__text {
      width: 66%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-family: "Roboto";

      @media (max-width: 768px) {
        width: 90%;
        gap: 10px;
      }

      @media (max-width: 576px) {
        width: 100%;
      }

      .title-text {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        color: #323232;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
          margin-bottom: -10px;
        }
      }

      div p {
        margin: 5px 0;
        white-space: nowrap;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #323232;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
          margin: 0 !important;
        }

        @media (max-width: 375px) {
          font-size: 13px;
          line-height: 115%;
        }

        span {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
