<template>
  <section
    class="app-section"
    v-class="`has-background-${background}`"
  >
    <div class="container">
      <div v-if="title !== ''">
        <div class="is-size-2 has-text-centered">
          {{title}}
        </div>
        <div class="is-hidden-mobile" style="height: 5rem"></div>
        <div class="is-hidden-tablet" style="height: 2rem"></div>
      </div>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VSection",

  props: {
    title: {
      type: String,
      default: ""
    },

    background: {
      type: String,
      default: "white"
    }
  },
});
</script>
