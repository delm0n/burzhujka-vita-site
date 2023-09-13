<template>
  <article class="characteristic-item">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p
          v-for="(par, index) in char.text"
          :key="index"
          v-html="par + '<br><br>'"
        ></p>
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
  </article>
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
        title: "Скругляем углы",
        subtitle: "Улучшенная форма печи VITA",
        img: {
          src: "char-round",
          alt: "Круглая буржуйки VITA форма печи",
        },
        text: [
          "В прямоугольных классических буржуйках температура распределена неравномерно — по углам она всегда заметно ниже, чем в центре. Из-за этого топливо сгорает не полностью, снижая КПД.",
          "Усовершенствованная конструкция буржуйки VITA полностью решает эту проблему.",
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-item {
}
</style>
