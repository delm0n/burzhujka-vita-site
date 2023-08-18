<template>
  <section id="together">
    <div class="container">
      <div class="title">
        <h2>Вместе — дешевле!</h2>
        <p>При заказе печи-буржуйки скидка на&nbsp;аксессуары</p>
      </div>

      <div class="together-wrapper">
        <div class="together-wrapper__dops">
          <template v-for="(dop, index) in getDops" :key="index">
            <div class="checkbox dops-item">
              <input type="checkbox" v-model="dop.active" />
              <div class="box" @click="dopClick(dop)">
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

              <image-lazy
                @click="dopClick(dop)"
                :src="dop.img.src"
                :alt="dop.img.alt"
                :animation="false"
              />

              <div class="dops-item__content">
                <p
                  class="item-title"
                  @click="openModal(dop.id, dop.name, dop.img.src)"
                >
                  {{ dop.name }}
                </p>
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
          <div class="img-container">
            <template v-for="(dop, index) in dops" :key="index">
              <img
                v-if="dop.img"
                :class="[
                  'dops-img image-lazy',
                  dop.img,
                  dop.active ? 'dops-img--active' : '',
                ]"
                :data-src="
                  'build/images/' +
                  dop.img +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                alt="Дополнительно к буржуйке VITA"
              />
            </template>

            <div class="together-main__container" v-html="img"></div>
          </div>
        </div>

        <together-form class="together-wrapper__order" />
      </div>
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
import { mapGetters } from "vuex";
import TogetherForm from "./TogetherForm.vue";
import ImageLazy from "../helpers/ImageLazy.vue";

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
          active: false,
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
          active: false,
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
          img: "together-tube",
          active: false,
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
          img: "together-coherga",
          active: false,
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
          img: "together-list",
          active: false,
        },
      ],
    };
  },
  methods: {
    openModal(id, title, src) {
      let dop = this.dops.find((el) => el.id.includes(id));

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
    dopClick(dop) {
      dop.active = !dop.active;
      this.dops.forEach((element) => {
        element.id.includes(dop.id) ? (element.active = dop.active) : "";
      });
    },
  },
  computed: {
    ...mapGetters([
      "getDops",
      "getWebp",
      "getPechModelsActive",
      "getDopsDoorActive",
    ]),

    pechModel() {
      return this.getPechModelsActive;
    },

    img() {
      let src = this.getDopsDoorActive
        ? this.pechModel.img.src + "--door"
        : this.pechModel.img.src;

      return (
        '<picture><source srcset="build/images/x05/' +
        src +
        (this.getWebp == "webp" ? ".webp" : ".png") +
        '" media="(max-width:992px)" type="image/' +
        (this.getWebp == "webp" ? "webp" : "png") +
        '">' +
        '<img class="together-main" src="build/images/' +
        src +
        (this.getWebp == "webp" ? ".webp" : ".png") +
        '"alt="буржуйка VITA"/></picture>'
      );
    },
  },
  components: {
    TogetherForm,
    ImageLazy,
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

  .together-wrapper {
    @include flex-center-x(20px);
    width: 100%;

    @media (min-width: 1581px) {
      padding-top: 64px;
    }

    @media (max-width: 1250px) {
      flex-wrap: wrap;
      justify-content: space-between;

      max-width: 1050px;
      margin: 0 auto;
      gap: 40px;
    }

    @media (max-width: 992px) {
      gap: 30px;
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
      padding: 10px 20px 20px;
      max-width: 457px;
      min-width: 375px;

      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: 1250px) and (min-width: 576px) {
        gap: 10px;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 390px;
        margin: 0 auto;
        min-width: auto;
      }

      .dops-item {
        display: flex;
        justify-content: space-between;
        width: 95%;
        gap: 25px;
        margin-left: auto;

        @media (max-width: 1440px) {
          img {
            max-width: 100px;
          }
        }
        @media (max-width: 992px) {
          gap: 15px;
          img {
            max-width: 85px;
          }
        }

        @media (max-width: 576px) {
          // gap: 10px;
          padding: 8px 0;
          width: 100%;
        }

        &__content {
          flex-grow: 1;

          .item-title {
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

            @include fluidFontSize(18, 22, 320, 1920);
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
      max-width: 410px;
      min-width: 200px;

      @media (max-width: 1250px) and (min-width: 767px) {
        max-width: 100%;
        width: 100%;
      }

      @media (max-width: 767px) {
        max-width: 390px;
        margin: 0 auto;
      }
    }

    &__img {
      align-self: stretch;
      flex-grow: 1;
      min-width: 400px;

      @media (max-width: 1250px) {
        max-width: 430px;
        min-width: auto;

        @media (min-width: 922px) {
          margin-right: 5%;
        }
      }

      @media (max-width: 992px) {
        max-width: 370px;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 290px;
        margin: 0 auto;
        height: 420px;
      }

      .img-container {
        position: relative;
        height: 100%;

        @media (max-width: 1440px) and (min-width: 1251px) {
          bottom: 10%;
        }

        @media (max-width: 1250px) and (min-width: 767px) {
          max-height: 550px;
          position: sticky;
          top: 115px;
        }

        @media (max-width: 992px) and (min-width: 767px) {
          max-height: 475px;
          top: 135px;
        }

        .together-tube {
          left: 0;
          bottom: 0;
          width: 10vw;
          max-width: 198px;
          min-width: 65px;
        }

        .together-coherga {
          width: 15vw;
          max-width: 306px;
          left: 50%;
          transform: translateX(-50%);
          bottom: 7vw;
          min-width: 144px;

          @media (max-width: 767px) {
            bottom: 40px;
            left: 45%;
          }
        }

        .together-list {
          width: 16vw;
          right: 0;
          bottom: 0;
          max-width: 322px;
          min-width: 125px;
        }

        .dops-img {
          position: absolute;
          display: block;
          opacity: 0.4;
          transition: all 0.2s ease-in;
        }

        .dops-img--active {
          opacity: 1;
        }

        .together-main {
          animation: show 0.6s;
          display: block;
          width: 100%;

          &__container {
            position: absolute;
            left: 50%;
            bottom: 9vw;
            @media (min-width: 1921px) {
              bottom: 175px;
            }
            @media (max-width: 1440px) {
              bottom: 10vw;
              left: 53%;
            }
            width: 79%;
            transform: translateX(-50%);

            @media (max-width: 1250px) {
              width: 100%;
              max-width: 300px;
            }

            @media (max-width: 992px) {
              max-width: 290px;
              bottom: 105px;
              width: 82%;
            }

            @media (max-width: 767px) {
              bottom: 80px;
            }
          }
        }

        @keyframes show {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
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
