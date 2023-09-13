<template>
  <div class="characteristic-anything">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p>
          Длина камеры сгорания — <span>300</span> или <span>400</span> мм.
          <br />
          Для розжига подойдут:
        </p>

        <ul>
          <li class="asp">Дрова</li>
          <li class="asp">Древесный уголь</li>
          <li class="asp">Евробрикеты</li>
        </ul>

        <p>
          Более того, благодаря уникальной форме буржуйки вы расходуете<span>
            на 10% меньше топлива</span
          >.
        </p>
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
        title: "Экономия&nbsp;и универсальность",
        subtitle: "Печь работает на любом топливе",
        img: {
          src: "char-anything",
          alt: "Топливо для буржуйки VITA",
          convector: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-anything {
  @media (max-width: 992px) and (min-width: 435px) {
    .subtitle {
      br {
        display: none;
      }
    }
  }
}
</style>
