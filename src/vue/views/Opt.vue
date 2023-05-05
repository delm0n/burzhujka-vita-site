<template>
  <div class="page__body opt-body">
    <opt-block />
    <made />
    <vita-faq />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    OptBlock: defineAsyncComponent(() => import("../components/OptBlock.vue")),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    VitaFaq: defineAsyncComponent(() => import("../components/FAQ.vue")),
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
</style>
