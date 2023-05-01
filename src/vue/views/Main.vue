<template>
  <div>
    <Header />
    <main>
      <CharacteristicSize />
      <Characteristic />
      <Heating />
      <CharacteristicRound />
      <TinkoffBlock />
      <Peculiar />
      <Complectation />
      <Area />
      <Together />
      <Delivery />
      <FAQ />
      <MadeV2 />
      <Feedback />
      <Photo />
      <Questions />
    </main>

    <ModalCall />
    <ModalOrder />
    <ModalSuccess />
    <ModalFeedback />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Header from "../components/Header.vue";
import CharacteristicSize from "../components/CharacteristicSize.vue";
import Characteristic from "../components/Characteristic.vue";
import CharacteristicRound from "../components/CharacteristicRound.vue";
import MadeV2 from "../components/Made-v2.vue";
import Complectation from "../components/Complectation.vue";

export default {
  components: {
    Header,
    CharacteristicSize,
    Characteristic,
    Heating: defineAsyncComponent(() => import("../components/Heating.vue")),
    CharacteristicRound,
    Peculiar: defineAsyncComponent(() => import("../components/Peculiar.vue")),
    Complectation,
    Area: defineAsyncComponent(() => import("../components/Area.vue")),
    Delivery: defineAsyncComponent(() => import("../components/Delivery.vue")),
    FAQ: defineAsyncComponent(() => import("../components/FAQ.vue")),
    TinkoffBlock: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    Together: defineAsyncComponent(() => import("../components/Together.vue")),
    MadeV2,
    Feedback: defineAsyncComponent(() => import("../components/Feedback.vue")),
    Photo: defineAsyncComponent(() => import("../components/Photo.vue")),
    ModalCall: defineAsyncComponent(() =>
      import("../components/ModalCall.vue")
    ),
    ModalOrder: defineAsyncComponent(() =>
      import("../components/ModalOrder.vue")
    ),
    ModalFeedback: defineAsyncComponent(() =>
      import("../components/ModalFeedback.vue")
    ),
    ModalSuccess: defineAsyncComponent(() =>
      import("../components/ModalSuccess.vue")
    ),
    Questions: defineAsyncComponent(() =>
      import("../components/Questions.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_fonts.scss";

@include robotoFont("../..");
@include phuduFont("../..");
@include plexFont("../..");
#map {
  padding-bottom: 0 !important;
}
</style>
