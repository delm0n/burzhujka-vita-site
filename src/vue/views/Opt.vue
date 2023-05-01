<template>
  <div class="page__body opt-body">
    <OptBlock />
    <MadeV2 />
    <FAQ />
    <Questions />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    OptBlock: defineAsyncComponent(() => import("../components/OptBlock.vue")),
    MadeV2: defineAsyncComponent(() => import("../components/Made-v2.vue")),
    Questions: defineAsyncComponent(() =>
      import("../components/Questions.vue")
    ),
    FAQ: defineAsyncComponent(() => import("../components/FAQ.vue")),
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";

@include robotoFont("../../..");
@include phuduFont("../../..");
@include plexFont("../../..");
</style>
