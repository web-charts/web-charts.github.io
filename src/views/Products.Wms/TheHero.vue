<template>
  <VSection>
    <div class="is-hidden-mobile" style="height: 2rem"></div>

    <div class="columns is-vcentered">
      <div
        class="column is-flex is-centered is-hidden-mobile"
        style="padding-bottom: 0"
      >
        <figure class="image">
          <VImage path="wms/index.jpeg" />
        </figure>
      </div>

      <div class="is-hidden-mobile" style="width: 3rem; height: 2rem"></div>

      <div class="column">
        <p class="is-size-3">
          {{$t("title")}}
        </p>

        <div style="height: 0.75rem"></div>

        <h1 class="is-size-5">
          {{$t('subtitle')}}
        </h1>

        <div style="height: 0.75rem"></div>

        <p>
          {{$t('section')}}
        </p>

        <div style="height: 1rem"></div>

        <a
          class="button is-link"
          href="http://wms.als-yuchuan.com"
          target="view_window"
        >
          在线试用
        </a>
      </div>

      <div style="width: 3rem; height: 2rem"></div>

      <div

        class="column is-narrow is-flex is-centered is-hidden-tablet"
        style="padding-bottom: 0"
      >
        <figure
          class="image"
          style="width: 600px"
        >
          <VImage path="wms/index.jpeg" />
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
        title: "智慧仓储管理系统",
        subtitle: "互联网服务架构 + 过程管理方案",
        tryOnline: "在线试用",
        section: `
          本系统既包含入库、出库、盘点、移库、货权转移等核心功能，
          又覆盖倒短、装卸、打/拆托、码垛、缠膜、装箱等具体业务操作，
          贯穿仓库管理业务线。通过计划生成作业任务、任务驱动仓库实际作业的全过程管理模式，
          在作业过程中充分保障了账务和实际作业的准确性，亦有效提高了作业效率，
          减少了仓库作业对人工经验的依赖性，并可与 WCS 等执行系统对接，实现智慧的仓储全过程数字化管理。
        `
      },
      [enUS]: {
        title: "Warehouse Management System",
        subtitle: "Internet service framework, process management scheme",
        tryOnline: "Try Online",
        section: `
          The system not only includes core functions such as warehousing,
          outbound, inventory counting, warehouse transfer and cargo right transfer,
          but also covers specific business operations such as shortening,
          loading and unloading, palletizing / de palletizing,
          film wrapping and packing, which runs through the warehouse management business line.
        `
      }
    }
  }
});
</script>
