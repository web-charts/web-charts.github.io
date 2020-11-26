<template>
  <v-section
    class="is-hidden-mobile"
    title="制造工艺" style="padding-top: 0"
  >
    <table class="table is-bordered is-size-5 is-vcentered">
      <tbody>
        <td class="is-centered" style="width: 60%">说明</td>
        <td class="is-centered" style="width: 20%">玉串制造</td>
        <td class="is-centered" style="width: 20%">其他厂商</td>
      </tbody>
      <tbody>
        <tr>
          <td rowspan="3">
            <p style="margin-bottom: 4rem">
              玉串塔体的制造采用 3 次折弯技术，根据客户现场尺寸进行加工，避免多余冲孔造成的塔体强度不足。
            </p>

            <p>
              对比企业采用重型货架加工线加工塔体，其立柱/ 横梁通体遍布冲孔，造成塔体强度不足的同时也对其氧化生锈留下了隐患。
            </p>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-1.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-2.png"/>
            </figure>
          </td>
        </tr>
        <tr>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-3.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-4.png"/>
            </figure>
          </td>
        </tr>
        <tr>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/tecnhique-6.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-5.png"/>
            </figure>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <p style="margin-bottom: 3rem">
              玉串ALSI采用国际标准电梯轨道，轨道根据载重不同为13kg/24kg。
            </p>

            <p style="margin-bottom: 3rem">
              玉串ALS轨道导向轮亦为国际正品导轮，其特有的工艺保证升降台不脱轨，不偏轨。
            </p>

            <p>
              对比企业采用钢 板加工轨道，其在节省制造成本的同时，其强度降低，使用寿命缩短。
            </p>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-7.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-8.png"/>
            </figure>
          </td>
        </tr>
        <tr>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-9.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-10.png"/>
            </figure>
          </td>
        </tr>

        <tr>
          <td style="padding-top: 5rem; padding-bottom: 5rem">
            <p style="margin-bottom: 3rem">
              玉串ALS升降台采用4角平衡垂钓组装工艺，保证运转平衡。
            </p>

            <p>
              对比企业则采用 2 侧对等中间平 衡方式，尽量减少使用材料成本，其强度系统稳定性，故障率提高。
            </p>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-11.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-12.png"/>
            </figure>
          </td>
        </tr>

        <tr>
          <td style="padding-top: 5rem; padding-bottom: 5rem">
            <p style="margin-bottom: 3rem">
              玉串 ALS 主电机为连杆驱动，采用双平衡，双轴枕主动轴加工工艺， 国际正品 SEW 减速机一体电机。
            </p>

            <p>
              对比企业采用非主流国际品牌电机，单平衡主动轴驱动，动平衡显然存在缺陷。
            </p>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-13.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-14.png"/>
            </figure>
          </td>
        </tr>

        <tr>
          <td rowspan="2">
            <p style="margin-bottom: 3rem">
              滚筒均为 玉串ALS 工厂独特加工工艺，保证每一 个滚筒的设计寿命，采用轴枕轴承链条 互锁设计。
            </p>

            <p>
              对比企业则采用插件式滚筒工艺 ，该设计在节省成本的同时却增加了客户维护成本。
            </p>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-15.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-16.png"/>
            </figure>
          </td>
        </tr>

        <tr>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-17.png"/>
            </figure>
          </td>
          <td>
            <figure class="image is-256x256">
              <v-image path="hoisters/technique-18.png"/>
            </figure>
          </td>
        </tr>
      </tbody>
    </table>
  </v-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "@/components/VSection/index.vue";
import VImage from "@/components/Image.vue";

export default defineComponent({
  name: "TheTechniques",

  components: {
    VImage,
    VSection
  }
});
</script>
