<template>
  <article class="vita-item">
    <div class="vita-wraper">
      <div class="vita-wraper__title">
        <h2 v-if="title" v-html="title"></h2>
        <p v-if="subtitle" class="subtitle" v-html="subtitle"></p>
      </div>

      <div class="vita-wraper__content">
        <slot name="content"></slot>
      </div>

      <div class="vita-wraper__line">
        <div class="line"></div>
      </div>

      <div class="vita-wraper__media">
        <slot name="media"></slot>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
      default: "",
    },
    testImg: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>
