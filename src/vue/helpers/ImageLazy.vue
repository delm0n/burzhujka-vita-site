<template>
  <picture>
    <source
      v-if="srcMedia"
      srcset=""
      :data-srcset="
        'build/images/x05/' + src + (getWebp == 'webp' ? '.webp' : '.png')
      "
      :media="'(max-width:' + srcMedia + 'px)'"
      :type="getWebp == 'webp' ? 'image/webp' : 'image/png'"
    />

    <img
      src=""
      :data-src="'build/images/' + src + (getWebp == 'webp' ? '.webp' : '.png')"
      :alt="alt"
      :class="animation ? 'image-lazy__animation' : 'image-lazy'"
    />
  </picture>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
  computed: mapGetters(["getWebp"]),
};
</script>

<style lang="scss"></style>
