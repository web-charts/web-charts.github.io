<template>
  <div>
    <TheDescription
      :title="title"
      :sub-title="subTitle"
      image="hoisters/sigma/animation.gif"
      :features="features"
    />
  </div>
</template>

<script lang="ts">
import { enUS, zhCN } from "@/plugins/i18n";
import { defineComponent } from "vue";
import TheDescription from "./TheDescription.vue";

export default defineComponent({
  name: "TheSigmaType",

  components: {
    TheDescription
  },

  computed: {
    title: vm => vm.$t("title"),
    subTitle: vm => vm.$t("subtitle"),
    features: vm => [
      [
        vm.$t("feature1"),
        vm.$t("feature2")
      ],
      [
        vm.$t("feature3"),
      ]
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "随机专用托盘循环型",
        subtitle: "本机力求节省搬入·搬出口空间，该系统的设计基于在狭窄仓库内，在难以保证充足作业空间时发挥重要作用，同时兼具『PL专用托盘循环型』的优点。",
        feature1: "搬入、搬出口所需空间与标准型相比降低约40%。",
        feature2: "一般电梯需要每年法定点检12～24次，但本机平均仅需每年4次自主点检即可，能够大幅降低运行成本。",
        feature3: "在采用本机时，无需类似于电梯的建筑安全确认申请手续。",
      },
      [enUS]: {
        title: "Random special pallet circulation type",
        subtitle: "The machine strives to save the space of moving in and moving out. The design of the system is based on the narrow warehouse, which plays an important role when it is difficult to ensure sufficient working space. At the same time, it has the advantage of PL special pallet circulation type",
        feature1: "The space needed to move in and out is reduced by about 40% compared with the standard type.",
        feature2: "General elevators need spot check 12 ~ 24 times per year by law, but the machine only needs 4 times of autonomous spot check per year on average which can greatly reduce the operating cost.",
        feature3: "When using this machine, there is no need to apply for elevator building safety confirmation",
      }
    }
  }
});
</script>
