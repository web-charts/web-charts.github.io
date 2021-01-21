<template>
  <Hero
    color="white" image="home/hero-1.jpg"
    style="height: 768px"
  >
    <div>
    <h1 class="is-size-2 has-text-white">
      {{$t("title")}}
    </h1>
    <div style="height: 0.75rem"></div>

      <p class="is-size-5 has-text-white" style="width: 560px">
        {{$t("content")}}
      </p>
      <div style="height: 1rem"></div>
      <p>
        <VideoButton :text="$t('video')">
          <source src="https://img.als-yuchuan.com/videos/yuchuan-introduce" type="video/mp4" >
        </VideoButton>
      </p>
    </div>
  </Hero>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import Hero from "@/components/Hero/index.vue";
import VideoButton from "@/components/VideoButton/index.vue";

export default defineComponent({
  name: "TheHero",

  components: {
    Hero,
    VideoButton,
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "玉串自动化",
        video: "观看视频",
        content: "集全球前沿技术，成就智慧物流自动化系统！",
      },
      [enUS]: {
        title: "Yuchuan automation technology",
        video: "Video",
        content: `
          Yuchuan automation integrate globle leading technology to make intelligent logistics system.
        `,
      }
    }
  }
});
</script>
