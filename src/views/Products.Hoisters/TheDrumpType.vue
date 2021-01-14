<template>
  <div>
    <TheDescription
      :title="title"
      :sub-title="subTitle"
      image="hoisters/drum/animation.gif"
      :features="features"
    />
  </div>
</template>

<script lang="ts">
import { enUS, zhCN } from "@/plugins/i18n";
import { defineComponent } from "vue";
import TheDescription from "./TheDescription.vue";

export default defineComponent({
  name: "TheDrumpTypeHoister",

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
        vm.$t("feature4")
      ]
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "滚筒型托盘专用型",
        subtitle: "本设备采用独立变频控制技术，使运输途中的加速和减速非常流畅，不需担心货物散落、倾倒的问题。同时，由于产品框架设计为立式塔形，具有较强的抗震能力，在新老建筑均可安装。",
        feature1: "该机器是作为非载人电梯类以外机械设备得以认定的，每年4次自主点检即可，从而削减了运行成本。",
        feature2: "采用独立变频控制，加速和减速非常流畅，不必担心货物散落、倾倒问题。",
        feature3: "产品采用立式塔型框架，具有较强抗震能力，设备在新老建筑内均可设置。",
        feature4: "采用了完善的安全装置，体现了为客户提供“安心”运行保证的设计理念。",
      },
      [enUS]: {
        title: "Cylinder pecial pallet type",
        subtitle: "The equipment adopts independent frequency conversion control technology, which makes the acceleration and deceleration in transportation very smooth, and there is no need to worry about the scattering and dumping of goods.At the same time, the product frame is designed as a vertical tower with strong seismic capacity, can be installed in new and old buildings.",
        feature1: "The machine is recognized as an unmanned elevator of mechanical equipment , it can be inspected at four times per year autonomously, thus reducing the operating cost.",
        feature2: "Adopt independent frequency conversion control, accelerate and decelerate very smoothly,no need worry about goods scattering, dumping problem.",
        feature3: "The product adopts vertical tower frame, which has strong seismic capability, the equipment can be set up in both old and new buildings.",
        feature4: "Perfect safety device is adopted which showing the design concept of providing customers with peace of mind operation guarantee.",
      }
    }
  }
});
</script>
