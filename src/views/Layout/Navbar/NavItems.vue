<template>
  <div class="is-flex is-hidden-touch">
    <template v-for="(menu, key) in menus">
      <router-link
        custom
        v-if="!menu.children"
        :to="menu.route"
        :key="key + 'item'"
        v-slot="{ isActive, navigate }"
      >
        <div class="nav-item" v-class:is-active="isActive">
          <a @click="navigate">
            {{menu.text}}
          </a>
        </div>
      </router-link>
      <NavDropdown
        v-else :key="key + 'children'"
        :text="menu.text"
        :menus="menu.children"
      ></NavDropdown>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavDropdown from "./NavDropdown.vue";

export default defineComponent({
  name: "NavItem",

  components: {
    NavDropdown
  },

  props: {
    menus: {}
  }
});
</script>
