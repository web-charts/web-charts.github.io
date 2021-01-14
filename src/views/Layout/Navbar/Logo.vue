<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <div class="nav-logo" @click="navigate">
      <VImage
        path="common/logo.png"
        class="app-logo-image"
        style="width: 96px; height: 44px; margin-bottom: 2px;"
      ></VImage>
      <span style="white-space: nowrap">
        {{ $t("company") }}
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "Logo",

  components: {
    VImage
  },

  i18n: {
    messages: {
      [zhCN]: {
        company: "上海玉串自动化科技有限公司",
      },
      [enUS]: {
        company: "Yuchuan Automation Technology",
      }
    }
  }
});
</script>
