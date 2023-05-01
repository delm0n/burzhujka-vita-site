<template>
  <label class="checkbox">
    <input type="checkbox" v-model="getUser.rassrochka" />
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
    <span> В рассрочку</span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox span {
  font-weight: 500 !important;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getUser"]),
};
</script>