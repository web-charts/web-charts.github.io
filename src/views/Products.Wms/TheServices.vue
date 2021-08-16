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
      ["title4", "content4"],
      ["title5", "content5"],
      ["title6", "content6"],
    ],
  }),

  i18n: {
    messages: {
      [zhCN]: {
        title1: "库存可视",
        title2: "路径最优",
        title3: "实时监控",
        title4: "流程标准",
        title5: "个性账单",
        title6: "柔性扩展",
        content1: "库位存货实时可视、实时预警",
        content2: "系统自动匹配最优库位，减少人员依赖",
        content3: "数据实时汇总，状态实时监控、预警",
        content4: "规范操作流程及相关标准，降低管理成本",
        content5: "客户/供应商账单任意时间区间灵活导出，账单格式支持定制化应对不同客户要求",
        content6: "支持对接ERP、WCS、SCADA、及各硬件传感器、PLC等及功能扩展，满足业务发展需求"
      },
      [enUS]: {
        title1: "Inventory visualization",
        title2: "Optimal logistics route",
        title3: "Real time monitoring",
        title4: "Standard process",
        title5: "Customized Finance",
        title6: "Flexible extension",
        content1: "Real time visualization and real-time warning of inventory location",
        content2: "Automatically matches the optimal location to reduce personnel dependence",
        content3: "Real time data summary, real-time status monitoring and early warning",
        content4: "Standardize the operation process and relevant standards to reduce the management cost",
        content5: "Customer / supplier bills can be exported flexibly in any time interval, and the bill format can be customized to meet different customer requirements",
        content6: "Support the docking and function expansion of ERP, WCS, SCADA, hardware sensors and PLC to meet the needs of business development"
      }
    }
  }
});
</script>
