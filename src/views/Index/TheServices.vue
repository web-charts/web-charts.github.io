<template>
  <div class="columns is-multiline">
    <div
      class="column is-half"
      v-for="([title, content], key) in reasons" :key="key"
    >
      <TheService :title="$t(title)" :content="$t(content)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import TheService from "./TheService.vue";

export default defineComponent({
  name: "TheReasons",

  components: {
    TheService
  },

  data: () => ({
    reasons: [
      ["title1", "content1"],
      ["title2", "content2"],
      ["title3", "content3"],
      ["title4", "content4"]
    ],
  }),

  i18n: {
    messages: {
      [zhCN]: {
        title1: "咨询规划",
        title2: "软硬件系统设计",
        title3: "生产制造",
        title4: "安装调试",
        content1: "智能工厂、仓储智慧物流园区的整体规划及解决方案，通过设计图、仿真、三维动画进行多角度演示",
        content2: "定制化需求的智能物流输送系统软件和硬件设计，以及对现有系统进行改进优化",
        content3: "基于日本、德国的生产体系加工体系、现代化加工设备、稳定的供应链，打造一流的产品",
        content4: "专业人员驻场实施硬件组装与软件系统调试，确保项目按时交付并提供后续维保服务",
      },
      [enUS]: {
        title1: "Consulting Planning",
        title2: "Software and hardware system design",
        title3: "Production and manufacturing",
        title4: "Installation and debugging",
        content1: "Intelligent factory,the overall planning and solutions of intelligent warehouse logistics park are showing  by multiple angles through design drawing, simulation and 3D animation.",
        content2: "Design software and hardware for customized intelligent logistics delivery system, and improve and optimize existing system.",
        content3: "Based on the production system and processing system of Japan and Germany, modern processing equipment and stable supply chain to create first-class products.",
        content4: "Professional on site implement hardware assembly and software system debugging, ensure project delivery on time and provide follow-up maintenance services.",
      }
    }
  }
});
</script>
