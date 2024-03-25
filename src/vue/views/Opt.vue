<template>
  <div class="page__body opt-body">
    <opt-block />
    <made />
    <vita-faq />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import OptBlock from "../components/OptBlock.vue";

export default {
  components: {
    OptBlock,
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    VitaFaq: defineAsyncComponent(() => import("../components/FAQ.vue")),
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";

@include robotoFont("../..");
@include phuduFont("../..");
@include plexFont("../..");
</style>
