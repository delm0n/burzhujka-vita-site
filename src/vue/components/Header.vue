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
    background-size: 992px;
  }

  @media (max-width: 576px) {
    background-size: 850px;
  }
}

@mixin pech-bg($url, $url-mobile) {
  background: url($url) no-repeat;
  background-size: 700px;
  background-position: top 0 right 16.7%;

  @media (max-width: 1920px) {
    background-size: contain;
    background-position: top 0 right 173px;
  }

  @media (max-width: 1537px) {
    background-position: top 0 right 145px;
  }

  @media (max-width: 1366px) {
    background-position: top 0 right 22px;
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
  max-width: 2560px;
  margin: 0 auto 100px;

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
