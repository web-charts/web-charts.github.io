<template>
  <div
    class="box is-radius is-flex is-vcentered"
    style="height: 160px; padding-top: 2rem; padding-bottom: 2rem"
  >
    <span class="icon is-large">
      <i class="iconfont icon-major"></i>
    </span>

    <div style="margin-left: 1rem">
      <p class="has-text-weight-semibold">
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
