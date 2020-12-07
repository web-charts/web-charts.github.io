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
        <template v-for="(menu, key) in menus" :key="key">
          <div
            v-if="menu.link"
            class="dropdown-item"
          >
            <a
              target="_black"
              :href="menu.link"
            >
              {{menu.text}}
            </a>
          </div>
          <router-link
            v-else
            custom
            :to="menu.route"
            v-slot="{ navigate, isActive }"
          >
            <p
              class="dropdown-item"
              v-class:is-active="isActive"
              @click="navigate"
            >
              {{menu.text}}
            </p>
          </router-link>
        </template>
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

  created () {
    console.log(this.menus);
  }
});
</script>
