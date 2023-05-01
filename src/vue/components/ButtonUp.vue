<template>
  <button
    aria-label="Наверх"
    ref="up"
    type="button"
    class="button-up hide"
    v-on:click="srollToTop"
  ></button>
</template>

<script>
export default {
  methods: {
    srollToTop() {
      this.gsap.to(window, {
        duration: 2,
        scrollTo: 0,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        this.$refs.up.classList.replace("hide", "show");
      } else {
        this.$refs.up.classList.replace("show", "hide");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.button-up {
  z-index: 200;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 66px;
  height: 66px;
  padding: 0;
  box-shadow: 0 0 10px rgb(0, 0, 0, 25%);
  background: url(../images/arrowUp.svg) no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 27px;
  background-color: #468217;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: opacity 200ms, transform 0.6s ease;

  &:active {
    transform: translateY(3px);
  }

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }

  @media (max-width: 992px) {
    right: 15px;
    bottom: 25px;
    width: 45px;
    height: 45px;
    background-size: 19px;
  }
}
</style>
