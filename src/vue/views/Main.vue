<template>
  <div>
    <vita-header />
    <main>
      <vita-area />
      <characteristic />
      <characteristic-size />

      <!-- <characteristic-size /> -->
      <!-- <characteristic /> -->
      <heating />
      <!-- <characteristic-round /> -->
      <tinkoff-block />
      <peculiar />
      <complectation />
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
// import CharacteristicSize from "../components/CharacteristicSize.vue";
// import Characteristic from "../components/Characteristic.vue";
// import CharacteristicRound from "../components/CharacteristicRound.vue";

import CharacteristicSize from "../components/CharacteristicSize.vue";
import Characteristic from "../components/Characteristic-v2.vue";
//
import Made from "../components/Made.vue";
import Heating from "../components/Heating.vue";
import Together from "../components/Together.vue";
import Feedback from "../components/Feedback.vue";

import ModalCall from "../components/ModalCall.vue";
import ModalOrder from "../components/ModalOrder.vue";
import ModalFeedback from "../components/ModalFeedback.vue";
import ModalSuccess from "../components/ModalSuccess.vue";

export default {
  components: {
    VitaHeader,
    CharacteristicSize,
    Characteristic,
    Heating,
    // CharacteristicRound,
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
    ModalCall,
    ModalOrder,
    ModalFeedback,
    ModalSuccess,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_fonts.scss";

@include robotoFont("../..");
@include phuduFont("../..");
@include plexFont("../..");
</style>
