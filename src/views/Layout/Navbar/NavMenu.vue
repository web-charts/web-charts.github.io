<template>
  <aside class="menu">
    <ul class="menu-list">
      <li v-for="(menu, key) in menus" :key="key">
        <router-link
          custom
          v-if="!menu.children"
          :to="menu.route"
          :key="key + 'item'"
          v-slot="{ navigate }"
        >
          <a @click="navigate() && handleClick()">
            {{menu.text}}
          </a>
        </router-link>
        <a v-else>{{menu.text}}</a>
        <ul v-if="menu.children">
          <li v-for="(submenu, key) in menu.children" :key="key">
            <router-link
              :to="submenu.route"
              @click.self="handleClick"
            >
              {{submenu.text}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavMenu",

  props: {
    menus: {}
  },

  methods: {
    handleClick () {
      this.$emit("click-item");
    }
  }
});
</script>
