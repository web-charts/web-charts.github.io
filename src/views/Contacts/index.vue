<template>
  <div>
    <Hero
      color="white" image="contacts/banner.jpg"
      style="height: 600px"
    >
      <div style="width: 560px">
        <h1 class="is-size-3 has-text-white">
          {{$t("title1")}}
        </h1>
        <div style="height: 0.5rem"></div>
        <p class="is-size-5 has-text-white">
          {{$t("title2")}}
        </p>
      </div>
    </Hero>

    <VSection :title="$t('organization')">
      <div class="columns">
        <div
          v-for="(company, key) in companies" :key="key"
          class="column is-one-third"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <VImage :path="company.icon" />
              </figure>
            </div>
            <div class="card-content content">
              <p class="is-flex is-size-5; is-vcentered" style="margin-bottom: 1rem">
                <span class="icon" style="margin-right: 0.5rem">
                  <i class="iconfont icon-company" style="font-size: 1.25rem"></i>
                </span>
                <span>{{company.title}}</span>
              </p>

              <p class="is-flex">
                <span class="icon" style="margin-right: 0.5rem; flex-shrink: 0">
                  <i class="iconfont icon-location"></i>
                </span>
                <span>{{company.address}}</span>
              </p>
              <p class="is-flex">
                <span class="icon" style="margin-right: 0.5rem; margin-top: 0.125rem">
                  <i class="iconfont icon-business-card"></i>
                </span>
                <span>{{company.contact}}</span>
              </p>
              <p class="is-flex">
                <span class="icon" style="margin-right: 0.5rem; margin-top: 0.125rem">
                  <i class="iconfont icon-tel"></i>
                </span>
                <span>{{company.tel}}</span>
              </p>
              <p class="is-flex">
                <span class="icon" style="margin-right: 0.5rem; margin-top: 0.125rem">
                  <i class="iconfont icon-mail"></i>
                </span>
                <span>{{company.mail}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </VSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import Hero from "@/components/Hero/index.vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";

export default defineComponent({
  name: "Contacts",

  components: {
    Hero,
    VImage,
    VSection,
  },

  computed: {
    companies: vm => [
      {
        icon: "about/shanghai.jpg",
        title: vm.$t("shanghai.title"),
        address: vm.$t("shanghai.address"),
        contact: vm.$t("shanghai.contact"),
        tel: vm.$t("shanghai.tel"),
        mail: "wang@als-yuchuan.com"
      },
      {
        icon: "about/zhuhai.jpg",
        title: vm.$t("zhuhai.title"),
        address: vm.$t("zhuhai.address"),
        contact: vm.$t("zhuhai.contact"),
        tel: vm.$t("zhuhai.tel"),
        mail: "michellezhang@als-yuchuan.com"
      },
      {
        icon: "about/dalian.jpg",
        title: vm.$t("dalian.title"),
        address: vm.$t("dalian.address"),
        contact: vm.$t("dalian.contact"),
        tel: vm.$t("dalian.tel"),
        mail: "ajia-no1@als-yuchuan.com"
      },
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        title1: "联系我们",
        title2: "专业的设计、研发、工程、销售团队随时为您服务，欢迎您前来咨询与合作",
        organization: "组织机构",
        "shanghai.title": "上海玉串自动化科技有限公司",
        "shanghai.address": "上海市奉贤区解放东路1018弄1号楼1008室",
        "shanghai.contact": "王先生",
        "shanghai.tel": "13514118179",
        "zhuhai.title": "珠海分公司",
        "zhuhai.address": "广东省珠海市金湾区红旗镇藤山一路68号",
        "zhuhai.contact": "张女士",
        "zhuhai.tel": "18578268613",
        "dalian.title": "大连天瞳科技有限公司",
        "dalian.address": "辽宁省大连市开发区万达广场7号楼2217室",
        "dalian.contact": "贾先生",
        "dalian.tel": "15021309685",
      },
      [enUS]: {
        title1: "Contact us",
        title2: "Professional design, research and development, engineering, sales team at your service, you are welcome to come to consult and cooperation.",
        organization: "Organization",
        "shanghai.title": "ShangHai Company",
        "shanghai.address": "Room 1008, Building 1, Lane 1018 of JieFang East Road, FengXian District, ShangHai",
        "shanghai.contact": "Mr Wang",
        "shanghai.tel": "+86-13514118179",
        "zhuhai.title": "ZhuHai Company",
        "zhuhai.address": "No.68 TengShan 1st Road, HongQi Town, JinWan District, ZhuHai, GuangDong",
        "zhuhai.contact": "Miss Zhang",
        "zhuhai.tel": "+86-18578268613",
        "dalian.title": "DaLian Company",
        "dalian.address": "Room 2217, No.7 building of Wanda Plaza, Development Zone, Dalian,Liaoning",
        "dalian.contact": "Mr Jia",
        "dalian.tel": "+86-15021309685",
      }
    }
  }
});
</script>
