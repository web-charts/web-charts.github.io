<template>
  <div
    class="is-flex"
    style="justify-content: center; margin-bottom: 3rem"
  >
    <h2 class="is-size-3">
      {{$t("title")}}
    </h2>
  </div>
  <div
    class="container is-flex"
    style="justify-content: center; align-items: center"
  >
    <VImage path="home/software-1.png"></VImage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheSoftware",

  components: {
    VImage
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "WMS & WCS 软件系统"
      },
      [enUS]: {
        title: "",
      }
    }
  }
});
</script>
