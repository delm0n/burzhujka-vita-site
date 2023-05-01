<template>
  <HeaderTop :path="'main'" />
  <Main />
  <Map />
  <Footer :path="'main'" />
  <ButtonUp />
  <ModalSuccess />
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";

import { defineAsyncComponent } from "vue";

export default {
  components: {
    HeaderTop,
    ButtonUp: defineAsyncComponent(() => import("./components/ButtonUp.vue")),
    Footer: defineAsyncComponent(() => import("./components/Footer.vue")),
    ModalSuccess: defineAsyncComponent(() =>
      import("./components/ModalSuccess.vue")
    ),
    Map: defineAsyncComponent(() => import("./components/Map.vue")),
    Main: defineAsyncComponent(() => import("./views/Main.vue")),
  },
};
</script>

<style lang="scss">
@import "../scss/_main.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bottom-indent {
  margin-top: 90px;
  @media (max-width: 576px) {
    margin-top: 60px;
  }
}
</style>
