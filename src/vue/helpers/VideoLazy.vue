<template>
  <video
    ref="video"
    preload="none"
    loop
    poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    muted
    class="video-lazy"
  >
    <source :data-lazy="'static/videos/' + src + '.mp4'" type="video/mp4" />
  </video>
</template>

<script>
import ScrollTrigger from "gsap/ScrollTrigger";
import uuidv4 from "../mixins/uuidv4";

export default {
  data() {
    return {
      id: null,
    };
  },
  mixins: [uuidv4],
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    loadVideo() {
      let video = this.$refs.video;
      if (video) {
        let source = video.querySelector("source");

        source.src = source.dataset.lazy;
        video.load();
        video.classList.add("video-lazy--loaded");
        video.play();

        source.removeAttribute("data-lazy");
        ScrollTrigger.getById(this.id).kill(true);
        this.gsap.timeline().kill(true);
      }
    },
  },
  mounted() {
    this.id = this.uuidv4();

    this.gsap.timeline({
      scrollTrigger: {
        id: this.id,
        once: true,
        trigger: this.$refs.video,
        start: "-60% bottom",
        onEnter: this.loadVideo,
        onEnterBack: this.loadVideo,
      },
    });
  },
};
</script>

<style lang="scss">
.video-lazy {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.8s;

  &--loaded {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
