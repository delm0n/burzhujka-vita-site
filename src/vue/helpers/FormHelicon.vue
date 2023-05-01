<template>
  <div>
    <!-- test -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getPechModelsIdActive",
    "getDops",
  ]),
  props: {
    rassr: {
      type: Boolean,
      default: false,
    },

    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
