<template>
  <div class="characteristic-heat">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p
          v-for="(par, index) in char.text"
          :key="index"
          v-html="par + '<br><br>'"
        ></p>
      </template>

      <template v-slot:media>
        <video-lazy :src="char.video" />
      </template>
    </vita-item>
  </div>
</template>

<script>
import VideoLazy from "../helpers/VideoLazy.vue";
import VitaItem from "../helpers/VitaItem.vue";

export default {
  components: {
    VideoLazy,
    VitaItem,
  },

  data() {
    return {
      char: {
        title: "Жар не уходит в&nbsp;трубу!",
        subtitle: "Отбойник, повышающий КПД",
        video: "heat-v2",
        text: [
          " КПД обычной печи меньше на 23%, а дымоход прогорает за несколько недель использования. ",
          `В камере VITA установлен <span>отбойник</span>, который закрывает дымоход от пламени и направляет его 
            обратно в бункер. Огонь начинает циркулировать и задействует максимум&nbsp;пространства. `,
          "Так <span>буржуйка эффективнее использует энергию горения</span>, а срок её службы повышается. ",
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-heat {
  video {
    height: 100%;
    display: block;
    width: 100%;

    @media (max-width: 992px) {
      width: 95%;
      margin: 0 auto;
    }
  }

  p {
    @media (min-width: 1280px) {
      width: calc(100% + 23px);
    }
  }
}
</style>
