<template>
  <header v-bind:class="getWebp">
    <header-main @updateParent="onUpdateContent" />

    <div v-if="modalContent" id="component-modal" style="display: none">
      <div v-html="modalContent"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
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
$rPech-2xl: 195px;
$rPech-xl: 65px;
$sdvg: -80px;

@mixin main-bg($url, $url-mobile) {
  background: url($url) no-repeat;
  background-position: top 0 right $sdvg;
  background-size: cover;

  @media (max-width: 1537px) {
    //   background-position: top 0 right calc((-1) * $rPech-2xl + $rPech-xl + $sdvg);
    // }

    // @media (max-width: 1440px) {
    background-position: top 0 right -129px;
  }

  @media (max-width: 1366px) {
    background-position: top 0 right calc((-1) * $rPech-2xl);
  }

  @media (max-width: 992px) {
    background: url($url-mobile) no-repeat;
    background-position: center 0;
    background-size: 992px;
  }

  @media (max-width: 576px) {
    background-size: 850px;
  }
}

@mixin pech-bg($url, $url-mobile) {
  background: url($url) no-repeat;

  background-size: 724px;
  background-position: top 0 right calc($rPech-2xl + $sdvg);

  @media (max-width: 1537px) {
    //   background-position: top 0 right calc($rPech-xl + $sdvg);
    // }

    // @media (max-width: 1440px) and (min-width: 1367px) {

    @media (min-width: 1367px) {
      background-size: 606px;
      background-position: top 0 right 37px;
    }
  }

  @media (max-width: 1366px) {
    background-position: top 0 right 5px;
    // background-size: 810px;
  }

  @media (max-width: 992px) {
    background-size: 375px;
    background-position: top 0 right calc(50% + 5px);
  }

  @media (max-width: 576px) {
    background: url($url-mobile) no-repeat;
    background-position: top 0 right 50%;
    background-size: 295px;
  }
}

header {
  position: relative;
  overflow: hidden;
  margin: 0 auto 100px;
  max-width: 1920px;

  @media (max-width: 992px) {
    margin-bottom: 30px;

    .container {
      max-width: 560px;
    }
  }

  &.webp {
    @include main-bg(
      "../images/main-bg-2.webp",
      "../images/main-bg-mobile-2.webp"
    );
  }

  &.nowebp {
    @include main-bg(
      "../images/main-bg-2.png",
      "../images/main-bg-mobile-2.png"
    );
  }

  .pech-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &.webp {
      @include pech-bg(
        "../images/pech-bg-2.webp",
        "../images/pech-bg-mobile-2.png"
      );
    }

    &.nowebp {
      @include pech-bg(
        "../images/pech-bg-2.png",
        "../images/pech-bg-mobile-2.png"
      );
    }
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
