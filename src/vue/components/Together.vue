<template>
  <section id="together">
    <div class="container">
      <div class="title">
        <h2>Вместе — дешевле!</h2>
        <p>При заказе печи-буржуйки скидка на&nbsp;аксессуары</p>
      </div>

      <div class="together-wrapper">
        <div class="together-wrapper__dops">
          <div class="dops-container">
            <div class="dops-list">
              <template v-for="(dop, index) in getDopsTest" :key="index">
                <div
                  class="checkbox dops-item"
                  @mouseenter="togetherHoverEnter(dop.id)"
                  @mouseleave="togetherHoverLeave(dop.id)"
                >
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
                  />

                  <div class="dops-item__content">
                    <p class="title-dop" @click="openModal(dop)">
                      {{
                        dop.name === "Зонтик для дымохода" ? "Зонт" : dop.name
                      }}
                    </p>
                    <p class="oldprice">{{ dop.oldPrice }} ₽</p>
                    <p class="price">{{ dop.price }} ₽</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="together-wrapper__img">
          <div class="img-container">
            <template v-for="(dop, index) in getDopsTest" :key="index">
              <div
                v-if="dop.together.img"
                :class="[
                  'dops-img',
                  dop.together.img,
                  dop.active ? 'dops-img--active' : '',
                  dop.together.hover ? 'dops-img--hover' : '',
                ]"
              >
                <img
                  class="image-lazy"
                  :data-src="
                    'build/images/' +
                    dop.together.img +
                    (getWebp == 'webp' ? '.webp' : '.png')
                  "
                  alt="Дополнительно к буржуйке VITA"
                />
              </div>
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

          <p v-html="modalContent.decr"></p>

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
    };
  },
  methods: {
    openModal(dop) {
      // let dop = this.getDopsTest.find((el) => el.id == id);

      this.modalContent = {
        title: dop.together.modalTitle ? dop.together.modalTitle : dop.name,
        src: dop.img.src,
        decr: dop.together.decr,
        decrList: dop.together.decrList,
        decrBottom: dop.together.decrBottom,
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
    },

    togetherHoverEnter(id) {
      this.getDopsTest.find((el) => el.id == id).together.hover = true;
    },
    togetherHoverLeave(id) {
      this.getDopsTest.find((el) => el.id == id).together.hover = false;
    },
  },
  computed: {
    ...mapGetters([
      "getDopsTest",
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
  @media (max-width: 767px) {
    overflow: hidden;
  }
  .container {
    @media (max-width: 992px) {
      min-width: calc(100% - 40px) !important;
    }
  }

  .together-wrapper {
    @include flex-center-x(20px);
    width: 100%;
    align-items: stretch;

    @media (max-width: 1400px) {
      gap: 5px;
    }

    @media (min-width: 1581px) {
      padding-top: 20px;
    }

    @media (max-width: 1250px) {
      flex-wrap: wrap;
      justify-content: space-between;

      max-width: 900px;
      margin: 0 auto;
      gap: 40px;
    }

    @media (max-width: 992px) {
      gap: 30px 15px;
    }

    @media (max-width: 767px) {
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 20px;
    }

    .line {
      height: 1px;
      background: #cecece;
      width: 100%;
    }

    &__dops {
      @extend %shadow-block;
      padding: 10px 12px 20px 20px;
      max-width: 440px;
      min-width: 360px;
      flex-grow: 1;

      .dops-container {
        align-items: center;
        display: flex;
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      .dops-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        justify-content: space-between;
        overflow-y: scroll;
        overflow-x: hidden;

        padding-right: 10px;
        position: absolute;
        width: 100%;

        @media (max-width: 767px) {
          height: 440px;
          position: static;
          gap: 15px;
        }

        &::-webkit-scrollbar {
          width: 2px;
          background-color: #cecece;
        }

        &::-webkit-scrollbar-thumb {
          background: rgb(70, 130, 23, 0.7);
          z-index: 1;
          cursor: pointer;
        }

        &::-webkit-scrollbar-track {
          background-color: rgba(239, 239, 239, 0.2);
        }
      }

      // align-self: stretch;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-around;

      // @media (min-width: 576px) {
      //   gap: 10px;
      // }

      @media (max-width: 1440px) {
        // padding: 10px 15px 20px;
        max-width: 360px;
        min-width: 340px;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 390px;
        margin: 0 auto;
        min-width: auto;
        padding: 10px 12px 15px 18px;
      }

      .dops-item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 25px;
        margin-left: auto;
        &:not(:last-child) {
          border-bottom: 1px solid #cecece;
          padding-bottom: 20px;
        }

        @media (max-width: 1440px) {
          gap: 20px;
        }

        img {
          &:not([data-ll-status="loaded"]) {
            aspect-ratio: 148/133;
          }
          max-width: 100px;
          @media (max-width: 1560px) {
            max-width: 90px;
          }

          @media (max-width: 1440px) {
            max-width: 80px;
          }
        }

        @media (max-width: 768px) {
          gap: 15px;
        }

        @media (max-width: 576px) {
          // gap: 10px;
          padding: 8px 0;
          width: 100%;
        }

        &__content {
          flex-grow: 1;

          p {
            font-family: "Roboto";
            font-style: normal;
            color: #2b2b2b;

            &.title-dop {
              font-weight: 500;
              font-size: 22px;
              line-height: 115%;
              margin-bottom: 14px;
              white-space: normal;
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

      @media (max-width: 1250px) and (min-width: 768px) {
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
          margin-right: 2%;
        }
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        height: 570px;
      }

      .img-container {
        position: relative;
        height: 100%;

        @media (max-width: 1560px) and (min-width: 769px) {
          height: 900px;
        }

        @media (max-width: 1280px) and (min-width: 1251px) {
          height: 80%;
          bottom: auto;
        }

        @media (min-width: 768px) {
          @media (max-width: 1250px) {
            // max-height: 70%;
            height: 746px;
            position: sticky;
            top: 80px;
          }

          @media (max-width: 992px) {
            top: 60px;
          }
        }

        .dops-img {
          position: absolute;
          img {
            opacity: 0.4;
            transition: all 0.2s ease-in;
            display: block;
            width: 100%;
          }

          &--active img {
            opacity: 1;
          }

          &--hover img {
            transform: scale(1.05);
          }
        }

        .together-tube {
          right: 0;
          max-width: 198px;
          min-width: 120px;
          width: 27%;
          top: 49%;
          transform: translateY(-50%);

          @media (max-width: 992px) {
            min-width: 100px;
          }
        }

        .together-ugol_smoke-2 {
          left: 17%;
          max-width: 100px;
          min-width: 60px;
          width: 20%;
          top: 89%;
          transform: translate(-50%);
        }

        .together-umbrella {
          left: 40%;
          max-width: 135px;
          min-width: 80px;
          width: 20%;
          top: 88%;
          transform: translate(-50%);
        }

        .together-tubing_smoke-2 {
          left: 2%;
          max-width: 350px;
          min-width: 80px;
          width: 57%;
          top: 82.5%;
          transform: translateY(-50%);
        }

        .together-coherga {
          left: 0;
          max-width: 318px;
          min-width: 215px;
          width: 48%;
          top: 72%;
          transform: translateY(-50%);

          @media (max-width: 992px) {
            min-width: 170px;
          }
        }

        .together-list {
          width: 48%;
          left: 37%;
          transform: translate(-50%);
          max-width: 332px;
          min-width: 210px;
          top: 57%;

          @media (max-width: 992px) {
            min-width: 47%;
          }
        }

        .together-woodcarry {
          right: 2%;
          top: 81.5%;
          transform: translateY(-50%);
          width: 29%;
          max-width: 198px;
          min-width: 120px;

          @media (max-width: 992px) {
            min-width: 95px;
          }
        }

        .together-main {
          animation: show 0.6s;
          display: block;
          width: 100%;

          &__container {
            position: absolute;
            left: 36%;
            bottom: 66%;
            width: 72%;
            max-width: 446px;
            transform: translateY(50%) translateX(-50%);
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
        max-width: 240px;
        width: 100%;
      }
      img {
        display: block;
        width: auto;
        margin: 0 auto;
        max-width: 100%;
        box-sizing: border-box;
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
        @media (min-width: 340px) {
          white-space: nowrap;
        }
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
