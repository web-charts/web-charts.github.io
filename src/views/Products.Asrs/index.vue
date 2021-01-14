<template>
  <div id="rgv">
    <div class="container">
    <div class="is-hidden-tablet" style="height: 1rem"></div>
    <div class="is-hidden-mobile" style="height: 3rem"></div>
      <div class="columns is-vcentered">
        <div class="column">
          <h1
            class="is-size-3"
            style="margin-bottom: 1rem"
          >
            {{$t("title1")}}
          </h1>
          <h2>
            {{$t("title2")}}
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div
          id="asrs-hero"
          class="column is-narrow"
          style="margin-top: 1rem"
        >
          <figure class="image">
            <VImage path="home/liku-1.jpg"></VImage>
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
        <div
          class="column"
          v-for="path in ['asrs/case-1.jpg', 'asrs/case-3.jpg', 'asrs/case-2.jpeg']"
          :key="path"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <VImage
                  :path="path"
                  style="width: 100%; height: 100%"
                />
              </figure>
            </div>
          </div>
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
  name: "Asrs",

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
        title1: "自动化立体仓库",
        title2: `
          自动化立体仓库是充分利用空间，
          实现货物的最大存储量、存储的高度自动化、存储的高速化和信息的一体化，
          完全由计算机操控的自动化物流存储系统仓库(AS/RS系统)
          通常是由立体货架、有轨巷道堆垛机、出入库托盘输送机系统、
          尺寸检测条码阅读系统及计算机操作系统组成的复杂自动化集成化物流理念，
          采用先进的控制、总线、通讯和信息技术，通过以上设备的协调动作进行出入库作业。
        `,
        features: "产品特性",
        cases: "使用案例",
        feat11: "高利用率",
        feat12: "通过使用高层货架存储的方式，大幅提高空间利用率。",
        feat21: "高生产率",
        feat22: "加快货物的存取节奏，减轻劳动强度，提高生产效率。",
        feat31: "系统兼容",
        feat32: "与其他物流系统对接，提高企业整体信息化水平。",
        feat41: "智能控制",
        feat42: "控制库存和管理更加灵活，无须人员介入即可快速操作。",
      },
      [enUS]: {
        title1: "Automatic stereoscopic warehouse",
        title2: `
          Automated stereoscopic warehouse is make full use of space,
          to achieve the maximum storage of goods,
          storage of high automation, high speed and information integration of the storage,
          fully automatic computer control logistics warehouse storage system (AS/RS) system is usually composed of three-dimensional shelf,
          rail roadway stacker, pallet conveyor system,
          size detection for ins and outs of barcode reading system and computer operating system composed of complex automation integrated logistics idea,
          USES the advanced control, bus, communication and information technology,
          through the above equipment coordinated action directly.Automated stereoscopic warehouse is make full use of space,
          to achieve the maximum storage of goods, storage of high automation,
          high speed and information integration of the storage,
          fully automatic computer control logistics warehouse storage system (AS/RS) system is usually composed of three-dimensional shelf,
          rail roadway stacker, pallet conveyor system, size detection for ins and outs of barcode reading system and computer operating system composed of complex automation integrated logistics idea,
          USES the advanced control, bus, communication and information technology,
          through the above equipment coordinated action directly.
        `,
        cases: "Cases",
        features: "Features",
        feat11: "High utilization",
        feat12: "Through the use of high shelf storage, greatly improve the utilization of space.",
        feat21: "High productivity",
        feat22: "Accelerate the pace of goods storage and withdrawal, reduce labor intensity, improve production efficiency.",
        feat31: "System compatibility",
        feat32: "Connect with other logistics systems to improve the overall level of enterprise informatization.",
        feat41: "Intelligent control",
        feat42: "Inventory control and management are more flexible and can be operated quickly without personnel intervention.",
      }
    }
  }
});
</script>
