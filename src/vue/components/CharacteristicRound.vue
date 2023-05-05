<template>
  <section class="characteristic-round">
    <vita-block :char="round" />
  </section>
</template>

<script lang="ts">
import VitaBlock from "../helpers/VitaBlock.vue";
import { defineComponent } from "vue";
import { round } from "../types/Characteristic";

export default defineComponent({
  components: {
    VitaBlock,
  },

  data() {
    return {
      round: round,
    };
  },
});
</script>

<style lang="scss">
.characteristic-round {
  article.characteristic-item .characteristic-wraper__media {
    @media (max-width: 992px) {
      max-height: 350px;
    }

    @media (max-width: 576px) {
      max-height: 240px;
    }
  }

  .media--img {
    @media (max-width: 992px) {
      display: inline;
    }
  }
}
</style>
