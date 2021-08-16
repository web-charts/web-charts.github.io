<template>
  <div class="columns is-vcentered">
    <div class="column">
      <h2 class="is-size-4">
        {{$t("title")}}
      </h2>
      <div style="height: 0.75rem"></div>
      <p>
        {{$t("content")}}
      </p>
      <div
        @click="$emit('click-more')"
        style="margin-top: 1rem; width: 100px"
      >
        <router-link :to="`/${locale}/products/wms`">
          {{ $t("more")}} >
        </router-link>
      </div>
    </div>

    <div style="width: 2rem; height: 1rem"></div>

    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <VImage path="wms/index.jpeg" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN, locale } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheSoftware",

  components: {
    VImage
  },

  computed: {
    locale,
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "智慧仓储管理系统",
        content: "为仓储企业提供全流程的智慧过程管理方案 + 互联网数字化系统服务。",
        more: "了解更多"
      },
      [enUS]: {
        title: "Warehouse Management System",
        content: "Provide warehousing enterprises with whole process intelligent process management scheme and Internet digital system services.",
        more: "More"
      }
    }
  }
});
</script>
