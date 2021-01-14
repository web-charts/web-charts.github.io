<template>
  <footer class="app-footer has-background-link">
    <div class="content has-text-centered has-text-white">
      <p>{{$t("telephone")}}: +86-21-6105-7311 &nbsp;&nbsp; QQ: 150287070</p>
      <p>E-Mail：michellezhang@als-yuchuan.com</p>
      <p>{{$t("address")}}</p>
      <div class="columns is-centered is-gapless">
        <p class="column is-narrow">©2021 www.als-yuchuan.com</p>
        <div style="width: 0.5rem; height: 1rem"></div>
        <p class="column is-narrow">
          <a class="has-text-white" href="https://beian.miit.gov.cn/">
            {{$t("beian")}}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";

export default defineComponent({
  name: "HomeFooter",

  i18n: {
    messages: {
      [zhCN]: {
        telephone: "客服热线",
        address: "地址：上海市奉贤区解放东路1018弄1号楼1008室",
        beian: "沪ICP备16024334号"
      },
      [enUS]: {
        telephone: "tel",
        address: "Address: Room 1008, Building 1, Lane 1018 of JieFang East Road, FengXian District, ShangHai",
        beian: "沪ICP备16024334号"
      }
    }
  },
});
</script>
