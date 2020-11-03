<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="app-body"></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./Navbar/index.vue";
import Footer from "./Footer.vue";

export default defineComponent({
  name: "App",

  components: {
    Navbar,
    Footer
  }
});
</script>

<style lang="sass" src="@/assets/sass/index.sass"></style>
