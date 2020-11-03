<template>
  <div
    v-active="isNavMatched"
    class="nav-item nav-dropdown"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <a>{{text}}</a>
    <div
      v-active="isHovered"
      class="dropdown-menu"
    >
      <div
        class="dropdown-content"
        style="width: 200px"
        @click="isHovered = false"
      >
        <router-link
          v-for="(menu, key) in menus"
          :key="key" tag="p"
          class="dropdown-item"
          :to="menu.route"
        >{{menu.text}}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "NavItemDropdown",

  props: {
    text: {},
    menus: {
      type: Object as PropType<any[]>,
      required: true
    }
  },

  data: () => ({
    isHovered: false
  }),

  computed: {
    isNavMatched (): any {
      return this.menus?.some(
        (menu) => this.$route.fullPath.includes(menu.route)
      );
    }
  },
});
</script>
