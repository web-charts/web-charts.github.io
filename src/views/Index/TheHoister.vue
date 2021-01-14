<template>
  <div class="columns is-vcentered">
    <div class="column">
      <h2 class="is-size-4">
        {{$t("title")}}
      </h2>
      <div style="height: 0.75rem"></div>
      <p>
        {{$t("content")}}
      </p>
      <div
        @click="$emit('click-more')"
        style="margin-top: 1rem; width: 100px"
      >
        <router-link :to="`/${locale}/products/hoisters`">
          {{ $t("more")}} >
        </router-link>
      </div>
    </div>
    <div style="width: 2rem; height: 1rem"></div>
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <VImage path="hoisters/3.png" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN, locale } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheHoister",

  components: {
    VImage
  },

  computed: {
    locale
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "垂直物流输送系统",
        content: "垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。",
        more: "了解更多"
      },
      [enUS]: {
        title: "Vertical logistics delivery system",
        content: "Vertical logistics transport is a kind of automatic and non-manned precision equipment for horizontal and vertical free transport of goods in multi-storey building structures, which is mainly composed of various transport equipment such as elevators for operation, information and control.",
        more: "More"
      }
    }
  }
});
</script>;
