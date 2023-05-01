<template>
  <header v-bind:class="getWebp">
    <HeaderMain @updateParent="onUpdateContent" />

    <div v-if="modalContent" id="component-modal" style="display: none">
      <div v-html="modalContent"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import HeaderTop from "./HeaderTop.vue";
import HeaderMain from "./HeaderMain.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMain,
  },
  data() {
    return {
      modalContent: "",
    };
  },
  methods: {
    onUpdateContent(content) {
      this.modalContent = content;
    },
  },
  computed: mapGetters(["getWebp"]),
});
</script>

<style lang="scss">
@mixin main-bg($url, $url-mobile) {
  background: url($url) no-repeat;
  background-position: top 0 right 0;
  background-size: cover;

  @media (max-width: 1366px) {
    background-position: top 0 right -140px;
  }

  @media (max-width: 992px) {
    background: url($url-mobile) no-repeat;
    background-position: center 0;
    background-size: 1366px;
  }

  @media (max-width: 768px) {
    background-size: 926px;
  }
}

header {
  position: relative;
  overflow: hidden;
  max-width: 2560px;
  margin: 0 auto 100px;

  @media (max-width: 992px) {
    margin-bottom: 30px;
  }

  &.webp {
    @include main-bg("../images/main-bg.webp", "../images/main-bg-mobile.webp");
  }

  &.nowebp {
    @include main-bg("../images/main-bg.png", "../images/main-bg-mobile.png");
  }
}

#component-modal {
  padding: 29px 10px 7px;
  background: #468217;
  border-radius: 16px;
  max-width: 290px;
  width: 100%;

  font-family: "Roboto";
  font-style: normal;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    margin-bottom: 8px;
    display: block;
  }
}
</style>
