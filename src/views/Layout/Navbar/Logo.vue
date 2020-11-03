<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <div class="nav-logo" @click="navigate">
      <VImage
        path="common/logo.png"
        class="app-logo-image"
        style="width: 96px; height: 44px; margin-bottom: 2px"
      ></VImage>
      <span>
        上海玉串自动化科技有限公司
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "Logo",

  components: {
    VImage
  }
});
</script>
