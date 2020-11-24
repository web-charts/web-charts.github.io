<template>
  <section id="hoister">
    <VSection>
      <div class="columns is-vcentered">
        <div
          class="column is-narrow is-flex is-centered"
          style="padding-bottom: 0"
        >
          <figure
            class="image"
            style="width: calc(350px * 0.8); height: calc(680px * 0.8)"
          >
            <VImage path="hoisters/drum/animation.gif"></VImage>
          </figure>
        </div>

        <div style="width: 3rem; height: 2rem"></div>

        <div class="column">
          <p class="is-size-3">
            垂直物流输送系统
          </p>

          <div style="height: 0.75rem"></div>

          <p>
            垂直物流输送是在指多层建筑结构中，以提升机为主的各种输送设备进行作业，
            信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。
          </p>

          <div
            class="feature-top"
            style="margin-top: 2rem"
          />

          <p>
            搬运能力是货梯的
            <strong class="is-size-5 has-text-danger">3倍</strong>
          </p>

          <div
            class="feature-top"
            style="margin-top: 2rem"
          />

          <p>
            独立塔体，使用寿命长，操作安全、简单，广泛应用于仓库、生产线和配送中心
          </p>

          <div
            class="feature-top"
            style="margin-top: 2rem"
          />

          <p>
            结合输送机、调度系统、控制系统和其他设备，实现自动化跨楼层输送
          </p>
        </div>
      </div>
    </VSection>

    <TheAdvantages />

    <VSection title="提升机机型" style="padding-bottom: 0">
      <div class="field has-addons has-addons-centered">
        <p
          v-for="(tab, key) in tabs" :key="key"
          class="control"
        >
          <a
            @click="currentTab = key"
            class="button is-medium"
            style="height: 64px"
            :class="key === currentTab && 'is-focused'"
          >
            <span>{{tab.text}}</span>
          </a>
        </p>
      </div>
    </VSection>
    <component
      v-if="tabs[currentTab].component"
      :is="tabs[currentTab].component"
    ></component>

    <TheTransplotRoutes/>

    <TheCases
      :images="[
        'hoisters/sigma/case-1.jpg',
        'hoisters/case-3.jpg',
        'hoisters/drum/case-1.jpeg',
        'hoisters/drum/case-2.jpg',
        'hoisters/pltype/case-1.jpg',
        'hoisters/sigma/case-2.jpg',
      ]"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VHero from "@/components/Hero/index.vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";
import TheAdvantages from "./TheAdvantages.vue";
import TheDrumpType from "./TheDrumpType.vue";
import TheSigmaType from "./TheSigmaType.vue";
import TheTransplotRoutes from "./TheTransplotRoutes.vue";
import ThePLType from "./ThePLType.vue";
import TheCases from "./Cases.vue";

export default defineComponent({
  name: "Hostier",

  components: {
    VHero,
    VImage,
    VSection,
    TheCases,
    TheAdvantages,
    TheDrumpType,
    TheSigmaType,
    ThePLType,
    TheTransplotRoutes
  },

  data: () => ({
    tabs: [
      { text: "滚筒输送型", component: "TheDrumpType" },
      { text: "PL循环型", component: "ThePLType" },
      { text: "Σ循环型", component: "TheSigmaType" }
    ],
    currentTab: 0
  })
});
</script>
