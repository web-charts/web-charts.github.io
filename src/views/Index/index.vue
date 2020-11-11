<template>
  <div id="app-index">
    <Hero
      color="white" image="home/hero-1.jpg"
      style="height: 600px"
    >
      <div style="width: 560px">
        <h1 class="is-size-3 has-text-white">
          智能物流专家
        </h1>
        <div v-style:height="height"></div>
        <p class="has-text-white">
          智能物流是利用集成智能化技术，使物流系统能模仿人类的智能，
          具有思维、感知、学习、推理判断和自行解决物流中某些问题的能力
        </p>
        <div v-style:height="height"></div>
        <p>
          <VideoButton>
            <source src="https://img.als-yuchuan.com/videos/yuchuan-introduce" type="video/mp4" >
          </VideoButton>
        </p>
      </div>
    </Hero>

    <VSection title="我们的服务">
      <div class="columns is-multiline">
        <div
          class="column is-half"
          style="height: 100%"
          v-for="([title, content], key) in reasons" :key="key"
        >
          <TheReason :title="title" :content="content" />
        </div>
      </div>

    </VSection>
    <VSection title="合作伙伴" style="padding-top: 0">
      <div class="columns is-multiline">
        <div
          v-for="(item, key) in partners" :key="key"
          class="column is-one-third is-flex is-centered"
        >
          <div class="box">
            <VImage
              :path="`home/partners/${item}.png`"
              style="width: 320px; height: 160px;"
            ></VImage>
          </div>
        </div>
      </div>
    </VSection>

    <VSection
      title="产品介绍"
      background="white-ter"
    >
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-3">
            垂直物流输送系统
          </h2>
          <div v-style:height="height"></div>
          <p>
            垂直物流输送是在指多层建筑结构中，用各种输送设备进行作业，
            信息以及控制的组合实现货物水平和垂直自由搬运的一种自动非载人精密设备。
          </p>
          <div @click="handleJump" style="margin-top: 1rem; width: 100px">
            <router-link to="/products/hoisters">
              了解更多 >
            </router-link>
          </div>
        </div>
        <div style="width: 2rem; height: 1rem"></div>
        <div class="column">
          <figure class="image">
            <VImage
              path="home/hoister-1.jpg"
            ></VImage>
          </figure>
        </div>
      </div>
    </VSection>

    <VSection>
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-3">
            自动化立体仓库系统
          </h2>
          <div v-style:height="height"></div>
          <p>
            自动化立体仓库是采用高层货架配以料箱或托盘储存货物，
            用巷道堆垛起重机及其他输送设备在信息WMS以及设备控制WCS的支配下进行联动作业，
            以实现仓储物流合理化，存取自动化，操作简便化的自动化物流仓储系统。
          </p>
          <div v-style:height="height"></div>
          <div @click="handleJump" style="width: 100px">
            <router-link to="/products/asrs">
              了解更多 >
            </router-link>
          </div>
        </div>
        <div style="width: 2rem; height: 1rem"></div>
        <div class="column">
          <VImage path="home/liku-1.jpg"></VImage>
        </div>
      </div>
    </VSection>

    <VSection background="white-ter">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-3">
            物流设备
          </h2>
          <div v-style:height="height"></div>
          <p>
            自动化物流设备是在无人干预的情况下，根据已经设定的指令或者程序，
            自动完成工作流程的任务，在各行业的生产制造、物流运输都起着重要作用。
          </p>
          <div v-style:height="height"></div>
          <div @click="handleJump" style="width: 100px">
            <router-link to="/products/rgv">
              了解更多 >
            </router-link>
          </div>
        </div>
        <div style="width: 2rem" v-style:height="height"></div>
        <div class="column">
          <figure class="image">
            <VImage path="home/device-1.png"></VImage>
          </figure>
        </div>
      </div>
    </VSection>

    <VSection>
      <div
        class="is-flex"
        style="justify-content: center; margin-bottom: 3rem"
      >
        <h2 class="is-size-3">
          WMS & WCS 软件系统
        </h2>
      </div>
      <div
        class="container is-flex"
        style="justify-content: center; align-items: center"
      >
        <VImage path="home/software-1.png"></VImage>
      </div>
    </VSection>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Hero from "@/components/Hero/index.vue";
import VImage from "@/components/Image.vue";
import VideoButton from "@/components/VideoButton/index.vue";
import VSection from "@/components/VSection/index.vue";
import TheReason from "./Reason.vue";

export default defineComponent({
  name: "HomeIndex",

  components: {
    Hero,
    TheReason,
    VImage,
    VideoButton,
    VSection,
  },

  data: () => ({
    height: "0.75rem",
    partners: [
      "招商局", "格力", "武汉万吨",
      "中外运", "世纪联华", "鑫荣懋"
    ],
    reasons: [
      ["咨询规划", "提供生产、仓储物流园区的整体规划、解决方案，通过设计图、三维动画多角度演示。"],
      ["软硬件系统设计", "专业的水平、垂直智能输送系统硬件及软件设计，以及对现有系统进行改进和优化。"],
      ["生产制造", "定制自动化设备，具备合理的生产管理体系以及稳定的供应链。"],
      ["安装调试", "专业人员驻场实施硬件组装与软件开发调试，保证项目按时交付。"]
    ],
  }),

  methods: {
    handleJump () {
      window.scrollTo(0, 0);
    }
  }
});
</script>
