<template>
  <section
    :class="klass"
    :style="appHeroStyle"
  >
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",

  props: {
    color: {
      type: [String]
    },
    height: {
      type: String,
      default: "600px"
    },
    image: {
      type: [String]
    },
    position: {
      default: "default"
    },
    repeat: {
      default: "no-repeat",
    },
    attachment: {
      default: "scroll"
    }
  },

  computed: {
    imageURL () {
      return !this.image ? false
        : `url("https://img.als-yuchuan.com/${this.image}")`;
    },

    klass () {
      return [
        "app-hero",
        this.color && ("has-background-".concat(this.color))
      ];
    },

    appHeroStyle () {
      const style = {};

      if (this.height) {
        style.height = this.height;
      }
      if (this.imageURL) {
        style["background-repeat"] = this.repeat;
        style["background-image"] = this.imageURL;
        style["background-size"] = "cover";
        style["background-position"] = this.position;
      }

      return style;
    }
  }
});
</script>
