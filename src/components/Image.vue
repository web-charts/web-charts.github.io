<template>
  <img :src="image">
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VImage",

  props: {
    path: {
      type: String,
      required: true
    }
  },

  computed: {
    image (): string {
      return `https://img.als-yuchuan.com/${this.path}`;
    }
  }
});
</script>
