<template>
  <Hero
    color="white" image="home/hero-1.jpg"
    style="height: 768px"
  >
    <div style="width: 560px">
      <h1 class="is-size-3 has-text-white">
        {{$t("title")}}
      </h1>
      <div style="height: 0.75rem"></div>
      <p class="has-text-white">
        {{$t("content")}}
      </p>
      <div style="height: 0.75rem"></div>
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
        title: "智能物流专家",
        video: "观看视频",
        content: "智能物流是利用集成智能化技术，使物流系统能模仿人类的智能，具有思维、感知、学习、推理判断和自行解决物流中某些问题的能力",
      },
      [enUS]: {
        title: "Intelligent logistics expert",
        video: "Video",
        content: "Intelligent logistics using integrated intelligent technology make the logistics system can imitate human intelligence with thinking, perception, learning, reasoning and judgment and the ability to solve some problems in logistics.",
      }
    }
  }
});
</script>
