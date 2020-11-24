<template>
  <VSection title="出入口方向" style="padding-top: 0">
    <div class="is-flex is-centered">
      <div class="buttons is-centered has-addons" style="max-width: 960px">
        <a
          v-for="route in routes"
          class="button"
          :key="route"
          style="width: 160px; height: 200px; cursor: default"
        >
            <div>
              <span class="is-size-5">{{route}}</span>
              <div style="height: 1rem"></div>
              <!-- BUG: 整个 Button 存在跳闪的情况 -->
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
import VSection from "@/components/VSection/index.vue";
import TheTransplotRouteTypeSVG from "./TheTransplotRouteTypeSVG.vue";

const routes = [
  "Z型", "C型", "CC型", "CZ型", "ZC型", "F型",
  "E型", "ZE型", "FE型", "EE型", "LF型", "LL型"
];

export default defineComponent({
  name: "TransplotRoutes",

  components: {
    VSection,
    TheTransplotRouteTypeSVG
  },

  computed: {
    routes: () => routes
  }
});
</script>
