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
          {{$t("title1")}}
        </h1>
        <p class="is-size-5 has-text-white">
          {{$t("title2")}}
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
          {{$t("title1")}}
        </h1>
        <p class="is-size-5 has-text-white">
          {{$t("title2")}}
        </p>
      </div>
    </Hero>

    <VSection>
      <div class="columns is-vcentered">
        <div class="is-hidden-touch" style="height: 450px"></div>

        <div class="column is-5">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <VImage path="about/company.jpg"></VImage>
              </figure>
            </div>
          </div>
        </div>

        <div style="width: 1rem"></div>

        <div class="column">
          <div class="content">
            <p class="is-hidden-mobile is-size-3">
              {{$t("profile")}}
            </p>
            <p class="is-hidden-tablet is-size-3 has-text-centered">
              {{$t("profile")}}
            </p>
            <p>
              {{$t("section1")}}
            </p>
            <p>
              {{$t("section2")}}
            </p>
          </div>
        </div>
      </div>
    </VSection>

    <VSection
      :title="$t('briefs')"
      style="padding: 0 0 0 0"
    >
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

    <Timeline />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
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

  computed: {
    briefs: vm => [
      { icon: "happiness", text: vm.$t("brief1") },
      { icon: "service", text: vm.$t("brief2") },
      { icon: "development", text: vm.$t("brief3") },
      { icon: "sociology", text: vm.$t("brief4") },
      { icon: "manage", text: vm.$t("brief5") },
      { icon: "fair", text: vm.$t("brief6") },
      { icon: "engeneering", text: vm.$t("brief7") },
      { icon: "commitment", text: vm.$t("brief8") }
    ],
  },

  i18n: {
    messages: {
      [zhCN]: {
        title1: "始于 2015",
        title2: "坚持创新，改变世界",
        profile: "公司介绍",
        section1: "上海玉串总部在上海的奉贤区，由海外归国行业技术精英组建而成，是一家以自动化物流设备集成为依托， 集物流装备研发、系统规划、设计、加工制造、安装调试、客户培训、 售后服务于一体的一站式物流输送系统集成的企业。 本公司致力于帮助客户全面提高生产资材供给、成品垂直/水平输送之自动化水平， 最终提升客户的生产物流、仓储物流的流程自动化、信息可视化的管理水平。",
        section2: "本公司拥有完整、科学的质量管理体系，标准 规范的国际一流的供应链体系， 我们以诚信经营、匠心智造和比肩德、日的产品质量获得业界的广泛认可。 管理团队本着“敢于创新，与时俱进，永不满足，挑战不止”的创新精神，不断加强生产管理水平、严把质量关， 以其产品质量稳定和价格优势，在市场竞争中脱颖而出。 本公司致力于不断改进产品生产工艺和提升系统综合品质，并且不断的发展新的产品去保持市场的竞争能力。 以“真诚、务实、优质、高效”为企业宗旨，竭诚为国内外企业提供优质服务。",
        briefs: "企业理念",
        brief1: "以全体员工幸福为企业发展原动力",
        brief2: "以服务客户，达成客户满意为企业发展目标",
        brief3: "以与上下游供应商携手共进，共同发展为企业发展方向",
        brief4: "以创造企业财富回报社会为企业愿景",
        brief5: "以全员参与为企业管理方针",
        brief6: "以公平公正为企业经营准则",
        brief7: "以自主创新，奉献精品工程为团队使命",
        brief8: "以精工至臻，信诺而达为质量追求",
      },
      [enUS]: {
        title1: "Started in 2015",
        title2: "Keep innovating, Changing the world",
        profile: "Introduction",
        section1: `
          Shanghai Yuchuan headquarters in Shanghai,
          established by returned overseas industry technical specialist.
          One-stop logistics transportation system integration enterprise which is based on automatic logistics equipment integration,
          set logistics equipment research and development, system planning, design, manufacture, installation, debugging,
          customer training and after-sales service as a whole. Our company is committed to help customers to improve logistics and warehousing logistics process automation,
          improve information visualization management level.
        `,
        section2: `
          The company has a complete and scientific quality management system,
          standards and norms of the international first-class supply chain system.
          Management team with the innovative spirit of "Dare to innovate,
          advance with the times, never be satisfied, keep challenging",
          constantly strengthens the production management level,
          strictly controls the quality, stands out in the market competition with its stable product quality and price advantage.
          With "sincerity, practicality, high quality and high efficiency" as our tenet,
          we will provide high quality service for domestic and foreign enterprises wholeheartedly.
        `,
        briefs: "Philosophy",
        brief1: "The happiness of all employees is the driving force for the development of the enterprise.",
        brief2: "Serve customers and achieve customer satisfaction is the development goal of the enterprise.",
        brief3: "Work together with all suppliers, common development is the direction of enterprise development.",
        brief4: "Create corporate wealth return society for corporate vision.",
        brief5: "Take full participation as the enterprise management policy.",
        brief6: "Take fairness and justice as the enterprise management criterion.",
        brief7: "Independent innovation, dedicated quality engineering for the team mission.",
        brief8: "Take the impeccable project and commitment as the pursuit of quality",
      }
    }
  }
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
