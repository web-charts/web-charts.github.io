<template>
  <div id="hoister">
    <div style="height: 2rem"></div>
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
    <div style="height: 0.5rem"></div>
    <component
      v-if="tabs[currentTab].component"
      :is="tabs[currentTab].component"
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PLType from "./PLType.vue";
import DrumpType from "./DrumpType.vue";
import SigmaType from "./SigmaType.vue";

export default defineComponent({
  name: "Hostier",

  components: {
    DrumpType,
    PLType,
    SigmaType,
  },

  data: () => ({
    tabs: [
      { text: "滚筒输送型", component: "DrumpType" },
      { text: "PL循环型", component: "PLType" },
      { text: "Σ循环型", component: "SigmaType" }
    ],
    currentTab: 0
  })
});
</script>
