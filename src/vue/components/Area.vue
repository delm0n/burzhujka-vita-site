<template>
  <section id="area">
    <div class="container">
      <div class="title">
        <h2>От палатки до садового домика!</h2>
        <p class="subtitle">Буржуйка VITA обогревает&nbsp;до&nbsp;75&nbsp;м³</p>
      </div>

      <div class="area-wrapper">
        <article v-for="(item, index) in items" :key="index">
          <div class="aria-item">
            <div class="aria-item__img">
              <ImageLazy
                :src="item.img.src"
                :alt="item.img.alt"
                :srcMedia="992"
                :animation="false"
              />
            </div>

            <div class="aria-item__line">
              <div class="gorizontal-line"></div>
            </div>

            <div class="aria-item__content">
              <h4 v-html="item.title"></h4>
              <div class="aria-item__content-p">
                <p class="area">Площадь: <span v-html="item.area"></span></p>
                <p class="temp">
                  Обогрев до +18 °C: <span v-html="item.temp"></span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import ImageLazy from "../helpers/ImageLazy.vue";

export default {
  data() {
    return {
      items: [
        {
          img: {
            alt: "Буржуйка VITA обогревает дом",
            src: "area-item-1",
          },
          title: "Садовый дом",
          area: "40 м³",
          temp: "30 - 40 мин",
        },
        {
          img: {
            alt: "Буржуйка VITA обогревает гараж",
            src: "area-item-2",
          },
          title: "Гараж",
          area: "20 м³",
          temp: "15 - 20 мин",
        },
        {
          img: {
            alt: "Буржуйка VITA обогревает бытовку",
            src: "area-item-3",
          },
          title: "Бытовка",
          area: "15 м³",
          temp: "10 - 15 мин",
        },
        {
          img: {
            alt: "Буржуйка VITA обогревает палатку",
            src: "area-item-4",
          },
          title: "Зимняя палатка",
          area: "9 м³",
          temp: "7 - 10 мин",
        },
      ],
    };
  },

  components: {
    ImageLazy,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin paddingContent() {
  @media (min-width: 993px) {
    padding: 0 40px 50px;

    @media (max-width: 1280px) {
      padding: 0 30px 40px;
    }

    @media (max-width: 1080px) {
      padding: 0 20px 30px;
    }
  }
}

#area {
  @extend %indent-p;

  .area-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @include gapWrapper();

    @media (max-width: 992px) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 1fr;
    }
  }

  article {
    @extend %shadow-block;
    overflow: hidden;
  }

  .aria-item {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 1280px) {
      gap: 25px;
    }

    @media (max-width: 1024px) {
      gap: 20px;
    }

    @media (max-width: 992px) {
      flex-direction: row;
      align-items: center;
      gap: 50px;
    }

    @media (max-width: 425px) {
      gap: 20px;
    }

    &__img {
      width: 100%;

      img {
        width: 100%;
        aspect-ratio: 1 / 1;
        @media (min-width: 993px) {
          aspect-ratio: 370 / 733;
        }
      }

      @media (max-width: 992px) {
        width: auto;
        img {
          width: auto;
          height: 100%;
          display: block;
        }
      }

      @media (max-width: 375px) {
        img {
          max-width: 120px;
        }
      }
    }

    &__line {
      padding-bottom: 0 !important;
      @include paddingContent();

      @media (max-width: 992px) {
        display: none;
      }
    }

    &__content {
      @include paddingContent();

      @media (min-width: 769px) and (max-width: 992px) {
        flex-grow: 1;
        &-p {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 1fr;
        }
      }

      h4 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 27px;
        color: $gray;

        @include fluidFontSize(20, 24, 320, 1920);

        @media (max-width: 375px) {
          font-size: 18px;
        }
      }

      p {
        margin-top: 24px;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 115%;
        color: $gray;

        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 768px) {
          margin-top: 10px;
          font-size: 16px;
        }

        @media (max-width: 375px) {
          font-size: 14px;
        }

        &:last-child {
          margin-top: 14px;

          @media (max-width: 768px) {
            margin-top: 5px;
          }

          span {
            display: block;
          }
        }

        span {
          font-weight: 700;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
