<template>
  <div>
    <TheDescription
      :title="title"
      :sub-title="subTitle"
      image="hoisters/pltype/animation.gif"
      :features="features"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import TheDescription from "./TheDescription.vue";

export default defineComponent({
  name: "ThePLTypeHoister",

  components: {
    TheDescription
  },

  computed: {
    title: vm => vm.$t("title"),
    image: () => "",
    subTitle: vm => vm.$t("subtitle"),
    features: vm => [
      [
        vm.$t("feature1"),
        vm.$t("feature2")
      ],
      [
        vm.$t("feature3"),
        vm.$t("feature4")
      ]
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "PL 专用托盘/物流车循环型",
        subtitle: "低成本专用托盘循环系统",
        feature1: "一般电梯需要每年法定点检12次，但本机每年仅需4次主点检即可，能够大幅降低运行成本",
        feature2: "采用本机时，无需办理所需电梯建筑确认申请手续",
        feature3: "装载口有专用托盘处于待机状态, 可以灵活进行搬入、搬出作业。并且，专用托盘全自动运行，可确保作业安全",
        feature4: "动力叉车及手动叉车可同时使用，能够同时实施搬运作业，无需进行物流车改造",
      },
      [enUS]: {
        title: "PL special pallet/logistics car circulation type",
        subtitle: "Low cost dedicated pallet circulation system.",
        feature1: "General elevators need spot check 12 times a year by law, but this machine only needs 4 main spot check times a year which can greatly reduce the operating cost.",
        feature2: "When using this machine, there is no need to go through the required elevator building confirmation application procedures.",
        feature3: "moved in and out flexibly.And, the special tray automatic operation, can ensure the safety of the operation.",
        feature4: "Power forklift and manual forklift can be used at the same time, it can be carried out at the same time, no need for logistics truck transformation.",
      }
    }
  }
});
</script>
