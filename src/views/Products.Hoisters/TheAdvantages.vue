<template>
  <VSection
    title="详细对比"
    background="white"
    style="padding-top: 0; padding-bottom: 0"
  >
    <div class="columns is-centered">
      <div class="column is-flex is-centered is-narrow">
        <div class="contrasts" style="width: 480px">
          <div class="contrast title is-size-4">
            货梯
          </div>
          <hr>
          <TheContrast
            content="搬运能力："
            highlight="低"
            comment="（ 1-2 层约 28 板 / h）"
          />
          <hr>
          <TheContrast
            content="故障率："
            highlight="高"
            comment="（平层故障、叉车撞坏等，大于 2.5%）"
          />
          <hr>
          <TheContrast
            content="建筑成本："
            highlight="高"
            comment="（基坑大、需要机房等）"
          />
          <hr>
          <TheContrast
            content="维护成本："
            highlight="高"
            comment="（电梯操作员、每月保养、年检费用）"
          />
          <hr>
          <TheContrast
            content="特种设备"
            comment="（需要安全技术监督局许可证）"
          />
          <hr>
          <TheContrast
            content="实现自动化作业较难"
            comment="（需要改造，增加软硬件系统）"
          />
        </div>
      </div>
      <div class="column is-flex is-centered is-narrow">
        <div class="contrasts" style="width: 480px">
          <div class="contrast title is-size-4">
            提升机
          </div>
          <hr>
          <TheContrast
            content="搬运能力："
            highlight="高"
            comment="（ 1-2 层约 85 板 / h，约为货梯的 3 倍）"
          />
          <hr>
          <TheContrast
            content="故障率："
            highlight="低"
            comment="（约千分之一）"
          />
          <hr>
          <TheContrast
            content="建筑成本："
            highlight="低"
            comment="（基坑小，无机房等）"
          />
          <hr>
          <TheContrast
            content="维护成本："
            highlight="低"
            comment="（无需操作员，一年 4 次保养）"
          />
          <hr>
          <TheContrast
            content="非特种设备"
            comment="（无需安全技术监督局许可证）"
          />
          <hr>
          <TheContrast
            content="软硬件柔性扩展，实现自动化作业"
            comment="（直接对接 WMS、AGV 立体库等）"
          />
        </div>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";
import TheContrast from "./TheContrast.vue";

export default defineComponent({
  name: "Advantages",

  components: {
    VSection,
    TheContrast
  },

  data: () => ({
    reasons: [
      ["高可靠", "业界领先的纠删码存储方案，能够提供高达 11 个 9 的数据可靠性。跨数据中心的副本冗余，能够保障服务的超高可用性。"],
      ["易扩展", "利用七牛云对象存储，您的存储空间无上限的同时也无需担心扩容问题。您能够实现存储需求的弹性伸缩，从而提高业务灵活性。"],
      ["低成本", "您无需前期投入。七牛云对象存储按需使用、按需付费的便捷性，能够有效避免存储及带宽资源的闲置浪费。"],
      ["数据智能化", "与七牛云其他产品紧密协同，提供标准 HDFS 访问方式，为大数据和机器学习的海量高速读写场景进行了大量优化。"],
      ["存储加速", "边缘存储可充分利用可用链路带宽，数据在边缘节点上传和下载可平均提速 60% 以上。"],
      ["边缘计算", "就近集成边缘计算及边缘缓存服务，边缘存储节点具备本地数据处理能力。"]
    ]
  }),
});
</script>

<style lang="sass">

</style>
