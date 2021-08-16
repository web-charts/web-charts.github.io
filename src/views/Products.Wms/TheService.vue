<template>
  <div
    class="box is-radius is-flex is-vcentered"
    style="height: 140px"
  >
    <div style="margin-left: 1rem">
      <p class="has-text-weight-semibold is-size-5">
        {{title}}
      </p>
      <div style="height: 0.5rem"></div>
      <p>
        {{content}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Feature",

  props: {
    title: String,
    content: String,
  }
});
</script>
