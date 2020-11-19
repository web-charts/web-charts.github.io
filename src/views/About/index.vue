<template>
  <div id="about">
    <Hero
      class="is-hidden-mobile"
      color="white" image="about/banner.jpg"
      style="height: 600px"
      position="center"
    >
      <div style="width: 560px">
        <h1 class="is-size-2 has-text-white">
          始于 2015
        </h1>
        <p class="is-size-5 has-text-white">
          坚持创新，改变世界
        </p>
      </div>
    </Hero>

    <Hero
      class="is-hidden-tablet"
      color="white" image="about/banner.jpg"
      style="height: 320px"
      position="center"
    >
      <div style="width: 560px">
        <h1 class="is-size-2 has-text-white">
          始于 2015
        </h1>
        <p class="is-size-5 has-text-white">
          坚持创新，改变世界
        </p>
      </div>
    </Hero>

    <VSection>
      <div class="columns is-vcentered">
        <div class="is-hidden-touch" style="height: 450px"></div>
        <figure class="image column is-5">
          <VImage path="about/company.jpg"></VImage>
        </figure>
        <div style="width: 1rem"></div>
        <div class="column">
          <div class="content">
            <p class="is-hidden-mobile is-size-3">
              公司介绍
            </p>
            <p class="is-hidden-tablet is-size-3 has-text-centered">
              公司介绍
            </p>
            <p>
              上海玉串总部在上海，是由海外归国行业技术精英组建而成，是一家以自动化物流设备集成为依托，
              集物流装备研发、系统规划、设计、加工制造、安装调试、客户培训、售后服务于一体的一站式物流输送系统集成的企业。
              本公司致力于帮助客户全面提高生产资材供给、成品垂直/水平输送之自动化水平，
              最终实现客户的生产物流、仓储物流的流程自动化、信息可视化的水平。
            </p>
            <p>
              本公司拥有完整、科学的质量管理体系，我们的诚信、实力和产品质量获得业界的广泛认可。
              本着“敢于创新，稳重求进”的精神，加强生产管理、严把质量关，
              经全面改造的公司，以其产品质量稳定和价格优势，在竞争市场中脱颖而出。
              本司致力于不断改进产品生产工艺和品质，并且不断的发展新的产品去保持市场的竞争能力。
              以“真诚、务实、优质、高效”为企业宗旨，竭诚为各界人士服务。
            </p>
          </div>
        </div>
      </div>
    </VSection>

    <VSection title="企业理念" style="padding: 0 0 0 0">
      <div class="columns is-multiline">
        <div
          class="column is-half"
          v-for="(item, key) in briefs" :key="key"
        >
          <div
            class="box is-flex is-vcentered"
            style="height: 100%; width: 100%; padding: 2rem 2rem"
          >
            <span class="icon is-large" style="margin-left: 1rem">
              <i :class="'iconfont icon-' + item.icon"></i>
            </span>

            <span style="width: 1.5rem"></span>

            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
    </VSection>

    <Timeline></Timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";
import Hero from "@/components/Hero/index.vue";
import VSection from "@/components/VSection/index.vue";
import Timeline from "./Timeline.vue";

export default defineComponent({
  name: "About",

  components: {
    Hero,
    VImage,
    VSection,
    Timeline,
  },

  data: () => ({
    briefs: [
      { icon: "happiness", text: "以全体员工幸福为企业发展原动力" },
      { icon: "service", text: "以服务客户，达成客户满意为企业发展目标" },
      { icon: "development", text: "以与上下游供应商携手共进，共同发展为企业发展方向" },
      { icon: "sociology", text: "以创造企业财富回报社会为企业愿景" },
      { icon: "manage", text: "以全员参与为企业管理方针" },
      { icon: "fair", text: "以公平公正为企业经营准则" },
      { icon: "engeneering", text: "以自主创新，奉献精品工程为团队使命" }
    ],
  })
});
</script>

<style lang="sass">
#about
  .company
    flex: 2
    flex-flow: column
    display: flex
    padding: 1rem
    align-items: center
    justify-conteng: center
    h1
      margin-bottom: 0.5rem
</style>
