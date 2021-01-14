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
      <div style="height: 0.75rem"></div>
      <div @click="$emit('click-more')" style="width: 100px">
        <router-link :to="`/${locale}/products/asrs`">
          {{$t("more")}} >
        </router-link>
      </div>
    </div>
    <div style="width: 2rem; height: 1rem"></div>
    <div class="column">
      <div class="card">
        <div class="card-image">
        <figure class="image">
          <VImage path="/home/liku-1.jpg" />
        </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { enUS, zhCN, locale } from "@/plugins/i18n";
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheAsrs",

  components: {
    VImage,
  },

  computed: {
    locale
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "自动化立体仓库系统",
        content: "自动化立体仓库是采用高层货架配以料箱或托盘储存货物，用巷道堆垛起重机及其他输送设备在信息WMS以及设备控制WCS的支配下进行联动作业，以实现仓储物流合理化，存取自动化，操作简便化的自动化物流仓储系统。",
        more: "了解更多"
      },
      [enUS]: {
        title: "Automatic stereoscopic warehouse",
        content: "Automated stereoscopic warehouse is make full use of space, to achieve the maximum storage of goods, storage of high automation, high speed and information integration of the storage, fully automatic computer control logistics warehouse storage system (AS/RS) system is usually composed of three-dimensional shelf, rail roadway stacker, pallet conveyor system, size detection for ins and outs of barcode reading system and computer operating system composed of complex automation integrated logistics idea, USES the advanced control, bus, communication and information technology, through the above equipment coordinated action directly.",
        more: "More"
      }
    }
  }
});
</script>
