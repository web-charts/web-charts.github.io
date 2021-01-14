<template>
  <div id="palletizing-robot">
    <div class="container">
    <div class="is-hidden-tablet" style="height: 1rem"></div>
    <div class="is-hidden-mobile" style="height: 3rem"></div>
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
          id="palletizing-robot-hero"
          class="column is-narrow"
          style="margin-top: 1rem"
        >
          <figure class="image">
            <VImage path="palletizing-robot/hero.jpg"></VImage>
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
            path="palletizing-robot/case-1.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="palletizing-robot/case-3.jpg"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="palletizing-robot/case-2.png"
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
import { enUS, zhCN } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";

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
        title: "码垛机器人",
        content: `
          码垛机器人是在物流生产线末端取代人工或码垛机完成工件的自动码垛功能。
          主要适应对象为大批量、重复性强或是工作环境具有高温、低温、粉尘等条件恶劣的情况。
          具有定位精确、码垛质量稳定、工作节拍可调、运行平稳可靠、维修方便等特点。
        `,
        features: "产品特性",
        cases: "使用案例",
        feat11: "节省空间",
        feat12: "能够通过编程在狭小的空间内工作，从而节省生产空间",
        feat21: "低成本",
        feat22: "设备可以连续不间断工作，几乎不需要照明，减少作业成本",
        feat31: "提高质量",
        feat32: "设备的重复性和精确性能够确保生产出的产品完全符合标准预期。",
        feat41: "安全",
        feat42: "出现意外情况时能够按紧急状态运行或停止，避免安全事故的扩散。",
      },
      [enUS]: {
        title: "Palletizing robot",
        content: `
          Palletizing robot is an automatic palletizing robot which replaces manual or palletizing machine at the end of logistics production line.
          Mainly suitable for large quantities,
          strong repeatability or working environment with high or low temperature,dust and other bad situations.
          It has the characteristics of accurate positioning,
          stable palletizing quality, adjustable beat, stable and reliable operation,
          convenient maintenance and so on.
        `,
        features: "Features",
        cases: "Cases",
        feat11: "Save space",
        feat12: "It can be programmed to work in small Spaces, thus saving production space.",
        feat21: "Low cost",
        feat22: "The equipment can operate continuously without interruption, requiring almost no lighting and reducing operational costs",
        feat31: "Improve quality",
        feat32: "The repeatability and accuracy of the equipment ensures that the products produced are exactly as expected.",
        feat41: "Safe",
        feat42: `
          When an accident occurs,
          it can be operated or stopped according to the state of emergency to avoid the spread of safety accidents.
        `,
      }
    }
  }
});
</script>
