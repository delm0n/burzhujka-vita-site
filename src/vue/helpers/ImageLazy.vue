<template>
  <picture>
    <source
      ref="image05"
      v-if="srcMedia"
      srcset=""
      :data-lazy="
        'build/images/x05/' + src + (getWebp == 'webp' ? '.webp' : '.png')
      "
      :media="'(max-width:' + srcMedia + 'px)'"
      :type="getWebp == 'webp' ? 'image/webp' : 'image/png'"
    />

    <img
      ref="image"
      src=""
      :data-lazy="
        'build/images/' + src + (getWebp == 'webp' ? '.webp' : '.png')
      "
      :alt="alt"
      :class="animation ? 'image-lazy' : ''"
    />
  </picture>
</template>

<script>
import ScrollTrigger from "gsap/ScrollTrigger";
import uuidv4 from "../mixins/uuidv4";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      id: null,
    };
  },
  mixins: [uuidv4],
  props: {
    alt: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    srcMedia: {
      type: Number,
      default: 0,
      required: false,
    },
    animation: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    loadImage() {
      let img = this.$refs.image;

      this.srcMedia
        ? (this.$refs.image05.srcset = this.$refs.image05.dataset.lazy)
        : "";

      img.src = img.dataset.lazy;
      img.classList.add("image-lazy--loaded");
      img.removeAttribute("data-lazy");

      this.srcMedia ? this.$refs.image05.removeAttribute("data-lazy") : "";

      ScrollTrigger.getById(this.id).kill(true);
      this.gsap.timeline().kill(true);
    },
  },
  mounted() {
    this.id = this.uuidv4();

    this.gsap.timeline({
      scrollTrigger: {
        id: this.id,
        once: true,
        trigger: this.$refs.image,
        start: "-40% bottom",
        onEnter: this.loadImage,
        onEnterBack: this.loadImage,
      },
    });
  },

  computed: mapGetters(["getWebp"]),
};
</script>

<style lang="scss"></style>
