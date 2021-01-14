<template>
  <div id="service">
    <Hero image="service/banner.jpg" position="center">
      <div style="width: 560px">
        <h1 class="is-size-2 has-text-white">
          {{$t("title")}}
        </h1>
        <p class="is-size-5 has-text-white">
          {{$t("subtitle")}}
        </p>
      </div>
    </Hero>

    <v-section>
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="is-size-3">
            {{$t("h1.title")}}
          </h1>
          <div style="height: 2rem"></div>
          <h2 class="is-size-4">
            {{$t("s1.title")}}
          </h2>
          <div style="height: 0.5rem"></div>
          <p>
            {{$t("s1.content")}}
          </p>
          <div style="height: 2rem"></div>
          <h2
            class="is-size-4"
            style="margin-bottom: 0.5rem"
          >
            {{$t("s1.title")}}
          </h2>
          <p>
            {{$t("s1.content")}}
          </p>
        </div>
        <figure class="image column">
          <VImage path="service/frame.png"></VImage>
        </figure>
      </div>
    </v-section>

    <v-section :title="$t('process')">
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
            {{$t("s3.title")}}
          </h1>
          <div style="height: 1rem"></div>
          <h2 class="is-size-4">
            {{$t("s4.title")}}
          </h2>
          <div style="height: 1rem"></div>
          <p>
            {{$t("s3.content")}}
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
import { enUS, zhCN } from "@/plugins/i18n";

export default defineComponent({
  name: "Service",

  components: {
    Hero,
    VImage,
    VSection,
  },

  computed: {
    processes: vm => [
      { text: vm.$t("contact"), color: "primary", icon: "fangan" },
      { text: vm.$t("design"), color: "success", icon: "sheji" },
      { text: vm.$t("manufacture"), color: "warning", icon: "shengchan" },
      { text: vm.$t("debug"), color: "info", icon: "anzhuang" },
      { text: vm.$t("service"), color: "link", icon: "shouhou" },
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "客户服务",
        subtitle: "一体化解决方案，让自动化触手可及",
        "h1.title": "全天候全身心 极致售后服务",
        "s1.title": "创世界一流的服务和关怀",
        "s1.content": "面对超过数万用户的真诚信赖，实践“客户至上，诚信为本”的 服务理念， 为客户提供“主动式关怀”，将“蓝色关爱”服务品 牌化，系统化、标准化， 为客户提供售前、售中、售后一站式整 体服务解决方案。",
        "s2.title": "“蓝色关爱”服务万里行",
        "s2.content": "我们不惧风雨日夜兼程，始终坚持热忱知心 用过硬的服务团队、 携现金的服务设备 周全满足您对快乐、可靠的售后服务需求。",
        process: "服务流程",
        contact: "咨询沟通",
        design: "规划设计",
        manufacture: "生产制造",
        debug: "安装调试",
        service: "售后服务",
        "s3.title": "解决方案",
        "s4.title": "我们提供快速有力的解决方案",
        "s3.content": "各类企业虽然在长期发展历程中已经积累了丰富的实践经验， 但由于信息反馈不及时、不精确、不全面等问题导致了大量浪费与运作成本的居高不下。 智慧物流解决方案可以通过各种自动化设备和ERP/WMS/WCS等帮助企业实现数据交换、 信息共享、承载货物仓储、物流信息平台等多种应用，提升管理水平，降低企业运营成本，提高综合竞争力。",
      },
      [enUS]: {
        title: "Customer service",
        subtitle: "Integrated solutions that allow automation at your fingertips",
        "h1.title": "All day long dedication to the ultimate after-sales service",
        "s1.title": "Create world - class service and care",
        "s1.content": "In the face of more than tens of thousands of users of sincere trust, practice the \"customer first, integrity-based\" service philosophy, provide customers with \"active care\", \"blue care\" service brand, systematic, standardized, to provide customers with pre-sales, sales, after-sales one-stop integrated service solutions.",
        "s2.title": "\"Blue Care\" serves 10,000 miles",
        "s2.content": "We are not afraid of wind and rain day and night, always adhere to the enthusiasm of understanding with a good service team, with advanced service equipment to meet your needs for happy, reliable after-sales service.",
        process: "Service Process",
        contact: "Consulting",
        design: "Design",
        manufacture: "Manufacture",
        debug: "Install & Debug",
        service: "After-sales Service",
        "s3.title": "Solution",
        "s4.title": "We offer fast and powerful solutions.",
        "s3.content": "Although enterprises have accumulated rich practical experience in the long-term development process, they still have a large amount of waste and high operating cost due to the problems such as intimely, inaccurate and incomplete information feedback.Intelligent logistics solutions can help enterprises realize data exchange, information sharing, cargo storage, logistics information platform and other applications through a variety of automation equipment and ERP/WMS/WCS, so as to improve management level, reduce enterprise operating costs and improve comprehensive competitiveness.",
      }
    }
  }
});
</script>
