<template>
  <div>
    <TheHero />

    <VSection :title="$t('header')">
      <TheServices />

      <div style="height: 4rem"></div>

      <p style="text-align: center">
        <video
          id="yuchuan-introduce"
          class="video-js vjs-default-skin vjs-big-play-centered"
          preload="auto"
          controls
          ref="video"
          style="max-width: 760px; text-align: center"
        >
          <source src="https://img.als-yuchuan.com/wms/video.mp4" type="video/mp4" >
        </video>
      </p>
    </VSection>

    <VSection background="white-ter">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-4">
            {{$t("title1")}}
          </h2>

          <div style="height: 0.75rem"></div>

          <p class="is-size-5">
            {{$t("content11")}}
          </p>

          <div style="height: 0.75rem"></div>

          <p>
            {{$t("content12")}}
          </p>
          <div style="height: 0.75rem"></div>
        </div>

        <div style="width: 2rem; height: 1rem"></div>

        <div class="column">
          <figure class="image">
            <VImage path="/wms/1.png" />
          </figure>
        </div>
      </div>
    </VSection>

    <VSection background="white">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-4">
            {{$t("title2")}}
          </h2>

          <div style="height: 0.75rem"></div>

          <p class="is-size-5">
            {{$t("content21")}}
          </p>

          <div style="height: 0.75rem"></div>

          <p>
            {{$t("content22")}}
          </p>
          <div style="height: 0.75rem"></div>
        </div>

        <div style="width: 2rem; height: 1rem"></div>

        <div class="column">
          <figure class="image is-3by2">
            <VImage path="/wms/2.png" />
          </figure>
        </div>
      </div>
    </VSection>

    <VSection background="white-ter">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="is-size-4">
            {{$t("title3")}}
          </h2>

          <div style="height: 0.75rem"></div>

          <p>
            {{$t("content31")}}
          </p>

          <div style="height: 0.75rem"></div>
        </div>

        <div style="width: 5rem; height: 1rem"></div>

        <div class="column">
          <figure class="image is-3by2">
            <VImage path="/wms/3.png" />
          </figure>
        </div>
      </div>
    </VSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";
import VImage from "@/components/Image.vue";
import { enUS, zhCN, locale } from "@/plugins/i18n";
import TheHero from "./TheHero.vue";
import TheServices from "./TheServices.vue";

export default defineComponent({
  components: {
    TheHero,
    VImage,
    VSection,
    TheServices
  },

  computed: {
    locale
  },

  i18n: {
    messages: {
      [zhCN]: {
        header: "行业解决方案",
        title1: "数字赋能",
        content11: "业务上云，经营上云",
        content12: "为企业提供数字化转型，数字化精细管理，助力企业提质增效",
        title2: "过程管控",
        content21: "过程可控，结果必然不差",
        content22: "为企业提供实时的过程管理，避免信息延滞带来经营风险",
        title3: "任务驱动",
        content31: "以任务的形式驱动工作高效执行，任务到人、绩效到人，管人管事，得心应手",
      },
      [enUS]: {
        header: "Industry solutions",
        title1: "Digital empowerment",
        content11: "Managemen and Bussiness on Cloud Service",
        content12: "Provide enterprises with digital transformation and digital fine management, and help enterprises improve quality and efficiency",
        title2: "Process control",
        content21: "The process is controllable and the result must be good",
        content22: "Provide real-time process management for enterprises to avoid business risks caused by information delay",
        title3: "Task driven workflow",
        content31: "Drive the efficient execution of work in the form of tasks, assign tasks to people, assign performance to people, manage people and affairs, and be handy",
      },
    }
  }
});
</script>
