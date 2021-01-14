<template>
  <section id="hoister">
    <TheHero />

    <TheAdvantages />

    <VSection :title="$t('type')" style="padding-bottom: 0">
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
            <span>{{$t(tab.text)}}</span>
          </a>
        </p>
      </div>
    </VSection>

    <component
      v-if="tabs[currentTab].component"
      :is="tabs[currentTab].component"
    />

    <TheTransplotRoutes />

    <!-- <the-techniques /> -->

    <TheCases
      :images="[
        'hoisters/2.jfif',
        'hoisters/drum/case-1.jpeg',
        'hoisters/case-3.jpg',
        'hoisters/drum/case-2.jpg',
        'hoisters/3.png',
        'hoisters/sigma/case-2.jpg',
      ]"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VHero from "@/components/Hero/index.vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";
import TheAdvantages from "./TheAdvantages.vue";
import TheDrumpType from "./TheDrumpType.vue";
import TheSigmaType from "./TheSigmaType.vue";
import TheTransplotRoutes from "./TheTransplotRoutes.vue";
import ThePLType from "./ThePLType.vue";
import TheCases from "./TheCases.vue";
import TheHero from "./TheHero.vue";
import TheTechniques from "./TheTechniques.vue";

export default defineComponent({
  name: "Hostier",

  components: {
    VHero,
    VImage,
    VSection,
    TheHero,
    TheCases,
    TheAdvantages,
    TheDrumpType,
    TheSigmaType,
    ThePLType,
    TheTransplotRoutes,
    TheTechniques,
  },

  data: () => ({
    tabs: [
      { text: "model1", component: "TheDrumpType" },
      { text: "model2", component: "ThePLType" },
      { text: "model3", component: "TheSigmaType" }
    ],
    currentTab: 0
  }),

  i18n: {
    messages: {
      [zhCN]: {
        type: "提升机机型",
        model1: "滚筒输送型",
        model2: "PL循环型",
        model3: "Σ循环型",
      },
      [enUS]: {
        type: "Model",
        model1: "Roller Conveyor",
        model2: "PL Cycle",
        model3: "Σ Cycle",
      }
    }
  }
});
</script>
