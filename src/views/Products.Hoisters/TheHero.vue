<template>
  <VSection>
    <div class="columns is-vcentered">
      <div
        class="column is-narrow is-flex is-centered is-hidden-mobile"
        style="padding-bottom: 0"
      >
        <figure
          class="image"
          style="width: calc(350px * 0.8); height: calc(680px * 0.8)"
        >
          <VImage path="hoisters/drum/animation.gif"></VImage>
        </figure>
      </div>

      <div class="is-hidden-mobile" style="width: 3rem; height: 2rem"></div>

      <div class="column">
        <p class="is-size-3">
          {{$t("title")}}
        </p>

        <div style="height: 0.75rem"></div>

        <p>
          {{$t('content')}}
        </p>

        <div
          class="feature-top"
          style="margin-top: 2rem"
        />

        <p v-html="$t('feat1')">
        </p>

        <div
          class="feature-top"
          style="margin-top: 2rem"
        />

        <p v-html="$t('feat2')">
        </p>

        <div
          class="feature-top"
          style="margin-top: 2rem"
        />

        <p v-html="$t('feat3')">
        </p>
      </div>

      <div style="width: 3rem; height: 2rem"></div>

      <div
        class="column is-narrow is-flex is-centered is-hidden-tablet"
        style="padding-bottom: 0"
      >
        <figure
          class="image"
          style="width: calc(350px * 0.8); height: calc(680px * 0.8)"
        >
          <VImage path="hoisters/drum/animation.gif"></VImage>
        </figure>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";
import { enUS, zhCN } from "@/plugins/i18n";

export default defineComponent({
  name: "TheHero",

  components: {
    VImage,
    VSection
  },

  props: {
    reversed: Boolean
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "垂直物流输送系统",
        content: "垂直物流输送是在指多层建筑结构中，以提升机为主的各种输送设备进行作业， 信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。",
        feat1: "搬运能力是货梯的 <strong class=\"is-size-5 has-text-danger\">3倍</strong>",
        feat2: "独立塔体，使用寿命长，操作安全、简单，广泛应用于仓库、生产线和配送中心",
        feat3: "结合输送机、调度系统、控制系统和其他设备，实现自动化跨楼层输送",

      },
      [enUS]: {
        title: "Vertical logistics delivery system.",
        content: "Vertical logistics transport is a kind of automatic and non-manned precision equipment for horizontal and vertical free transport of goods in multi-storey building structures, which is mainly composed of various transport equipment such as elevators for operation, information and control.",
        feat1: "The carrying capacity is <strong class=\"is-size-5 has-text-danger\">Three</strong> times than the freight elevator.",
        feat2: "Independent tower, long life, safe and simple operation, widely used in warehouses, production lines and distribution centers.",
        feat3: "Combine conveyor, dispatch system, control system and other equipment to realize automatic transport across floors.",
      }
    }
  }
});
</script>
