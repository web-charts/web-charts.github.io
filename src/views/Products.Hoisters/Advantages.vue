<template>
  <VSection background="white-ter">
    <div class="is-size-3 is-flex is-centered">
      产品优势
    </div>

    <div style="height: 3rem"></div>

    <div class="columns is-multiline is-8 is-variable" style="margin-bottom: 0">
      <div
        v-for="(reason, key) in reasons" :key="key"
        class="column is-half is-flex is-vcentered"
        style="margin-bottom: 3rem"
      >
        <span class="icon is-large">
          <i class="iconfont icon-function"></i>
        </span>
        <div style="width: 1.5rem"></div>
        <div>
          <p class="is-size-5 has-text-bold">{{reason[0]}}</p>
          <div style="height: 0.5rem"></div>
          <p>{{reason[1]}}</p>
        </div>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";

export default defineComponent({
  name: "Advantages",

  components: {
    VSection
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
