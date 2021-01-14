<template>
  <div id="rgv">
    <div class="container">
    <div style="height: 1rem"></div>
      <div class="columns is-vcentered">
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            {{$t("title")}}
          </h1>
          <h2>
            {{$t("content")}}
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div
          id="agv-hero"
          class="column is-narrow"
        >
          <figure class="image">
            <VImage path="agv/hero.png"></VImage>
          </figure>
        </div>
      </div>
    </div>
    <div class="is-hidden-mobile" style="height: 6rem"></div>
    <div class="is-hidden-tablet" style="height: 3rem"></div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered">
        {{$t("features")}}
      </h1>
      <div style="height: 3rem"></div>
      <div
        class="columns"
        v-for="(group, key) in features" :key="key"
      >
        <div
          class="column"
          v-for="(feature, key) in group" :key="key"
        >
          <div class="feature-top is-hidden-touch"></div>
          <h1 class="feature-title is-size-5">
            {{feature[0]}}
          </h1>
          <div style="height: 0.5rem"></div>
          <p>{{feature[1]}}</p>
        </div>
      </div>
    </div>
    <div class="is-hidden-mobile" style="height: 6rem"></div>
    <div class="is-hidden-tablet" style="height: 3rem"></div>
    <div class="container">
      <div class="is-size-4 has-text-centered">
        {{$t("cases")}}
      </div>
      <div style="height: 3rem"></div>
      <div class="columns">
        <div class="column">
          <VImage
            path="agv/case-1.png"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="agv/case-3.jpeg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="agv/case-2.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
      </div>
    </div>
    <div class="is-hidden-touch" style="height: 5rem"></div>
    <div class="is-hidden-desktop" style="height: 2rem"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";
import { enUS, zhCN } from "@/plugins/i18n";

export default defineComponent({
  name: "Agv",

  components: {
    VImage
  },

  computed: {
    features: vm => [
      [
        [vm.$t("feat11"), vm.$t("feat12")],
        [vm.$t("feat21"), vm.$t("feat22")]
      ],
      [
        [vm.$t("feat31"), vm.$t("feat32")],
        [vm.$t("feat41"), vm.$t("feat42")]
      ]
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "AGV 无人搬运车",
        content: `
          AGV（Automated Guided Vehicle）是指装备了电磁或光学引导装置，
          能够按照规定的引导路径行驶，具有小车运行和停车装置、安全保护装置、
          具有各种移载功能的运输小车。
        `,
        features: "产品特点",
        cases: "使用案例",
        feat11: "功能丰富",
        feat12: "支持灵活的出入库策略，适应多样化需求。",
        feat21: "优化管理",
        feat22: "自动记录设备工作日志，节省人力和设备的管理成本。",
        feat31: "全功能对接",
        feat32: "支持与商城业务系统 ERP 及外围设备对接。",
        feat41: "稳定安全",
        feat42: "采用操作系统、IP虚拟化，实现关键数据异地容灾备份，关键进程双机热备。",
      },
      [enUS]: {
        title: "Automated Guided Vehicle",
        content: `
          AGV refers to a transport Vehicle equipped with electromagnetic or optical guidance device,
          which can travel in accordance with the prescribed guidance path and has trolley operation and parking devices,
          safety protection devices and various load shifting functions.
        `,
        features: "Features",
        cases: "Cases",
        feat11: "Rich functions",
        feat12: "Support flexible inbound and outbound strategy to meet diverse needs.",
        feat21: "Optimal management",
        feat22: "Automatic recording of equipment work log, save the cost of personnel and equipment management.",
        feat31: "Full function connect",
        feat32: "Support to connect with ERP and peripherals of mall business system.",
        feat41: "Stable and secure",
        feat42: `
          Operating system and IP virtualization are adopted to realize remote disaster
          recovery and backup of critical data and hot standby of critical processes.
        `,
      }
    }
  }
});
</script>
