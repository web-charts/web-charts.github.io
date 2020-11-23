<template>
  <div class="contrast">
    <div class="is-size-5">
      <span>{{content}}</span>
      <span class="highlight">{{highlight}}</span>
    </div>
    <div>{{comment}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheContrast",

  props: {
    content: String,

    highlight: String,

    comment: String,
  }
});
</script>
