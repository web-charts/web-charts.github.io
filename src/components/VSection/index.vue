<template>
  <section
    class="app-section"
    v-class="`has-background-${background}`"
  >
    <div class="container">
      <div v-if="title !== ''">
        <div class="is-title is-size-3 has-text-centered">
          {{title}}
        </div>
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
