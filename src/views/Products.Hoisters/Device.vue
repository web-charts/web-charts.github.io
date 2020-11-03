<template>
  <div class="container has-text-centered">
    <h2
      class="is-size-3"
      style="margin-bottom: 2rem"
    >主要装置</h2>
    <VImage style="width: 1000px;" :path="image"></VImage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "Device",

  components: {
    VImage
  },

  props: {
    image: {}
  }
});
</script>
