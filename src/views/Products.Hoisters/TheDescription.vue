<template>
  <VSection style="padding-top: 3rem">
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="is-size-3">
          {{title}}
        </h1>
        <div style="height: 1rem"></div>
        <p>
          {{subTitle}}
        </p>
        <div style="height: 3rem"></div>
        <div
          v-for="(feagureGroup, groupKey) in features"
          class="columns" :key="groupKey"
          style="margin-bottom: 2rem"
        >
          <div
            v-for="(feature, featureKey) in feagureGroup"
            class="column" :key="featureKey"
            style="margin-bottom: 1rem"
          >
            <div class="feature-top"></div>

            <p class="is-size-6  feature-title">
              {{feature}}
            </p>
          </div>
        </div>
      </div>

      <div style="width: 2rem; height: 1rem"></div>

      <div class="column is-flex is-centered is-narrow">
        <figure
          class="image"
          style="width: calc(350px * 0.8); height: calc(680px * 0.8)"
        >
          <VImage :path="image"></VImage>
        </figure>
      </div>
    </div>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";

export default defineComponent({
  name: "Description",

  components: {
    VImage,
    VSection,
  },

  props: {
    image: {},
    title: {},
    subTitle: {},
    features: {}
  }
});
</script>
