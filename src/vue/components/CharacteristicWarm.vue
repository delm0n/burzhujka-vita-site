<template>
  <div class="characteristic-warm">
    <vita-item :title="char.title" :subtitle="char.subtitle">
      <template v-slot:content>
        <p>Умная система отопления работает таким образом:</p>

        <ul>
          <li class="asp">
            Расположенные на печи <span> конвекторные экраны </span> поднимают
            воздух с пола, пропускают и согревают его
          </li>
          <li class="asp">
            <span>Горячий</span> воздух возвращается обратно в помещение
          </li>
          <li class="asp">
            Комфортная температура устанавливается всего за
            <span>15-20&nbsp;минут</span>
          </li>
        </ul>

        <p>
          Самодельная печь на дровах будет разогреваться в
          2&nbsp;раза&nbsp;дольше!
          <br /><br />
        </p>

        <p>
          <span class="test">*Конвекторные экраны продаются отдельно.</span>
        </p>
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
        title: "Быстрый прогрев!",
        subtitle: "Умная система отопления",
        video: "warm",
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.characteristic-warm {
  video {
    height: 100%;
    display: block;
    width: 100%;

    @media (max-width: 992px) {
      margin: 0 auto;
    }
  }

  .asp span {
    white-space: nowrap;
  }
}
</style>
