<template>
  <div id="service">
    <Hero image="service/banner.jpg" position="center">
      <div style="width: 560px">
        <h1 class="is-size-2 has-text-white">
          客户服务
        </h1>
        <p class="is-size-5 has-text-white">
          一体化解决方案，让自动化触手可及
        </p>
      </div>
    </Hero>
    <v-section>
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="is-size-3">
            全天候全身心 极致售后服务
          </h1>
          <div style="height: 2rem"></div>
          <h2 class="is-size-4">
            创世界一流的服务和关怀
          </h2>
          <div style="height: 0.5rem"></div>
          <p>
            面对超过数万用户的真诚信赖，实践“客户至上，诚信为本”的 服务理念，
            为客户提供“主动式关怀”，将“蓝色关爱”服务品 牌化，系统化、标准化，
            为客户提供售前、售中、售后一站式整 体服务解决方案。
          </p>
          <div style="height: 2rem"></div>
          <h2
            class="is-size-4"
            style="margin-bottom: 0.5rem"
          >
            “蓝色关爱”服务万里行
          </h2>
          <p>
            我们不惧风雨日夜兼程，始终坚持热忱知心 用过硬的服务团队、
            携现金的服务设备 周全满足您对快乐、可靠的售后服务需求
          </p>
        </div>
        <figure class="image column">
          <VImage path="service/frame.png"></VImage>
        </figure>
      </div>
    </v-section>

    <v-section title="服务流程">
      <div class="columns is-variable is-5">
        <div
          class="column"
          v-for="(process, key) in processes" :key="key"
        >
          <div :class="`service-process is-${process.color}`">
            <span class="icon is-medium" style="margin-bottom: 0.75rem">
              <i :class="`iconfont icon-${process.icon}`"></i>
            </span>
            <span>{{process.text}}</span>
          </div>
        </div>
      </div>
    </v-section>

    <v-section>
      <div class="columns">
        <div class="column is-flex is-flex-column is-centered">
          <h1 class="is-size-3">
            解决方案
          </h1>
          <div style="height: 1rem"></div>
          <h2 class="is-size-4">
            我们提供快速有力的解决方案
          </h2>
          <div style="height: 1rem"></div>
          <p>
            各类企业虽然在长期发展历程中已经积累了丰富的实践经验，
            但由于信息反馈不及时、不精确、不全面等问题导致了大量浪费与运作成本的居高不下。
            智慧物流解决方案可以通过各种自动化设备和ERP/WMS/WCS等帮助企业实现数据交换、
            信息共享、承载货物仓储、物流信息平台等多种应用，提升管理水平，降低企业运营成本，提高综合竞争力。
          </p>
        </div>
        <div style="width: 3rem; height: 2rem"></div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <VImage
                  path="/service/solution.jfif"
                  style="width: 737px; height: 324px"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </v-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";
import Hero from "@/components/Hero/index.vue";

export default defineComponent({
  name: "Service",

  components: {
    Hero,
    VImage,
    VSection,
  },

  data: () => ({
    processes: [
      { text: "咨询沟通", color: "primary", icon: "fangan" },
      { text: "规划设计", color: "success", icon: "sheji" },
      { text: "生产制造", color: "warning", icon: "shengchan" },
      { text: "安装调试", color: "info", icon: "anzhuang" },
      { text: "售后服务", color: "link", icon: "shouhou" },
    ]
  })
});
</script>
