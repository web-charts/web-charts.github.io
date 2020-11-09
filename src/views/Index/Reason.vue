<template>
  <div
    class="is-bordered is-radius is-flex is-vcentered"
    style="padding: 1.5rem; height: 160px"
  >
    <span class="icon is-large">
      <i class="iconfont icon-major"></i>
    </span>

    <div
      style="margin-left: 1rem"
    >
      <p class="has-text-weight-semibold">
        {{title}}
      </p>
      <div style="height: 0.25rem"></div>
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
