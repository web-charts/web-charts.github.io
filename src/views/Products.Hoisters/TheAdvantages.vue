<template>
  <VSection
    :title="$t('comparision')"
    background="white"
    style="padding-top: 0; padding-bottom: 0"
  >
    <div class="columns is-centered">
      <div class="column is-flex is-centered is-narrow">
        <div class="contrasts" style="width: 480px">
          <div class="contrast title is-size-4">
            {{$t("lifter")}}
          </div>
          <hr>
          <TheContrast
            :content="$t('lifter.title1')"
            :highlight="$t('lifter.highlight1')"
            :comment="$t('lifter.comment1')"
          />
          <hr>
          <TheContrast
            :content="$t('lifter.title2')"
            :highlight="$t('lifter.highlight2')"
            :comment="$t('lifter.comment2')"
          />
          <hr>
          <TheContrast
            :content="$t('lifter.title3')"
            :highlight="$t('lifter.highlight3')"
            :comment="$t('lifter.comment3')"
          />
          <hr>
          <TheContrast
            :content="$t('lifter.title4')"
            :highlight="$t('lifter.highlight4')"
            :comment="$t('lifter.comment4')"
          />
          <hr>
          <TheContrast
            :content="$t('lifter.title5')"
            :comment="$t('lifter.comment6')"
          />
          <hr>
          <TheContrast
            :content="$t('lifter.title6')"
            :comment="$t('lifter.comment6')"
          />
        </div>
      </div>
      <div class="column is-flex is-centered is-narrow">
        <div class="contrasts" style="width: 480px">
          <div class="contrast title is-size-4">
            {{$t("hoister")}}
          </div>
          <hr>
          <TheContrast
            :content="$t('hoister.title1')"
            :highlight="$t('hoister.highlight1')"
            :comment="$t('hoister.comment1')"
          />
          <hr>
          <TheContrast
            :content="$t('hoister.title2')"
            :highlight="$t('hoister.highlight2')"
            :comment="$t('hoister.comment2')"
          />
          <hr>
          <TheContrast
            :content="$t('hoister.title3')"
            :highlight="$t('hoister.highlight3')"
            :comment="$t('hoister.comment3')"
          />
          <hr>
          <TheContrast
            :content="$t('hoister.title4')"
            :highlight="$t('hoister.highlight4')"
            :comment="$t('hoister.comment4')"
          />
          <hr>
          <TheContrast
            :content="$t('hoister.title5')"
            :comment="$t('hoister.comment5')"
          />
          <hr>
          <TheContrast
            :content="$t('hoister.title6')"
            :comment="$t('hoister.comment6')"
          />
        </div>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VSection from "@/components/VSection/index.vue";
import TheContrast from "./TheContrast.vue";

export default defineComponent({
  name: "Advantages",

  components: {
    VSection,
    TheContrast
  },

  i18n: {
    messages: {
      [zhCN]: {
        comparision: "详细对比",
        lifter: "货梯",
        hoister: "提升机",
        "lifter.title1": "搬运能力：",
        "lifter.highlight1": "低",
        "lifter.comment1": "（ 1-2 层约 28 板 / h）",
        "lifter.title2": "故障率：",
        "lifter.highlight2": "高",
        "lifter.comment2": "（平层故障、叉车撞坏等，大于 2.5%）",
        "lifter.title3": "建筑成本：",
        "lifter.highlight3": "高",
        "lifter.comment3": "（基坑大、需要机房等）",
        "lifter.title4": "维护成本：",
        "lifter.highlight4": "高",
        "lifter.comment4": "（电梯操作员、每月保养、年检费用）",
        "lifter.title5": "特种设备",
        "lifter.comment": "（需要安全技术监督局许可证）",
        "lifter.title6": "实现自动化作业较难",
        "lifter.comment6": "（需要改造，增加软硬件系统）",
        "hoister.title1": "搬运能力：",
        "hoister.highlight1": "高",
        "hoister.comment1": "（ 1-2 层约 85 板 / h，约为货梯的 3 倍）",
        "hoister.title2": "故障率：",
        "hoister.highlight2": "低",
        "hoister.comment2": "（约千分之一）",
        "hoister.title3": "建筑成本：",
        "hoister.highlight3": "低",
        "hoister.comment3": "（基坑小，无机房等）",
        "hoister.title4": "维护成本：",
        "hoister.highlight4": "低",
        "hoister.comment4": "（无需操作员，一年 4 次保养）",
        "hoister.title5": "非特种设备",
        "hoister.comment5": "（无需安全技术监督局许可证）",
        "hoister.title6": "软硬件柔性扩展，实现自动化作业",
        "hoister.comment6": "（直接对接 WMS、AGV 立体库等）",
      },
      [enUS]: {
        comparision: "Comparision",
        lifter: "Cargo lifter",
        hoister: "Our Product",
        "lifter.title1": "Transporting capacity: ",
        "lifter.highlight1": "Low",
        "lifter.comment1": "(about 28 plates/h for 1-2 layers)",
        "lifter.title2": "Failure rate: ",
        "lifter.highlight2": "High",
        "lifter.comment2": "(Flat fault, forklift truck crash, etc., more than 2.5%)",
        "lifter.title3": "Construction cost: ",
        "lifter.highlight3": "High",
        "lifter.comment3": "(Large foundation pit and machine room, etc.)",
        "lifter.title4": "Maintenance cost: ",
        "lifter.highlight4": "High",
        "lifter.comment4": "(Elevator operator, monthly maintenance, annual inspection fee)",
        "lifter.title5": "Special equipment",
        "lifter.comment": "(License of BST is required)",
        "lifter.title6": "It is difficult to achieve automation",
        "lifter.comment6": "(Need to modify and add hardware and software system)",
        "hoister.title1": "Transporting capacity: ",
        "hoister.highlight1": "High",
        "hoister.comment1": "(about 85 plates/h for 1-2 layers,three times than traditional cargo lift )",
        "hoister.title2": "Failure cost: ",
        "hoister.highlight2": "Low",
        "hoister.comment2": "(about 1/1000)",
        "hoister.title3": "Maintenance cost: ",
        "hoister.highlight3": "Low",
        "hoister.comment3": "(Small foundation pit,without machine room, etc.)",
        "hoister.title4": "Maintenance cost: ",
        "hoister.highlight4": "Low",
        "hoister.comment4": "(No operator required, 4 maintenance times a year)",
        "hoister.title5": "Non-special equipment",
        "hoister.comment5": "(No BST license is required)",
        "hoister.title6": "Flexible extension of software and hardware",
        "hoister.comment6": "(Direct correspond to WMS, AGV, etc.)",
      }
    }
  }
});
</script>
