<template>
  <div>
    <vita-header />
    <main>
      <characteristic-size />
      <characteristic />
      <heating />
      <characteristic-round />
      <tinkoff-block />
      <peculiar />
      <complectation />
      <vita-area />
      <together />
      <delivery />
      <vita-faq />
      <made />
      <feedback />
      <photo />
      <questions />
    </main>

    <modal-call />
    <modal-order />
    <modal-success />
    <modal-feedback />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Header from "../components/Header.vue";
import CharacteristicSize from "../components/CharacteristicSize.vue";
import Characteristic from "../components/Characteristic.vue";
import CharacteristicRound from "../components/CharacteristicRound.vue";
import Made from "../components/Made.vue";
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
    VitaArea: defineAsyncComponent(() => import("../components/Area.vue")),
    Delivery: defineAsyncComponent(() => import("../components/Delivery.vue")),
    VitaFaq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    TinkoffBlock: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    Together: defineAsyncComponent(() => import("../components/Together.vue")),
    Made,
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
