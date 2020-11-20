<template>
  <div>
    <Hero
      color="white" image="contacts/banner.jpg"
      style="height: 600px"
    >
      <div style="width: 560px">
        <h1 class="is-size-3 has-text-white">
          联系我们
        </h1>
        <div style="height: 0.5rem"></div>
        <p class="is-size-5 has-text-white">
          专业的设计、研发、工程、销售团队随时为您服务，欢迎您前来咨询与合作
        </p>
      </div>
    </Hero>

    <VSection>
      <p class="is-size-3">
        组织机构
      </p>
      <div style="height: 2rem"></div>
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
              <p class="is-size-5" style="margin-bottom: 1rem">
                <span class="icon" style="margin-right: 0.5rem">
                  <i class="iconfont icon-company" style="font-size: 1.25rem"></i>
                </span>
                <span>{{company.title}}</span>
              </p>

              <p>
                <span class="icon" style="margin-right: 0.5rem">
                  <i class="iconfont icon-location"></i>
                </span>
                <span>{{company.text}}</span>
              </p>
              <p>
                <span class="icon" style="margin-right: 0.5rem">
                  <i class="iconfont icon-business-card"></i>
                </span>
                <span>{{company.contacts}}</span>
              </p>
              <p>
                <span class="icon" style="margin-right: 0.5rem">
                  <i class="iconfont icon-tel"></i>
                </span>
                <span>{{company.tel}}</span>
              </p>
              <p>
                <span class="icon" style="margin-right: 0.5rem">
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

  data: () => ({
    companies: [
      {
        icon: "about/shanghai.jpg",
        title: "上海公司",
        text: "上海市奉贤区解放东路1018弄1号楼1008室",
        contacts: "王先生",
        tel: "13514118179",
        mail: "wang@als-yuchuan.com"
      },
      {
        icon: "about/zhuhai.jpg",
        title: "珠海分公司",
        text: "广东省珠海市金湾区红旗镇藤山一路68号",
        contacts: "张女士",
        tel: "18578268613",
        mail: "michellezhang@als-yuchuan.com"
      },
      {
        icon: "about/dalian.jpg",
        title: "大连分公司",
        text: "辽宁省大连市开发区万达广场7号楼2217室",
        contacts: "贾先生",
        tel: "15021309685",
        mail: "ajia-no1@als-yuchuan.com"
      },
    ]
  })
});
</script>
