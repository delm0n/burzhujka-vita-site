<template>
  <div class="model-checkbox">
    <div
      v-for="(size, index) in getPechModels"
      :key="index"
      class="checkbox"
      @click="!size.active ? changePechModel(size.id) : ''"
    >
      <input type="checkbox" v-model="size.active" />
      <div class="box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M1 7.56424L5.92308 12.4531L17 1.45312"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="icon-container" v-if="icon">
        <img
          :src="
            'build/images/' +
            size.img.src +
            '--icon' +
            (getWebp == 'webp' ? '.webp' : '.png')
          "
          :alt="size.img.alt"
        />
      </div>
      <span>
        {{
          (spanValue + size.name)[0].toUpperCase() +
          (spanValue + size.name).slice(1)
        }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
.model-checkbox {
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 576px) {
    gap: 10px;
  }
}

.icon-container {
  margin: 0 5px;
}
</style>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: {
    spanValue: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapGetters(["getPechModels", "getWebp"]),
  methods: mapMutations(["changePechModel"]),
};
</script>