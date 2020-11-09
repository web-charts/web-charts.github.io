<template>
  <section
    class="app-section"
    v-class="`has-background-${background}`"
  >
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VSection",

  props: {
    background: {
      type: String,
      default: "white"
    }
  },
});
</script>
