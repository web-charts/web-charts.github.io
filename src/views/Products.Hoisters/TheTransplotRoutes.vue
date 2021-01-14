<template>
  <VSection
    :title="$t('title')"
    style="padding-top: 0"
  >
    <div class="is-flex is-centered">
      <div class="buttons is-centered has-addons" style="max-width: 960px">
        <a
          v-for="route in routes"
          class="button"
          :key="route"
          style="width: 160px; height: 200px; cursor: default"
        >
            <div>
              <span class="is-size-5">
                {{`${route}${$t("type")}`}}
              </span>
              <div style="height: 1rem"></div>

              <div style="width: 100px; height: 100px;">
                <TheTransplotRouteTypeSVG :type="route" />
              </div>
            </div>
        </a>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VSection from "@/components/VSection/index.vue";
import TheTransplotRouteTypeSVG from "./TheTransplotRouteTypeSVG.vue";

const routes = [
  "Z", "C", "CC", "CZ", "ZC", "F",
  "E", "ZE", "FE", "EE", "LF", "LL"
];

export default defineComponent({
  name: "TransplotRoutes",

  components: {
    VSection,
    TheTransplotRouteTypeSVG
  },

  computed: {
    routes: () => routes
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "出入口方向",
        type: " 型"
      },
      [enUS]: {
        title: "Door Direction",
        type: "-Type"
      }
    }
  }
});
</script>
