<template>
  <header-top :path="$route.name" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <vita-map />
  <vita-footer :path="$route.name" />
  <button-up />
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";

import { defineAsyncComponent } from "vue";

export default {
  components: {
    HeaderTop,
    ButtonUp: defineAsyncComponent(() => import("./components/ButtonUp.vue")),
    VitaFooter: defineAsyncComponent(() => import("./components/Footer.vue")),
    ModalSuccess: defineAsyncComponent(() =>
      import("./components/ModalSuccess.vue")
    ),
    VitaMap: defineAsyncComponent(() => import("./components/Map.vue")),
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
