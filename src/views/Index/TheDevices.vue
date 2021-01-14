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
      <div style="height: 0.75rem"></div>
      <div @click="$emit('click-more')" style="width: 100px">
        <router-link :to="`/${locale}/products/rgv`">
          {{$t("more")}} >
        </router-link>
      </div>
    </div>
    <div style="width: 2rem; height: 0.75rem"></div>
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <VImage path="home/device-1.png" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { enUS, zhCN, locale } from "@/plugins/i18n";
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheDevices",

  components: {
    VImage
  },

  computed: {
    locale
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "物流设备",
        content: "自动化物流设备是在无人干预的情况下，根据已经设定的指令或者程序，自动完成工作流程的任务，在各行业的生产制造、物流运输都起着重要作用。",
        more: "了解更多",
      },
      [enUS]: {
        title: "Logistics equipment",
        content: `
          In the case of no human intervention,
          automatic logistics equipment according to the set instructions or procedures,
          automatically complete the task of the workflow.
          It play an important role in the production and manufacturing of various industries.
        `,
        more: "More"
      },
    }
  }
});
</script>
