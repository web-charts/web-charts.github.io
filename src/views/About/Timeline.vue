<template>
  <VSection :title="$t('timeline')">
    <ul class="timeline">
      <!-- Item 1 -->
      <li v-for="(item, index) in data" :key="index">
        <div :class="`direction-${index % 2 === 0 ? 'l' : 'r'}`">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="time-wrapper">
              <span class="time box">{{item[0]}}</span>
            </span>
          </div>
          <div v-if="item[1]" class="desc box">{{item[1]}}</div>
        </div>
      </li>
    </ul>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";
import { enUS, zhCN } from "@/plugins/i18n";

export default defineComponent({
  name: "Timeline",

  components: {
    VSection
  },

  computed: {
    data: vm => [
      ["2020-1", vm.$t("content8")],
      ["2019-12", vm.$t("content7")],
      ["2019-8", vm.$t("content6")],
      ["2018-9", vm.$t("content5")],
      ["2018-6", vm.$t("content4")],
      ["2017-1", vm.$t("content3")],
      ["2016-1", vm.$t("content2")],
      ["2015-2", vm.$t("content1")],
    ]
  },

  i18n: {
    messages: {
      [zhCN]: {
        timeline: "企业发展",
        content8: "大连生产工厂正式启用",
        content7: "通过 ISO 国际标准质量、环境、安全管理三体系认证",
        content6: "玉串自动化大连研发中心启用",
        content5: "上海玉串注册资金增至人民币 5 千万元",
        content4: "大连天瞳科技有限公司成立",
        content3: "上海玉串注册资金增至人民币 1 千万元",
        content2: "珠海分公司正式成立",
        content1: "上海玉串正式成立",
      },
      [enUS]: {
        timeline: "Timeline",
        content8: "Dalian production center was officially established",
        content7: "Passed ISO international standard quality, environment, safety management system certification.",
        content6: "Dalian research and development centre was officially established",
        content5: "Shanghai Yuchuan registered capital increased to 50 million.",
        content4: "Dalian Tiantong Technology Co., ltd. Was established.",
        content3: "Shanghai Yuchuan registered capital increased to 10 million.",
        content2: "Zhuhai Yuchuan was officially established.",
        content1: "Shanghai Yuchuan was officially established.",
      },
    }
  }
});
</script>

<style lang="scss" scoped>
body {
  font-family: "Raleway", sans-serif;
  color: #333;
}

header h1 {
  text-align: center;
  margin-top: 0;
}

header p {
  text-align: center;
  margin-bottom: 0;
}

.hexa {
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: #f0f0f0;
  color: #3c3c3c;
  position: relative;
  margin-top: 15px;
}

.hexa:before {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid #f0f0f0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #f0f0f0;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213, 213, 213);
  background: -moz-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(30, 87, 153, 1)),
    color-stop(100%, rgba(125, 185, 232, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline .hexa {
  width: 16px;
  height: 10px;
  position: absolute;
  background: #00c4f3;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #00c4f3;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #00c4f3;
  bottom: -4px;
}

// .direction-l,
// .direction-r {
//   float: none;
//   width: 100%;
//   text-align: center;
// }

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(255, 255, 255);
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: rgb(255, 255, 255);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #00c4f3;
  display: inline-block;
  color: #fff;
  padding: 0.75rem;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 0 0 0;
  z-index: 15;
  text-align: left;
}

@media (min-width: 768px) {
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
  }

  .flag-wrapper {
    display: inline-block;
  }

  .flag {
    font-size: 18px;
  }

  .direction-l .flag:after {
    left: auto;
    right: -16px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(254, 254, 254);
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(254, 254, 254);
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0;
  }
}

@media (min-width: 992px) {
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
  }
}
</style>
