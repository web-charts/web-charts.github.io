<template>
  <aside class="menu">
    <ul class="menu-list">
      <li v-for="(menu, key) in menus" :key="key">
        <a
          v-if="menu.link"
          :href="menu.link"
        >
          {{menu.text}}
        </a>
        <router-link
          custom
          v-else-if="!menu.children"
          :to="menu.route"
          :key="key + 'item'"
          v-slot="{ navigate }"
        >
          <a @click="() => navigate() && handleClick()">
            {{menu.text}}
          </a>
        </router-link>
        <a v-else>{{menu.text}}</a>
        <ul v-if="menu.children">
          <li v-for="(submenu, key) in menu.children" :key="key">
            <a
              v-if="submenu.link"
              :href="submenu.link"
              target="_black"
            >
              {{submenu.text}}
            </a>
            <router-link
              v-else
              custom
              :to="submenu.route"
              @click.self="handleClick"
              v-slot="{ navigate, isActive }"
            >
              <a
                v-class:is-active="isActive"
                @click="() => navigate() && handleClick()"
              >
                {{submenu.text}}
              </a>
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
