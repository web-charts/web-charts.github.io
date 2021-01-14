<template>
  <div id="rgv">
    <div class="container">
    <div style="height: 2rem"></div>
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
        <div
          id="rgv-hero"
          class="column is-narrow"
        >
          <VImage path="rgv/hero.jpg"></VImage>
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
      <div class="columns">
        <div class="column">
          <h1
            class="is-size-5"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top is-hidden-touch"></div>
            <span class="feature-title">
              {{$t("feat11")}}
            </span>
          </h1>
          <h2 v-html="$t('feat12')">
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div class="column">
          <h1
            class="is-size-5"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top is-hidden-touch"></div>
            <span class="feature-title">
              {{$t("feat21")}}
            </span>
          </h1>
          <h2>
            {{$t("feat22")}}
          </h2>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h1
            class="is-size-5"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top is-hidden-touch"></div>
            <span class="feature-title">
              {{$t("feat31")}}
            </span>
          </h1>
          <h2 v-html="$t('feat32')">
          </h2>
        </div>
        <div style="width: 2rem"></div>
        <div class="column">
          <h1
            class="is-size-5"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top is-hidden-touch"></div>
            <span class="feature-title">
              {{$t("feat41")}}
            </span>
          </h1>
          <h2>
            {{$t("feat42")}}
          </h2>
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
            path="rgv/case-1.png"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="rgv/case-2.png"
            style="width: 100%; height: 100%"
          ></VImage>
        </div>
        <div class="column">
          <VImage
            path="rgv/case-3.png"
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
  name: "Rgv",

  components: {
    VImage
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "有轨穿梭车",
        content: `
          穿梭车是一种智能机器人，可以编程实现取货、运送、放置等任务，
          并可与上位机或WMS系统进行通讯，结合RFID、条码等识别技术，实现自动化识别、存取等功能。
        `,
        features: "产品特点",
        cases: "使用案例",
        feat11: "高能力",
        feat12: `
          拥有世界最高走行速度
          <span class="has-text-danger">200</span>
          （满载）/
          <span class="has-text-danger">250</span>
          m/min（空载）；
          通过变频控制实现了平稳的加速 和减速。
        `,
        feat21: "便于维修",
        feat22: "启动原点多处分布，一旦停电 等发生时可迅速恢复正常运转； 采用高性能遥控器，便于维护和操作。",
        feat31: "节约能源",
        feat32: `
          采用高强度树脂车轮，降低了走行阻力；
          直穿式台车采用
          <span class="has-text-danger">电源逆变器</span>
          ，达到能源再生利用。
        `,
        feat41: "节省空间",
        feat42: "最小转弯弧度可达到Ｒ500mm,提高了空间有效利用率。",
      },
      [enUS]: {
        title: "Rail Guide Vehicle",
        content: `
          Trolley is a kind of intelligent robot,
          which can be programmed to pick up, transport,
          place and other tasks, and can communicate with the upper computer or WMS system.
          It can realize automatic identification,
          access and other functions by combining RFID,
          bar code and other identification technologies.
        `,
        features: "Features",
        cases: "Cases",
        feat11: "High capacity",
        feat12: `
          Has the world's highest walking speed of
          <span class="has-text-danger">200</span>
          (full load) /
          <span class="has-text-danger">250</span>
          m/min (no load);
          The steady acceleration and deceleration are realized by frequency conversion control.
        `,
        feat21: "Easy Maintenance",
        feat22: `
          The starting point is distributed in many places,
          the normal operation can be quickly restored in case of power failure.
          Adopt high performance remote control, easy to maintain and operate.
        `,
        feat31: "Save energy",
        feat32: `
          The high strength resin wheel reduces the running resistance.
          Direct through trolley adopts power inverter to achieve energy regeneration.
        `,
        feat41: "Save space",
        feat42: `
          The minimum turning radian can reach R500mm,
          improving the effective utilization of space.
        `,
      }
    }
  }
});
</script>
