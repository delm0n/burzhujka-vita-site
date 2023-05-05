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
    </main>

    <modal-call />
    <modal-order />
    <modal-success />
    <modal-feedback />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import VitaHeader from "../components/Header.vue";
import CharacteristicSize from "../components/CharacteristicSize.vue";
import Characteristic from "../components/Characteristic.vue";
import CharacteristicRound from "../components/CharacteristicRound.vue";
import Made from "../components/Made.vue";
import Complectation from "../components/Complectation.vue";
import Heating from "../components/Heating.vue";
import Together from "../components/Together.vue";
import Feedback from "../components/Feedback.vue";

export default {
  components: {
    VitaHeader,
    CharacteristicSize,
    Characteristic,
    Heating,
    CharacteristicRound,
    Peculiar: defineAsyncComponent(() => import("../components/Peculiar.vue")),
    Complectation: defineAsyncComponent(() =>
      import("../components/Complectation.vue")
    ),
    VitaArea: defineAsyncComponent(() => import("../components/Area.vue")),
    Delivery: defineAsyncComponent(() => import("../components/Delivery.vue")),
    VitaFaq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    Together,
    Made,
    Feedback,
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
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_fonts.scss";

@include robotoFont("../..");
@include phuduFont("../..");
@include plexFont("../..");
</style>
