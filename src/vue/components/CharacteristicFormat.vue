<template>
  <div class="characteristic-format">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p>Мы предлагаем <span>2 вида</span> буржуек:</p>

        <div class="format-table__container">
          <div class="format-table">
            <div></div>
            <div><p class="__title">Mini</p></div>
            <div><p class="__title">Standart</p></div>
            <div><p class="__subtitle">Оптимальная для:</p></div>
            <div><p>Любителей рыбалки, охоты и туризма.</p></div>
            <div>
              <p>
                Отопление загородного/дачного дома или любого другого помещения.
              </p>
            </div>
            <div><p class="__subtitle">Преимущества:</p></div>
            <div>
              <p>
                Не займёт много пространства. Благодаря своему
                <span>небольшому весу</span> мобильна и без труда
                <span>входит в багажник</span>&nbsp;автомобиля.
              </p>
            </div>
            <div>
              <p>
                <span> Конвекторная система</span> обогрева легко справится с
                площадью до<span>&nbsp;75&nbsp;м2</span>.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:media>
        <image-lazy
          class="media--img"
          :src="char.img.src"
          :alt="char.img.alt"
          :srcMedia="425"
          :testImg="char.img.convector"
        />
      </template>
    </vita-item>
  </div>
</template>

<script>
import ImageLazy from "../helpers/ImageLazy.vue";
import VitaItem from "../helpers/VitaItem.vue";

export default {
  components: {
    ImageLazy,
    VitaItem,
  },
  data() {
    return {
      char: {
        title: "Под каждую задачу&nbsp;— свой&nbsp;формат ",
        subtitle: "Выберите подходящий <br> размер печи",
        img: {
          src: "char-format",
          alt: "Размеры буржуйки VITA",
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-format {
  @media (max-width: 992px) and (min-width: 435px) {
    .subtitle {
      br {
        display: none;
      }
    }
  }

  .format-table {
    &__container {
      margin-top: 30px;
      overflow-x: scroll;
      width: 100%;
      height: 300px;
      position: relative;
    }

    display: grid;
    position: absolute;
    width: 674px;
    grid-template-columns: 8.5fr 11.5fr 13fr;
    background: #e2bc85;
    gap: 2px;
    border: #e2bc85 solid 2px;
    z-index: 10;

    & > div {
      background: #ffffff;
      padding: 6px;
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #2b2b2b;

        &.__title {
          font-size: 20px;
          line-height: 135%;
          text-align: center;
          padding: 13px 0;
        }

        &.__subtitle {
          font-size: 16px;
          line-height: 23px;
          padding: 13px 0;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
