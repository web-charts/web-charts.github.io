<template>
  <v-section
    :title="$t('title')"
    style="padding-top: 0"
  >
    <div class="columns is-centered is-multiline">
        <div
          class="column is-4"
          v-for="path in images"
          :key="path"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <VImage :path="path" />
              </figure>
            </div>
          </div>
        </div>
    </div>
  </v-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enUS, zhCN } from "@/plugins/i18n";
import VImage from "@/components/Image.vue";
import VSection from "@/components/VSection/index.vue";

export default defineComponent({
  name: "Cases",

  components: {
    VImage,
    VSection,
  },

  props: {
    images: {}
  },

  i18n: {
    messages: {
      [zhCN]: {
        title: "使用案例"
      },
      [enUS]: {
        title: "Usage Cases"
      }
    }
  }
});
</script>
