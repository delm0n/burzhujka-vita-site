<template>
  <section class="characteristic-round">
    <CharacteristicItem :char="round" />
  </section>
</template>

<script lang="ts">
import CharacteristicItem from "./CharacteristicItem.vue";
import { defineComponent } from "vue";
import { round } from "../types/Characteristic";

export default defineComponent({
  components: {
    CharacteristicItem,
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
}
</style>
