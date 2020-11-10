<template>
  <div id="hoister">
    <VSection style="margin-top: 8px">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-3">
            垂直物流输送系统
          </h2>
          <div style="height: 0.75rem"></div>
          <p>
            垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，
            信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。
          </p>
        </div>
        <div style="width: 2rem; height: 1rem"></div>

        <div class="column">
          <figure class="image">
            <img
              src="https://mmbiz.qpic.cn/mmbiz_png/MkTmsKKhg7gRcg9eyyQ9fG9L2QlmISagdd51H7aYZiarEviaJdtLWRpW7m0XW46X1yD5AtrXqwkYah8CUIWTsd8Q/0?wx_fmt=png"
            >
          </figure>
        </div>
      </div>
    </VSection>
    <Advantages />
    <VSection title="定制化需求">
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
    </VSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";
import PLType from "./PLType.vue";
import Advantages from "./Advantages.vue";
import DrumpType from "./DrumpType.vue";
import SigmaType from "./SigmaType.vue";

export default defineComponent({
  name: "Hostier",

  components: {
    VSection,
    Advantages,
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
