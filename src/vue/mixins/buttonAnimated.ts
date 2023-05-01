import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    btnAnim(parent, button) {
      ScrollTrigger.create({
        trigger: parent,
        onEnter: () =>
          document
            .querySelector(parent + " " + button + " .button-background")!
            .classList.add("button-animation"),
        onLeave: () =>
          document
            .querySelector(parent + " " + button + " .button-background")!
            .classList.remove("button-animation"),
        onEnterBack: () =>
          document
            .querySelector(parent + " " + button + " .button-background")!
            .classList.add("button-animation"),
        onLeaveBack: () =>
          document
            .querySelector(parent + " " + button + " .button-background")!
            .classList.remove("button-animation"),
      });
    },
  },
};
