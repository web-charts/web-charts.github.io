<template>
  <div id="app-index">
    <TheHero />

    <VSection :title="$t('business')">
      <TheServices />
    </VSection>

    <VSection
      :title="$t('partners')"
      style="padding-top: 0;"
    >
      <div class="columns is-multiline">
        <div
          v-for="(item, key) in partners" :key="key"
          class="column is-one-third is-flex is-centered"
        >
          <div class="box">
            <VImage
              :path="`home/partners/${item}.png`"
              style="width: 320px; height: 160px;"
            />
          </div>
        </div>
      </div>
    </VSection>

    <VSection
      :title="$t('products')"
      background="white-ter"
    >
      <TheHoister @click-more="handleJump" />
    </VSection>

    <VSection background="white">
      <TheAsrs @click-more="handleJump" />
    </VSection>

    <VSection background="white-ter">
      <TheDevices @click-more="handleJump" />
    </VSection>

    <VSection background="white">
      <TheSoftware  @click-more="handleJump" />
    </VSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN, isZhCN } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";
import TheAsrs from "./TheAsrs.vue";
import TheDevices from "./TheDevices.vue";
import TheHero from "./TheHero.vue";
import TheHoister from "./TheHoister.vue";
import TheServices from "./TheServices.vue";
import TheSoftware from "./TheSoftware.vue";

export default defineComponent({
  name: "HomeIndex",

  components: {
    TheAsrs,
    TheDevices,
    TheHero,
    TheHoister,
    TheServices,
    TheSoftware,
    VImage,
    VSection,
  },

  data: () => ({
    height: "0.75rem",
    partners: [
      "招商局", "格力", "武汉万吨",
      "中外运", "世纪联华", "鑫荣懋",
      "鲜丰水果", "美源供应链"
    ],
  }),

  computed: {
    isZhCN,
  },

  methods: {
    handleJump () {
      window.scrollTo(0, 0);
    }
  },

  i18n: {
    messages: {
      [zhCN]: {
        business: "我们的服务",
        partners: "合作伙伴",
        products: "产品介绍",
      },
      [enUS]: {
        business: "Our Business",
        partners: "Partners",
        products: "Products"
      }
    }
  }
});
</script>
